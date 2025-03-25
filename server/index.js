import express from 'express'
import { createServer as createViteServer } from 'vite'
import fs from 'fs'
import path from 'path'

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' },
    appType: 'custom'
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    const url = req.originalUrl

    try {
      const template = fs.readFileSync(path.resolve('index.html'), 'utf-8')
      const transformedTemplate = await vite.transformIndexHtml(url, template)
      const { render } = await vite.ssrLoadModule('/src/entry-server.js')
      const appHtml = await render(url)

      const html = transformedTemplate.replace(`<!--app-->`, appHtml)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      console.error(e)
      res.status(500).end(e.message)
    }
  })

  app.listen(5173, () => {
    console.log('Server is running at http://localhost:5173')
  })
}

createServer()

import { createApp } from './main'

export async function render(url) {
  const { app } = createApp()
  return app
}

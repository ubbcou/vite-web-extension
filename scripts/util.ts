import path from 'path'

export const port = parseInt(process.env.PORT || '') || 5000
export const r = (...args: string[]) => path.resolve(__dirname, '..', ...args)
export const isDev = process.argv[2] === 'dev'

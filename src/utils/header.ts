import { getConfig } from './config'

export const getHeader = async (): Promise<string> => {
  const { uri } = await getConfig()
  const res = await fetch(uri.header)
  return await res.text()
}

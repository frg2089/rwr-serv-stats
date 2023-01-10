import { serversUri } from './URIs'

export type ServerMap = Record<string, string>

export type ServerGroupMap = Record<string, ServerMap>

export const getServerMap = async (): Promise<ServerGroupMap> => {
  const data = await fetch(serversUri)
  const json = await data.json()
  return json as ServerGroupMap
}

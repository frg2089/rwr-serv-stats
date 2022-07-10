import { ServerGroupMap } from '../models/ServerMap'

export const getServerMap = async (): Promise<ServerGroupMap> => {
  const data = await fetch('./servers.json')
  const json = await data.json()
  return json as ServerGroupMap
}

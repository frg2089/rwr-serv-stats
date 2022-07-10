import { serversUri } from '../constants'
import { ServerGroupMap } from '../models/ServerMap'

export const getServerMap = async (): Promise<ServerGroupMap> => {
  const data = await fetch(serversUri)
  const json = await data.json()
  return json as ServerGroupMap
}

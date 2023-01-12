import { getConfig } from './config'

export interface ServerQuery {
  start: number
  size: number
  names: 1 | 0
}

export type ServerAddress = string
export interface ServerDetail {
  name: string
  address: string
  port: number
  mapId: string
  mapName: string
  botCount: number
  country: string
  playerCount: number
  timestamp: Date
  version: string
  isDedicated: boolean
  isMod: boolean
  players: string[]
  comment: string
  url: string
  maxPlayerCount: number
  mode: string
  realm: string
}
export type Servers = Record<string, ServerAddress | Partial<ServerDetail> >
export type ServerGroups = Record<string, Servers>

const parseElement = (element: Element): Partial<ServerDetail> => {
  const name = element.querySelector('name')?.innerHTML
  const address = element.querySelector('address')?.innerHTML
  const port = element.querySelector('port')?.innerHTML
  const mapId = element.querySelector('map_id')?.innerHTML
  const mapName = element.querySelector('map_name')?.innerHTML
  const bots = element.querySelector('bots')?.innerHTML
  const country = element.querySelector('country')?.innerHTML
  const currentPlayers = element.querySelector('current_players')?.innerHTML
  const timestamp = element.querySelector('timestamp')?.innerHTML
  const version = element.querySelector('version')?.innerHTML
  const dedicated = element.querySelector('dedicated')?.innerHTML
  const mod = element.querySelector('mod')?.innerHTML
  const comment = element.querySelector('comment')?.innerHTML
  const url = element.querySelector('url')?.innerHTML
  const maxPlayers = element.querySelector('max_players')?.innerHTML
  const mode = element.querySelector('mode')?.innerHTML
  const realm = element.querySelector('realm')?.innerHTML
  const players = [...element.querySelectorAll('player').values()].map(i => i.innerHTML)

  const result: Partial<ServerDetail> = {
    name,
    address,
    port: Number(port),
    mapId,
    mapName,
    botCount: Number(bots),
    country,
    playerCount: Number(currentPlayers),
    timestamp: new Date(Number((timestamp ?? '000') + '000')),
    version,
    isDedicated: Number(dedicated) !== 0,
    isMod: Number(mod) !== 0,
    comment,
    url,
    maxPlayerCount: Number(maxPlayers),
    mode,
    realm,
    players
  }

  return result
}

export const getServers = async (
  { start, size, names }: Partial<ServerQuery>
): Promise<ServerGroups> => {
  const { uri } = await getConfig()

  const res = await fetch(uri.servers)
  const json = await res.json() as Record<string, Record<string, ServerAddress>>
  if (uri.api === undefined) {
    return json
  }

  const query: ServerQuery = {
    start: start ?? 0,
    size: size ?? 20,
    names: names ?? 1
  }

  const res2 = await fetch(
      `${uri.api}/rwr_server_list/get_server_list.php?${
        Object
          .keys(query)
          .filter(i => i in query)
          .map(i => (`${i}=${query[i as keyof ServerQuery]}`))
          .join('&')
      }`
  )

  const xml = await res2.text()

  const parser = new DOMParser()
  const doc = parser.parseFromString(xml, 'application/xml')
  const map = new Map<string, Partial<ServerDetail>>()
  new Array(...doc.querySelectorAll('server').values())
    .map(parseElement)
    .forEach(i => {
      const { address, port } = i
      if (address === undefined || port === undefined) {
        return
      }

      map.set(`${address}:${port}`, i)
    })

  const result: ServerGroups = {}
  Object.keys(json)
    .forEach(i => {
      const servers = json[i]
      const newServers: Servers = {}
      Object.keys(servers)
        .forEach(x => {
          const detail = map.get(servers[x])
          newServers[x] = detail === undefined ? servers[x] : detail
        })

      result[i] = newServers
    })

  return result
}

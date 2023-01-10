// const API_HOST = 'http://rwr.runningwithrifles.com'
const API_HOST = '/api'

export interface QueryParams {
  start: number
  size: number
  names: 1 | 0
}

export interface ServerInfo {
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

export const getServerList = async ({ start, size, names }: Partial<QueryParams>): Promise<Array<Partial<ServerInfo>>> => {
  const params: QueryParams = {
    start: start ?? 0,
    size: size ?? 20,
    names: names ?? 1
  }

  const uri = `${API_HOST}/rwr_server_list/get_server_list.php?${
    Object
      .keys(params)
      .filter(i => i in params)
      .map(i => (`${i}=${params[i as keyof QueryParams]}`))
      .join('&')}`

  const res = await fetch(uri, {
    mode: 'cors',
    credentials: 'include'
  })
  const xmlstr = await res.text()

  const parser = new DOMParser()
  const xml = parser.parseFromString(xmlstr, 'application/xml') as XMLDocument

  return [...xml.querySelectorAll('server').values()].map((i): Partial<ServerInfo> => {
    const name = i.querySelector('name')?.innerHTML
    const address = i.querySelector('address')?.innerHTML
    const port = i.querySelector('port')?.innerHTML
    const mapId = i.querySelector('map_id')?.innerHTML
    const mapName = i.querySelector('map_name')?.innerHTML
    const bots = i.querySelector('bots')?.innerHTML
    const country = i.querySelector('country')?.innerHTML
    const currentPlayers = i.querySelector('current_players')?.innerHTML
    const timestamp = i.querySelector('timestamp')?.innerHTML
    const version = i.querySelector('version')?.innerHTML
    const dedicated = i.querySelector('dedicated')?.innerHTML
    const mod = i.querySelector('mod')?.innerHTML
    const comment = i.querySelector('comment')?.innerHTML
    const url = i.querySelector('url')?.innerHTML
    const maxPlayers = i.querySelector('max_players')?.innerHTML
    const mode = i.querySelector('mode')?.innerHTML
    const realm = i.querySelector('realm')?.innerHTML
    const players = [...i.querySelectorAll('player').values()].map(i => i.innerHTML)

    return {
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
  })
}

export const request = async (options: RWRModel.Request.Kernel.BaseRequest): Promise<any> => {
  const query = options.query != null ? `?${new URLSearchParams(options.query).toString()}` : ''
  const uri = options.uri.toString() + query
  const res = await fetch(uri, options)
  if (options.response === 'json') {
    return await res.json()
  } else {
    return await res.text()
  }
}

export const parseElement = (element: Element): Partial<RWRModel.Response.Advanced.ServerDetail> => {
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

  const result: Partial<RWRModel.Response.Advanced.ServerDetail> = {
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

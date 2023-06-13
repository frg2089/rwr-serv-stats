import { parseElement, request } from './kernel'

export const getServerList = async (params?: Partial<RWRModel.Request.Advanced.ServerQuery>): Promise<RWRModel.Response.ServerGroups> => {
  const json = await request({
    uri: import.meta.env.RWR_SERVER_LIST,
    response: 'json'
  }) as RWRModel.Response.SimpleServerGroups

  if (import.meta.env.RWR_ADVANCED_INFO_URI == null) {
    return json
  }

  const query: Record<string, string> = {
    start: `${params?.start ?? 0}`,
    size: `${params?.size ?? 100}`,
    names: `${params?.names ?? 1}`
  }

  const xml = await request({
    uri: import.meta.env.RWR_ADVANCED_INFO_URI,
    response: 'plain',
    query
  }) as string

  const parser = new DOMParser()
  const doc = parser.parseFromString(xml, 'application/xml')
  const map: Record<string, Partial<RWRModel.Response.Advanced.ServerDetail>> = {}

  new Array(...doc.querySelectorAll('server').values())
    .map(parseElement)
    .forEach(i => {
      const { address, port } = i
      if (address == null || port == null) return

      map[`${address}:${port}`] = i
    })

  const result: RWRModel.Response.ServerGroups = {}
  Object.keys(json)
    .forEach(i => {
      const oldServers = json[i]
      const newServers: RWRModel.Response.Servers = {}
      Object.keys(oldServers)
        .forEach(x => {
          const detail = map[oldServers[x]]
          newServers[x] = detail ?? oldServers[x]
        })

      result[i] = newServers
    })

  if (import.meta.env.DEV) {
    console.log(result)
  }

  return result
}

export const getNotice = async (): Promise<string> => await request({
  uri: import.meta.env.RWR_NOTICE_URI,
  response: 'plain'
})

export const getImageUri = (addr: string): string =>
  `https://rwrstats.com/images/servers/${addr.replace(':', '-')}.png`

export const getInfoUri = (addr: string): string =>
  `https://rwrstats.com/servers/${addr}`

export const getSteamUri = (addr: string): string => {
  const split = addr.split(':')
  const address = split[0]
  const port = split.length > 1 ? split[1] : '1234'
  return `steam://rungameid/270150//server_address=${address} server_port=${port}/`
}

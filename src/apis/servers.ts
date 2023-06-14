import { parseElement, request } from './kernel'

export const getServerList = async (): Promise<RWRModel.Response.ServerGroups> => {
  const json = await request({
    uri: import.meta.env.RWR_SERVER_LIST,
    response: 'json'
  }) as RWRModel.Response.SimpleServerGroups

  if (import.meta.env.RWR_ADVANCED_INFO_URI == null || import.meta.env.RWR_ADVANCED_INFO_URI === '') {
    return json
  }

  const query: Record<string, string> = {
    start: `${import.meta.env.RWR_ADVANCED_INFO_PARAMS_START ?? 0}`,
    size: `${import.meta.env.RWR_ADVANCED_INFO_PARAMS_SIZE ?? 100}`,
    names: `${import.meta.env.RWR_ADVANCED_INFO_PARAMS_NAMES ?? 1}`
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

export const getImageUri = ({ address, port }: { address: string, port: number }): string =>
  `https://rwrstats.com/images/servers/${address}-${port}.png`

export const getDetailUri = ({ address, port }: { address: string, port: number }): string =>
  `https://rwrstats.com/servers/${address}:${port}`

export const getRunGameUri = ({ address, port }: { address: string, port: number }): string =>
  `steam://rungameid/270150//server_address=${address} server_port=${port}/`

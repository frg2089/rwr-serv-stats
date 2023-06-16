const parseElement = (element: Element): RWRModel.Advanced.ServerDetail => ({
  name: element.querySelector('name')?.innerHTML ?? '',
  address: element.querySelector('address')?.innerHTML ?? '',
  port: Number(element.querySelector('port')?.innerHTML ?? '0'),
  mapId: element.querySelector('map_id')?.innerHTML ?? '',
  mapName: element.querySelector('map_name')?.innerHTML ?? '',
  botCount: Number(element.querySelector('bots')?.innerHTML ?? '0'),
  country: element.querySelector('country')?.innerHTML ?? '',
  playerCount: Number(element.querySelector('current_players')?.innerHTML ?? '0'),
  timestamp: new Date(Number((element.querySelector('timestamp')?.innerHTML ?? '000') + '000')),
  version: element.querySelector('version')?.innerHTML ?? '',
  isDedicated: Number(element.querySelector('dedicated')?.innerHTML ?? '0') !== 0,
  isMod: Number(element.querySelector('mod')?.innerHTML ?? '0') !== 0,
  comment: element.querySelector('comment')?.innerHTML ?? '',
  url: element.querySelector('url')?.innerHTML ?? '',
  maxPlayerCount: Number(element.querySelector('max_players')?.innerHTML ?? '0'),
  mode: element.querySelector('mode')?.innerHTML ?? '',
  realm: element.querySelector('realm')?.innerHTML ?? '',
  players: [...element.querySelectorAll('player').values()].map(i => i.innerHTML)
})

export const getServerList = async (): Promise<RWRModel.ServerGroups> => {
  const json = await fetch(import.meta.env.RWR_SERVER_LIST)
    .then(async res => await res.json() as RWRModel.SimpleServerGroups)

  const xml = await new Promise<Document | null>((resolve, reject) => {
    if (import.meta.env.RWR_ADVANCED_INFO_URI == null || import.meta.env.RWR_ADVANCED_INFO_URI === '') {
      resolve(null)
      return
    }

    const xhr = new XMLHttpRequest()
    xhr.open('GET', import.meta.env.RWR_ADVANCED_INFO_URI + '?' + new URLSearchParams({
      start: `${import.meta.env.RWR_ADVANCED_INFO_PARAMS_START ?? 0}`,
      size: `${import.meta.env.RWR_ADVANCED_INFO_PARAMS_SIZE ?? 100}`,
      names: `${import.meta.env.RWR_ADVANCED_INFO_PARAMS_NAMES ?? 1}`
    }).toString(), true)
    xhr.responseType = 'document'
    xhr.onload = () => {
      if (xhr.readyState !== 4) return
      if (xhr.status === 200) {
        resolve(xhr.responseXML)
      } else {
        reject(xhr.statusText)
      }
    }
    xhr.onerror = reject
    xhr.send()
  })

  if (xml == null) return json

  const map: Record<string, RWRModel.Advanced.ServerDetail> = {}
  const result: RWRModel.ServerGroups = {}

  Array
    .from(xml.querySelectorAll('server').values())
    .map(parseElement)
    .forEach(i => {
      map[`${i.address}:${i.port}`] = i
    })

  Object
    .entries(json)
    .forEach(([group, servers]) => {
      Object
        .entries(servers)
        .forEach(([name, server]) => {
          (result[group] ??= {})[name] = map[server] ?? server
        })
    })

  return result
}

export const getNotice = async (): Promise<string> => await fetch(import.meta.env.RWR_NOTICE_URI)
  .then(async res => await res.text())

export const getImageUri = ({ address, port }: { address: string, port: number }): string =>
  `https://rwrstats.com/images/servers/${address}-${port}.png`

export const getDetailUri = ({ address, port }: { address: string, port: number }): string =>
  `https://rwrstats.com/servers/${address}:${port}`

export const getRunGameUri = ({ address, port }: { address: string, port: number }): string =>
  `steam://rungameid/270150//server_address=${address} server_port=${port}/`

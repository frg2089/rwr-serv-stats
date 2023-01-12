const configUri = './config.json'

export interface Config {
  uri: {
    servers: string
    header: string
    api?: string
  }
}

let _config: Config

export const getConfig = async (): Promise<Config> => {
  if (_config === undefined) {
    const res = await fetch(configUri)
    _config = await res.json()
  }

  return _config
}

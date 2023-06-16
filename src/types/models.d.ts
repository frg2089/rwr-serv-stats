declare namespace RWRModel {
  export type ServerAddress = string
  export type SimpleServers = Record<string, ServerAddress>
  export type SimpleServerGroups = Record<string, SimpleServers>

  export type Server = ServerAddress | Partial<Advanced.ServerDetail>
  export type Servers = Record<string, Server>
  export type ServerGroups = Record<string, Servers>

  namespace Advanced {
    export interface ServerQuery {
      start: number
      size: number
      names: 1 | 0
    }
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
  }
}

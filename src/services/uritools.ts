
export const getImageUri = (addr: string) => {
  return `https://rwrstats.com/images/servers/${addr.replace(':', '-')}.png`
}

export const getInfoUri = (addr: string) => {
  return `https://rwrstats.com/servers/${addr}`
}

export const getSteamUri = (addr: string) => {
  const split = addr.split(':')
  const address = split[0]
  let port = '1234'
  if (split.length > 1) {
    port = split[1]
  }
  return `steam://rungameid/270150/server_address=${address} server_port=${port}`
}

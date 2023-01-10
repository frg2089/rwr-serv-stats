export const getSteamUri = (addr: string): string => {
  const split = addr.split(':')
  const address = split[0]
  let port = '1234'
  if (split.length > 1) {
    port = split[1]
  }
  return `steam://rungameid/270150//server_address=${address} server_port=${port}`
}

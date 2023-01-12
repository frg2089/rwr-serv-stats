export const getImageUri = (addr: string): string =>
  `https://rwrstats.com/images/servers/${addr.replace(':', '-')}.png`

export const getInfoUri = (addr: string): string =>
  `https://rwrstats.com/servers/${addr}`

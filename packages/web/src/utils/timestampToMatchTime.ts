export const timestampToMatchTime = (timestamp: number) => {
  const ts_ms = timestamp * 1000

  const date = new Date(ts_ms)

  const minutes = ("0" + date.getMinutes()).slice(-2)

  const seconds = ("0" + date.getSeconds()).slice(-2)

  return `${minutes}:${seconds}`
}
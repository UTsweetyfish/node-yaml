export function stringifyNumber({ format, minFractionDigits, tag, value }) {
  if (typeof value === 'bigint') return String(value)
  if (!isFinite(value))
    return isNaN(value) ? '.nan' : value < 0 ? '-.inf' : '.inf'
  let n = JSON.stringify(value)
  if (
    !format &&
    minFractionDigits &&
    (!tag || tag === 'tag:yaml.org,2002:float') &&
    /^\d/.test(n)
  ) {
    let i = n.indexOf('.')
    if (i < 0) {
      i = n.length
      n += '.'
    }
    let d = minFractionDigits - (n.length - i - 1)
    while (d-- > 0) n += '0'
  }
  return n
}

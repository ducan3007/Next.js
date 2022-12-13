export const animiationScroll = (duration: number, id?: any, _to?: any) => {
  const to = _to ?? (id && document.getElementById(id)?.offsetTop)
  const from = window.scrollY

  let start: number, pos: number, frame: any

  const pixels = document.documentElement.scrollHeight - document.documentElement.clientHeight

  if (to === undefined) return

  const step = (timestamp: any) => {
    if (!start) start = timestamp
    const elaspse = timestamp - start
    pos = from - (from - to) * Math.min(easeOut(elaspse / duration), 1)
    window.scrollTo(0, pos)
    if (from !== pixels && window.scrollY === pixels) {
      window.cancelAnimationFrame(frame)
      return
    }
    if (elaspse < duration) {
      frame = window.requestAnimationFrame(step)
    }
  }
  frame = window.requestAnimationFrame(step)
}

const easeOut = (position: number) => {
  return 1 - Math.pow(1 - position, 4)
}

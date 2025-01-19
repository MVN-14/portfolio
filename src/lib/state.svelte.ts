import { lineHeight, sidebarWidth } from "./constants"

export const footerData = $state({
  X: 0,
  Y: 0,
  percentage: 0,
  sidebar: {
    X: 0,
    Y: 0
  }
})

export const cursorData = $state({
  X: sidebarWidth,
  Y: lineHeight + 5
})

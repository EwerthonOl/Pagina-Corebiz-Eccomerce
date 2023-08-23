// FUNÇÃO PRA EXPORTAR A QUANTIDADE DE SLIDES POR VIEW DE TELA
export function getSlides(width) {
  if (width < 460) {
    return 1
  } else if (width < 760) {
    return 2
  } else if (width < 1160) {
    return 3
  } else {
    return 4
  }
}

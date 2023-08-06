// FUNÇÃO PRA EXPORTAR A QUANTIDADE DE SLIDES POR VIEW DE TELA
export function getSlides(width) {
  if (width < 320) {
    return 1
  } else if (width < 480) {
    return 2
  } else if (width < 768) {
    return 3
  } else {
    return 4
  }
}

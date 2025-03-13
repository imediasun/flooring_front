export const scrollToAnchor = (id) => {
  if (!id) return
  const scrollSection = document.getElementById(id)
  const header = document.querySelector("header")

  if (scrollSection && header) {
    const headerOffset = header.offsetHeight
    const elementPosition = scrollSection.getBoundingClientRect().top + window.scrollY
    let offsetPosition
    if (headerOffset) {
      offsetPosition = elementPosition - headerOffset + 1
    } else {
      offsetPosition = elementPosition
    }

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.data('nav', () => ({
  scrolled: false,
  menuOpen: false,

  init() {
    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 40
    }, { passive: true })
  },

  toggleMenu() {
    this.menuOpen = !this.menuOpen
    document.body.style.overflow = this.menuOpen ? 'hidden' : ''
  },

  closeMenu() {
    this.menuOpen = false
    document.body.style.overflow = ''
  },
}))

Alpine.start()

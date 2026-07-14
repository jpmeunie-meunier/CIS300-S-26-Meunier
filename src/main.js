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

Alpine.data('quoteForm', () => ({
  sending: false,
  sent: false,
  error: '',

  async submit(event) {
    const form = event.target
    const data = new FormData(form)

    // Combine the service checkboxes into one readable line for the email
    const services = data.getAll('Services[]')
    data.delete('Services[]')
    if (services.length === 0) {
      this.error = 'Please select at least one service.'
      return
    }
    data.append('Services Requested', services.join(', '))

    this.sending = true
    this.error = ''
    try {
      const res = await fetch('https://formsubmit.co/ajax/23jmeunier@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      this.sent = true
    } catch {
      this.error = 'Something went wrong sending your request. Please try again, or call us at (484)-356-4168.'
    } finally {
      this.sending = false
    }
  },
}))

Alpine.start()

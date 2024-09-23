export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)
  }

  OnStart(event) {
    event.preventDefault()
    console.log('mousedown')
    this.wrapper.addEventListener('mousemove', this.onMove)
  }

  onMove(event) {
  }
  
  onEnd(event) {
    this.wrapper.removeEventListener('mousemove', this.onMove)
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.OnStart)
    this.wrapper.addEventListener('mousedown', this.onEnd)
  }

  bindEvents() {
    this.OnStart = this.OnStart.bind(this)
    this.onMove = this.onMove.bind(this)
  }

  init() {
    this.bindEvents()
    this.addSlideEvents()
    return this
  }
}
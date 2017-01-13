import { Howl } from 'howler'
import { select, selectAll, addClass, removeClass, hasClass } from './utils/dom'
import track from './utils/track'
import isMobile from './utils/isMobile'

export default class Audio {

	/**
	 * Instantiates Howl with the src as the audio file to be used
	 * @return {void}
	 */
	constructor(element) {
		this.$el = select(element)
		this.pause = select(`${element} .audio__off`)
		this.resume = select(`${element} .audio__on`)
		this.hasClicked = false

		const audioSrc = this.$el.getAttribute('data-audio-src')
		const shouldAudioLoad = !isMobile.any()

		this.player = new Howl({
			src: [audioSrc],
			html5: true,
			preload: shouldAudioLoad,
			mobileAutoEnable: true
		})
	}

	/**
	 * Checks classes to see if player is playing, applies classes, and plays/pauses player.
	 * Probably could be updated to use this.player.playing() to check if playing.
	 * @param  {Object} event event object
	 * @return {void}
	 */
	audioController(event) {
		const clicked = this.$el
		if(hasClass(clicked, 'audio__playing')) {
			this.player.pause()
			addClass(clicked, 'audio__paused')
			removeClass(clicked, 'audio__playing')
		} else {
			this.player.play()
			addClass(clicked, 'audio__playing')
			removeClass(clicked, 'audio__paused')
			if (! this.hasClicked ) {
				track(`Apps - Unbowed - Audio Play - ${this.$el.getAttribute('data-audio-title')}`)
				this.hasClicked = true
			}

		}
	}

	/**
	 * Click event for audio button
	 * @return {void}
	 */
	clickAudio() {
		const button = this.$el
		button.addEventListener('click', this.audioController.bind(this))
	}

	/**
	 * All event listeners
	 * @return {void}
	 */
	eventListeners() {
		this.clickAudio()
	}

	/**
	 * Audio init
	 * @return {void}
	 */
	init() {
		this.eventListeners()
	}
}

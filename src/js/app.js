import Audio from './audio'
import setPathCookie from './utils/setPathCookie.js'
import removeMobileHover from './utils/removeMobileHover.js'
import wireSocialButtons from './utils/wireSocialButtons.js'
import picturefill from 'picturefill'
import { select, hasClass, addClass } from './utils/dom'

removeMobileHover()
setPathCookie()

// Audio
const audio = [
	new Audio('.audio-ferguson'),
	new Audio('.audio-intro'),
	new Audio('.audio-boston'),
	new Audio('.audio-freddie')
]

picturefill()
window.addEventListener('load', (e) => {
	const intro = select('.intro')
	addClass(intro, 'intro--loaded')
})

audio.forEach((element) => {
	element.init()
})

// Add class to html if JS is loaded
document.querySelector('html').classList.add('js-is-loaded')

// Wire header social if present
if (document.querySelectorAll('.g-header__share').length) {
	wireSocialButtons({
		facebook: '.g-header__share-button--fb',
		twitter: '.g-header__share-button--tw',
	})
}

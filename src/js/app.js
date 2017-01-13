import Audio from './audio'
import setPathCookie from './utils/setPathCookie.js'
import removeMobileHover from './utils/removeMobileHover.js'
import wireSocialButtons from './utils/wireSocialButtons.js'

removeMobileHover()
setPathCookie()

// Audio
const audio = [
	new Audio('.audio-ferguson'),
	new Audio('.audio-intro'),
	new Audio('.audio-boston'),
	new Audio('.audio-freddy')
]

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

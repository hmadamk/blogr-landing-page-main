const Elements = document.querySelectorAll('.head ul .anc')
Elements.forEach(a => {
	a.addEventListener('click', function (e) {
		a.classList.toggle('hide')
		next = a.nextElementSibling
		while (next != null) {
			next.classList.add('hide')
			next = next.nextElementSibling
		}
		prev = a.previousElementSibling
		while (prev != null) {
			prev.classList.add('hide')
			prev = prev.previousElementSibling
		}
		e.stopPropagation()
	})

})
document.querySelector('.control').onclick = function () {
	document.querySelector('.nav').classList.toggle('hide-xs');
}

const hamburgur = document.querySelector('.control');
const line_one = document.querySelector('.line-one');
const line_two = document.querySelector('.line-two');
const line_three = document.querySelector('.line-three');
const lines = [line_one, line_two, line_three];
const tlm = new TimelineMax({});
const toggleMenu = new TimelineMax({ paused: true, reversed: true });
toggleMenu
	.to(line_two, .25, { scaleX: 0, transformOrigin: "50% 50%" }, 0)
	.to(line_one, .25, { y: 12, ease: Power2.easeInOut }, 'slide')
	.to(line_three, .25, { y: -12, ease: Power2.easeInOut }, 'slide')
	.to(hamburgur, .5, { rotation: 360, ease: Power4.easeInOut })
	.to(line_one, .25, { rotation: 45, transformOrigin: "50% 50%", ease: Power2.easeInOut }, 'cross')
	.to(line_three, .25, { rotation: -45, transformOrigin: "50% 50%", ease: Power2.easeInOut }, 'cross')

hamburgur.addEventListener('click', _ => {
	hamburgur.classList.toggle('js-x');
	toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
})

window.addEventListener('click', e => {
	document.querySelectorAll('.head ul li').forEach(a => {
		a.classList.add('hide')
	})
}, false)
// for accessibility
window.addEventListener('keyup', e => {
	if (e.key == 'Escape') {
		document.querySelectorAll('.head ul li').forEach(a => {
			a.classList.add('hide')
		})
	}
})
//comment
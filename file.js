document.querySelectorAll('.head ul li').forEach(a => {
	a.addEventListener('click', function () {
		if (!this.classList.contains('hide')) {
			this.classList.add('hide')
		} else {
			document.querySelectorAll('.head ul li').forEach(b => {
				b.classList.add('hide')
			})
			this.classList.toggle('hide');
		}
	})
})
document.querySelector('.control').onclick = function(){
	document.querySelector('.nav').classList.toggle('hide-xs');
}
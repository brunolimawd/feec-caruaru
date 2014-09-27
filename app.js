window.addEventListener('DOMContentLoaded', function() {

	var menu = document.querySelector('nav');
	var buttonMenu = document.querySelector('.menu');
	var pageSobre = document.querySelector('#sobre');
	var linkHome = document.querySelector('.link-home');
	var linkSobre = document.querySelector('.link-sobre');

	var openMenu = function() {
		menu.classList.toggle('open');
	};

	buttonMenu.addEventListener('click', openMenu, false);

	var openSobre = function() {
		pageSobre.classList.add('open');
		return false;
	};

	var closeSobre = function() {
		pageSobre.classList.remove('open');
		return false;
	};

	linkHome.addEventListener('click', closeSobre, false);
	linkSobre.addEventListener('click', openSobre, false);
});
// Scripts
// ---------
(function ($) {
	$(document).ready(function() {

		const navLinks = $('#primary-nav a');
		const body     = $('body');
		const main     = $('main');

		function activateNav(target) {
			navLinks.removeClass('active');
			target.addClass('active');
		}

		// Dynamically load page content and assign IDs
		navLinks.click(function(e){
			e.preventDefault();
			let $this      = $(this);
			let pageName   = $this.text();
			let id         = $this.data('page');
			let pageLink   = $this.attr('href');
			let pageHeight = main.outerHeight();

			body.addClass('transitions');
			main.css('min-height', pageHeight);

			main.fadeOut(400, function(){
				activateNav($this);
				body.attr('id', id);

				let stateObj = { foo: "bar" };
				history.pushState(stateObj, pageName, pageLink);

				main.load(pageLink + ' main', function(){
					main.fadeIn();
					body.removeClass('transitions');
					main.css('min-height', 'initial');
				});
			});
		});
	});
}(jQuery));
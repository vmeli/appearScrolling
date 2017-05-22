
jQuery(document).ready(function (){
	var swiper = new Swiper('.swiper-container',{
		nextButton: '.swiper-btn-next',
		prevButton: '.swiper-btn-prev',
		pagination: '.swiper-pagination',
		paginationType: 'progress'
	});

	var appearScroll = function(){
		var magicnumber = (window.innerHeight)/2;
		$(window).scroll(function(){
			var scroll = $(this).scrollTop();
			console.log(magicnumber);
			if(scroll > magicnumber) {
				$('.appearScroll').addClass('active');
			}else {
				// $('.appearScroll').removeClass('active');
			}
		});
	};

	var showHideElement = function(){
		$('.appearScroll_title').click(function(){
			$(this).closest('.appearScroll').toggleClass('down');
			console.log('entre');
		});
	};

	showHideElement();
	appearScroll();

});

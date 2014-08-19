/*======== tooltip =========*/

(function($){


	$('.Mclick').click(function(event){
		event.preventDefault();
		$('#back')
			.fadeIn()
			.find('#modal')
			.fadeIn();
	})

	$(".close").click(function(event){
		event.preventDefault();
		$('#back')
			.fadeOut()
			.find('#modal')
			.fadeOut();

	})

	$('ul.nav').each(function(){


		var $on, $content ,$buttons = $(this).find('a');

		$on = $($buttons.filter('[href="'+location.hash+'"]')[0] || $buttons[0]);

		$on.addClass('active');

		$content = $($on[0].hash);

		$buttons.not($on).each(function(){

			$(this.hash).hide();
		});

		$(this).on('click', 'a', function(e){

			$on.removeClass('active');
			$content.hide();

			$on=$(this);
			$content=$(this.hash);


			$on.addClass('active');
			$content.show();

			e.preventDefault;

		})

	})

	



})(jQuery);
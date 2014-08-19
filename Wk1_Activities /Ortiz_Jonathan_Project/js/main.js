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

$('.masterTooltip').hover(function(){

	var title = $(this).attr('title');
	$(this).data('tipText', title).removeAttr('title');
	$('<p class="tooltip"></p>')
	.text(title)
	.appendTo('body')
	.fadeIn('slow');

}, function() {

	$(this).attr('title', $(this).data('tipText'));
	$('.tooltip').remove();
}).mousemove(function(e){

	var mousex = e.pageX + 20;
	var mousey = e.pageY + 10;
	$('.tooltip')
	.css({top: mousey, left:mousex})

});
$('.masterTooltip').hover(function(){


	$("#signinButton").active("background-color","red");



}) 

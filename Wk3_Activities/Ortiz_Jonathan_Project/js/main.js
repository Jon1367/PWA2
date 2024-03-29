/*======== Qjuery =========*/

(function($){


	/* ======================== Mclick ====================== */

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
    /* ======================== Admin page ====================== */

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

		});
	});

    /* ======================== Cover page ====================== */

$('#signinButton').click(function(e){

		e.preventDefault;
		var user = $('#user').val();
		var pass = $('#pass').val();
		$.ajax({
			url:"xhr/login.php",
			type:"post",
			dataType:"json",
			data:{
				username: user,
				password: pass
			},
			success:function(response){
				console.log("test User");
				if(response.error){
					alert(response.error);
				}else{
					window.location.assign("Admin.html");
				}
			}
		});
	});
 /* ======================== Sign Out ====================== */

$("#signout").click(function(e){

	e.preventDefault;
	$.get("xhr/logOut.php", function(){
		window.location.assign("cover.html");
	});
});
/* ======================== Display Name ====================== */

 $.getJSON("xhr/check_login.php", function(data){
        console.log(data);
        $.each(data,function(key, val){
            console.log(val.first_name);
            $(".userid").html("Welcome User: " + val.first_name);
        })
    });
	
})(jQuery);

   /* ======================== Tool tip ====================== */
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


  /* ==================== New Projects ======================== */

      $('#add').on('click', function(e) {
        e.preventDefault();
        var projName = $('#projectName').val(),
            projDesc = $('#projectDescription').val(),
            projDue = $('#projectDueDate').val(),
            status = $('input[name="status"]:checked').prop("id");

        $.ajax({
            url: "xhr/new_project.php",
            type: "post",
            dataType: "json",
            data: {
                projectName: projName,
                projectDescription: projDesc,
                dueDate: projDue,
                status: status
            },
            success: function(response){
                console.log('Testing for success');

                if(response.error) {
                    alert(response.error);
                }else {
                    window.location.assign("Admin.html");
                }
            }
        });
    });



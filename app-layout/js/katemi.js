// jQuery for Katemi Landing Page
jQuery(document).ready(function($) {
	 $('.annotation-link').tooltip()
	 
// jQuery OnePageNav ------------------------------------------------------ //	  
	  $('.katemi-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 750,
			scrollOffset: 75,
			filter: ':not(.unscroll)'
		});
		
// jQuery Flexslider ------------------------------------------------------ //
	$('.flexslider-app-teaser').flexslider({
		animation: "fade",
		slideshowSpeed: 3000,
		animationSpeed: 500,
		controlNav: false,
		directionNav: false
	}); 	
	
	$('.flexslider-featurettes').flexslider({
		animation: "fade",
		slideshowSpeed: 3000,
		animationSpeed: 700,
		controlNav: false,
		directionNav: false
	});		 
	
	$('.flexslider-low-head-banner').flexslider({
		animationSpeed: 1000,
		directionNav: false
	});	 	

// jQuery Toggle ------------------------------------------------------ //	
	$('.toggle-button').on('click', function(e) {
		    e.preventDefault();
		    var $this = $(this);
		    var $collapse = $this.closest('.toggle-group').find('.toggle-inner');
		    $collapse.collapse('toggle');
		}); 
		
// jQuery PrettyPhoto ------------------------------------------------------ //	
	 $("a[rel^='prettyPhoto']").prettyPhoto();

// jQuery ToTop ------------------------------------------------------ //
	 $(".toTop").hide();
		
	 $(function () {
	 	$(window).scroll(function () {
		    if ($(this).scrollTop() > 200) {
		    	$('.toTop').fadeIn();
		        } else {
		        	$('.toTop').fadeOut();
		     }
		 });        
	 });        
		
	var easing, e, pos;
	    $(function(){
	      $(".toTop").on("click", function(){
	        pos= $(window).scrollTop();
	        $("body").css({
	          "margin-top": -pos+"px" 
	        });
	        $(window).scrollTop(0);
	        $("body").css("transition", "all 2s ease");
	        $("body").css("margin-top", "0");
	        $("body").on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function(){
	          $("body").css("transition", "none");
	        });
	      });
		
	  });

// Contact Form Validation ------------------------------------------------------ //
        $('#send_message').click(function(e){
            
            //Stop form submission & check the validation
            e.preventDefault();
            
            // Variable declaration
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
            var inquiry = $('#subject').val();
            var message = $('#message').val();
            
         	// Form field validation
            if(name.length == 0){
                var error = true;
                $('#name_error').fadeIn(500);
            }else{
                $('#name_error').fadeOut(500);
            }
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
                $('#email_error').fadeIn(500);
            }else{
                $('#email_error').fadeOut(500);
            }
            if(inquiry.length == 0){
                var error = true;
                $('#subject_error').fadeIn(500);
            }else{
                $('#subject_error').fadeOut(500);
            }
            if(message.length == 0){
                var error = true;
                $('#message_error').fadeIn(500);
            }else{
                $('#message_error').fadeOut(500);
            }
            
            if(error == false){
                $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });
                
                $.post("contact.php", $("#contact_form").serialize(),function(result){

                    if(result == 'sent'){
                         $('#submit').remove();
                        $('#mail_success').fadeIn(500);
                    }else{
                        $('#mail_fail').fadeIn(500);
                        $('#send_message').removeAttr('disabled').attr('value', 'Send');
                    }
                });
            }
        });


// Footer Subscribe Form Validation ------------------------------------------------------ //
 		$('#subscribe_btn').click(function(e){
 			e.preventDefault();
 			
 			var subscribe_error = false;
 			var subscribe_email = $('#subscribe_email').val();
 			
 			if(subscribe_email.length == 0 || subscribe_email.indexOf('@') == '-1'){
	 			var subscribe_error = true;
	 			$('#subscribe_error').fadeIn(500);
 			}else{
	 			$('#subscribe_error').fadeOut(500);
 			}
 			
 			if(subscribe_error == false){
	 			$('#subscribe_btn').attr({'disabled' : 'true', 'value' : 'Submitting...' });
	 			
	 			$.post("subscribe.php", $("#subscribe_form").serialize(),function(result){
                    if(result == 'sent'){
                        //Display the success message
                        $('#subscribe_success').fadeIn(500);
                    }else{
                        //Display the error message
                        $('#subscribe_fail').fadeIn(500);
                    }
                });
            }
 		});    


}); // close	  
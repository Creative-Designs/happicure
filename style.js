$(document).ready(function(){
	//========================navigate smoothly============
	$("a").click(function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
  });
	
	
	
	
	$(".panel").hide();
	
	
	$(".flip").click(function(){	
		
		 // hide all other panel other than this panel
		var $thisPanel = $(this).find('.panel');
		$(".panel").not($thisPanel).hide();
		
		// show all other dots other than this dot.
		var $thisDot = $(this).find('.dot_hide');
		$(".dot_hide").not($thisDot).show();
		
		//toggle the dots and panel
		$thisPanel.slideToggle();
		$thisDot.slideToggle();
		 
		
	
	});
	/*==============add botton=============*/
	//top btn
  $(window).scroll(function(){
	  
	  if
		  ($(this).scrollTop()>400){
			  $("#top_btn").fadeIn();
			  
		  }
		else{
			$("#top_btn").fadeOut();
			
		}
	  
	  
	  
	  
  });
	$("#top_btn").click(function(){
		$("body,html").animate({scrollTop:0},1000);
	});
	
	
});
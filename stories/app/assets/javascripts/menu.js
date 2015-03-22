var main = function(){

	var isMenuOpen = false;

	$('#menubutton').click(function(){
		if(isMenuOpen){
	        $('#navigation').animate({ left: -300 }, 'slow', function() {
	            $('#menubutton').text('Menu');
	            isMenuOpen = false;
	        });
	    }
	    else{ 
	        $('#navigation').animate({ left: 0 }, 'slow', function() {
	            $('#menubutton').html('Close Menu');
	            isMenuOpen = true;
		        });
	    }
	});
};

$(document).ready(main);
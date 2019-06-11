$(document).ready(function(){
		$(".bandeiraBrasil").addClass("imagembordaClara");
		$(".portugues").fadeIn();
		$(".ingles").hide();
				
		$(".bandeiraBrasil").click(function(){
			$(".bandeiraBrasil").addClass("imagembordaClara");
			$(".bandeiraEUA").removeClass("imagembordaClara");
			
			$(".portugues").fadeIn();
			$(".ingles").hide();
		});
					
		$(".bandeiraEUA").click(function(){
			$(".bandeiraEUA").addClass("imagembordaClara");
			$(".bandeiraBrasil").removeClass("imagembordaClara");
						
			$(".portugues").hide();
			$(".ingles").fadeIn();
		});
			
	}); 
	

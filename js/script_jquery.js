$(document).ready(function(){
		$(".professor1").addClass("imagembordaClara");
		
		
		//
		$(".abrirProfessor1").fadeIn();
		$(".abrirProfessor2").hide();
		$(".abrirProfessor3").hide();
		$(".abrirProfessor4").hide();
		$(".abrirProfessor5").hide();
		$(".abrirProfessor6").hide();
		$(".abrirProfessor7").hide();
				
		$(".professor1").click(function(){
			window.location.href='#infos';
			
			$(".professor1").addClass("imagembordaClara");
			$(".professor2").removeClass("imagembordaClara");
			$(".professor3").removeClass("imagembordaClara");
			$(".professor4").removeClass("imagembordaClara");
			$(".professor5").removeClass("imagembordaClara");
			$(".professor6").removeClass("imagembordaClara");
			$(".professor7").removeClass("imagembordaClara");
			//
			$(".abrirProfessor1").fadeIn();
			$(".abrirProfessor2").hide();
			$(".abrirProfessor3").hide();
			$(".abrirProfessor4").hide();
			$(".abrirProfessor5").hide();
			$(".abrirProfessor6").hide();
			$(".abrirProfessor7").hide();
		});
			
		$(".professor2").click(function(){
			window.location.href='#infos';
			
			$(".professor1").removeClass("imagembordaClara");
			$(".professor2").addClass("imagembordaClara");
			$(".professor3").removeClass("imagembordaClara");
			$(".professor4").removeClass("imagembordaClara");
			$(".professor5").removeClass("imagembordaClara");
			$(".professor6").removeClass("imagembordaClara");
			$(".professor7").removeClass("imagembordaClara");
			//
			$(".abrirProfessor1").hide();
			$(".abrirProfessor2").fadeIn();
			$(".abrirProfessor3").hide();
			$(".abrirProfessor4").hide();
			$(".abrirProfessor5").hide();
			$(".abrirProfessor6").hide();
			$(".abrirProfessor7").hide();
		});
			
		$(".professor3").click(function(){
			window.location.href='#infos';
			
			$(".professor1").removeClass("imagembordaClara");
			$(".professor2").removeClass("imagembordaClara");
			$(".professor3").addClass("imagembordaClara");
			$(".professor4").removeClass("imagembordaClara");
			$(".professor5").removeClass("imagembordaClara");
			$(".professor6").removeClass("imagembordaClara");
			$(".professor7").removeClass("imagembordaClara");
			//
			$(".abrirProfessor1").hide();
			$(".abrirProfessor2").hide();
			$(".abrirProfessor3").fadeIn();
			$(".abrirProfessor4").hide();
			$(".abrirProfessor5").hide();
			$(".abrirProfessor6").hide();
			$(".abrirProfessor7").hide();
		});
		
		$(".professor4").click(function(){
			window.location.href='#infos';
			
			$(".professor1").removeClass("imagembordaClara");
			$(".professor2").removeClass("imagembordaClara");
			$(".professor3").removeClass("imagembordaClara");
			$(".professor4").addClass("imagembordaClara");
			$(".professor5").removeClass("imagembordaClara");
			$(".professor6").removeClass("imagembordaClara");
			$(".professor7").removeClass("imagembordaClara");
			//
			$(".abrirProfessor1").hide();
			$(".abrirProfessor2").hide();
			$(".abrirProfessor3").hide();
			$(".abrirProfessor4").fadeIn();
			$(".abrirProfessor5").hide();
			$(".abrirProfessor6").hide();
			$(".abrirProfessor7").hide();
		});
		
		$(".professor5").click(function(){
			window.location.href='#infos';
			
			$(".professor1").removeClass("imagembordaClara");
			$(".professor2").removeClass("imagembordaClara");
			$(".professor3").removeClass("imagembordaClara");
			$(".professor4").removeClass("imagembordaClara");
			$(".professor5").addClass("imagembordaClara");
			$(".professor6").removeClass("imagembordaClara");
			$(".professor7").removeClass("imagembordaClara");
			//
			$(".abrirProfessor1").hide();
			$(".abrirProfessor2").hide();
			$(".abrirProfessor3").hide();
			$(".abrirProfessor4").hide();
			$(".abrirProfessor5").fadeIn();
			$(".abrirProfessor6").hide();
			$(".abrirProfessor7").hide();
		});
		
		$(".professor6").click(function(){
			window.location.href='#infos';
			
			$(".professor1").removeClass("imagembordaClara");
			$(".professor2").removeClass("imagembordaClara");
			$(".professor3").removeClass("imagembordaClara");
			$(".professor4").removeClass("imagembordaClara");
			$(".professor5").removeClass("imagembordaClara");
			$(".professor6").addClass("imagembordaClara");
			$(".professor7").removeClass("imagembordaClara");
			//
			$(".abrirProfessor1").hide();
			$(".abrirProfessor2").hide();
			$(".abrirProfessor3").hide();
			$(".abrirProfessor4").hide();
			$(".abrirProfessor5").hide();
			$(".abrirProfessor6").fadeIn();
			$(".abrirProfessor7").hide();
		});
		
		$(".professor7").click(function(){
			window.location.href='#infos';
			
			$(".professor1").removeClass("imagembordaClara");
			$(".professor2").removeClass("imagembordaClara");
			$(".professor3").removeClass("imagembordaClara");
			$(".professor4").removeClass("imagembordaClara");
			$(".professor5").removeClass("imagembordaClara");
			$(".professor6").removeClass("imagembordaClara");
			$(".professor7").addClass("imagembordaClara");
			//
			$(".abrirProfessor1").hide();
			$(".abrirProfessor2").hide();
			$(".abrirProfessor3").hide();
			$(".abrirProfessor4").hide();
			$(".abrirProfessor5").hide();
			$(".abrirProfessor6").hide();
			$(".abrirProfessor7").fadeIn();
		});
	}); 
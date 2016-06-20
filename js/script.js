$(document).ready(function () {
	
	//inicia plugin para o topo do header ficar fixo
	$("#sticky-topo" ).sticky({ 
		topSpacing: 0, 
		className:"altera-topo"
	});
	
	//lightbox com opacidade quando clicar no hamburger no modo mobile
	$(".navbar-toggle").on("click", function () {
	    $(this).toggleClass("active");
	    $(".lightbox").toggleClass("active");
	});

	// btn de busca para mobile
    $('[data-command="toggle-search"]').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('hide-search');
        
        if ($(this).hasClass('hide-search')) {        
            $('.c-search').closest('.input-busca-mobile').slideUp(100);
        }else{   
            $('.c-search').closest('.input-busca-mobile').slideDown(100);
        }
    })	
});


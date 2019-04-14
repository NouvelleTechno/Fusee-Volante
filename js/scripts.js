var counter=0,accel=0;
var temps,arret;
$(function() {
  // Gère les clics sur la fusée
	$("#fusee").on("click",function(e){
		// Gère l'animation d'accélération
    if(accel==0){
			$("#rocket_dummy").animate({top:'-=20px'},200);
			accel=1;
		}
		window.clearTimeout(temps);
    // Affiche le feu
		$(".fire.bottom").show();
    // Gère le temps de combustion
		temps = window.setTimeout(feu,3000);
    // Anime les étoiles
		$('body').animate({
		  'background-position-y': '-='+counter*2+'%'
		}, 1000, 'linear');
		if(counter<50)
			counter++;
		else if (counter<500)
			counter+=10;
		else if (counter<5000)
			counter+=100;
		else if (counter<10000)
			counter+=1000;
		else if (counter<20000)
			counter+=10000;
		else
			counter+=100000;
	});
  // Positionne la fusée sur l'écran
	var hauteur = $(window).height();
	var largeur = $(window).width();
	$("#rocket_dummy").css("top",(hauteur-295)/2);
	$("#rocket_dummy").css("left",(largeur-120)/2);
});

function feu(){
	$(".fire.bottom").hide();
	$("#rocket_dummy").animate({top:'+=20px'},1000);
	accel=0;
}


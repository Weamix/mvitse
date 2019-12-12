var div_balle; //<div> de la balle
var timer; // pour l'animation avec setInterval
var x= 250; // balle au centre du cadre
var y= 150; //1/2*(largeur_cadre, hauteur_cadre)
var dx= 5; // vecteur du mouvement de la balle
var dy= 2; // par exemple(5,2)
var dt= 20; //temps en ms entre chaque pas
var murDroit = 500 - 100; //largeur_cadre-largeur-balle
var murBas = 300 - 100; //hauteur_cadre-hauteur_balle

// appel tous le dt milli secondes

function avancerBalleDunPas() {
	x = x + dx;
	y = y + dy;
	if (x < 0 || x > murDroit) { //rebond horizontal
		dx = -dx;
		} else if (y<0 || y > murBas){ //rebond vertical
			dy = -dy;
			} else { //on change la position de la balle
				div_balle.style.left= x+"px";
				div_balle.style.top= y+"px";
				}
}

//initialisation lors du chargement de la page HTML

function init() {
	div_balle = document.getElementById('balle');
	timer = setInterval(avancerBalleDunPas, dt); //chaque instant
}

function stop(){
	clearInterval(timer);
}
// SELECTION
var app = document.getElementById('app')
console.log(app)

var disp = document.getElementById('disp')
console.log(disp)

var section = document.getElementsByTagName('section')
console.log(section)

var bouton = document.getElementsByTagName('button')
console.log(bouton)

var premier = document.getElementById('premier')
console.log(premier)

var deuxieme = document.getElementById('deuxieme')
console.log(deuxieme)

var select = document.getElementsByTagName('select')
console.log(select)


// EVENEMENT
app.addEventListener("click", hola)

disp.addEventListener("click", ciao)

bouton[0].addEventListener("click", calcul)


// FONCTION
function ciao () {
	section[0].style.display = 'none';
}

function hola () {
	section[0].style.display = 'block'
}

function calcul() {
	var plus = parseFloat(premier.value) + parseFloat(deuxieme.value)
	var moins = premier.value - deuxieme.value
	var divisé = premier.value / deuxieme.value
	var fois = premier.value * deuxieme.value
	var resultat = (premier.value + select[0].value + deuxieme.value)

	if (select[0].value == '+') {
		alert(resultat + '=' + plus)
	}

	else if (select[0].value == '-') {
		alert(resultat + '=' + moins);
	}

	else if (select[0].value == '/') {
		alert(resultat + '=' + divisé);
	}

	else if (select[0].value == '*') {
		alert(resultat + '=' + fois);
	}
} 
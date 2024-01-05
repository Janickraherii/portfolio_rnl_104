




// Menu burger
icons.addEventListener("click", () =>{
	menuBurger.classList.toggle("hidden");
});

// Menu burger

// animation text


const textAnime = document.querySelector('h1');

new Typewriter(textAnime, {
	deleteSpeed: 20
})
.changeDelay(100)
.typeString('Je suis <strong> Janick R.</strong>')
.pauseFor(100)
.deleteChars(9)
.typeString('<span style="color:#f38f90"> RNL_104,</span>')
.start();


const textAnimeDeux = document.querySelector('h2');

new Typewriter(textAnimeDeux, {
	//deleteSpeed: 20
})


.changeDeleteSpeed(5)
.typeString('\n<strong>Développeuse</strong>')
.typeString('<span style="color:#f38f90"> CSS</span> !')
.pauseFor(30)
.deleteChars(5)
.typeString('<span style="color:#1c8db4"> HTML</span> !')
.pauseFor(30)
.deleteChars(6)
.typeString('<span style="color:#f9ff1e"> JavaScript</span> !')
.pauseFor(30)
.deleteChars(12)
.typeString('<strong> web</strong>')
.start();
// animation text

// modification affichage card compétences et outils
document.getElementById('btn1').addEventListener('click', function() {

	document.querySelector('.div1').classList.remove('hidden');

	document.querySelector('.div2').classList.add('hidden');

	document.querySelector('.image').classList.add('hidden');

});


document.getElementById('btn2').addEventListener('click', function() {

	document.querySelector('.div1').classList.add('hidden');

	document.querySelector('.div2').classList.remove('hidden');

	document.querySelector('.image').classList.add('hidden');

});
// modification affichage card compétences et outils


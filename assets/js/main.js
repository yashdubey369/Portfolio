// menu toggle for mobile Response
let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');
let headerLinks = document.querySelector('.header-links');

menuIcon.addEventListener('click', function () {
  headerLinks.style.display = 'block';
  headerLinks.style.right = '0';
});

cancelIcon.addEventListener('click', function () {

  headerLinks.style.right = '-100vh';
  headerLinks.style.display = 'none';
});

// theme color change script
let themeInput = document.getElementById('theme');
const root = document.documentElement; // Get the root element (<html>)
const primaryThemeColor = getComputedStyle(root).getPropertyValue('--primary-theme-color');
themeInput.value = primaryThemeColor;

themeInput.addEventListener('change', function () {
  // Get the value of the input element when it changes
  const color = themeInput.value;
  document.documentElement.style.setProperty('--primary-theme-color', color);
});
// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

// The TextArray: 
var textArray = ["Yash.","a Student.","a Developer.", "a Coder."];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');


// function to generate the backspace effect 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 5 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 150 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);
	
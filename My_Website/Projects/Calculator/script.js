// Spring logo variables start 
var RunningTotal = 0; // previous number
var buffer = "0"; // current number
var PrevSpecialSign = null; // The first sign
var IfResult = 0;
const screen = document.querySelector(".screen"); // Displaying some things
// Calculator variables end 

// Spring logo variables start 
const { styler, spring, listen, pointer, value } = window.popmotion;
const Brand = document.querySelector(".Brand");
const divStyler = styler(Brand);
const BrandXY = value({ x: 0, y: 0 }, divStyler.set);
// Spring logo variables end 

// Spring logo start 
listen(Brand, "mousedown touchstart").start((e) => {
	e.preventDefault();
	pointer(BrandXY.get()).start(BrandXY);
});

listen(document, "mouseup touchend").start(() => {
	spring({
		from: BrandXY.get(),
		velocity: BrandXY.getVelocity(),
		to: { x: 0, y: 0 },
		stiffness: 200,
		mass: 1,
		damping: 10,
	}).start(BrandXY);
});
// Spring logo end 
//Calculator Start
function ButtonClick(value) {
	if (isNaN(value)) {
		// this is not a number
		HandleSymbol(value);
	} else {
		// this is a number
		HandleNumber(value);
	}
	
	screen.innerText = buffer;
}

function HandleSymbol(symbol) {
	console.log("", symbol);
	switch (symbol) {
		case "C":
			buffer = "0";
			RunningTotal = 0;
			console.log("HandleSymbol_C", symbol, buffer, RunningTotal);
			IfResult = 0;
			break;
			
			case "=":
				console.log("HandleSymbol_Equal", symbol, buffer, RunningTotal);
			if (PrevSpecialSign === null) {
				//Need 2 numbers
				return;
			}
			Flushing(parseInt(buffer));
			PrevSpecialSign = null;
			buffer = RunningTotal;
			RunningTotal = 0;
			IfResult = 1;
			break;
		case "←":
			if (buffer.length === 1) buffer = "0";
			else if (IfResult === 0) {
				buffer = buffer.substring(0, buffer.length - 1);
			}
			break;
			case "+":
		case "−":
		case "×":
			case "÷":
				handleMath(symbol);
				break;
			}
		}

		function handleMath(symbol) {
			if (buffer === "0") return;

	const intbuffer = parseInt(buffer);

	if (RunningTotal === 0) {
		RunningTotal = intbuffer;
		console.log("Handle_Math_RunningTotal", RunningTotal);
	} else {
		Flushing(intbuffer);
	}

	PrevSpecialSign = symbol;
	console.log("HandleMath_PrevSpecial", PrevSpecialSign);
	console.log("HandleNumber_RunningTotal", RunningTotal);
	buffer = "0";
}

function Flushing(value) {
	switch (PrevSpecialSign) {
		case "+":
			console.log("Flushing_Przed_RunningTotal", RunningTotal);
			RunningTotal += value;
			console.log("Flushing_Po_RunningTotal", RunningTotal);
			break;
			case "−":
				RunningTotal -= value;
				break;
		case "×":
			RunningTotal *= value;
			break;
			case "÷":
				RunningTotal /= value;
	}
	console.log("Flushing");
}

function HandleNumber(numberString) {
	if (buffer === "0") {
		buffer = numberString;
	} else buffer += numberString;

	console.log("HandleNumber_Buffer", buffer);
}

function init() {
	document
	.querySelector(".calc-buttons")
	.addEventListener("click", function (event) {
		ButtonClick(event.target.innerText);
	});
}
//Calculator Start

init();

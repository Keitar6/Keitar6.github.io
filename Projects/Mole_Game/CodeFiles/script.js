// King Mole status Starts
const MoleLeaving = "../img/mole-leaving.png";
const MoleHungry = "../img/mole-hungry.png";
const MoleSad = "../img/mole-sad.png";
const MoleFed = "../img/mole-fed.png";
// Mole status End

// King Mole status Start
const KingMoleLeaving = "../img/king-mole-leaving.png";
const KingMoleHungry = "../img/king-mole-hungry.png";
const KingMoleSad = "../img/king-mole-sad.png";
const KingMoleFed = "../img/king-mole-fed.png";
// King Mole status End

let RunAgainAt = Date.now() + 200;
let Score = 0;
let Max_Score = 10;

function CheckIfWin(IfKing) {
	let Worm_Score = "5%";
	if (IfKing) Score += 2;
	else Score++;
	if (Score >= Max_Score) {
		// Win
		document.querySelector(".Wrapper").classList.add("WIN");
		// document.querySelector(".Wrapper").back;
		// console.log(document.querySelector(".Win_Image"))
		document.querySelector(".Win_Image").classList.remove("WIN");
	}
	Worm_Score = `${(Score / Max_Score) * 100}%`;
	// console.log(Score, Worm_Score);
	document.querySelector(".Worm_Container").style.width = Worm_Score;
}
const Moles = [
	{
		Status: "Sad",
		Next: Moles_Sadness_Time(),
		King: false,
		ActualMole: document.querySelector("#Hole-0"),
	},
	{
		Status: "Sad",
		Next: Moles_Sadness_Time(),
		King: false,
		ActualMole: document.querySelector("#Hole-1"),
	},
	{
		Status: "Sad",
		Next: Moles_Sadness_Time(),
		King: false,
		ActualMole: document.querySelector("#Hole-2"),
	},
	{
		Status: "Sad",
		Next: Moles_Sadness_Time(),
		King: false,
		ActualMole: document.querySelector("#Hole-3"),
	},
	{
		Status: "Sad",
		Next: Moles_Sadness_Time(),
		King: false,
		ActualMole: document.querySelector("#Hole-4"),
	},
	{
		Status: "Sad",
		Next: Moles_Sadness_Time(),
		King: false,
		ActualMole: document.querySelector("#Hole-5"),
	},
	{
		Status: "Sad",
		Next: Moles_Sadness_Time(),
		King: false,
		ActualMole: document.querySelector("#Hole-6"),
	},
	{
		Status: "Sad",
		Next: Moles_Sadness_Time(),
		King: false,
		ActualMole: document.querySelector("#Hole-7"),
	},
	{
		Status: "Sad",
		Next: Moles_Sadness_Time(),
		King: false,
		ActualMole: document.querySelector("#Hole-8"),
	},
	{
		Status: "Sad",
		Next: Moles_Sadness_Time(),
		King: false,
		ActualMole: document.querySelector("#Hole-9"),
	},
];

function Moles_Sadness_Time() {
	return Date.now() + 1000;
}
function Moles_Gone_Time() {
	return Date.now() + Math.round(Math.random() * 18000 + 2000);
}
function Moles_Hungry_Time() {
	return Date.now() + Math.round(Math.random() * 3000 + 2000);
}

function IfRoyal() {
	return Math.random() > 0.9;
}

function Get_Next_Status(Mole) {
	switch (Mole.Status) {
		case "Sad":
			Mole.Status = "Leaving";
			// Mole.King = IfRoyal();
			if (Mole.King) {
				Mole.ActualMole.children[0].src = KingMoleLeaving;
			} else Mole.ActualMole.children[0].src = MoleLeaving;
			Mole.Next = Moles_Sadness_Time();
			break;
		case "Fed":
			Mole.Status = "Leaving";
			// Mole.King = IfRoyal();
			if (Mole.King) {
				Mole.ActualMole.children[0].src = KingMoleLeaving;
			} else Mole.ActualMole.children[0].src = MoleLeaving;
			Mole.Next = Moles_Sadness_Time();
			break;
		case "Leaving":
			Mole.Status = "Gone";
			Mole.Next = Moles_Gone_Time();
			Mole.ActualMole.children[0].classList.add("Gone");
			break;
		case "Gone":
			Mole.Status = "Hungry";
			Mole.King = IfRoyal();
			if (Mole.King) {
				Mole.ActualMole.children[0].src = KingMoleHungry;
			} else Mole.ActualMole.children[0].src = MoleHungry;
			Mole.Next = Moles_Hungry_Time();
			Mole.ActualMole.children[0].classList.remove("Gone");
			Mole.ActualMole.children[0].classList.add("Hungry");
			break;
		case "Hungry":
			Mole.Status = "Sad";
			// Mole.King = IfRoyal();
			if (Mole.King) {
				Mole.ActualMole.children[0].src = KingMoleSad;
			} else Mole.ActualMole.children[0].src = MoleSad;
			Mole.Next = Moles_Sadness_Time();
			Mole.ActualMole.children[0].classList.remove("Hungry");
			break;
	}
}

function RequestFrame() {
	const Now = Date.now();

	if (Now >= RunAgainAt) {
		for (let i = 0; i < Moles.length; i++) {
			if (Moles[i].Next < Now) {
				Get_Next_Status(Moles[i]);
			}
		}
		// console.log("elo");
		// console.log(Moles);
		RunAgainAt = Date.now() + 200;
	}
	requestAnimationFrame(RequestFrame);
}

function Feeding(event) {
	if (
		event.target.tagName !== "IMG" ||
		!event.target.classList.contains("Hungry")
	) {
		return;
	}
	const Mole = Moles[parseInt(event.target.dataset.index)];
	Mole.Status = "Fed";
	// Mole.King = IfRoyal();
	if (Mole.King) {
		Mole.ActualMole.children[0].src = KingMoleFed;
	} else Mole.ActualMole.children[0].src = MoleFed;
	Mole.Next = Moles_Sadness_Time();
	Mole.ActualMole.children[0].classList.remove("Hungry");

	CheckIfWin(Mole.King);
}
function init() {
	document.querySelector(".Wrapper").addEventListener("click", Feeding);
}
RequestFrame();
init();

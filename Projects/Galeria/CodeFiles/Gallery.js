// Gallery variables start
const Center_ImageBox = document.getElementById("Center_ImageBox");
// const Center_Image = document.getElementById("Center_Image");
const buttons = document.querySelector(".Buttons");
const Prev_Button = document.querySelector(".Button_Prev");
const Button_Forw = document.querySelector(".Button_Forw");
const Gallery_Images = document.querySelectorAll(".Grid_Item");
let Currently_Selected = "0";
let Temp_Image = "";
// Gallery variables end

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

function Center_Image_Temp_Allocation(Images) {
	if (Temp_Image === "") {
		Temp_Image = document.createElement("img");
	} else {
		Temp_Image.src = Images.src;
		Temp_Image.classList.add("Active");
		Center_ImageBox.appendChild(Temp_Image);
	}
}
function NextImage() {
	Center_ImageBox.removeChild(Temp_Image);
	Temp_Image.src = Gallery_Images[Currently_Selected].src;
	Center_ImageBox.appendChild(Temp_Image);
}

function Selecting(Classes) {
	// console.log(Classes, typeof(Classes));
	Currently_Selected = parseInt(Classes.split(" ")[1]);
	// console.log(Currently_Selected);
	ButtonsDisable();
}

function ButtonsDisable() {
	if (Currently_Selected != 0) {
		Prev_Button.disabled = false;
	} else Prev_Button.disabled = true;

	if (Currently_Selected != Gallery_Images.length - 1) {
		Button_Forw.disabled = false;
	} else Button_Forw.disabled = true;
}

function OpenCenter_IMG(Images) {
	Selecting(Images.className);
	Center_Image_Temp_Allocation(Images);
	Center_ImageBox.style.display = "flex";
	buttons.style.display = "block";
}

function CloseCenter_IMG(X_Button) {
	Center_ImageBox.style.display = "none";
	buttons.style.display = "none";
}

function NextClick(RClick) {
	// console.log(Gallery_Images);
	Currently_Selected++;
	ButtonsDisable();
	NextImage();
}

function PrevClick(LClick) {
	Currently_Selected--;
	ButtonsDisable();
	NextImage();
}

function init() {
	document
		.querySelector(".X_Button")
		.addEventListener("click", function (event) {
			CloseCenter_IMG(event.target);
		});

	document
		.querySelector(".Grid_Container")
		.addEventListener("click", function (event) {
			OpenCenter_IMG(event.target);
		});

	document
		.querySelector(".Button_Prev")
		.addEventListener("click", function (event) {
			PrevClick(event.target);
		});

	document
		.querySelector(".Button_Forw")
		.addEventListener("click", function (event) {
			NextClick(event.target);
		});
}
init();
// Drink Search variables start 
const search = document.querySelector(".Search"); //zapytanie
const li = document.querySelectorAll(".Items"); //zapytanie
const Drink_Searcher = document.querySelector(".Drink_Searcher");
const button = document.querySelector("button");
// Drink Search variables end 

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

var input = (e) => {
	let temp = e.target.value.toLowerCase();

	li.forEach((num) => {
		if (num.textContent.toLowerCase().indexOf(temp) !== -1) {
			num.style.display = "block"; //styl wyświetlania typ taki jaki był wcześniej
		} else {
			num.style.display = "none"; //styl wyświetlania żodyn
		}
	});
};

const DarkMode = () => {
	if (Drink_Searcher.getAttribute("data-mode") === "light") {
		Drink_Searcher.setAttribute("data-mode", "dark");
	} else {
		Drink_Searcher.setAttribute("data-mode", "light");
	}
};

search.addEventListener("keyup", input);

button.addEventListener("click", DarkMode);

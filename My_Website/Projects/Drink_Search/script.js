const search = document.querySelector(".Search"); //zapytanie
const li = document.querySelectorAll(".Items"); //zapytanie
const Drink_Searcher = document.querySelector(".Drink_Searcher");
const button = document.querySelector("button");

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

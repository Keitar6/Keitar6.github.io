const search = document.querySelector(".Search"); //zapytanie
const li = document.querySelectorAll("li"); //zapytanie
const body = document.querySelector("body");
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
	if (body.getAttribute("data-mode") === "light") {
		body.setAttribute("data-mode", "dark");
	} else {
		body.setAttribute("data-mode", "light");
	}
};

search.addEventListener("keyup", input);

button.addEventListener("click", DarkMode);

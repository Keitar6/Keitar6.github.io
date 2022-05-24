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

var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function (e) {
	e.preventDefault();
	sendData();
});

// https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
function sendData() {
	var XHR = new XMLHttpRequest();
	var urlEncodedData = "";
	var urlEncodedDataPairs = [];

	urlEncodedDataPairs.push(
		encodeURIComponent("name") +
			"=" +
			encodeURIComponent(form.querySelector("[name='name']").value)
	);
	urlEncodedDataPairs.push(
		encodeURIComponent("send_to") +
			"=" +
			encodeURIComponent(form.querySelector("[name='send_to']").value)
	);
	urlEncodedDataPairs.push(
		encodeURIComponent("subject") +
			"=" +
			encodeURIComponent(form.querySelector("[name='subject']").value)
	);
	urlEncodedDataPairs.push(
		encodeURIComponent("email") +
			"=" +
			encodeURIComponent(form.querySelector("[name='email']").value)
	);

	// dropdown menu
	urlEncodedDataPairs.push(
		encodeURIComponent("comments") +
			"=" +
			encodeURIComponent(form.querySelector("[name='comments']").value)
	);
	// Combine the pairs into a single string and replace all %-encoded spaces to
	// the '+' character; matches the behaviour of browser form submissions.
	urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

	// Define what happens on successful data submission
	XHR.addEventListener("load", function (event) {
		if (XHR.readyState === XHR.DONE) {
			if (XHR.status === 200) {
				alert("Thanks for writing to me! I will come Back to you shortly!");
			} else {
				alert(
					"Um, sorry, i am still working on it. Here is a problem --> " +
						XHR.responseText +
						"."
				);
			}
		}
	});

	// Define what happens in case of error
	XHR.addEventListener("error", function (event) {
		// This is normally a timeout or connection error.
		alert("Oops! Something went wrong.");
	});

	// Set up our request
	XHR.open(form.getAttribute("method"), form.getAttribute("action"));

	// Add the required HTTP header for form data POST requests
	// XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	// Finally, send our data.
	XHR.send(urlEncodedData);
}

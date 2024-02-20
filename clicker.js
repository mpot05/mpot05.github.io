let count = 0

const FORDS = $("#fords-count");

function clickCookie() {
	count++;
	FORDS.text(count)
}

function reset() {
	count = 0;
	FORDS.text(count)
}

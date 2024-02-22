let count = 0

let stupidnum = 0

let clickpower = 1

let clickUpgrade1Cost = 25

let clickUpgrade2Cost = 500

let autoUpgrade1Cost = 250

let autoclick = 0



const FORDS = $("#fords-count");

setInterval(stupid, 1000)

function stupid() {
	stupidnum++;
	document.getElementById('stupidID').innerHTML = stupidnum
	document.getElementById('stupidID').addEventListener("change", autoclicker())
}

function passiveclicks() {
	document.getElementById('stupidID').addEventListener("change", autoclicker())
}

function autoclicker() {
	count += autoclick
	FORDS.text(count)
}

window.onload = function () {
	document.getElementById('button1').innerHTML = "Manual Click Upgrade 1: " + clickUpgrade1Cost
	document.getElementById('button2').innerHTML = "Manual Click Upgrade 2: " + clickUpgrade2Cost
	document.getElementById('autobutton1').innerHTML = "Auto Click Upgrade 1: " + autoUpgrade1Cost
	passiveclicks()
}

function clickCookie() {
	count += clickpower;
	FORDS.text(count)
}

function reset() {
	count = 0;
	clickpower = 1;
	clickUpgrade1Cost = 25;
	clickUpgrade2Cost = 500;
	autoclick = 0;
	FORDS.text(count)
	document.getElementById('button1').innerHTML = "Manual Click Upgrade 1: " + clickUpgrade1Cost
	document.getElementById('button2').innerHTML = "Manual Click Upgrade 2: " + clickUpgrade2Cost

}

function clickUpgrade1() {
	if (count >= clickUpgrade1Cost) {
		count -= clickUpgrade1Cost;
		clickpower += 1;
		FORDS.text(count)
		clickUpgrade1Cost = Math.round((clickUpgrade1Cost *= 1.25))
		document.getElementById('button1').innerHTML = "Manual Click Upgrade 1: " + clickUpgrade1Cost
	}
}

function clickUpgrade2() {
	if (count >= clickUpgrade2Cost) {
		count -= clickUpgrade2Cost;
		clickpower += 15;
		FORDS.text(count)
		clickUpgrade2Cost = Math.round((clickUpgrade2Cost *= 1.25))
		document.getElementById('button2').innerHTML = "Manual Click Upgrade 2: " + clickUpgrade2Cost
	}
}

function autoClickUpgrade1() {
	if (count >= autoUpgrade1Cost) {
		count -= autoUpgrade1Cost;
		autoclick += 1;
		FORDS.text(count)
		autoUpgrade1Cost = Math.round((autoUpgrade1Cost *= 1.25))
		document.getElementById('autobutton1').innerHTML = "Auto Click Upgrade 1: " + autoUpgrade1Cost
	}
}

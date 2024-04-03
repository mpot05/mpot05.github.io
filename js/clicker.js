let count = 0

let stupidnum = 0

let clickpower = 1

let clickUpgrade1Cost = 25

let clickUpgrade2Cost = 500

let autoUpgrade1Cost = 250

let autoUpgrade2Cost = 1000

let autoclick = 0

let started = false



const FORDS = $("#fords-count");

setInterval(stupid, 1000)

setInterval(saveState, 1000)

function saveState() {
	localStorage.setItem("count", count)
	localStorage.setItem("clickpower", clickpower)
	localStorage.setItem("autoclick", autoclick)
	localStorage.setItem("clickUpgrade1Cost", clickUpgrade1Cost)
	localStorage.setItem("clickUpgrade2Cost", clickUpgrade2Cost)
	localStorage.setItem("autoUpgrade1Cost", autoUpgrade1Cost)
	localStorage.setItem("autoUpgrade2Cost", autoUpgrade2Cost)
}

function loadState() {
	count = Number(localStorage.getItem("count"))
	clickpower = Number(localStorage.getItem("clickpower"))
	autoclick = Number(localStorage.getItem("autoclick"))
	clickUpgrade1Cost = Number(localStorage.getItem("clickUpgrade1Cost")) > 0 ? Number(localStorage.getItem("clickUpgrade1Cost")) : 25
	clickUpgrade2Cost = Number(localStorage.getItem("clickUpgrade2Cost")) > 0 ? Number(localStorage.getItem("clickUpgrade2Cost")) : 500
	autoUpgrade1Cost = Number(localStorage.getItem("autoUpgrade1Cost")) > 0 ? Number(localStorage.getItem("autoUpgrade1Cost")) : 250
	autoUpgrade2Cost = Number(localStorage.getItem("autoUpgrade2Cost")) > 0 ? Number(localStorage.getItem("autoUpgrade2Cost")) : 1000
}

function stupid() {
	stupidnum++;
	document.getElementById('stupidID').innerHTML = stupidnum
	document.getElementById('stupidID').addEventListener("change", autoclicker())
}

function passiveclicks() {
	document.getElementById('stupidID').addEventListener("change", autoclicker())
}

function autoclicker() {
	started = true
	count += autoclick
	FORDS.text(count)
}

window.onload = function () {
	loadState()
	document.getElementById('button1').innerHTML = "Manual Click Upgrade 1: " + clickUpgrade1Cost
	document.getElementById('button2').innerHTML = "Manual Click Upgrade 2: " + clickUpgrade2Cost
	document.getElementById('autobutton1').innerHTML = "Auto Click Upgrade 1: " + autoUpgrade1Cost
  	document.getElementById('autobutton2').innerHTML = "Auto Click Upgrade 2: " + autoUpgrade2Cost
	passiveclicks()
	loadState()
	if (!started) {
		reset()
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
	//usage:
	/*
	sleep(2000).then(() => { code });
	*/
}

function clickCookie() {
	started = true
	count += clickpower;
	FORDS.text(count)
}

function reset() {
	started = true
	count = 0;
	clickpower = 1;
	clickUpgrade1Cost = 25;
	clickUpgrade2Cost = 500;
	autoUpgrade1Cost = 250;
	autoUpgrade2Cost = 1000;
	autoclick = 0;
	FORDS.text(count)
	document.getElementById('button1').innerHTML = "Manual Click Upgrade 1: " + clickUpgrade1Cost
	document.getElementById('button2').innerHTML = "Manual Click Upgrade 2: " + clickUpgrade2Cost
	document.getElementById('autobutton1').innerHTML = "Auto Click Upgrade 1: " + autoUpgrade1Cost
	document.getElementById('autobutton2').innerHTML = "Auto Click Upgrade 2: " + autoUpgrade2Cost

}

function clickUpgrade1() {
	if (count >= clickUpgrade1Cost) {
		started = true
		count -= clickUpgrade1Cost;
		clickpower += 1;
		FORDS.text(count)
		clickUpgrade1Cost = Math.round((clickUpgrade1Cost *= 1.25))
		document.getElementById('button1').innerHTML = "Manual Click Upgrade 1: " + clickUpgrade1Cost
	}
}

function clickUpgrade2() {
	if (count >= clickUpgrade2Cost) {
		started = true
		count -= clickUpgrade2Cost;
		clickpower += 15;
		FORDS.text(count)
		clickUpgrade2Cost = Math.round((clickUpgrade2Cost *= 1.25))
		document.getElementById('button2').innerHTML = "Manual Click Upgrade 2: " + clickUpgrade2Cost
	}
}

function autoClickUpgrade1() {
	started = true
	if (count >= autoUpgrade1Cost) {
		count -= autoUpgrade1Cost;
		autoclick += 1;
		FORDS.text(count)
		autoUpgrade1Cost = Math.round((autoUpgrade1Cost *= 1.25))
		document.getElementById('autobutton1').innerHTML = "Auto Click Upgrade 1: " + autoUpgrade1Cost
	}
}

function autoClickUpgrade2() {
	started = true
  	if (count >= autoUpgrade2Cost) {
    	count -= autoUpgrade2Cost;
    	autoclick += 20;
    	FORDS.text(count)
    	autoUpgrade2Cost = Math.round((autoUpgrade2Cost *= 1.25))
    	document.getElementById('autobutton2').innerHTML = "Auto Click Upgrade 2: " + autoUpgrade2Cost
	}
}

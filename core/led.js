const Gpio = require('pigpio').Gpio;

const ledRed = new Gpio(4, { mode: Gpio.OUTPUT });
const ledGreen = new Gpio(27, { mode: Gpio.OUTPUT });
const ledBlue = new Gpio(17, { mode: Gpio.OUTPUT });

let blinkYellow;
let blinkRed;
let blinkGreen;

exports.testLeds = function() {
	ledRed.digitalWrite(1);
        ledGreen.digitalWrite(1);
        ledBlue.digitalWrite(1);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
		console.log('vermelho')
            	red();
        }, 3000);
        setTimeout(() => {
		console.log('verder')
            	clearInterval(blinkRed);
		green();
        }, 6000);
        setTimeout(() => {
		console.log('amarelo');
		clearInterval(blinkGreen);
		yellow();
        }, 9000);

        resolve(true)
    });
}

exports.reset = function() {
	ledRed.digitalWrite(1);
	ledGreen.digitalWrite(1);
	ledBlue.digitalWrite(1);

	if (blinkYellow) {
		clearInterval(blinkYellow);
	}
	if (blinkRed) {
		clearInterval(blinkRed);
	}
	if (blinkGreen) {
		clearInterval(blinkGreen);
	}
}

exports.blink = function(led) {
	if (led === 'yellow') {
		yellow();
	} else if (led === 'red') {
		red()
	} else if (green === 'green') {
		green();
	}
}

function yellow() {
	let blink = true;
	blinkYellow = setInterval(() => {
		if (blink) {
			ledRed.pwmWrite(100);
			ledGreen.pwmWrite(250);
			ledBlue.pwmWrite(0);
			blink = false;
		} else {
			ledRed.digitalWrite(1);
			ledGreen.digitalWrite(1);
			ledBlue.digitalWrite(1);
			blink = true;
		}
	}, 250);
}


function red() {
	let blink = true;
	blinkRed = setInterval(() => {
		if (blink) {
			ledRed.pwmWrite(0)
            		ledGreen.pwmWrite(255);
            		ledBlue.pwmWrite(255);
			blink = false;
		} else {
			ledRed.digitalWrite(1)
                        ledGreen.digitalWrite(1);
                        ledBlue.digitalWrite(1);
                        blink = true;
		}
	}, 250);
}

function green() {
 	let blink = true;
        blinkGreen = setInterval(() => {
                if (blink) {
                        ledRed.pwmWrite(255)
                        ledGreen.pwmWrite(255);
                        ledBlue.pwmWrite(0);
                        blink = false;
                } else {
                        ledRed.digitalWrite(1)
                        ledGreen.digitalWrite(1);
                        ledBlue.digitalWrite(1);
                        blink = true;
                }
        }, 250);
}

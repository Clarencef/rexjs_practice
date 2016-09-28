import $ from 'jquery';
import Rx from 'rxjs/Rx';

// observable event

const btn = $('.btn');
const input = $('#input');
const output = $('#output');
const mousemoveOutput = $('#mousemoveOutput');

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');

btnStream$.subscribe(
	function (e) {
		console.log('clicked');
	},
	function (err) {
		console.log(err);
	},
	function () {
		console.log('completed');
	}
);

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(
	function (e) {
		console.log(e.currentTarget.value);
		output.html(e.target.value);
	},
	function (err) {
		console.log(err);
	},
	function () {
		console.log('completed');
	}
);

const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');

moveStream$.subscribe(
	function (e) {
		console.log(e.currentTarget.value);
		mousemoveOutput.html('<h1>X: ' + e.clientX + 'Y: ' + e.clientY + '</h1>');
	},
	function (err) {
		console.log(err);
	},
	function () {
		console.log('completed');
	}
);
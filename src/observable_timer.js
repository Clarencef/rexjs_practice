// Interval & Timer & Range

import $ from 'jquery';
import Rx from 'rxjs/Rx';

// observable interval 每一秒執行一次，共執行五次.take用來規定執行幾次
// const IntervalSource$ = Rx.Observable.interval(1000).take(5);

// IntervalSource$.subscribe(
// 	x => {
// 	  console.log(x);
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('completed');
// 	} 
// );

// observable timer 第一個參數是當頁面載入後什麼時候開始執行timer,第二個參數執行timer的時間間距
// const timerSource$ = Rx.Observable.timer(5000,1000).take(5);

// timerSource$.subscribe(
// 	x => {
// 	  console.log(x);
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('completed');
// 	} 
// );

// observable range 第一個參數是range開始，第一個參數是range執行幾次後結束
const rangeSource$ = Rx.Observable.range(25,100);

rangeSource$.subscribe(
	x => {
	  console.log(x);
	},
	err => {
		console.log(err);
	},
	complete => {
		console.log('completed');
	} 
);
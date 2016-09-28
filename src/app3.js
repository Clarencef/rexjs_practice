import $ from 'jquery';
import Rx from 'rxjs/Rx';

//create observable from scratch

const source$ = new Rx.Observable(observer => {
	console.log('Creating Observable');
	observer.next('Hello World');
	observer.next('Another Value');

	//觸發error callback 將不會觸發complete callback 必須在source$加上.catch來處理
	observer.error(new Error('Error: Something went wrong'));

	setTimeout(() => {
		observer.next('Yet another value');
		observer.complete(); //觸發observer complete callback
	}, 3000);
})

source$
.catch(err => Rx.Observable.of(err))
.subscribe(
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
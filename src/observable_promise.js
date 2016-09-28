// create observable promise

import $ from 'jquery';
import Rx from 'rxjs/Rx';

const myPromise = new Promise( (resolve,reject) => {
	console.log('creating Promise');
	setTimeout(() => {
		resolve('hello from promise');
	}, 3000);
});

// myPromise.then((x) => {
// 	console.log(x);
// })

// const promiseSource$ = Rx.Observable.fromPromise(myPromise);

// promiseSource$.subscribe(
// 	x => {
// 		console.log(x);
// 	},
// 	err => {
// 		console.log(err);
// 	},
// 	complete => {
// 		console.log('completed');
// 	} 
// )

// ajax get data from api return promise
function getData (username) {
	return $.ajax({
		url: 'https://api.github.com/users/' + username,
		dataType: 'jsonp'
	}).promise();
}

const myId = $('#name');
const myBlog = $('#blog');
const myRepos = $('#repos');

// 在subscribe內包含另一個subscribe是anti pattern 用 mergemap 來做修正
Rx.Observable
.fromEvent($('#searchInput'),'keyup')
.subscribe(e => {
	Rx.Observable
	  .fromPromise(getData(e.target.value))
	  .subscribe(x => {
	    console.log(x);
	    myId.text(x.data.name);
	    myBlog.text(x.data.blog);
	    myRepos.text(x.data.public_repos);
      });
});



// mergemap & switchmap & concatmap 

import $ from 'jquery';
import Rx from 'rxjs/Rx';

// anti pattern
Rx.Observable.of('Hello')
	.subscribe(v => {
		Rx.Observable.of(v + ' World')
		  .subscribe( x => console.log(x))
	});
 
// use mergeMap
Rx.Observable.of('Hello')
  .mergeMap(v => {
  	return Rx.Observable.of(v + ' World');
  })
  .subscribe(x => console.log(x));


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
const inputSouce$ = Rx.Observable
											.fromEvent($('#searchInput'),'keyup')
											.map(e => e.target.value)
											.switchMap(v => {
												return Rx.Observable.fromPromise(getData(v));
											});

inputSouce$.subscribe(x => {
  myId.text(x.data.name);
  myBlog.text(x.data.blog);
  myRepos.text(x.data.public_repos);
});
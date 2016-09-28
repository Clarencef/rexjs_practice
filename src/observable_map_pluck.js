// map & pluck 

import $ from 'jquery';
import Rx from 'rxjs/Rx';

const mapSource$ = Rx.Observable.from(['John','Albert','Ben'])
					 .map( v => v.toUpperCase())
					 .map( v => 'I am ' + v);

mapSource$.subscribe( v => console.log(v));

function getData (username) {
	return $.ajax({
		url: 'https://api.github.com/users/' + username,
		dataType: 'jsonp'
	}).promise();
}

Rx.Observable
  .fromPromise(getData('Clarencef'))
  .map(user => user.data)
  .subscribe(user => {
	console.log(user);
  });


// plunk
const users = [
  {name: 'Will', age:40},
  {name: 'Mike', age:45},
  {name: 'albert', age:28}
];

const plunkSource$ = Rx.Observable.from(users)
											 .pluck('name');
plunkSource$.subscribe( x => console.log(x));






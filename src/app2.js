import $ from 'jquery';
import Rx from 'rxjs/Rx';

// observable from

const numberArr = [3,42,1,23,9];

const numberArr$ = Rx.Observable.from(numberArr);

numberArr$.subscribe(
	v => {
		console.log(v);
	},
	err => {
		console.log(err);
	},
	complete => {
		console.log('completed');
	}
);

const post = [
	{title:'one',body:'body one'},
	{title:'two',body:'body two'},
	{title:'three',body:'body three'}
]

const post$ = Rx.Observable.from(post);

post$.subscribe(
	post => {
		console.log(post);
		$('#post-list').append(
			'<li><h3>'+ 
			post.title +
			'</h3><p>' +
			post.body +
			'</p></li>')
	},
	err => {
		console.log(err);
	},
	complete => {
		console.log('completed');
	}
);

const set = new Set(['Hello', 42, {title: 'the world'}]);

const set$ = Rx.Observable.from(set);

set$.subscribe(
	v => {
		console.log(v);
	},
	err => {
		console.log(err);
	},
	complete => {
		console.log('completed');
	}
);

const map = new Map([[1,2],[4,5],[6,7]]);

const map$ = Rx.Observable.from(map);

map$.subscribe(
	v => {
		console.log(v);
	},
	err => {
		console.log(err);
	},
	complete => {
		console.log('completed');
	}
);


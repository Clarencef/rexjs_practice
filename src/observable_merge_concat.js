// merge & concat 

import $ from 'jquery';
import Rx from 'rxjs/Rx';

// merge 兩個source的動作會同時進行
Rx.Observable.of('HELLO')
						 .merge(Rx.Observable.of('friends'))
						 .subscribe(x => console.log(x));

const mapSource1$ = Rx.Observable.interval(2000).map(v => 'Merge1: ' + v);
const mapSource2$ = Rx.Observable.interval(500).map(v => 'Merge2: ' + v);
Rx.Observable.merge(mapSource1$, mapSource2$)
						 .take(25)
						 .subscribe( x => console.log(x));


// concat 先跑完第一個source在執行第二個source要做的動作
const concatSource1$ = Rx.Observable.range(0,5).map(v => 'Source1: ' + v);
const concatSource2$ = Rx.Observable.range(6,5).map(v => 'Source2: ' + v);
Rx.Observable.concat(concatSource1$, concatSource2$)
						 .subscribe( x => console.log(x));
module.exports = {
	entry: {
		app: './src/app.js',
		app2: './src/app2.js',
		app3: './src/app3.js',
		observable_promise: './src/observable_promise.js',
		observable_timer: './src/observable_timer.js',
		observable_map_pluck: './src/observable_map_pluck.js',
		observable_merge_concat: './src/observable_merge_concat.js',
		observable_mergeMap_switchMap: './src/observable_mergeMap_switchMap'
	},
	output: {
		path: './dist',
		filename:'[name].bundle.js'
	},
	module: {
		loaders: [{
			exclude: '/node_modules/',
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	}
}
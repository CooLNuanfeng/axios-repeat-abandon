const path = require('path');

module.exports = {
	entry: './index.js',
	externals: 'axios', 
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'axios-repeat-abandon.js',
		library: 'AxiosRepeatAbandon',
		libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this' 
	}
}
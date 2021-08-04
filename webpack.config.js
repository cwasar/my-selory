const HtmlWebpackPlugin = require('html-webpack-plugin'); //npm плагин и сюда бахаю его как класс

module.exports = {
	entry: ['@babel/polyfill', './src/index.js'],     // откуда берется весь жс
	output: {
		path: __dirname + '/dist',    //куда все складывать, дирнейм это кажись корневая директория
		filename: 'bundle1.js'     //имя создаваемого файла
	},
	devServer: {  // это плагин webpack-dev-server
		contentBase: __dirname + '/dist' // папка где будет запускаться сервер
	},
	plugins: [
		new HtmlWebpackPlugin({   //просто создаю новый экземпляр плагина, тип нновый класс от основного
			filename: 'index.html', //генерить этот файл
			template: './src/index.html' //берем в качестве шаблона этот файл
		})
	],
	resolve: {
		extensions: ['.js'] //говорим вебпаку что все файлы будут жс и чтобы он их все хавал
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}

}
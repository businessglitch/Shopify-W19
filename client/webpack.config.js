const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve('./src/index.js'),
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js' 
	},
	devServer: {
		proxy: {
		  	'/api/*': {
		      	target: 'http://localhost:5000',
		      	secure: false
			}
		}
	},
	resolve: {
      	extensions: ['.js', '.jsx']
    },
	module: {
		rules: [
			{
				test : /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
        		
		    {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('./src/index.html')
		})
	]
}
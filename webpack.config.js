var webpack = require("webpack");
var path = require("path");

const ENV = process.env.npm_lifecycle_event;

module.exports = {
  entry:  './src/main.js',
  devtool: '#source-map',
  output: { 
    path: __dirname+'/dist/'
    ,filename: ENV==='dev'?'scripts/xyy-sdk.js':'scripts/xyy-sdk.min.js'
    ,library: 'xyy'
    ,libraryTarget: 'umd' 
  },

  module: {
    rules: [
      {    
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        // query: {
        //  // presets: ['env', 'stage-0','react'],
        //  // plugins: ['transform-decorators-legacy']
        // }   
      },
      {
        test: /\.(css|less)$/,
        use: [

        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
          plugins: ()=>[require('autoprefixer')]
          }},  
        'less-loader'
        ]
      }

      ,{
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath:''
              ,name :'img/[name].[ext]?[hash:6]'

            }
          }
        ]
      }
      ,{
        test: /\.(md|obj|mtl)$/,
        loader : 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(" xyy-sdk v"+require('./package.json').version+"\r\n By https://github.com/dwqdaiwenqi \r\n Github: https://github.com/dwqdaiwenqi/xyy-sdk\r\n MIT Licensed.")
    ,new webpack.DefinePlugin({
      __DEV__: JSON.stringify(process.env.npm_lifecycle_event)
      ,__VERSION__: JSON.stringify(require('./package.json').version)
    })
  ]

}
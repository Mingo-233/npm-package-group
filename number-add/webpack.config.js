const TerserPlugin = require('terser-webpack-plugin');

module.exports={
  mode:'none',
  entry:{
    'number-add':'./src/index.js',
    'number-add.min':'./src/index.js'
  },
  output:{
    filename:['name'].js,
    path: __dirname + '/dist' ,
    library:'numberAdd',
    libraryTarget:'umd',
    libraryExport: 'default'
  },
  optimization:{
    minimize:true,
    minimizer:[
      new TerserPlugin({
        include:/\.min\.js$/
      })
    ]
  }
}
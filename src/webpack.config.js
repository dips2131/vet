module: {
  loaders: [
    {test: /\.(css|scss})$/, loader: 'style-loader!css-loader'},
  ]
}
resolve: {
  extensions: [".ts", ".tsx", ".js", ".jsx"]
},
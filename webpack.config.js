module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader',
        type: 'javascript/auto', // This tells webpack to treat .json files properly
      },
    ],
  }
  
module.exports = {
  paths: {
    project: './',
    styles: {
      entry: './assets/styles/main.scss',
      all: './assets/styles/**/*.s+(a|c)ss',
      dest: '../bin/styles'
    },
    scripts: {
      entry: './assets/scripts/main.js',
      all: './assets/scripts/**/*.js',
      dest: '../bin/scripts'     
    },
    images: {
      entry: './assets/images/*',
      all: './assets/images/*',
      dest: '../bin/images'
    },
    pages: {
      dest: '../bin/**/*.html'
    }
  },
  names: {
    styles: 'main.min.css',
    scripts: {
      page: 'main.bundle.js'
    }
  }
};
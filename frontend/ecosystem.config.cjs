module.exports = {
    apps: [
      {
        name: 'innov.app',
        port: '3030',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }


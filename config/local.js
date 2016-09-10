module.exports = {
  port: process.env.PORT || 1337,
  ssl: {
    environment: process.env.NODE_ENV || 'development',
    key: require('fs').readFileSync(__dirname + '/ssl/key.pem'),
    cert: require('fs').readFileSync(__dirname + '/ssl/cert.pem')
  },
  connections: {
    'default': 'skyndaPostgresqlServer',
    skyndaPostgresqlServer: {
      adapter: 'sails-postgresql',
      host: '138.68.69.121',
      user: 'deploy',
      password: 'devel',
      database: 'skynda'
    },
    disk: {
      module: 'sails-disk'
    }
  }
};

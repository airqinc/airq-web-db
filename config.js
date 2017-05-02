module.exports = {
  name: 'AirQ',
  description: 'AirQ storage server',
  domain: 'localhost',
  url: 'http://localhost',
  env: 'development',
  port: 3000,

  db1: {
    domain: 'localhost',
    name: 'db_static'
  },
  db2: {
    domain: 'localhost',
    name: 'db_clean'
  }
}
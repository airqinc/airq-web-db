module.exports = {
  name: 'AirQ',
  description: 'AirQ storage server',
  domain: 'localhost',
  url: 'http://localhost',
  env: 'development',
  port: 3000,

  dbs: {
    db1: {
      domain: 'mongodb://admin:airQ123@ds029381.mlab.com:29381/',
      name: 'db_business'
    },
    db2: {
      domain: 'mongodb://admin:airQ123@ds029381.mlab.com:29381/',
      name: 'db_resources'
    },
    db3: {
      domain: 'mongodb://admin:airQ123@ds129281.mlab.com:29281/',
      name: 'db_gendata'
    }
  }
}
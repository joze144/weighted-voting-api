module.exports = {
  environments: {
    TEST: 'test',
    STAGING: 'staging'
  },
  database: {
    'test': 'mongodb://localhost:27017/weighted_voting_db',
    'staging': process.env.API_MONGO_DB
  },
  port: process.env.API_PORT || 3051,
  version: process.env.API_VERSION || '0.0.1',
  last_endpoint_version: process.env.API_LAST_ENPOINT_VERSION || 'v1',
  domain: process.env.API_DOMAIN || 'http://localhost:3051'
}

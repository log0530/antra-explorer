
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'https://tx.motionproject.org',
    'port': '443',
    'prefix': '/api',
    'timeout': '5s'
  },
  'listen': {
    'host': 'http://localhost',
    'port': '3001',
  },
  'coinGecko': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'name': 'bulwark'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'blockex',
    'user': 'blockexuser',
    'pass': 'Explorer!1'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '52541',
    'user': 'bulwarkrpc',
    'pass': 'someverysafepassword',
    'timeout': 8000, // 8 seconds
  }
};

module.exports = config;
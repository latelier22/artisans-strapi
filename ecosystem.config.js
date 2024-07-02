module.exports = {
    apps : [{
      script: 'yarn run dev',
      watch: '.'
    }, {
      script: './service-worker/',
      watch: ['./service-worker']
    }],
  
  };
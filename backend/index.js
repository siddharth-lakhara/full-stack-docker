const Hapi = require('hapi');
const Routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: '0.0.0.0',
  });
  server.route(Routes);

  await server.register({
    plugin: require('@hapi/good'),
    options: {
      reporters: {
        myConsoleReporter: [
          {
            module: '@hapi/good-console'
          },
          'stdout'
        ]
      }
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();

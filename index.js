const Docker = require('dockerode');
const docker = new Docker();

const containerRunConfig = {
  image: 'example.com/quick-run',
  command: 'echo 123'
};

docker.createContainer(containerRunConfig)
  .then(container => console.info('Container id:', container.id))
  .catch(e => {
    console.error(e && e.stack || e);
    process.exit(1);
  });

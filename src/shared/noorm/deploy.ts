import { deploy } from 'jv-noorm';

(async () => {
  await deploy();
  process.exit(0);
})();
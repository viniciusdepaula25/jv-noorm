import { generate } from 'jv-noorm';

(async () => {
  await generate();
  process.exit(0);
})();
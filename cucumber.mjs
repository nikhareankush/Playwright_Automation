export default {
  paths: ['src/features/**/*.feature'],
  loader: ['ts-node/esm'],
  import: ['src/steps/**/*.ts', 'src/support/**/*.ts'],
  format: ['progress'],
  strict: true,
};

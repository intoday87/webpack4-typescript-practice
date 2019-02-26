// @ts-ignore
require.ensure(['./a'], function(require) {
  require('./a').print()
}, 'a');
export default {}

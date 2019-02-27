export default {
  callChuck: async () => {
    // @ts-ignore
    require.ensure(['./a'], function (require) {
      require('./a').print()
    }, 'another~a');
  }
}

module.exports = function (options) {
  return function (req, res, next) {
    console.log('Middleware from other file');
    console.log(options);
    next()
  }
}
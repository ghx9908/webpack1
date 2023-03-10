
function normalizePath(path) {
  //保证所有的路径路径分隔符全部是/,而非\
  return path.replace(/\\/g, '/');
}
exports.normalizePath = normalizePath;

const knowJsSrcRE = /\.(js|vue)($|\?)/;
const isJSRequest = (url) => {
  return knowJsSrcRE.test(url);
}
exports.isJSRequest = isJSRequest;
var qr = require("qr-image");
module.exports = {
  // api返回成功
  apiSuccess(data = "", msg = "ok", code = 200) {
    this.status = 200;
    this.body = { msg, data };
  },
  // api返回失败
  apiFail(data = "", msg = "fail", code = 400) {
    this.body = { msg, data };
    this.status = code;
  },
};

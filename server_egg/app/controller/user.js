"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  // 注册
  async reg() {
    const { ctx, app } = this;
    //  参数验证
    const { username, password, confirmPassword } = ctx.request.body;
    // 验证用户是否已经存在
    let user = await app.model.User.findOne({
      while: {
        username,
      },
    });
    // user 存在
    if (user) {
      return ctx.throw(400, "用户名已存在");
    }
    // 创建用户
    user = await app.model.User.create({
      username,
      password,
    });

    if (!user) {
      return ctx.throw(400, "创建用户失败");
    }

    ctx.apiSuccess(user);
  }
}

module.exports = UserController;

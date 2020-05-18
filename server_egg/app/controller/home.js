"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.throw(500, "cuowu");
    ctx.body = "hi, egg11";
  }
}

module.exports = HomeController;

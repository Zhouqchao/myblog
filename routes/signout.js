var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

//GET /signout 登出页
router.get('/',checkLogin,function (req,res,next) {
	// res.send(req.flash());
      //清空session中用户信息
      req.session.user = null;
      req.flash('success','退出成功');
      //跳转到主页
      res.redirect('/posts'); 
});


module.exports = router;
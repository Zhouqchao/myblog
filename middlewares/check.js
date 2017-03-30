module.exports = {
	//用户未登录
	checkLogin: function (req,res,next){
		if(!req.session.user){
			req.flash('error','未登录');
			return res.redirect('/signin');
		}

		next();
	},
	//用户已登录
	checkNotLogin: function (req,res,next){
		if(req.session.user){
			req.flash('error','已登录');
			return res.redirect('back');
		}

		next();
	}
};
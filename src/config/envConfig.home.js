var _defaultApi = {
    debug: {
        couponList: 'http://192.168.132.44:8081/goods/goodsCoupon/couponList',
        couponDetail: 'http://192.168.132.44:8081/goods/couponDetail',
        activeGoodsDetail: 'http://192.168.132.44:8081/goods/activeGoodsDetail',
        categoryList: 'http://192.168.132.44:8081/goods/categoryList',
        checkLogin: 'http://192.168.132.44:8081/goods/user/checkLogin',
        login: 'http://192.168.132.44:8081/goods/user/login',
        getMyOrder: 'http://192.168.132.44:8081/goods/user/order/myorder',
        submitOrder: 'http://192.168.132.44:8081/goods/user/order/submitOrderNo',
        getUserInfo: 'http://192.168.132.44:8081/goods/user/getUserInfo',
        getAppId: 'http://192.168.132.44:8081/goods/appid',
        pointDetail: 'http://192.168.132.44:8081/goods/pointList',
        exchangeList: 'http://192.168.132.44:8081/goods/exchangeList',
        exchangeSubmit: 'http://192.168.132.44:8081/goods/exchangeSubmit',
        setAlipay: 'http://192.168.132.44:8081/goods/setAlipay',
	    getActiveGoods: 'http://192.168.132.44:8081/goods/goodsCoupon/activeGoods',
        getPartnerInfo: 'http://192.168.132.44:8081/goods/getPartnerInfo',
        partner: 'http://192.168.132.44:8081/goods/uc/partner/home',
        drawList: 'http://192.168.132.44:8081/goods/uc/point/drawing/list',
        jsInfo: 'api/weixin/js/info/item?',
        submitDraw: 'http://192.168.132.44:8081/goods/uc/point/drawing/submit'
    },
    // product: {
    //     mainIndex: '/api/mainIndex',
    //     actList: '/api/actList',
    //     activityDetail: '/api/actDetail',
    //     croomList: '/api/croomList',
    //     courseList: '/api/courseList',
    //     sysMsgList: '/api/sysMsgList',
    //     payResultMes: '/api/payResultMsg',
    //     msgList: '/api/mesList',
    //     couponList: '/api/couponList',
    //     userCenter: '/api/userCenter',
    //     lessonDetail: '/api/lessonDetail',
    //     croomDetail: '/api/croomDetail',
    //     teacherList: '/api/teacherList',
    //     teacherDetail:'/api/teacherDetail',
    //     reg: '/api/reg',
    //     checkcode: '/api/checkcode',
    //     setPwd: '/api/setPwd',
    //     mesList: '/api/mesList',
    //     order_Detail: 'api/orderDetail',
    //     add_order: '/api/addOrder',
    //     free_date: '/api/freeDate',
    //     order_submit: '/api/submit'
    // },
    product: {
        mainIndex: '/piano/piano/Index/Piano/get_parm',
        actList: '/piano/piano/Index/Piano/get_parm',
        activityDetail: '/piano/piano/Index/Piano/get_parm',
        croomList: '/piano/piano/Index/Piano/get_parm',
        courseList: '/piano/piano/Index/Piano/get_parm',
        sysMsgList: '/piano/piano/Index/Piano/get_parm',
        payResultMes: '/piano/piano/Index/Piano/get_parm',
        msgList: '/piano/piano/Index/Piano/get_parm',
        couponList: '/piano/piano/Index/Piano/get_parm',
        userCenter: '/piano/piano/Index/Piano/get_parm',
        lessonDetail: '/piano/piano/Index/Piano/get_parm',
        croomDetail: '/piano/piano/Index/Piano/get_parm',
        teacherList: '/piano/piano/Index/Piano/get_parm',
        teacherDetail:'/piano/piano/Index/Piano/get_parm',
        reg:'/piano/piano/Index/Piano/get_parm',
        checkcode: '/piano/piano/Index/Piano/get_parm',
        setPwd: '/piano/piano/Index/Piano/get_parm',
        mesList: '/piano/piano/Index/Piano/get_parm',
        order_Detail: '/piano/piano/Index/Piano/get_parm',
        add_order: '/piano/piano/Index/Piano/get_parm',
        free_date: '/piano/piano/Index/Piano/free_date',
        order_submit: '/piano/piano/Index/Piano/add_order',
    }
    // product: {
    //     couponList: 'http://txdy.tunnel.qydev.com/tr2/api/item/goodsCoupon/couponList',//优惠券商品列表
    //     couponDetail: 'http://txdy.tunnel.qydev.com/tr2/api/item/goodsCoupon/couponDetail',//商品详情
    //     categoryList: 'http://txdy.tunnel.qydev.com/tr2/api/item/goodsCoupon/catogry/all',//分类列表
    //     checkLogin: 'http://txdy.tunnel.qydev.com/tr2/api/item/user/checkLogin',//校验是否登录
    //     login: 'http://txdy.tunnel.qydev.com/tr2/api/item/user/login',//登录
    //     getMyOrder: 'http://txdy.tunnel.qydev.com/tr2/api/item/user/order/myorder',//我的订单
    //     submitOrder: 'http://txdy.tunnel.qydev.com/tr2/api/item/user/order/submitOrderNo',//提交订单
    //     getUserInfo: 'http://txdy.tunnel.qydev.com/tr2/api/item/user/getUserInfo',//获取用户信息
    //     getAppId: 'http://txdy.tunnel.qydev.com/tr2/api/item/weixin/info',//获取微信appId
    //     pointDetail: 'http://txdy.tunnel.qydev.com/tr2/api/item/goods/pointList',//积分明细
    //     exchangeList: 'http://txdy.tunnel.qydev.com/tr2/api/item/goods/exchangeList',//兑换明细
    //     exchangeSubmit: 'http://txdy.tunnel.qydev.com/tr2/api/item/goods/exchangeSubmit',//兑换积分
    //     setAlipay: 'http://txdy.tunnel.qydev.com/tr2/api/item/goods/setAlipay',//添加、修改支付宝账号
    //     getActiveGoods: 'http://txdy.tunnel.qydev.com/tr2/api/item/goods/goodsCoupon/activeGoods'//活动商品列表   
    // }
}
module.exports = {
    getApi: function(env,name){
        var type = env == 'product' ? env : 'debug'
        return _defaultApi[type][name]
    }
}
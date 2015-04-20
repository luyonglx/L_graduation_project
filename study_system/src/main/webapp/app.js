Ext.onReady(function(){
    //测试环境的搭建
   // Ext.Msg.alert("温馨提示","环境搭建成功啦！");

    //开启悬浮提示功能
    Ext.QuickTips.init();
    //开启动态加载
    Ext.Loader.setConfig({
        enabled: true
    });
    //创建应用程序的实例
    Ext.application({
        //设定命名空间
        name: 'E-learning',
        //指定配置选项，设置相应的路径
        appFolder: 'app',
        //加载控制器
        controllers:['MainController'],
        //自动加载和实例化Viewport文件
        autoCreateViewport: true
    });
});

/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-5
 * Time: 下午2:45
 * To change this template use File | Settings | File Templates.
 */
Ext.define('StudyResource.controller.MainController',{
    extend:'Ext.app.Controller',
    views:['Navigation','Navigation-tree','MainTab'],
    stores:['MenuStore'],
    init:function()
    {
        this.control({
            'navigationTree':{
                itemclick:this.addTabToMainTabPanel
            }
        });
    },
    //相应点菜单树，单机节点时在主区域出现相应的管理页面
    addTabToMainTabPanel:function(tabView,treeItem){
       var mainTab=Ext.getCmp('mainTab');
       // console.log(mainTab)
       // console.log(treeItem.raw.name);
        var tabName=treeItem.raw.name;
        var tab=Ext.getCmp(tabName);
        if(tab)
        {
            mainTab.setActiveTab(tab);
            return;
        }
        tab=Ext.widget(tabName);
        mainTab.add(tab);
        mainTab.setActiveTab(tab);
    }
})
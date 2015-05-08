/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-5
 * Time: 下午2:45
 * To change this template use File | Settings | File Templates.
 */
Ext.define('StuResource.controller.MainController',{
    extend:'Ext.app.Controller',
    views:['Navigation','MainTab',],
    stores:['ResourceMenuTreeStore']
})
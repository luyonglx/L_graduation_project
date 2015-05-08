/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-5-8
 * Time: 下午5:21
 * To change this template use File | Settings | File Templates.
 */
Ext.define('StuResource.view.ItemFileViewer',{
    extend:'Ext.panel.Panel',
    alias:'widget.itemFileViewer',
    name:'itemFileViewer',
    closable:true,
    title:'在线阅读',
    html:' <iframe scrolling="false" frameborder="0" width="100%" height="100%" src="'+'docViewer.html'+'"> </iframe>'

});
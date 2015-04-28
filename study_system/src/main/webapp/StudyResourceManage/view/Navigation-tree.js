/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.view.Navigation-tree',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.navigationTree',
    name:'navigationTree',
    width :263,
    collapsed : true,
    collapsible : true,
    border:false,
    split : true,
    rootVisible:false,
    title : '后台管理菜单',
    store:'MenuStore'

});
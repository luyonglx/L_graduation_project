/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.view.MainTab', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainTab',
    id:'mainTab',
    width: '100%',
    border: false,
    items:[
//        {
//            title:'欢迎',
//            html:'<h1>欢迎使用</h1>'
//        },
        {
            xtype:'itemFileManageTab'
        }
    ]
});
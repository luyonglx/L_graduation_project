/**
 * Created by LUYONG on 2015/4/24.
 */
var itemFileStore=Ext.create('StuResource.store.ItemFileStore');
itemFileStore.load();
Ext.define('StuResource.view.ItemFileContentTab',{
    extend:'Ext.panel.Panel',
    alias:'widget.itemFileContentTab',
    requires:['StuResource.store.ItemFileStore'],
    frame:true,
    width:'100%',
    title:'资料预览',
    layout:'column',
    autoScroll:true,
    //html:'<h3>资料</h3>'
//    items:[
//        {
//          xtype:'itemFileView'
//        },
//        {
//            xtype:'itemFileView'
//        },
//        {
//            xtype:'itemFileView'
//        },
//        {
//            xtype:'itemFileView'
//        },
//        {
//            xtype:'itemFileView'
//        }
//
//    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'ItemFileStore',   // GridPanel中使用的数据
        pageSize:8,
        dock: 'bottom',
        displayInfo: true
    }]

});
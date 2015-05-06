/**
 * Created by LUYONG on 2015/4/24.
 */
Ext.define('StuResource.view.ItemFileContentTab',{
    extend:'Ext.panel.Panel',
    alias:'widget.itemFileContentTab',
    frame:true,
    width:'100%',
    title:'资料预览',
    height:'100%',
    //html:'<h3>资料</h3>'
    items:[
        {
          xtype:'itemFileView'

        }
    ]
});
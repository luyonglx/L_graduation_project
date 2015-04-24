/**
 * Created by LUYONG on 2015/4/24.
 */
Ext.define('StuResource.view.ItemFileView',{
    extend:'Ext.panel.Panel',
    alias:'widget.itemFileView',
    width:280,
    height:220,
    margin:'10',
    border:false,
    frame:true,
    layout:'hbox',
    items:[
        {
            flex:1.5,
            //height:'100%',
            xtype:'box',
            layout:'fit',
            autoEl: {
                tag: 'img',    //指定为img标签
                src: 'resource/fileImages/book.png'    //指定url路径
            }

        },
        {
            flex:1,
            frame:true,
            height:'100%',
            html:'简介：'
        }
    ]

});
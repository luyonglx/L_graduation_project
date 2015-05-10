/**
 * Created by LUYONG on 2015/4/24.
 */
Ext.define('StuResource.view.ItemFileView',{
    extend:'Ext.form.Panel',
    alias:'widget.itemFileView',
    width:310,
    height:230,
    margin:'5',
    border:false,
    frame:true,
    layout:'hbox',
    items:[
        //资料id
//        {
//            xtype:'textfield',
//            name:'itemFileId',
//            value:'1',
//            hidden:true
//        },
//        {
//            xtype:'textfield',
//            name:'itemFilePath',
//            value:'yuwen.swf',
//            hidden:true
//        },
//        {
//            flex:1.2,
//            //height:'100%',
//            name:'itemFileImage',
//            xtype:'box',
//            layout:'fit',
//            autoEl: {
//                tag: 'img',    //指定为img标签
//                src: 'resource/fileImages/yuwen.jpg'    //指定url路径
//            }
//        },
//        {
//            flex:1,
//            frame:true,
//            name:'itemFileDesc',
//            height:'100%',
//            html:'简介：这是中国历史上的瑰宝，得此书者得天下',
//            bbar:[
//                {
//                    text:'阅读',
//                    iconCls:'read-icon',
//                    handler:function(btn){
//                        var itemFilePath=btn.up('form').down('textfield[name=itemFilePath]');
//                        var mainTab=Ext.getCmp('mainTab');
//                        var htmlstr= '<iframe scrolling="false" frameborder="0" width="100%" height="100%" src="'+
//                        'docViewer.html?'+itemFilePath.getValue()+'"> </iframe>';
//                        var itemFileView=Ext.widget('itemFileViewer');
//                        itemFileView.html=htmlstr;
//                        mainTab.add(itemFileView);
//                        mainTab.setActiveTab(itemFileView);
//                    }
//                },
//                {
//                    text:'下载',
//                    iconCls:'download-icon',
//                    handler:function(btn){
//                        var itemFileId=btn.up('form').down('textfield[name=itemFileId]');
//                        var form = Ext.create('Ext.form.Panel');
//                        form.getForm().standardSubmit = true;
//                        form.submit({
//                            url : 'itemFile/download.do',
//                            method : 'GET',
//                            params:{
//                                itemFileId:itemFileId.getValue()
//                            }
//                        });
//                    }
//                }
//            ]
//
//        }
    ]

});
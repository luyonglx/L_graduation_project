/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-5
 * Time: 下午2:45
 * To change this template use File | Settings | File Templates.
 */
Ext.define('StuResource.controller.ItemFileController',{
    extend:'Ext.app.Controller',
    views:['ItemFileContentTab','ItemFileView','ItemFileViewer'],
    stores:['ItemFileStore'],
    models:['ItemFileModel'],
    init:function(){
        this.control({
            'itemFileContentTab':{
                beforerender:this.inititemFileContentTab
            }
        });
    },
    inititemFileContentTab:function(view){
        var itemFileStore=this.getStore('ItemFileStore');
        //itemFileStore.load();
        for(var i=0;i<itemFileStore.getCount();i++)
        {
            console.log(i);
            var itemFileView=Ext.widget('itemFileView');
            var record=itemFileStore.getAt(i);
            //设置id
            var itemFileId=record.get('itemFileId');
            var itemFileIdField=new Ext.form.field.Text({
                xtype:'textfield',
                name:'itemFileId',
                value:itemFileId,
                hidden:true
            });
            //设置封面
            console.log(record.get('itemfileimg'));
            var itemFileImgField=new Ext.Component({
                flex:1.2,
                //height:'100%',
                name:'itemFileImage',
                xtype:'box',
                layout:'fit',
                autoEl: {
                    tag: 'img',    //指定为img标签
                    src: 'resource/fileImages/'+record.get('itemfileimg')   //指定url路径
                }
            });
            //简介
            var itemFileDesc=new Ext.panel.Panel(
                {
                    flex:1,
                    frame:true,
                    name:'itemFileDesc',
                    height:'100%',
                    html:'简介：'+record.get('itemFileDesc'),
                    bbar:[
                        {
                            text:'阅读',
                            iconCls:'read-icon',
                            handler:function(btn){
                                var itemFilePath=btn.up('form').down('textfield[name=itemFilePath]');
                                var mainTab=Ext.getCmp('mainTab');
                                var htmlstr= '<iframe scrolling="false" frameborder="0" width="100%" height="100%" src="'+
                                    'docViewer.html?'+itemFilePath.getValue()+'"> </iframe>';
                                var itemFileView=Ext.widget('itemFileViewer');
                                itemFileView.html=htmlstr;
                                mainTab.add(itemFileView);
                                mainTab.setActiveTab(itemFileView);
                            }
                        },
                        {
                            text:'下载',
                            iconCls:'download-icon',
                            handler:function(btn){
                                var itemFileId=btn.up('form').down('textfield[name=itemFileId]');
                                var form = Ext.create('Ext.form.Panel');
                                form.getForm().standardSubmit = true;
                                form.submit({
                                    url : 'itemFile/download.do',
                                    method : 'GET',
                                    params:{
                                        itemFileId:itemFileId.getValue()
                                    }
                                });
                            }
                        }
                    ]
                });
            //可阅读的swf文件名
            var fileSwf=new Ext.form.field.Text(
                {
                    xtype:'textfield',
                    name:'itemFilePath',
                    value:record.get('itemFileSwf'),
                    hidden:true
                }
            );
            itemFileView.add(itemFileIdField);
            itemFileView.add(itemFileImgField);
            itemFileView.add(itemFileDesc);
            itemFileView.add(fileSwf);
            view.add(itemFileView);
        }
    }
})
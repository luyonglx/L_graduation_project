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
    stores:['ItemFileStore','SubjectStore','SectionStore','GradeStore'],
    models:['ItemFileModel'],
    init:function(){
        this.control({
            'itemFileContentTab':{
                beforerender:function(tab){
                    var store=this.getStore('ItemFileStore');
                    var view=tab.down('panel[name=itemFilesPanel]');
                    this.initItemFileContentTab(view,store);

                }
            },
            'itemFileContentTab > form button[text=查询]':{
                click:this.onQueryBtnClick
            }
        });
    },
    onQueryBtnClick:function(btn){
        var form=btn.up('form');
        var view=Ext.getCmp('itemFilesPanel');
       console.log(view)
        var store=this.getStore('ItemFileStore');
       var me=this;
        store.getProxy().extraParams=form.getValues();
        store.loadPage(1, {
            callback : function(records, operation, success) {
                if (!success) {
                    Ext.Msg.alert('运行错误', operation.request.proxy.reader);
                }
                me.initItemFileContentTab(view,store);
            }
        });
       // this.initItemFileContentTab(view,store);
    },

    initItemFileContentTab:function(view,itemFileStore){

        view.removeAll();
        var me=this;
        var subjectStore=me.getStore('SubjectStore');
        var gradeStore=me.getStore('GradeStore');
        var sectionStore=me.getStore('SectionStore');
        //itemFileStore.load();
        for(var i=0;i<itemFileStore.getCount();i++)
        {

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
            var subjectRecord=subjectStore.findRecord('subjectId',record.get('subjectId'));
            var subjectName=subjectRecord.get('subjectName');

            var sectionRecord=sectionStore.findRecord('sectionId',record.get('sectionId'));
            var sectionName=sectionRecord.get('sectionName');

            var gradeRecord=gradeStore.findRecord('gradeId',record.get('gradeId'));
            var gradeName=gradeRecord.get('gradeName');

            var itemFileDescStr='<br>文件名:'+record.get('itemFileName')+
                                '<br>科目:'+subjectName+
                                '<br>资料类型:'+sectionName+
                                '<br>年级:'+gradeName+
                                '<br>相关描述:'+record.get('itemFileDesc');
            var itemFileDesc=new Ext.panel.Panel(
                {
                    flex:1,
                    frame:true,
                    name:'itemFileDesc',
                    height:'100%',
                    html:'简介'+itemFileDescStr,
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
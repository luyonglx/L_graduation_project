Ext.define('StudyResource.view.AddItemFileWin',{
    extend:'Ext.window.Window',
    alias:'widget.addItemFileWin',
    id:'addItemFileWin',
    name:'addItemFileWin',
    width:420,
    height:380,
    layout:'fit',
    items:[
        {
            xtype:'form',
            layout:'vbox',
            autoScroll:true,
            frame:true,
            bbar:[
                {
                    text:'确定',
                    formBind:true,
                    iconCls:'button-ok',
                    handler: function(btn) {
                        var win=btn.up('form').up('window');
                        var form = btn.up('form').getForm();
                        if(form.isValid()){ // form 验证
                            form.submit({ // 提交
                                url: 'itemFile/add.do',
                                waitMsg: '正在提交...',
                                success: function(fp, o) {
                                    Ext.Msg.alert('上传成功', '您的文件成功的保存服务器上...');
                                    win.close();

                                }
                            });
                        }
                    }
                },
                {
                    text:'重置',
                    iconCls:'button-reset',
                    handler:function(btn){
                        btn.up('form').getForm().reset();
                    }
                }
            ],
            defaults:{

                labelAlign:'right',
                margin:'6'
            },
            items:[
                {
                    xtype:'textfield',
                    fieldLabel:'资源名称',
                    name:'itemFileName'

                },
                {
                    xtype:'combobox',
                    name:'subjectId',
                    editable:false,

                    fieldLabel:'科目',
                    store : 'SubjectStore',
                    valueField:'subjectId',
                    displayField:'subjectName'
                },
                {
                    xtype:'combobox',
                    name:'gradeId',
                    fieldLabel:'年级',
                    editable:false,
                    store : 'GradeStore',
                    valueField:'gradeId',
                    displayField:'gradeName'

                },
                {
                    xtype:'combobox',
                    name:'sectionId',
                    editable:false,
                    fieldLabel:'资料类型',
                    store : 'SectionStore',
                    displayField:'sectionName',
                    valueField:'sectionId'
                },
                {
                    xtype:'textfield',
                    fieldLabel:'资料来源',
                    name:'resourceFrom'
                },
                {
                    xtype:'textfield',
                    fieldLabel:'作者',
                    name:'author'
                },
                {
                    xtype:'textfield',
                    fieldLabel:'下载金币',
                    name:'downloadPrice'
                },
               
                {
                    xtype:'filefield',
                    fieldLabel:'文件',
                    name:'uploadFile',
                    width:300,
                    buttonText: '选择文件'
                } 
                ,{
                    xtype:'textarea',
                    fieldLabel:'简介',
                    name:'itemFileDesc'
                },




            ]

        }


    ]
});
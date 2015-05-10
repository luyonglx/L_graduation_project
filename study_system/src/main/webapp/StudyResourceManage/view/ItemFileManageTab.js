var gradeStore=Ext.create('StudyResource.store.GradeStore');
var subjectStore=Ext.create('StudyResource.store.SubjectStore');
var sectionStore=Ext.create('StudyResource.store.SectionStore');
subjectStore.load();
Ext.define('StudyResource.view.ItemFileManageTab',{
    extend:'Ext.panel.Panel',
    alias:'widget.itemFileManageTab',
    id:'itemFileManageTab',
    width:'100%',
    layout:'vbox',
    closable:true,
    title:'资料管理',
    border:false,
    items:[
        {
            xtype:'form',
            frame:true,
            height:90,
            width:'100%',
            padding:'30 0 30 0',
            defaults:{
                labelAlign:'right',
                width:'210',
                displayField:'name',
                valueField:'value',
                editable:false
            },
            layout:'hbox',
            items:[
                {
                    xtype:'textfield',
                    name:'itemFileName',
                    fieldLabel:'资料名',
                    editable:true
                },
                {
                    xtype:'combobox',
                    name:'sectionId',
                    fieldLabel:'资料类型',
                    editable:false,
                    store : 'SectionStore',
                    displayField:'sectionName',
                    valueField:'sectionId'
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
                    store : 'GradeStore',
                    editable:false,
                    valueField:'gradeId',
                    displayField:'gradeName'

                },
                {
                    xtype:'button',
                    margin:'0 0 0 20',
                    text:'查询',
                    iconCls:'search-icon'
                }
            ]

        },
        // =======表格部分start
        {
            xtype: 'grid',
            width: '100%',
            flex: 8,
            columnLines: true,
            selType: 'checkboxmodel',

            store: 'ItemFileManageStore',
            // border: false,
            tbar: [
                {
                    text: '新增',
                    iconCls: 'add-icon'
                },
                {
                    text: '删除',
                    iconCls: 'delete-icon'
                },
                {
                    text: '刷新',
                    iconCls: 'refresh',
                    handler: function (btn) {
                        btn.up('grid').getStore().reload();
                    }
                }
            ],
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 2 //设置单击单元格编辑
                })
            ],
            defaults: {
            editor: new Ext.form.TextField()

            },
            columns:[
                {
                    header : '资源编号',
                    dataIndex : 'itemFileId',
                    flex :1

                },
                {
                    header : '资源名称',
                    dataIndex : 'itemFileName',
                    flex :1,
                    editor:new Ext.form.TextField()
                },
                {
                    header : '所属科目',
                    dataIndex : 'subjectId',
                    editor:new Ext.form.field.ComboBox({
                        store:subjectStore,
                        valueField:'subjectId',
                        displayField:'subjectName',
                        editable:false
                    }),
                    renderer:function(val){
                        var record=subjectStore.findRecord('subjectId',val);
                        if(record)
                            return record.get('subjectName')
                        else
                            return '';
                    },
                    flex : 1
                },
                {
                    header : '年级类编号',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'gradeId',
                    editor:new Ext.form.field.ComboBox({
                        store:gradeStore,
                        valueField:'gradeId',
                        displayField:'gradeName',
                        editable:false
                    }),
                    renderer:function(val){
                        var record=gradeStore.findRecord('gradeId',val);
                        if(record)
                            return record.get('gradeName')
                        else
                            return '';
                    },
                    flex : 1
                },
                {
                    header : '对应文件名编号',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'fileId',
                    flex : 1
                },
                {
                    header : '查看次数',

                    dataIndex : 'viewCount',
                    flex :1
                },
                {
                    header : '资料类型',

                    dataIndex : 'sectionId',
                    editor:new Ext.form.field.ComboBox({
                        store:sectionStore,
                        valueField:'sectionId',
                        displayField:'sectionName',
                        editable:false
                    }),
                    renderer:function(val){
                        var record=sectionStore.findRecord('sectionId',val);
                        if(record)
                            return record.get('sectionName')
                        else
                            return '';
                    },
                    flex :1
                },
                {
                    header : '等级评分',

                    dataIndex : 'evaluate',
                    flex : 1
                },
                {
                    header : '资源来源',
                    dataIndex : 'resourceFrom',
                    editor:new Ext.form.TextField(),
                    flex : 1
                },
                {
                    header : '作者',
                    dataIndex : 'author',
                    editor:new Ext.form.TextField(),
                    flex : 1
                },
                {
                    header : '下载金币',
                    dataIndex : 'downloadPrice',
                    editor:new Ext.form.TextField(),
                    flex : 1
                },
                {
                    header : '收录日期',
                    dataIndex : 'enteringDate',
                    renderer : function(val) {
                        var d = new Date(val);
                        return Ext.util.Format.date(d, 'Y-m-d');
                    },
                    editor:new Ext.form.field.Date({
                        editable:false,
                        format:'Y-m-d'
                    }),
                    flex : 1

                }
//                {
//                    header : '板块',
//                    dataIndex : 'sectionId',
//                    editor:new Ext.form.TextField(),
//                    flex : 1
//                }
//                ,{
//
//                    header:'详细信息',
//                    renderer:function(){
//                        return "<a href='#'>详情</a>"
//                    }
//                }
            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'ItemFileManageStore',   // GridPanel中使用的数据
                pageSize:25,
                dock: 'bottom',
                displayInfo: true
            }]

        } // =======表格部分end
    ]
});
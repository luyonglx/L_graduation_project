
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
                    name:'itemFileType',
                    fieldLabel:'资料类型',
                    value:'0',
                    store : Ext.create('Ext.data.ArrayStore', {
                        fields : [ 'name', 'value' ],
                        data : [
                            ["全部",'0'],
                            [ "教科书", "1" ],
                            [ "辅导书", "2" ],
                            ["试卷","3"],
                            ["资料","4"]
                        ]
                    })
                },
                {
                    xtype:'combobox',
                    name:'subject',
                    value:'0',
                    fieldLabel:'科目',
                    store : Ext.create('Ext.data.ArrayStore', {
                        fields : [ 'name', 'value' ],
                        data : [
                            ["全部",'0'],
                            [ "语文", "1" ],
                            [ "数学", "2" ],
                            ["英语","3"],
                            ["理科综合","4"],
                            ["文科综合","4"]
                        ]
                    })
                },
                {
                    xtype:'combobox',
                    name:'grade',
                    fieldLabel:'年级',
                    value:'0',
                    store : Ext.create('Ext.data.ArrayStore', {
                        fields : [ 'name', 'value' ],
                        data : [
                            ["全部",'0'],
                            [ "一年级", "1" ],
                            [ "二年级", "2" ],
                            ["三年级","3"]

                        ]
                    })
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
                    header : '科目类编号',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'subjectId',
                    flex : 1
                },
                {
                    header : '年级类编号',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'gradeId',
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
                    header : '等级评分',

                    dataIndex : 'evaluate',
                    flex : 1
                },
                {
                    header : '资源来源',
                    dataIndex : 'from',
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
                    header : '相关文档',
                    dataIndex : 'relateDocumentId',
                    editor:new Ext.form.TextField(),
                    flex :1
                },
                {
                    header : '下载金币',
                    dataIndex : 'downloadGold',
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

                },
                {
                    header : '板块',
                    dataIndex : 'sectionId',
                    editor:new Ext.form.TextField(),
                    flex : 1
                },{

                    header:'详细信息',
                    renderer:function(){
                        return "<a href='#'>详情</a>"
                    }
                }
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
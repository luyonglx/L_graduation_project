/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.view.ExamManageTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.examManageTab',
    id: 'examManageTab',
    width: '100%',
    layout: 'vbox',
    closable: true,
    title: '试卷管理',
    border: false,
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
                    name:'examPaperId' ,
                    fieldLabel:'试卷号'
                },
                {
                    xtype:'textfield',
                    name:'examPaperName',
                    fieldLabel:'试卷名'
                },
                {
                    xtype:'textfield',
                    name:'subjectId',
                    fieldLabel:'所属科目'
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
            store: 'ExamStore',
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
                    header : '试卷编号',
                    dataIndex : 'examPaperId',
                    flex :1

                },
                {
                    header : '所属科目编号',
                    dataIndex : 'subjectId',
                    flex :1,
                    editor:new Ext.form.TextField()
                },
                {
                    header : '命题人',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'creator',
                    flex : 1
                },
                {
                    header : '价值率',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'valueRate',
                    flex : 1
                },
                {
                    header : '被考次数',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'examedCount',
                    flex : 1
                },
                {
                    header : '创建时间',
                    dataIndex : 'CreateTime',
                    renderer : function(val) {
                        var d = new Date(val);
                        return Ext.util.Format.date(d, 'Y-m-d');
                    },
                    editor:new Ext.form.field.Date({
                        editable:false,
                        format:'Y-m-d'
                    }),
                    flex :1.5
                },
                {
                    header : '试卷名',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'examPaperName',
                    flex : 1.5
                },
                {
                    header : '限制时间（单位:小时）',
                    dataIndex : 'limitTime',
                    editor:new Ext.form.TextField(),
                    flex : 1.6
                }
            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'ExamStore',   // GridPanel中使用的数据
                pageSize:25,
                dock: 'bottom',
                displayInfo: true
            }]

        } // =======表格部分end
    ]
});
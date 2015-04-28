/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.view.QuestionManageTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.questionManageTab',
    id: 'questionManageTab',
    width: '100%',
    layout: 'vbox',
    closable: true,
    title: '题目管理',
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
                    name:'questionId' ,
                    fieldLabel:'试题编号'
                },
                {
                    xtype:'textfield',
                    name:'subjectId',
                    fieldLabel:'所属科目'
                },
                {
                    xtype:'textfield',
                    name:'difficulty',
                    fieldLabel:'难度'
                },
                {
                    xtype:'textfield',
                    name:'questionType',
                    fieldLabel:'题目类型'
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
           // store: 'AnswerSheetStore',
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
                    header : '试题号',
                    dataIndex : 'answerSheetId',
                    flex :1
                },
                {
                    header : '用户编号',
                    dataIndex : 'userId',
                    flex :1,
                    editor:new Ext.form.TextField()
                },
                {
                    header : '所属试卷号',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'examPaperId',
                    flex : 1
                },
                {
                    header : '答案串号',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'answerIdsStr',
                    flex : 1
                },
                {
                    header : '考试时间',
                    renderer : function(val) {
                        var d = new Date(val);
                        return Ext.util.Format.date(d, 'Y-m-d');
                    },
                    editor:new Ext.form.field.Date({
                        editable:false,
                        format:'Y-m-d'
                    }),
                    dataIndex : 'examTime',
                    flex : 1
                }
            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
               // store: 'AnswerSheetStore',   // GridPanel中使用的数据
                pageSize:25,
                dock: 'bottom',
                displayInfo: true
            }]

        } // =======表格部分end
    ]
});
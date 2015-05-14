/**
 * Created by OoWoodOne on 2015/5/14.
 */
Ext.define('E-learning.view.ExamPaperGrid', {
    extend: 'Ext.grid.Panel',

    width: '100%',
    alias:'widget.examPaperGrid',
    flex: 8,
    columnLines: true,
    //selType: 'checkboxmodel',
    store: 'ExamStore',
    tbar: [
        {
            text: '选择并进入考试',
            iconCls: 'enter-icon'
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

        },
        {
            header : '命题人',

            dataIndex : 'creator',
            flex : 1
        },
        {
            header : '价值率',

            dataIndex : 'valueRate',
            flex : 1
        },
        {
            header : '被考次数',

            dataIndex : 'examedCount',
            flex : 1
        },
        {
            header : '创建时间',
            dataIndex : 'CreateTime',

            flex :1.5
        },
        {
            header : '试卷名',

            dataIndex : 'examPaperName',
            flex : 1.5
        },
        {
            header : '限制时间（单位:小时）',
            dataIndex : 'limitTime',

            flex : 1.6
        }
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
      //  store: 'ExamStore',   // GridPanel中使用的数据
        pageSize:25,
        dock: 'bottom',
        displayInfo: true
    }]





});
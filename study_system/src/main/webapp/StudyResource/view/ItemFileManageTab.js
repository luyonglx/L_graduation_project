/**
 * Created by LUYONG on 2015/4/23.
 */
Ext.define('StudyResource.view.ItemFileManageTab',{
    extend:'Ext.panel.Panel',
    alias:'widget.itemFileManageTab',
    width:'100%',
    layout:'vbox',
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
            xtype : 'grid',
            width : '100%',
            flex:8,
            columnLines : true,
            selType : 'checkboxmodel',
            //store : 'TaskManageStore',
            // border: false,
            tbar : [ {
                text : '新增',
                iconCls : 'add-icon'
            }, {
                text : '删除',
                iconCls : 'delete-icon'
            }, {
                text : '刷新',
                iconCls : 'refresh',
                handler : function(btn) {
                    btn.up('grid').getStore().reload();
                }
            }
            ],
            columns:[
                {
                    header : '资源编号',
                    dataIndex : 'taskId',
                    flex :1
                },
                {
                    header : '资源名称',
                    dataIndex : 'accoId',
                    flex :1
                },
                {
                    header : '科目类编号',
                    dataIndex : 'accoName',
                    flex : 1
                },
                {
                    header : '年级类编号',
                    dataIndex : 'scanPath',
                    flex : 1
                },
                {
                    header : '对应文件名编号',
                    dataIndex : 'taskId',
                    flex : 1
                },
                {
                    header : '查看次数',
                    dataIndex : 'accoId',
                    flex :1
                },
                {
                    header : '等级评分',
                    dataIndex : 'accoName',
                    flex : 1
                },
                {
                    header : '资源来源',
                    dataIndex : 'scanPath',
                    flex : 1
                },
                {
                    header : '作者',
                    dataIndex : 'scanPath',
                    flex : 1
                },
                {
                    header : '相关文档',
                    dataIndex : 'taskId',
                    flex :1
                },
                {
                    header : '下载金币',
                    dataIndex : 'accoId',
                    flex : 1
                },
                {
                    header : '收录日期',
                    dataIndex : 'accoName',
                    flex : 1
                },
                {
                    header : '板块',
                    dataIndex : 'scanPath',
                    flex : 1
                }
            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
               // store: 'KeywordListStore',   // GridPanel中使用的数据
                pageSize:25,
                dock: 'bottom',
                displayInfo: true
            }]

        } // =======表格部分end
    ]
});
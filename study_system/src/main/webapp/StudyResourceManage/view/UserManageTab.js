/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.view.UserManageTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.userManageTab',
    id: 'userManageTab',
    width: '100%',
    layout: 'vbox',
    closable: true,
    title: '用户管理',
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
                    name:'userId' ,
                    fieldLabel:'用户号'
                },
                {
                    xtype:'textfield',
                    name:'userName',
                    fieldLabel:'用户名'
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
            store: 'UserStore',
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
                    header : '用户编号',
                    dataIndex : 'userId',
                    flex :1

                },
                {
                    header : '用户名称',
                    dataIndex : 'username',
                    flex :1,
                    editor:new Ext.form.TextField()
                },
                {
                    header : '等级',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'level',
                    flex : 1
                },
                {
                    header : '性别',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'sex',
                    flex : 1
                },
                {
                    header : '年龄',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'age',
                    flex : 1
                },
                {
                    header : 'QQ',
                    dataIndex : 'QQ',
                    editor:new Ext.form.TextField(),
                    flex :1.5
                },
                {
                    header : '电话',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'phone',
                    flex : 1.5
                },
                {
                    header : '邮箱',
                    dataIndex : 'email',
                    editor:new Ext.form.TextField(),
                    flex : 1.6
                },
                {
                    header : '学校',
                    dataIndex : 'school',
                    editor:new Ext.form.TextField(),
                    flex : 1.8
                },
                {
                    header : '在读年级',
                    editor:new Ext.form.TextField(),
                    editor:new Ext.form.TextField(),
                    dataIndex : 'gradeId',
                    flex : 1
                },
                {
                    header : '籍贯',
                    editor:new Ext.form.TextField(),
                    dataIndex : 'addressId',
                    flex :1
                },
                {
                    header : '注册时间',
                    dataIndex : 'registerTime',
                    flex : 1.5,
                    renderer : function(val) {
                        var d = new Date(val);
                        return Ext.util.Format.date(d, 'Y-m-d');
                    },
                    editor:new Ext.form.field.Date({
                        editable:false,
                        format:'Y-m-d'
                    })
                },
                {
                    header : '登录密码',
                    dataIndex : 'password',
                    editor:new Ext.form.TextField(),
                    flex : 1
                },
                {
                    header : '金币',
                    dataIndex : 'gold',
                    editor:new Ext.form.TextField(),
                    flex : 1
                }
            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'UserStore',   // GridPanel中使用的数据
                pageSize:25,
                dock: 'bottom',
                displayInfo: true
            }]

        } // =======表格部分end
    ]
});
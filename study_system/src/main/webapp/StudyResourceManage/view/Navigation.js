Ext.define('StudyResource.view.Navigation',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.navigation',
    layout : 'accordion',
    width :263,
    collapsed : true,
    collapsible : true,
    split : true,
    frame:true,
    title : '后台管理菜单',
    items : [ {
        xtype : 'panel',
        title : '资料管理',
        iconCls:'treeNode-helpBook'
         },
        {
            xtype : 'panel',
            title : '试卷管理',
            iconCls:'document-icon'
        },
        {
            xtype : 'panel',
            title : '用户管理',
            iconCls:'user-icon'
        },
        {
            xtype : 'panel',
            title : '答卷管理',
            iconCls:'exam-icon'
        },
        {
            xtype : 'panel',
            title : '题目管理',
            iconCls:'question-icon'
        }

    ]
});
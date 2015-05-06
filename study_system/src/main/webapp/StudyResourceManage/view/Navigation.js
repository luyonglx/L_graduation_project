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
    items : [
        {
            xtype:'navigationTree',
            iconCls:'systemSet-icon'
        },
//         {
//            xtype : 'panel',
//            title : '资料管理',
//            name:'itmeFileManage',
//            iconCls:'treeNode-helpBook'
//         },
//        {
//
//            title : '试卷管理',
//            iconCls:'document-icon'
//        },
//        {
//
//            title : '用户管理',
//            iconCls:'user-icon'
//        },
//        {
//
//            title : '答卷管理',
//            iconCls:'exam-icon'
//        },
//        {
//
//            title : '题目管理',
//            iconCls:'question-icon'
//        }

    ]
});
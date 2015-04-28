/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.store.MenuStore', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            {
                text:'资料管理',
                name:'itemFileManageTab',
                leaf:true,
                iconCls:'treeNode-helpBook'
            },
            {
                text:'试卷管理',
                name:'examManageTab',
                leaf:true,
                iconCls:'document-icon'
            },
            {
                text:'用户管理',
                name:'userManageTab',
                leaf:true,
                iconCls:'user-icon'
            },
            {
                text:'答卷管理',
                name:'answerSheetManageTab',
                leaf:true,
                iconCls:'exam-icon'
            },
            {
                text:'题目管理',
                name:'questionManageTab',
                leaf:true,
                iconCls:'question-icon'
            },
        ]
    }
});
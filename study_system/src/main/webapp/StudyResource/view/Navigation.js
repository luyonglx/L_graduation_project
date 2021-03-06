
Ext.define('StuResource.view.Navigation', {
    extend:'Ext.panel.Panel',
    alias:'widget.navigation',
    layout:'accordion',
    width:263,
    collapsed:true,
    collapsible:true,
    split:true,
    frame:true,
    title:'资料导航',
    items:[
        {
            xtype:'panel',
            title:'资料区',
            iconCls:'document-icon',
            items:[
                {
                    xtype:'treepanel',
                    border:false,
                    store:'ResourceMenuTreeStore',
                    autoScroll:true,
                    width:'100%',
                    height:'100%',
                    rootVisible:false
                }
            ]
        },
        {
            xtype:'panel',
            title:'教科书',
            iconCls:'treeNode-textBook',
            items:[
                {
                    xtype:'treepanel',
                    border:false,
                    store:'ResourceMenuTreeStore',
                    autoScroll:true,
                    width:'100%',
                    height:'100%',
                    rootVisible:false
                }
            ]
        },

        {
            xtype:'panel',
            title:'辅导书',
            iconCls:'treeNode-helpBook',
            items:[
                {
                    xtype:'treepanel',
                    border:false,
                    store:'ResourceMenuTreeStore',
                    autoScroll:true,
                    width:'100%',
                    height:'100%',
                    rootVisible:false
                }
            ]
        },
        {
            xtype:'panel',
            title:'试卷',
            iconCls:'exam-icon',
            items:[
                {
                    xtype:'treepanel',
                    border:false,
                    store:'ResourceMenuTreeStore',
                    autoScroll:true,
                    width:'100%',
                    height:'100%',
                    rootVisible:false
                }
            ]
        }

    ]
});
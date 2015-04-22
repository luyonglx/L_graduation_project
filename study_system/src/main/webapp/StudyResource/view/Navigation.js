var treeStore = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        nodeType: 'async',
        children: [
            {
                text: "教科书",
                iconCls:'treeNode-textBook',
                listeners:{
                    expand:function(node){
                        Ext.Msg.alert('展开');
                        node.setIconCls('treeNode-textBook');
                    },
                    collapse:function(node){
                        Ext.Msg.alert('缩小');
                        node.setIconCls('treeNode-textBook');
                    }
                }
            },
            { text: "辅导书",iconCls:'treeNode-helpBook', children: [
                { text: "语文" ,children:[
                    {text:'高一',leaf:true},
                    {text:'高二',leaf:true},
                    {text:'高三',leaf:true}
                ]},
                { text: "数学" }
            ] },
            { text: "试卷"},
            { text: "资料区"}
        ]
    }
});
Ext.define('StudyResource.view.Navigation',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.navigation',
    layout : 'fit',
    width :263,
    split : true,
    frame:true,
    title : '资源分类',
    items : [ {
        xtype : 'treepanel',
        frame:true,
        store:treeStore,
        rootVisible: false
    }
]

});
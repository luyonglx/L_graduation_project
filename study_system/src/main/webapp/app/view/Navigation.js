Ext.define('StudyOnLine.view.Navigation',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.navigation',
    layout : 'accordion',
    width : 230,
    split : true,
    collapsed : true,
    collapsible : true,
    title : '系统菜单',
    defaults : {
        autoScroll : true,
        layout : {
            type : 'vbox',
            pack : 'start',
            align : 'stretch'
        },
        defaults : {
            xtype : 'button',
            width : 50,
            height : 30,
            margins : '10 5 10 5'
        }
    },
    items : [ {
        xtype : 'panel',
        title : '模拟考试',
        items : [ {
            text : '语文'
        }, {
            text : '数学'
        }, {
            text : '英语'
        }, {
            text : '理科综合'
        }
            , {
                text : '文科综合'
            } ]
    }, {
        xtype : 'panel',
        title : '模块2',
        items : [ {
            text : '选项1'
        }, {
            text : '选项2'
        }, {
            text : '选项2'
        }, {
            text : '选项2'
        } ]
    } ]

});
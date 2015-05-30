/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StuResource.view.MainTab', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainTab',
    id:'mainTab',
    width: '100%',


    border: false,
    items:[

        {
            xtype:'itemFileContentTab'
        }


    ]
});
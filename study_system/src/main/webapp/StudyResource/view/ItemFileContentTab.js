/**
 * Created by LUYONG on 2015/4/24.
 */
var itemFileStore=Ext.create('StuResource.store.ItemFileStore');
itemFileStore.load();
Ext.define('StuResource.view.ItemFileContentTab',{
    extend:'Ext.panel.Panel',
    alias:'widget.itemFileContentTab',
    requires:['StuResource.store.ItemFileStore'],
    frame:true,
    width:'100%',
    title:'资料预览',
    layout:'vbox',
    autoScroll:true,

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
                    name:'sectionId',
                    fieldLabel:'资料类型',
                    editable:false,
                    store : 'SectionStore',
                    displayField:'sectionName',
                    valueField:'sectionId'
                },
                {
                    xtype:'combobox',
                    name:'subjectId',
                    editable:false,
                    fieldLabel:'科目',
                    store : 'SubjectStore',
                    valueField:'subjectId',
                    displayField:'subjectName'
                },
                {
                    xtype:'combobox',
                    name:'gradeId',
                    fieldLabel:'年级',
                    store : 'GradeStore',
                    editable:false,
                    valueField:'gradeId',
                    displayField:'gradeName'

                },
                {
                    xtype:'button',
                    margin:'0 0 0 20',
                    text:'查询',
                    iconCls:'search-icon'

                }
            ]

        },
        {
            xtype:'panel',
            frame:true,
            name:'itemFilesPanel',
            width:'100%',
            id:'itemFilesPanel',
            layout:'column',
            autoScroll:true
        }

    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'ItemFileStore',   // GridPanel中使用的数据
        pageSize:8,
        dock: 'bottom',
        displayInfo: true
    }]

});
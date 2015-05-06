/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-5-6
 * Time: 下午2:09
 * To change this template use File | Settings | File Templates.
 */
Ext.define('StudyResource.view.AddQuestionWin',{
    extend:'Ext.window.Window',
    alias:'widget.addQuestionWin',
    id:'addQuestionWin',
    width:450,
    height:320,
    title:'创建选择题',
    autoScroll:true,
    defaultType:'textfield',
    defaults:{
        labelAlign:'right',
        labelWidth:50,
        width:380,
        margin:'5'
    },
    layout:'vbox',
    bbar:[
        {
            text:'确定',
            iconCls:'button-ok'
        },
        {
            text:'重置',
            iconCls:'button-reset'
        }
    ],

    items:[
        {
            xtype:'textarea',
            fieldLabel:'问题'


        },
        {
            fieldLabel:'选项A',
            name:'A'
        },
        {
            fieldLabel:'选项B',
            name:'B'
        },
        {
            fieldLabel:'选项C',
            name:'C'
        },
        {
            fieldLabel:'选项D',
            name:'D'
        },
        {
            xtype:'combobox',
            fieldLabel:'正确答案',
            labelWidth:100,
            width:200,
            multiSelect:true,
            displayField:'name',
            valueField:'value',
            store : Ext.create('Ext.data.ArrayStore', {
                fields : [ 'name', 'value' ],
                data : [
                    ["A",'A'],
                    [ "B", "B" ],
                    [ "C", "C" ],
                    ["D","D"]

                ]
            })
        }



    ]
});
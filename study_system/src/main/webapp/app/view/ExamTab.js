/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-12
 * Time: 下午9:46
 * To change this template use File | Settings | File Templates.
 */
Ext.define('E-learning.view.ExamTab',{
    extend:'Ext.form.Panel',
    //title:'考卷',
    alias:'widget.examTab',
    layout: {
        // layout-specific configs go here
        type: 'accordion'
    },
    bbar:[
        {
            xtype:'button',
            margin:'0 0 0 600',
            style:{
                backcolor:'#efefef'
            },
            text:'提交'
        },
        {
            xtype:'button',
            text:'重置',
            handler:function(btn)
            {
                btn.up('form').getForm().reset();
            }
        }
    ],
    items:[
        {
            xtype:'singleChoicePanel',
            width:'100%',
            border:false
        }
        ,
        {
            xtype:'uncertainItemChoicePanel',
            width:'100%',
            border:false
        },
        {
           xtype:'shortAnswerQuestionsPanel',
            width:'100%',
            border:1
        }
    ]


});
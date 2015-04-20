/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-12
 * Time: 下午9:46
 * To change this template use File | Settings | File Templates.
 */
Ext.define('E-learning.view.ExamTab',{
    extend:'Ext.panel.Panel',
    //title:'考卷',
    alias:'widget.examTab',
    layout: {
        // layout-specific configs go here
        type: 'accordion'
    },
    bbar:[
        {
            xtype:'button',
            text:'提交'
        },
        {
            xtype:'button',
            text:'重置'
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
            border:false
        }
    ]


});
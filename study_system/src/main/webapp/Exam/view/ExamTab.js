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
    //frame:true,
    layout: {
        // layout-specific configs go here
        type: 'accordion'
    },
    buttonAlign:'center',
    buttons:[
        {
            xtype:'button',
           iconCls:'button-ok',
            formBind:true,
           text:'提交'
        },
        {
            xtype:'button',
            iconCls:'button-reset',
            text:'重填',
            handler:function(btn)
            {
                btn.up('form').getForm().reset();
            }
        },
        {
            xtype:'button',
            iconCls:'exit-icon',
            text:'退出',
            handler:function(btn)
            {
                location.reload()
            }
        }
    ],
    items:[
        {
            xtype:'singleChoicePanel',
            width:'100%',
            border:false
        }
        //,
        //{
        //    xtype:'uncertainItemChoicePanel',
        //    width:'100%',
        //    border:false
        //},
        //{
        //    xtype:'shortAnswerQuestionsPanel',
        //    width:'100%',
        //    border:1
        //}
    ]


});
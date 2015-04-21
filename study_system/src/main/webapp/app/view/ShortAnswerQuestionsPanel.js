/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-18
 * Time: 下午3:28
 * To change this template use File | Settings | File Templates.
 */
Ext.define('E-learning.view.ShortAnswerQuestionsPanel',{
    extend:'Ext.form.Panel',
    alias:'widget.shortAnswerQuestionsPanel',
    title:'简答题',
    //width:'100%',
    items:[
        {
            xtype:'shortAnswerQuestionsItem'
        },
        {
            xtype:'shortAnswerQuestionsItem'
        }
    ]

});
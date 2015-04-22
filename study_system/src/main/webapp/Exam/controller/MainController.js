/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-5
 * Time: 下午2:45
 * To change this template use File | Settings | File Templates.
 */
Ext.define('E-learning.controller.MainController',{
    extend:'Ext.app.Controller',
    views:['Navigation','ExamTab','SingleChoicePanel','UncertainItemChoicePanel','ShortAnswerQuestionsPanel',
    'SingleChoiceItemArea','UncertainItem','SingleChoiceItem','ShortAnswerQuestionsItem']
})
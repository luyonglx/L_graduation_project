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
    'SingleChoiceItemArea','UncertainItem','SingleChoiceItem','ShortAnswerQuestionsItem'],
    stores:['QuestionStore'],
    init:function(){
        this.control({
            'singleChoiceItemArea':{
                beforerender:function(view){
                    var questionStore=this.getStore('QuestionStore');
                    console.log(questionStore);
                    var singleChoiceRecords=questionStore.find('questionId','8');
                    questionStore.filterBy(function(record){
                        return record.get('questionType')=='选择题';
                    });
                    console.log(singleChoiceRecords);
                    var singleChoiceItem=Ext.widget('singleChoiceItem');//创建一个单选题
                }
            }
        });
    }
})
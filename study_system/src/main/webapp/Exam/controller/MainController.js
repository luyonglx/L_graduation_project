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
    stores:['QuestionStore','QuestionChooseStore'],
    init:function(){
        this.control({
            'singleChoiceItemArea':{
                //beforerender:this.beforeSingleChoiceItemArea
            }
        });
    },
    beforeSingleChoiceItemArea:function(view){
        var questionStore=this.getStore('QuestionStore');
        var questionChooseStore=this.getStore('QuestionChooseStore');
        console.log(questionStore);
        console.log(questionStore.getCount())
        //var singleChoiceRecords=questionStore.find('questionType','选择题');
        questionStore.filter( {property: "questionType", value: '选择题'});
        var singleChoiceItemArea=Ext.widget('singleChoiceItemArea');//显示单选题区域
        questionStore.each(function(record) {
            console.log('创建单选题');
            var singleChoiceItem=Ext.widget('singleChoiceItem');//单选题
            //问题
            singleChoiceItem.title=record.get('questionDesc');
            questionChooseStore.extraParams={
                questionId:record.get('questionId')
            };
            questionChooseStore.loadPage(1);
            //选项
            questionChooseStore.each(function(optionRecord){
                var option=new Ext.form.field.Radio({
                    name:record.get('questionId'),
                    boxLabel:optionRecord.get('describes')
                });
                singleChoiceItem.add(option);
            });
            singleChoiceItemArea.add(singleChoiceItem);
            alert(record.get('name'));
        });
        questionStore.clearFilter();


    }
})
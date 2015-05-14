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
    'SingleChoiceItemArea','UncertainItem','SingleChoiceItem','ShortAnswerQuestionsItem','ChooseExamPaper','ExamPaperGrid'],
    stores:['QuestionStore','QuestionChooseStore','ExamStore'],
    init:function(){
        this.control({
            'singleChoiceItemArea':{
                beforerender:this.beforeSingleChoiceItemArea
            },
            'examTab button[text=提交]':{
                click:this.onSubmitBtnClick
            },
            'chooseExamPaper > fieldset button[text=找试卷]':{
                click:function(btn){
                    var chooseExamPaper=btn.up('fieldset').up('panel');
                    console.log(btn);
                    var examPaperGrid=Ext.widget('examPaperGrid')
                    chooseExamPaper.add(examPaperGrid);

                }
            },
            'examPaperGrid  button[text=选择并进入考试]':{
                click:function(){
                    var examContainer=Ext.getCmp('examContainer');
                    examContainer.removeAll();
                    var examTab=Ext.widget('examTab');
                    examContainer.add(examTab);

                }
            }
        });
    },
    onSubmitBtnClick:function(btn){
        //Ext.Msg.alert('提示','提交');
        var singleChoiceItemArea=Ext.getCmp('singleChoiceItemArea');

        var singleItems=singleChoiceItemArea.items;
        var answerList=[];
        singleItems.each(function(item,index,length){
            var questionRadio=item.down('radiogroup');
            var questionId=questionRadio.name;
            var optionId=questionRadio.getChecked()[0].optionId

            answerList.push({
                questionId:questionId,
                optionId:optionId
            })
        });
        var submitForm=new Ext.form.Panel();
        submitForm.getForm().jsonSubmit=true;
        submitForm.submit({
            url:'exam/getExamScore.do',
            method:'POST',
            params:{
                answerOptionList:answerList
            },
            success : function(form, action) {
                var rightRate=action.result.rightRate;
                var falseAnswerList=action.result.falseAnswerList;

                var singleChoiceItemArea=Ext.getCmp('singleChoiceItemArea');
                var singleItems=singleChoiceItemArea.items;
                    singleItems.each(function(item){
                        item.setBorder(false);
                        for(var i=0;i<falseAnswerList.length;i++) {

                            var radiogroup=item.down('radiogroup');
                            if( radiogroup.name==falseAnswerList[i])
                            {

                                item.setBorder(true);
                            }
                        }
                    });

               // Ext.Msg.alert('正确率',rightRate);

            }

        });


    },
    //singleChoiceItemArea在渲染之前
    beforeSingleChoiceItemArea:function(view){
        var questionStore=this.getStore('QuestionStore');
        var questionChooseStore=this.getStore('QuestionChooseStore');
        var me=view;
        questionStore.load({callback:function(){
            //var singleChoiceRecords=questionStore.find('questionType','选择题');
            questionStore.filter( {property: "questionType", value: '选择题'});
            // var singleChoiceItemArea=Ext.widget('singleChoiceItemArea');//显示单选题区域

            var i=1;
            questionStore.each(function(record) {
                // var record=questionStore.getAt(i);

                var singleChoiceItem=Ext.widget('singleChoiceItem');//单选题
                //问题

                singleChoiceItem.setTitle(i+++'.'+record.get('questionDesc'));
                questionChooseStore.getProxy().extraParams={
                    questionId:record.get('questionId')
                };
                //选项组
                var option=new Ext.form.RadioGroup({
                    border:false,
                    layout:'vbox',
                    name:record.get('questionId')
                });
                questionChooseStore.load({
                    callback:function(){
                        questionChooseStore.each(function(optionRecord){
                            option.add({
                                optionId:optionRecord.get('optionId'),
                                name:record.get('questionId'),
                                boxLabel:optionRecord.get('describes')
                            })
                        });
                    }});
                singleChoiceItem.add(option);
                me.add(singleChoiceItem);

            });
            questionStore.clearFilter();

        }});


    }
})
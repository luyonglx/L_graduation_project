/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-20
 * Time: 下午9:34
 * To change this template use File | Settings | File Templates.
 */
var questionStore=Ext.create('E-learning.store.QuestionStore');
Ext.define('E-learning.view.SingleChoiceItemArea',{
    extend:'Ext.form.Panel',
    alias:'widget.singleChoiceItemArea',
    layout:'vbox',
    border:false,
    initComponent:function(){
        var questionChooseStore=Ext.create('E-learning.store.QuestionChooseStore');
        var me=this;
        questionStore.load({callback:function(){
            console.log(questionStore.getCount());
            console.log(questionStore);
            //var singleChoiceRecords=questionStore.find('questionType','选择题');
            questionStore.filter( {property: "questionType", value: '选择题'});
            // var singleChoiceItemArea=Ext.widget('singleChoiceItemArea');//显示单选题区域
            questionStore.each(function(record) {
                console.log('创建单选题');
                var singleChoiceItem=Ext.widget('singleChoiceItem');//单选题
                //问题
                console.log(singleChoiceItem);
                singleChoiceItem.title=record.get('questionDesc');
                questionChooseStore.extraParams={
                    questionId:record.get('questionId')
                };
                //选项组
                var option=new Ext.form.field.Radio({
                    border:false,
                    layout:'vbox',
                    name:record.get('questionId')
                });
//                questionChooseStore.load({
//                    callback:function(){
//                      questionChooseStore.each(function(optionRecord){
//                        console.log('创建选项');
//                        option.add({
//                            name:record.get('questionId'),
//                            boxLabel:optionRecord.get('describes')
//                        })
//                    });
//                }});
                singleChoiceItem.add(option);
                me.add(singleChoiceItem);
            });
            questionStore.clearFilter();

        }});
        this.callParent();
    }





});

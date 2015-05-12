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
    name:'singleChoiceItemArea',
    id:'singleChoiceItemArea',
    layout:'vbox',
    border:false
//    initComponent:function(){
//        var questionChooseStore=Ext.create('E-learning.store.QuestionChooseStore');
//        var me=this;
//        questionStore.load({callback:function(){
//
//            //var singleChoiceRecords=questionStore.find('questionType','选择题');
//            questionStore.filter( {property: "questionType", value: '选择题'});
//            // var singleChoiceItemArea=Ext.widget('singleChoiceItemArea');//显示单选题区域
//
//            var i=1;
//            questionStore.each(function(record) {
//               // var record=questionStore.getAt(i);
//
//                var singleChoiceItem=Ext.widget('singleChoiceItem');//单选题
//                //问题
//                //console.log(record.get('questionDesc'));
//                singleChoiceItem.setTitle(i+++'.'+record.get('questionDesc'));
//                questionChooseStore.getProxy().extraParams={
//                    questionId:record.get('questionId')
//                };
//                //选项组
//                var option=new Ext.form.RadioGroup({
//                    border:false,
//                    layout:'vbox',
//                    name:record.get('questionId')
//                });
//                questionChooseStore.load({
//                    callback:function(){
//                        questionChooseStore.each(function(optionRecord){
//
//                            option.add({
//                                name:record.get('questionId'),
//                                boxLabel:optionRecord.get('describes')
//                            })
//                        });
//                    }});
//                singleChoiceItem.add(option);
//                me.add(singleChoiceItem);
//
//            });
//            questionStore.clearFilter();
//
//        }});
//        this.callParent();
//    }





});

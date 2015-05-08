/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.controller.QuestionManageController', {
    extend: 'Ext.app.Controller',
    views: ['QuestionManageTab','AddQuestionWin'],
    stores: ['QuestionStore','SubjectStore','DifficultyStore','QuestionTypeStore'],
    init:function(){
        this.control({
            'questionManageTab > grid':{
                beforerender:function(){
                	var store=this.getStore('QuestionStore');
                	store.getProxy().extraParams={
                		questionId:0,
                		subjectId:0,
                		difficulty:0,
                		questionType:''
                	};
                	store.loadPage(1);
                },
                edit:function(){
                    this.getStore('QuestionStore').sync();
                }
                //celldblclick : this.onTaskGirdCellDBClick
            },
            'questionManageTab button[text=查询]':{
                click:this.onQueryBtnClick
            },
            'questionManageTab button[text=新增]':{
                click:this.onAddBtnClick
            },
            'questionManageTab button[text=删除]':{
                click:this.onDeleteBtnClick
            },
            'addQuestionWin > form button[text=确定]':{
                click:this.confirmAddQuestion
            },
            'addQuestionWin > form >form  button[text=创建选项]':{
                click:this.newAnswerChoise
            }
        });
    },
    confirmAddQuestion:function(btn){
        var form=btn.up('form');
        var questionInfoForm=form.down('form[name=questionInfo]');
        var answerForm=form.down('form[name=answer]');
        var answerOptions=answerForm.query('textfield');
        var obj=[];
        for(i=0;i<answerOptions.length;i++)
        {
            obj.push(answerOptions[i].getValue())
        }
        var answers={};
        answers['answers']=obj.join();
        console.log(answerForm.query('textfield'));
        //var questionInfo=questionInfoForm.getValues();
        //console.log(questionInfo);
        var submitform = Ext.create('Ext.form.Panel');
         var questionStore=this.getStore('QuestionStore');
        submitform.getForm().jsonSubmit = true;
        submitform.submit({
            url:'question/add.do',
            params:{
                answers:obj,
                question:questionInfoForm.getValues()
            },
            method : 'POST',
            success:function(){
                questionStore.reload();
            }
        });
        form.up('window').close();
    },
    newAnswerChoise:function(btn){
        var form=btn.up('form');
        //新建选项
        var optionItemsCount=form.query('textfield').length;
        //console.log(optionItems);
        var optionName='选项'+(optionItemsCount+1);
        var option=new Ext.form.FieldSet({
            layout:'hbox',
            border:false,
            name:optionName,
            frame:true,
            items:[
                {
                    xtype:'textfield',
                    fieldLabel:optionName,
                    name:optionName,
                    labelWidth:50,
                    width:520,
                    margin:'2',
                    labelAlign:'right',
                    allowBlank:false
                },
                {
                    xtype:'button',
                    iconCls:'del-icon',
                    margin:'2',
                    handler:function(btn){
                        var form=btn.up('form');
                        var thisFormItem=form.down('fieldset[name='+optionName+']');
                        form.remove(thisFormItem);
                    }
                }
            ]
        });
        form.add(option);
    },
    onQueryBtnClick:function(btn)
    {
    	var form=btn.up('form');
    	var store=form.up('panel').down('grid').getStore();
    	store.getProxy().extraParams=form.getValues();
    	store.loadPage(1, {
    	     callback : function(records, operation, success) {
    	        if (!success) {
    	            Ext.Msg.alert('运行错误', operation.request.proxy.reader);
    	        }
    	      }
    	});
    },
    //新增按钮
    onAddBtnClick:function(){
        // Ext.Msg.alert('提示','新增');
        if(Ext.getCmp('addQuestionWin'))
            return;
        Ext.widget('addQuestionWin').show();
        // Ext.getCmp('addItemFileWin').show();
    },
    //删除按钮事件
    onDeleteBtnClick:function(btn){
        //Ext.Msg.alert('提示','事件触发');
        var grid=btn.up('grid');
        var selectRows = grid.getSelectionModel().getSelection();
        var store = grid.getStore();
        if (selectRows.length > 0) {
            Ext.Msg.confirm('提示', '确定删除列表选中项？', function(isok) {
                if (isok == "yes") {
                    for (var i = 0; i < selectRows.length; i++) {
                        store.remove(selectRows[i])
                    }
                    store.sync();
                }
            })
        }
        else {
            Ext.Msg.alert('提示', '请选择！');
        }
    }
});

/**
 * Created by LUYONG on 2015/1/8.
 */
Ext.define('Mgr.controller.TaskManageController',{
    extend: 'Ext.app.Controller',
    views:['tab.TaskManageTab','tab.TaskDetailTab','panel.TaskManageForm','window.AddOrEditTaskWin'],
    stores: ['TaskManageStore','TaskExecuteRecordStore','CommodityTypeStore','LimitRealmStore','portal.store.account.AccountStore','KeywordTypeStore','KeywordFormatStore'],
    model: ['TaskManageModel','CommodityTypeModel'],
    init:function(){
        this.control({
            'taskManageTab > grid':{
                beforerender:function(){
                    this.getStore('TaskManageStore').load();
                },
                celldblclick : this.onTaskGirdCellDBClick
            },
            'taskManageForm button[text=查询]':{
                click:this.onQueryBtnClick
            },
            'taskManageTab button[text=新增]':{
                click:this.onAddBtnClick
            },
            'taskManageTab button[text=删除]':{
                click:this.onDeleteBtnClick
            },
            'addOrEditTaskWin button[text=确定]' :{
            	click:this.onConfirmAddBtnClick
            },
            'taskManageTab button[text=执行]':{
                click:this.onExecuteBtnClick
            },
            'taskManageTab button[text=停止]':{
                click:this.onStopBtnClick
            }

        })

    },
    onConfirmAddBtnClick:function(btn){
    	//console.log("点击确定按钮");
    	var window=btn.up('window');
    	var store=this.getStore('TaskManageStore');
    	var form=btn.up('form');
    	var taskId=form.query('textfield[name=taskId]')[0].value;
    	console.log(taskId);
    	var commodityTypeId=form.query('textfield[name=commodityTypeId]')[0];
    	var keywordType=form.query('textfield[name=keywordType]')[0];
    	form.submit({
    		url:'crawler/task/addOrEdit',
    		params:{commodityTypeId:Ext.Array.sort(commodityTypeId.value),
    			keywordType:Ext.Array.sort(keywordType.value)
    		},
    		success:function(){
    			  store.loadPage(1, {
    		        callback : function(records, operation, success) {
    		        	 if (!success) {
    		                 Ext.Msg.alert('运行错误', operation.request.proxy.reader);
    		               }
    		        }
    		      });    			
    			form.up('window').close();
    		},
    		failure:function(){
    			Ext.Msg.alert('错误提示','系统出错');
    		}
    	});
    },
    //双击任务列表
    onTaskGirdCellDBClick:function(grid, a, rowNum, cell) {
    	console.log(cell.raw.taskId);
    	Ext.History.add('taskDetailTab?taskId='+cell.raw.taskId);    	
    },
    //查询
    onQueryBtnClick:function(btn){
    	var tab=btn.up('taskManageTab');
        var grid=tab.down('grid');
        var store=grid.getStore();
        var form=tab.down('form');
        var queryMap= form.getForm().getValues();
        var commodityTypeIdArray=queryMap['commodityTypeId'];        
        var keywordTypeArray=queryMap['keywordType'];        
        if(commodityTypeIdArray!=""){
        	Ext.Array.sort(commodityTypeIdArray);
        }
        if(keywordTypeArray!=""){        	
        	Ext.Array.sort(keywordTypeArray);
        }        
        console.log(queryMap);
        store.getProxy().extraParams = queryMap;
        store.loadPage(1, {
        callback : function(records, operation, success) {
          if (!success) {
            Ext.Msg.alert('运行错误', operation.request.proxy.reader);
          }
        }
      });
    },
    //打开添加或者删除的窗口
    openWinForAddOrEdit:function()
    {
    	var addOrEditTaskWin=Ext.getCmp('addOrEditTaskWin');
    	if(!addOrEditTaskWin)
    	{
    		addOrEditTaskWin=Ext.widget('addOrEditTaskWin');
    		addOrEditTaskWin.show();
    		return addOrEditTaskWin
    		}
    	return addOrEditTaskWin;
    },
    //新增按钮
    onAddBtnClick:function(){
        this.openWinForAddOrEdit();
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
						if(selectRows[i].data.executedCount==0)
						    store.remove(selectRows[i]);
						else
							Ext.Msg.alert('提示','该条任务执行次数不为零，不能删除');
					}
					store.sync();
				}
			})
		} 
		else {
			Ext.Msg.alert('提示', '请选择！');
		}
    },
    
    //任务执行或者停止
    executeOrStop:function(btn,url){
    	 var grid=btn.up('grid');
    	 var executeStore=this.getStore('TaskExecuteRecordStore');
         var record=grid.getSelectionModel().getSelection();
         if(record==null || record.length<1){
             Ext.Msg.alert('提示','请勾选任务！');
             return;
         }
         var obj=[];
         for (i = 0; i < record.length; i++) 
         {
         	obj.push(record[i].get("taskId"));
         };
         var param={};
     	param['taskIds']=obj.join();
         Ext.Ajax.request({
 			url :url ,
 			method : 'POST',
 			params : param,
 			success :function(response, options){
 				var retObj = Ext.JSON.decode(response.responseText);
 				if (retObj.msg) {
 					grid.getStore().reload();
 					executeStore.reload();
 					Ext.MessageBox.alert('提示', retObj.msg);
 				} 
 			},
 			failure : function(response, options) {
 				var retObj = Ext.JSON.decode(response.responseText);
 				Ext.MessageBox.alert('运行错误', retObj.error);
 			}
 		})
    },
    //执行按钮事件
    onExecuteBtnClick:function(btn){
    	var url='crawler/runTask/run';
    	this.executeOrStop(btn,url);
       
    },
    //停止按钮事件
    onStopBtnClick:function(btn){
    	var url='crawler/runTask/stop';
    	this.executeOrStop(btn,url);
    },
    //编辑按钮事件
    onEditBtnClick:function(btn){
    	 var editWin=this.openWinForAddOrEdit();
    	 var taskDetailForm=btn.up('panel').down('form');
    	 var editForm=editWin.down('form');
    	 editForm.loadRecord(taskDetailForm.getRecord());
    	
 		var keywordType=editForm.down('combobox[name=keywordType]');
 		var commodityType=editForm.down('combobox[name=commodityTypeId]');
 		var keywordForm=editForm.down('combobox[name=keywordForm]');
 		
 		var keywordTypeValues=new Array();
 		keywordTypeValues=keywordType.value[0].split(',');
 		var keywordTypeIntValues=new Array();
 		Ext.Array.each(keywordTypeValues,function(value){
 			keywordTypeIntValues.push(parseInt(value));
 		});
 		
 		var commodityTypeValues=new Array();
 		commodityTypeValues=commodityType.value[0].split(',');
 		var commodityTypeIntValues=new Array();
 		Ext.Array.each(commodityTypeValues,function(value){
 			commodityTypeIntValues.push(parseInt(value));
 		});
 		
 		
 		var keywordFormValues=new Array();
 		keywordFormValues=keywordForm.value[0].split(',');
 		var keywordFormIntValues=new Array();
 		Ext.Array.each(keywordFormValues,function(value){
 			keywordFormIntValues.push(parseInt(value));
 		});
 		editForm.getForm().setValues({
 			keywordType:keywordTypeIntValues,
 			commodityTypeId:commodityTypeIntValues,
 			keywordForm:keywordFormIntValues	
 		});	
    }
});

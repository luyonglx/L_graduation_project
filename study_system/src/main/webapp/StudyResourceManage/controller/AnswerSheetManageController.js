/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.controller.AnswerSheetManageController', {
    extend: 'Ext.app.Controller',
    views: ['AnswerSheetManageTab'],
    stores: ['AnswerSheetStore'],
    init:function(){
        this.control({
            'answerSheetManageTab > grid':{
                beforerender:function(){
                    this.getStore('AnswerSheetStore').load();
                },
                edit:function(){
                    this.getStore('AnswerSheetStore').sync();
                }
                //celldblclick : this.onTaskGirdCellDBClick
            },
            'answerSheetManageTab button[text=查询]':{
                click:this.onQueryBtnClick
            },
            'answerSheetManageTab button[text=新增]':{
                click:this.onAddBtnClick
            },
            'answerSheetManageTab button[text=删除]':{
                click:this.onDeleteBtnClick
            }
        });
    },
    onQueryBtnClick:function()
    {
        Ext.Msg.alert('提示','查询');
    },
    //新增按钮
    onAddBtnClick:function(){

        // Ext.Msg.alert('提示','新增');
        console.log(Ext.getCmp('addItemFileWin'));
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
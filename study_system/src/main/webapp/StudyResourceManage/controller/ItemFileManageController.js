/**
 * Created by LUYONG on 2015/4/23.
 */
Ext.define('StudyResource.controller.ItemFileManageController',{
    extend:'Ext.app.Controller',
    models:['ItemFileManageModel'],
    stores:['ItemFileManageStore'],
    views:['ItemFileManageTab','AddItemFileWin'],
    init:function(){
        this.control({
            'itemFileManageTab > grid':{
                beforerender:function(){
                    //console.log(this.getStore('ItemFileManageStore'));
                   this.getStore('ItemFileManageStore').load();
                },
                edit:function(){
                    this.getStore('ItemFileManageStore').sync();
                }
                //celldblclick : this.onTaskGirdCellDBClick
            },
            'itemFileManageTab button[text=查询]':{
                click:this.onQueryBtnClick
            },
            'itemFileManageTab button[text=新增]':{
                click:this.onAddBtnClick
            },
            'itemFileManageTab button[text=删除]':{
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
        if(selectRows.length <=0)
        {
            Ext.Msg.alert('提示', '请选择！');
            return;
        }
        Ext.Msg.confirm('提示', '确定删除列表选中项？', function(isok) {
            if (isok == "yes") {
                for (var i = 0; i < selectRows.length; i++) {
                    store.remove(selectRows[i])
                }
                store.sync();
            }
         })

    }

})
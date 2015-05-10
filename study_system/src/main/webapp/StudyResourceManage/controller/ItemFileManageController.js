/**
 * Created by LUYONG on 2015/4/23.
 */
Ext.define('StudyResource.controller.ItemFileManageController',{
    extend:'Ext.app.Controller',
    models:['ItemFileManageModel'],
    stores:['ItemFileManageStore','SectionStore','GradeStore'],
    views:['ItemFileManageTab','AddItemFileWin'],
    init:function(){
        this.control({
            'itemFileManageTab > grid':{
                beforerender:function(){
                    var store=this.getStore('ItemFileManageStore');
                    store.getProxy().extraParams={
                        sectionId:0,
                        subjectId:0,
                        gradeId:0,
                        itemFileName:''
                    };
                    store.loadPage(1);
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
        var addItemFileWin=Ext.getCmp('addItemFileWin');
        if(addItemFileWin)
            return;
        addItemFileWin=Ext.widget('addItemFileWin');
        addItemFileWin.show()

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
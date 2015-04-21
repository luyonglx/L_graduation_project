/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-18
 * Time: 下午3:18
 * To change this template use File | Settings | File Templates.
 */
Ext.define('E-learning.view.SingleChoicePanel',{
    extend:'Ext.panel.Panel',
    title:'单选题',
    alias:'widget.singleChoicePanel',
    //autoScroll:true,
    bodyStyle :'overflow-x:hidden;overflow-y:scroll;',
    layout:'hbox',
   // width:'100%',
    items:[
        {
            xtype:'singleChoiceItemArea',
            name:'singleChoiceItemAreaLeft',
            width:'50%'
            //height:'100%'
        },
        {
            xtype:'singleChoiceItemArea',
            name:'singleChoiceItemAreaRight',
            width:'50%'
            //height:'100%'
        }

    ]
});
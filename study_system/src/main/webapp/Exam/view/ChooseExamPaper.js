/**
 * Created by OoWoodOne on 2015/5/14.
 */
Ext.define('E-learning.view.ChooseExamPaper',{
    extend:'Ext.panel.Panel',
    alias:'widget.chooseExamPaper',
    id:'chooseExamPaper',
    frame:true,
    layout:'vbox',
    items:[
        {
            xtype:'fieldset',
            border:false,
            //frame:true,
            width:'100%',
           // height:160,
            layout:'hbox',
            items:[
                {
                    xtype:'textfield',
                    width:400,
                    margin:'60 0 30 580'
                },
                {
                    xtype:'button',
                    text:'找试卷',
                    iconCls:'search-icon',
                    margin:'60 0 30 0'
                }
            ]
        }


    ]
});


//{
//    xtype:'button',
//        text:'切换面板',
//    handler:function(){
//    var examContainer=Ext.getCmp('examContainer');
//    examContainer.removeAll();
//    var examTab=Ext.widget('examTab');
//    examContainer.add(examTab);
//}
//
//}
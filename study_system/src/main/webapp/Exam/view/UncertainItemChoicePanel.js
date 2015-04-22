/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-18
 * Time: 下午3:24
 * To change this template use File | Settings | File Templates.
 */
Ext.define('E-learning.view.UncertainItemChoicePanel',{
    extend:'Ext.form.Panel',
    alias:'widget.uncertainItemChoicePanel',
    title:'不定项选择题',
    //width:'100%',
    defaultType:'form',
    defaults:{
        border:false,
        flex:1
    },
    bodyStyle :'overflow-x:hidden;overflow-y:scroll;',
    layout:'hbox',
    items:[
        {

           name:'uncertainItemAreaLeft',
           items:[
               {
                   xtype:'uncertainItem'
               },
               {
                   xtype:'uncertainItem'
               }
           ]
        },
        {

            name:'uncertainItemAreaRight',
            items:[
                {
                    xtype:'uncertainItem'
                }
            ]

        }
    ]
    //height:400
});
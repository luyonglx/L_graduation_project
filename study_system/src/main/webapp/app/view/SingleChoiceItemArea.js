/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-20
 * Time: 下午9:34
 * To change this template use File | Settings | File Templates.
 */
Ext.define('E-learning.view.SingleChoiceItemArea',{
    extend:'Ext.form.Panel',
    alias:'widget.singleChoiceItemArea',
    layout:'vbox',
    border:false,
    items:[
        {
            xtype:'singleChoiceItem'
        },
        {
            xtype:'singleChoiceItem'
        },
        {
            xtype:'singleChoiceItem'
        }

    ]


});

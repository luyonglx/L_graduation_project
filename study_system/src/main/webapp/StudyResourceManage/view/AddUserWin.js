/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-5-12
 * Time: 下午8:38
 * To change this template use File | Settings | File Templates.
 */
Ext.define('StudyResource.view.AddUserWin',{
    extend:'Ext.window.Window',
    alias:'widget.addUserWin',
    id:'addUserWin',
    width:450,
    height:280,
    layout:'fit',
    title:'添加用户',

    items:[
        {
            xtype:'form',
            frame:true,
            layout:'column',
            buttonAlign:'center',
            buttons:[
                {
                    xtype:'button',
                    iconCls:'button-ok',
                    formBind:true,
                    text:'提交'
                },
                {
                    xtype:'button',
                    iconCls:'button-reset',
                    text:'重填',
                    handler:function(btn)
                    {
                        btn.up('form').getForm().reset();
                    }
                }
            ],
            defaults:{
                labelAlign:'right',
                xtype:'textfield',
                margin:'10',
                width:180,
                labelWidth:80
            },
            items:[
                {

                    name:'username',
                    allowBlank:false,
                    fieldLabel:'用户名'
                },
                {

                    name:'password',
                    allowBlank:false,
                    fieldLabel:'密码'

                },
                {
                    name:'sex',
                    fieldLabel:'性别'
                },
                {

                    name:'age',
                    fieldLabel:'年龄'

                },
                {
                    name:'qq',
                    fieldLabel:'QQ'
                },
                {

                    name:'phone',
                    fieldLabel:'电话'

                },
                {
                    name:'email',
                    fieldLabel:'邮箱'
                },
                {

                    name:'school',
                    fieldLabel:'学校'
                }


            ]
        }


    ]
});
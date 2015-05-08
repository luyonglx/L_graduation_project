/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-5-6
 * Time: 下午2:09
 * To change this template use File | Settings | File Templates.
 */
var difficultyStore=Ext.create('StudyResource.store.DifficultyStore');
var subjectStore=Ext.create('StudyResource.store.SubjectStore');
var questionTypeStore=Ext.create('StudyResource.store.QuestionTypeStore');
Ext.define('StudyResource.view.AddQuestionWin',{
    extend:'Ext.window.Window',
    alias:'widget.addQuestionWin',
    id:'addQuestionWin',
    width:650,
    height:500,
    title:'创建选择题',
    //bodyStyle :'overflow-x:hidden;overflow-y:scroll;',
    layout:'fit',
    items:[
        {
            xtype:'form',
            frame:true,
            bbar:[
                {
                    text:'确定',
                    formBind:true,
                    iconCls:'button-ok'
                },
                {
                    text:'重置',
                    iconCls:'button-reset',
                    handler:function(btn){
                        btn.up('form').getForm().reset();
                    }
                }
            ],

            items:[
                //题目基本信息
                {
                    xtype:'form',
                    frame:true,
                    name:'questionInfo',
                    title:'基本信息',
                    width:'100%',
                    layout:'column',
                    defaults:{
                        labelAlign:'right',
                        labelWidth:80,
                        margin:'5'
                    },
                    items:[
                        {
                            xtype:'textarea',
                            fieldLabel:'问题描述',
                            allowBlank:false,
                            name:'questionDesc',
                            blankText:'不能为空',
                            width:600

                        },
                        {
                            fieldLabel:'所属科目',
                            xtype:'combobox',
                            store:subjectStore,
                            valueField:'subjectId',
                            width:180,
                            displayField:'subjectName',
                            editable:false,
                            name:'subjectId'
                        },
                        {
                            xtype:'combobox',
                            fieldLabel:'难度',
                            store:difficultyStore,
                            width:180,
                            valueField:'value',
                            displayField:'name',
                            editable:false,
                            name:'difficulty'
                        },

                        {
                            xtype:'combobox',
                            fieldLabel:'题目类型',
                            name:'questionType',
                            width:200,
                            store:questionTypeStore,
                            valueField:'value',
                            displayField:'name',
                            editable:false

                        },
                        {
                            xtype:'textarea',
                            fieldLabel:'题目解析',
                            name:'questionAnalysis',
                            width:600
                        }

                    ]


                },
                //答案
                {
                    xtype:'form',
                    width:'100%',
                    height:210,
                    name:'answer',
                    title:'答案',
                    autoScroll:true,
                    frame:true,
                    tbar:[
                        {
                            text:'创建选项',
                            iconCls:'add-icon'
                        }

                    ]
                }

            ]
        }

    ]

});
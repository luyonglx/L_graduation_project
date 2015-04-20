/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-20
 * Time: 下午9:34
 * To change this template use File | Settings | File Templates.
 */
Ext.define('E-learning.view.SingleChoiceItemArea',{
    extend:'Ext.panel.Panel',
    alias:'widget.singleChoiceItemArea',
    defaults:{
        //border:false,
        layout:{
            type:'column'
        },
        width:'45%',
        margin:'0 10 20 10'
    },
    border:1,
//    layout:{
//        type:'table',
//        columns:2
//    },
    layout:'column',
    defaultType: 'fieldset',
    items:[
        {
            title:'1.下列词语中加点字的读音，全都正确的一组是',
            defaultType: 'radiofield',
            defaults:{
                margin:'0 0 0 20'
            },
            items:[
                {
                    name:'q1',
                    boxLabel:'A．奖掖（yâ） 贮存（zhù） 按捺（nài） 棱角分明（lãng）'
                },
                {
                    name:'q1',                  //名字相同的单选框做为一组
                    boxLabel:'B．遒劲（qiú） 嗜好（shì） 渐染（jiàn） 相形见绌（chù）'
                },
                {
                    name:'q1',
                    boxLabel:'C．箴言（zhēn） 矜持（jīn） 佣金（yîng） 噤若寒蝉（jìn）'
                },
                {
                    name:'q1',                  //名字相同的单选框做为一组
                    boxLabel:'D．彪马（biāo） 恫吓（dîng） 聒噪（guō） 瞠目结舌（táng）'
                }
            ]
        },
        {
            //xtype : 'fieldset',
            title:'2.下列词语中加点字的读音，全都正确的一组是',
            defaultType: 'radiofield',
            defaults:{
                margin:'0 0 0 20'
            },
            items:[
                {
                    name:'q2',
                    boxLabel:'A．奖掖（yâ） 贮存（zhù） 按捺（nài） 棱角分明（lãng）'
                },
                {
                    name:'q2',                  //名字相同的单选框做为一组
                    boxLabel:'B．遒劲（qiú） 嗜好（shì） 渐染（jiàn） 相形见绌（chù）'
                },
                {
                    name:'q2',
                    boxLabel:'C．箴言（zhēn） 矜持（jīn） 佣金（yîng） 噤若寒蝉（jìn）'
                },
                {
                    name:'q2',                  //名字相同的单选框做为一组
                    boxLabel:'D．彪马（biāo） 恫吓（dîng） 聒噪（guō） 瞠目结舌（táng）'
                }
            ]
        },
        ,
        {
            //xtype : 'fieldset',
            title:'3.下列词语中加点字的读音，全都正确的一组是',
            defaultType: 'radiofield',
            defaults:{
                margin:'0 0 0 20'
            },
            items:[
                {
                    name:'q2',
                    boxLabel:'A．奖掖（yâ） 贮存（zhù） 按捺（nài） 棱角分明（lãng）'
                },
                {
                    name:'q2',                  //名字相同的单选框做为一组
                    boxLabel:'B．遒劲（qiú） 嗜好（shì） 渐染（jiàn） 相形见绌（chù）'
                },
                {
                    name:'q2',
                    boxLabel:'C．箴言（zhēn） 矜持（jīn） 佣金（yîng） 噤若寒蝉（jìn）'
                },
                {
                    name:'q2',                  //名字相同的单选框做为一组
                    boxLabel:'D．彪马（biāo） 恫吓（dîng） 聒噪（guō） 瞠目结舌（táng）'
                }
            ]
        },
        {
            //xtype : 'fieldset',
            title:'3.下列词语中加点字的读音，全都正确的一组fwfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeevvtvt  改变和腿部疼痛vvtvvyvyv也有网友狗肉是',
            defaultType: 'radiofield',
            defaults:{
                margin:'0 0 0 20'
            },
            items:[
                {
                    name:'q4',
                    boxLabel:'A．男'
                },
                {
                    name:'q4',                  //名字相同的单选框做为一组
                    boxLabel:'B．女'
                },
                {
                    name:'q4',
                    boxLabel:'C．中性'
                },
                {
                    name:'q4',                  //名字相同的单选框做为一组
                    boxLabel:'D．不祥'
                }
            ]
        },
        {
            //xtype : 'fieldset',
            title:'3.下列词语中加点字的读音，全都正确的一组fwfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeevvtvt  改变和腿部疼痛vvtvvyvyv也有网友狗肉是',
            defaultType: 'radiofield',
            defaults:{
                margin:'0 0 0 20'
            },
            items:[
                {
                    name:'q4',
                    boxLabel:'A．男'
                },
                {
                    name:'q4',                  //名字相同的单选框做为一组
                    boxLabel:'B．女'
                },
                {
                    name:'q4',
                    boxLabel:'C．中性'
                },
                {
                    name:'q4',                  //名字相同的单选框做为一组
                    boxLabel:'D．不祥'
                }
            ]
        },
        {
            //xtype : 'fieldset',
            title:'3.下列词语中加点字的读音，全都正确的一组fwfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeevvtvt  改变和腿部疼痛vvtvvyvyv也有网友狗肉是',
            defaultType: 'radiofield',
            defaults:{
                margin:'0 0 0 20'
            },
            items:[
                {
                    name:'q4',
                    boxLabel:'A．男'
                },
                {
                    name:'q4',                  //名字相同的单选框做为一组
                    boxLabel:'B．女'
                },
                {
                    name:'q4',
                    boxLabel:'C．中性'
                },
                {
                    name:'q4',                  //名字相同的单选框做为一组
                    boxLabel:'D．不祥'
                }
            ]
        }
    ]


});

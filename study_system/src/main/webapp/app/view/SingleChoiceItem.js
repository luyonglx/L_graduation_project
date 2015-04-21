/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-21
 * Time: 下午8:49
 * To change this template use File | Settings | File Templates.
 */
Ext.define('E-learning.view.SingleChoiceItem',{
    extend:'Ext.form.FieldSet',
    alias:'widget.singleChoiceItem',
    name:'singleChoiceItem',
    margin:'0 10 20 10',
    border:false,
    defaults:{
        margin:'0 0 0 20'
    },
    title:'1.下列词语中加点字的读音，全都正确的一组是',
    border:false,
    items:[
        {
            defaultType:'radiofield',
            layout:'vbox',
            name:'like',
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

        }

    ]
});
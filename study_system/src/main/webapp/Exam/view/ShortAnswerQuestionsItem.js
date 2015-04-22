/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-21
 * Time: 下午10:48
 * To change this template use File | Settings | File Templates.
 */
Ext.define('E-learning.view.ShortAnswerQuestionsItem',{
    extend:'Ext.form.FieldSet',
    alias:'widget.shortAnswerQuestionsItem',
    name:'shortAnswerQuestionsItem',
    border:false,
    title:'<p>2.2008年广州中考作文试题： '+
        ' 阅读下面文字,按要求作文.'+
        '春回大地,原野上、道路旁、房前屋后,那一棵棵、一排排的树,高的、矮的、直的、弯的、立的、倒的……' +
        '无论是被凛冽寒风刮得一叶不剩的秃枝,还是依然挂着绿叶的繁枝,都又悄悄地吐出了新芽,嫩嫩的,翠翠的,或浅黄,或浅绿,或微微露出点粉色……'+
        '请以“又见枝头吐新芽”为标题写一篇文章.要求：1、体裁不限(诗歌除外)；2、不少于600字. </p>',
    items:[
        {
        xtype     : 'textareafield',
        grow      : true,
        name      : 'message',
        //fieldLabel: 'Message',
        anchor    : '100%'
    }]


});
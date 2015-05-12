/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-5-10
 * Time: 下午3:01
 * To change this template use File | Settings | File Templates.
 */
Ext.define('E-learning.store.QuestionChooseStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    fields:[
        {name:'questionId',type:'int'},
        {name:'optionId',type:'int'},
        {name:'describes',type:'string'},
        {name:'optionStatus',type:'int'}
    ],
    //model:'StudyResource.model.UserModel',
    proxy: {
        type: 'ajax',
        url: 'questionChoose/list.do',

//        api: {
//
//            read: 'question/list.do',
//
//        },
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});
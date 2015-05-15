/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-5-6
 * Time: 下午10:44
 * To change this template use File | Settings | File Templates.
 */
Ext.define('StuResource.store.GradeStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    autoLoad:true,
    fields:[
        {name:'gradeId',type:'int'},
        {name:'gradeName',type:'string'}
    ],
    proxy: {
        type: 'ajax',
        url: 'grade/list.do',
        api: {
            read: 'grade/list.do'
        },
           reader: {
           type: 'json',
           root: 'data',
           totalProperty: 'total',
           successProperty: 'success'
           }
    }
})
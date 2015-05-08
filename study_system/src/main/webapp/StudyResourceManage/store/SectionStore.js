/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-5-6
 * Time: 下午10:44
 * To change this template use File | Settings | File Templates.
 */
Ext.define('StudyResource.store.SectionStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    autoLoad:true,
    fields:[
        {name:'sectionId',type:'int'},
        {name:'sectionName',type:'string'}
    ],
    proxy: {
        type: 'ajax',
        url: 'section/list.do',
        api: {
            read: 'section/list.do'
        },
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
})
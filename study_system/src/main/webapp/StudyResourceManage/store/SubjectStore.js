Ext.define('StudyResource.store.SubjectStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    fields:[
        {name:'subjectId',type:'int'},
        {name:'subjectName',type:'string'}
    ],
    autoLoad:true,
    proxy: {
        type: 'ajax',
        url: 'subject/list.do',
        api: {
            read: 'subject/list.do'
        },
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
})
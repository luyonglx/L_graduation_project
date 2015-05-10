Ext.define('StudyResource.store.QuestionStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    fields:[
        {name:'questionId',type:'int'},
        {name:'questionDesc',type:'string'},
        {name:'subjectId',type:'string'},
        {name:'difficulty',type:'float'},
        {name:'usedRate',type:'float'},
        {name:'createTime',type:'date'},
        {name:'questionType',type:'string'},
        {name:'questionAnalysis',type:'string'}
    ],

    //model:'StudyResource.model.UserModel',
    proxy: {
        type: 'ajax',
        url: 'question/list.do',
        api: {
            update: 'question/update.do',
            read: 'question/list.do',
            create: 'question/add.do',
            destroy: 'question/delete.do'
        },
        reader: {
             type: 'json',
              root: 'data',
             totalProperty: 'total',
             successProperty: 'success'
           }
    }
});

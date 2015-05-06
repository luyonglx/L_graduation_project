Ext.define('StudyResource.store.QuestionStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    fields:[
        {name:'questionId',type:'int'},
        {name:'questionDesc',type:'int'},
        {name:'subjectId',type:'int'},
        {name:'difficulty',type:'float'},
        {name:'usedRate',type:'float'},
        {name:'createTime',type:'date'},
        {name:'questionType',type:'string'},
        {name:'questionAnalysis',type:'string'}
    ],
    //model:'StudyResource.model.UserModel',
    proxy: {
        type: 'ajax',
        url: 'server/examData.json',
        reader:'json'
//        api: {
//            update: 'crawler/crawlerPath/update',
//            read: 'crawler/crawlerPath/query',
//            create: 'crawler/crawlerPath/add',
//            destroy: 'crawler/crawlerPath/delete'
//        },
        //   reader: {
        //   type: 'json'
        //root: 'itemFiles'
        // totalProperty: 'total',
        //  successProperty: 'success'
        //   }
    }
});

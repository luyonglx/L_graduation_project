/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.store.ExamStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    fields:[
        {name:'examPaperId',type:'int'},
        {name:'subjectId',type:'int'},
        {name:'creator',type:'int'},
        {name:'valueRate',type:'float'},
        {name:'examedCount',type:'int'},
        {name:'CreateTime',type:'date'},
        {name:'examPaperName',type:'string'},
        {name:'limitTime',type:'float'}
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
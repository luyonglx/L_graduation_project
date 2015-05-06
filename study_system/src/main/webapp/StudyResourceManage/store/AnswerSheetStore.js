/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.store.AnswerSheetStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    fields:[
        {name:'answerSheetId',type:'int'},
        {name:'userId',type:'int'},
        {name:'examPaperId',type:'int'},
        {name:'answerIdsStr',type:'string'},
        {name:'examTime',type:'date'},
    ],
    proxy: {
        type: 'ajax',
        url: 'server/answerSheetData.json',
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
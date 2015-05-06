Ext.define('StudyResource.store.ItemFileManageStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    model:'StudyResource.model.ItemFileManageModel',
    //autoLoad:true,
    proxy: {
        type: 'ajax',
        url: 'server/resourceData.json',
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
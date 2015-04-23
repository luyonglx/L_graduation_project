Ext.define('StudyResource.store.ItemFileManageStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    model:'StudyResource.model.ItemFileManageModel',
    proxy: {
        type: 'ajax',
        url: 'crawler/crawlerPath/query',
        api: {
            update: 'crawler/crawlerPath/update',
            read: 'crawler/crawlerPath/query',
            create: 'crawler/crawlerPath/add',
            destroy: 'crawler/crawlerPath/delete'
        },
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});
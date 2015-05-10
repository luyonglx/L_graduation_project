Ext.define('StuResource.store.ItemFileStore', {
    extend: 'Ext.data.Store',
    id:'itemFileStore',
    pageSize:8,
    model:'StuResource.model.ItemFileModel',
    autoLoad:true,
    proxy: {
        type: 'ajax',
        url: 'itemFile/list.do',
//        api: {
//            update: 'crawler/crawlerPath/update',
//            read: 'itemFile/list.do',
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
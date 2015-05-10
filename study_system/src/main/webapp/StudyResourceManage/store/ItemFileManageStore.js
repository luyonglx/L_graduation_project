Ext.define('StudyResource.store.ItemFileManageStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    model:'StudyResource.model.ItemFileManageModel',
    //autoLoad:true,
    proxy: {
        type: 'ajax',
        url: 'itemFile/list.do',
        reader:'json',
        api: {
            update: 'itemFile/update.do',
            read: 'itemFile/listManage.do',
            create: 'itemFile/add.do',
            destroy: 'itemFile/delete.do'
        },
        reader: {
            type: 'json',
            root: 'data',
           totalProperty: 'total',
            successProperty: 'success'
        }
    }
});
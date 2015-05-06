/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.store.UserStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    model:'StudyResource.model.UserModel',
    proxy: {
        type: 'ajax',
        url: 'server/userData.json',
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
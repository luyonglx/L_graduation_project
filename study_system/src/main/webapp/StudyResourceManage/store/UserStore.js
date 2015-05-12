/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.store.UserStore', {
    extend: 'Ext.data.Store',
    pageSize: 20,
    model:'StudyResource.model.UserModel',
    autoLoad:true,
    proxy: {
        type: 'ajax',
        url: 'userManage/userList.do',
        reader:'json',
        api: {
            update: 'userManage/update.do',
            read: 'userManage/userList.do',
            create: 'userManage/add.do',
            destroy: 'userManage/del.do'
        },
        reader: {
         type: 'json',
          root: 'data',
         totalProperty: 'total',
          successProperty: 'success'
           }
    }
});
/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.model.UserModel', {
    extend : 'Ext.data.Model',
    fields:[
        {name:'userId',type:'int'},
        {name:'username',type:'string'},
        {name:'level',type:'int'},
        {name:'sex',type:'string'},
        {name:'age',type:'int'},
        {name:'QQ',type:'string'},
        {name:'phone',type:'string'},
        {name:'email',type:'string'},
        {name:'school',type:'string'},
        {name:'gradeId',type:'int'},
        {name:'addressId',type:'int'},
        {name:'registerTime',type:'date'},
        {name:'password',type:'string'},
        {name:'gold',type:'int'}

    ]


});
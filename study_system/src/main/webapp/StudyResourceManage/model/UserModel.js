/**
 * Created by LUYONG on 2015/4/28.
 */
Ext.define('StudyResource.model.UserModel', {
    extend : 'Ext.data.Model',
    fields:[
        {name:'userId',type:'int'},
        {name:'username',type:'string'},
        {name:'level',type:'string'},
        {name:'sex',type:'string'},
        {name:'age',type:'int'},
        {name:'qq',type:'string'},
        {name:'phone',type:'string'},
        {name:'email',type:'string'},
        {name:'school',type:'string'},
        {name:'gradeId',type:'string'},
        {name:'addressId',type:'string'},
        {name:'registerTime',type:'date'},
        {name:'password',type:'string'},
        {name:'gold',type:'int'}

    ]


});
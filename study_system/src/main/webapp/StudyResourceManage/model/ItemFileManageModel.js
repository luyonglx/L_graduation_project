/**
 * Created by jx
 */
Ext.define('StudyResource.model.ItemFileManageModel', {
	extend : 'Ext.data.Model',
    fields:[
        {name:'itemFileId',type:'int'},
        {name:'itemFileName',type:'string'},
        {name:'subjectId',type:'int'},
        {name:'gradeId',type:'int'},
        {name:'fileId',type:'int'},
        {name:'viewCount',type:'int'},
        {name:'evaluate',type:'int'},
        {name:'from',type:'string'},
        {name:'author',type:'string'},
        {name:'relateDocumentId',type:'int'},
        {name:'downloadGold',type:'int'},
        {name:'enteringDate',type:'date'},
        {name:'sectionId',type:'int'}

    ]

});

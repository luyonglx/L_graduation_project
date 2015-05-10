Ext.define('E-learning.store.QuestionStore', {
    extend: 'Ext.data.Store',
    fields:[
        {name:'questionId',type:'int'},
        {name:'questionDesc',type:'string'},
        {name:'subjectId',type:'string'},
        {name:'difficulty',type:'float'},
        {name:'usedRate',type:'float'},
        {name:'createTime',type:'date'},
        {name:'questionType',type:'string'},
        {name:'questionAnalysis',type:'string'}
    ],
    //model:'StudyResource.model.UserModel',

    proxy: {
        type: 'ajax',
        url: 'question/listExam.do',
        api: {
            update: 'question/update.do',
            read: 'question/listExam.do',
            create: 'question/add.do',
            destroy: 'question/delete.do'
        },
        reader: {
             type: 'json',
              root: 'data',
             totalProperty: 'total',
             successProperty: 'success'
           }
    }
});

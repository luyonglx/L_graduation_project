Ext.define('E-learning.store.QuestionTypeStore', {
    extend: 'Ext.data.Store',
    fields:[
        {name:"name",type:'string'},
        {name:"value",type:'string'}
    ],
    //reader:'json',
    data : [
        {name:"选择题",value:'选择题'},
        {name:"简答题",value:'简答题'}
    ]
})

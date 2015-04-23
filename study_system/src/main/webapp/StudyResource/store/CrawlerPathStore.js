Ext.define('Mgr.store.CrawlerPathStore',{
	extend:'Ext.data.Store',
	pageSize:25,
	fields:[
	        {name:'pathId',type:'int'},
            {name:'scanPath',type:'string'},
            {name:'depth',type:'int'},
            {name:'keyword',type:'string'},
            {name:'browseAddr',type:'string'}
        ],
        proxy:{
            type:'ajax',
            url:'crawler/crawlerPath/query',
            api:{
            	update:'crawler/crawlerPath/update',
            	read:'crawler/crawlerPath/query',
            	create:'crawler/crawlerPath/add',
            	destroy:'crawler/crawlerPath/delete'
            },
            reader:{
            	type:'json',
            	root:'data',
            	totalProperty : 'total',
                successProperty : 'success'
            }
        }
});
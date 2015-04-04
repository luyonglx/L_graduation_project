/**
 * Created by LUYONG on 2015/1/8.
 */
Ext.define("StudyOnLine.view.Viewport",{
      extend:'Ext.container.Viewport',
      layout:'border',
      items:[
          {
              region:'north',
             html:'<h1 style="text-align: center">L学习</h1>',
              height:80
          },
          {
              region:'west',
              width:200,
              title:'菜单管理',
              split:true,
              items:[
                     {
                    	 xtype:'button',
                    	 text:'确定',
                    	 handler:function()
                    	 {
                    		 Ext.create('Ext.window.Window',{
                    			 width:300,
                    			 height:250
                    		 }).show();
                    	 }
                     }]
              //xtype:'menuview'
          }
          ,{
              region:'center',
              //title:'内容展示',
              xtype:'tabpanel',

              //id:'mainContent',
              items:[
                  {
                      title:'欢迎',
                      html:'<h1>欢迎使用L学习系统</h1>'
                  }
              ]

          },
          {
        	  region:'south',
        	  html:'版权@L',
        	  height:20
          }



      ]

});

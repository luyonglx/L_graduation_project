
Ext.define("StudyResource.view.Viewport",
				{
					extend : 'Ext.container.Viewport',
					layout : 'border',
                    height:'100%',
					items : [
							{
								region : 'west',
                                width:'16%',
                                xtype:'navigation',
                                border:false

							},
							{
								region : 'center',
                                xtype:'tabpanel',
                                border:false,
								layout : 'fit',
								items : [
                                        {
                                              xtype:'itemFileManageTab'
                                         }
                                ]
							},
							{
								xtype : 'panel',
								region : 'north',
                                //#d6e6fa
                                html : '<div class="com-header">' +
                                    '<div class="logo"></div>'+
                                    '<h2 class="back-end">后台管理系统</h2>'+
                                    '</div>'
							}, {
								xtype : 'toolbar',
								region : 'south',
								ui : 'footer',
								margin : '7 0 0 0',
								items : [ '就绪', '->', '&copy;' ]
							} ]

				});

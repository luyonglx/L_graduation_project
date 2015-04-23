/**
 * Created by LUYONG on 2015/1/8.
 */
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
								html : '<div style="background-color:#d6e6fa;padding: 20px;' +
                                             ' font-size:30px; height:105px; line-height: 40px; padding-left: 20px;">' +
                                             '<div style="background:url(resource/images/logo.png) no-repeat;width: 240px;height: 80px;">' +
                                             '</div>' +
                                        '</div>'
							}, {
								xtype : 'toolbar',
								region : 'south',
								ui : 'footer',
								margin : '7 0 0 0',
								items : [ '就绪', '->', '&copy; 2015 西南大学 ——罗谐' ]
							} ]

				});

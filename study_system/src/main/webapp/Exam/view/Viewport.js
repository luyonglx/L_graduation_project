/**
 * Created by LUYONG on 2015/1/8.
 */
Ext.define("E-learning.view.Viewport",
				{
					extend : 'Ext.container.Viewport',
					layout : 'border',
                    height:'100%',
					items : [
							{
								region : 'west',
                                width:'16%',
                                xtype:'navigation'

							},
							{
								region : 'center',
								xtype : 'panel',
								layout : 'fit',

								items : [
                                         {
                                           xtype:'examTab'
                                          }
                                ]
							},
							{
								xtype : 'panel',
								region : 'north',
                                html : '<div style="background-color:#d6e6fa;padding: 20px;' +
                                    ' font-size:30px; height:105px; line-height: 40px; padding-left: 20px;">' +
                                    '<div style="background:url(resource/images/logo.png) no-repeat;width: 240px;height: 80px;">' +
                                    '</div>' +
                                    '</div>'
								//html : '<div style="background-color:#d6e6fa; font-size:30px; height:45px; line-height: 40px; padding-left: 20px;">考出你的风采</div>'
							}, {
								xtype : 'toolbar',
								region : 'south',
								ui : 'footer',
								margin : '7 0 0 0',
								items : [ '就绪', '->', '&copy; 2015 西南大学 ——罗谐' ]
							} ]

				});

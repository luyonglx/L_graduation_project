/**
 * Created by LUYONG on 2015/1/8.
 */
Ext.define("StudyOnLine.view.Viewport",
				{
					extend : 'Ext.container.Viewport',
					layout : 'border',
					items : [
							{
								region : 'west',
                                xtype:'navigation'

							},
							{
								region : 'center',


								xtype : 'tabpanel',
								layout : {
									type : 'fit'
								},
								items : [
										{
											title:'欢迎',
                                            frame:true,
											html : '<h2>欢迎来到L学习系统</h2>'
										} ]
							},
							{
								xtype : 'panel',
								region : 'north',
								height : 50,
								html : '<div style="background-color:#804b65; font-size:30px; height:45px; line-height: 40px; padding-left: 20px;">考出你的风采</div>'
							}, {
								xtype : 'toolbar',
								region : 'south',
								ui : 'footer',
								margin : '7 0 0 0',
								items : [ '就绪', '->', '&copy; 2014 浙江工业大学' ]
							} ]

				});

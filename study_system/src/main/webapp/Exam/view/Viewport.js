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
                                html : '<div class="com-header">' +
                                    '<div class="logo"></div>'+
                                    '<h2>2014年普通高等学校招生全国统一考试 语文</h2>'+
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

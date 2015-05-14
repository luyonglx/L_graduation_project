/**
 * Created by LUYONG on 2015/1/8.
 */
Ext.define("E-learning.view.Viewport",
				{
					extend : 'Ext.container.Viewport',
					layout : 'border',
                    height:'100%',
					items : [
							//{
                        //	region : 'west',
                        //   width:'16%',
                        //   xtype:'navigation'
                        //
                        //},
							{
								region : 'center',
                                id:'examContainer',
								xtype : 'panel',
								layout : 'fit',
								items : [
                                         {
                                           xtype:'chooseExamPaper'
                                          }
                                ]
							},
							{
								xtype : 'panel',
								region : 'north',
                                html : '<div class="com-header">' +
                                    '<div class="logo"></div>'+
                                    '<h2>在线考试系统</h2>'+
                                    '</div>'
								//html : '<div style="background-color:#d6e6fa; font-size:30px; height:45px; line-height: 40px; padding-left: 20px;">考出你的风采</div>'
							}, {
								xtype : 'toolbar',
								region : 'south',
								ui : 'footer',
								margin : '7 0 0 0',
								items : [ '就绪', '->', '&copy;西南大学 -罗谐' ]
							} ]

				});

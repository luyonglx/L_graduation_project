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
								html : '<div class="com-header">' +
                                '<div class="logo">' +
                                '</div>' +
                                '<div class="top-linked">' +
                                    '<a href="###">首页</a>'+
                                    '<a href="###">知识大纲区</a>'+
                                    '<a href="###">在线考试区</a>'+
                                    '<a href="###">论坛</a>'+
                                    '<a href="###">个人空间</a>'+
                                    '<div class="log-form">' +
                                        '<a class="login" href="">登录</a>'+
                                        '<a href="">注册</a>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
							}, {
								xtype : 'toolbar',
								region : 'south',
								ui : 'footer',
								margin : '7 0 0 0',
								items : [ '就绪', '->', '&copy; 2015 西南大学 ——罗谐' ]
							} ]

				});

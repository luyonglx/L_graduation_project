/**
 * Created by LUYONG on 2015/1/8.
 */
Ext
		.define(
				"StudyOnLine.view.Viewport",
				{
					extend : 'Ext.container.Viewport',
					layout : 'border',
					items : [
							{
								//xtype: 'appnavi',
								 region : 'west',
								 layout: 'accordion',
								    width: 230,
								    split: true,
								    collapsed: true,
								    collapsible: true,
								    title: 'System Main Menu',
								    defaults: {
								        autoScroll: true,
								        layout: {
								            type: 'vbox',
								            pack: 'start',
								            align: 'stretch'
								        },
								        defaults: {
								            xtype: 'button',
								            width: 50,
								            height: 30,
								            margins: '10 5 10 5'
								        }
								    },
								    items: [
								        {
								        	xtype: 'panel',
								        	title: 'Grid Example List',
								        	items: [
								                {
								                	text: 'Simple Grid'
								                },
								                {
								                	text: 'Local Grid'
								                },
								                {
								                	text: 'Mutil Grid'
								                },
								                {
								                	text: 'Change Grid'
								                }
								        	]
								        },
								        {
								        	xtype: 'panel',
								        	title: 'Tree Example List',
								        	items: [
								                {
								                	text: 'Tree Grid'
								                },
								                {
								                	text: 'Tree Drop'
								                },
								                {
								                	text: 'Tree Node'
								                },
								                {
								                	text: 'Tree Mutil'
								                }
								        	]
								        },
								        {
								        	xtype: 'panel',
								        	title: 'Chart Example List',
								        	items: [
								                {
								                	text: 'Pie Chart'
								                },
								                {
								                	text: '3D Chart'
								                },
								                {
								                	text: 'Line Chart'
								                },
								                {
								                	text: 'Cube Chart'
								                }
								        	]
								        }
								    ]

							},
							{
								region : 'center',
								xtype : 'tabpanel',
								layout : {
									type : 'fit',

								},
								items : [
										{
											html : '<h2>Thie Page for the Application Start.</h2>'
										}, {
											title : 'Test Grid',
											items : [ {
												xtype : 'grid',
												// title: 'Person Grid
												// DataView',
												height : 300,
												

											} ]
										}, {
											title : 'Log In',
											items : [ {
												xtype : 'panel',
												items : [ {
													xtype : 'textfield',
													fieldLabel : 'LoginName'
												}, {
													xtype : 'textfield',
													fieldLabel : 'PassWord'
												}, {
													xtype : 'numberfield',
													fieldLabel : 'SubmitNo'
												} ]
											} ]
										} ]
							},
							{
								xtype : 'panel',
								region : 'north',
								height : 50,
								html : '<div style="background-color:#804b65; font-size:30px; height:45px; line-height: 40px; padding-left: 20px;">L学习</div>'
							}, {
								xtype : 'toolbar',
								region : 'south',
								ui : 'footer',
								margin : '7 0 0 0',
								items : [ '就绪', '->', '&copy; 2014 浙江工业大学' ]
							} ]

				});

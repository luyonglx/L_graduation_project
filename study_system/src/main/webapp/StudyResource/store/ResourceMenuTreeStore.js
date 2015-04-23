/**
 * Created with JetBrains WebStorm.
 * User: LY
 * Date: 15-4-23
 * Time: 下午9:38
 * To change this template use File | Settings | File Templates.
 */
Ext.define('StuResource.store.ResourceMenuTreeStore',{
    extend:'Ext.data.TreeStore',
    root:{
        expanded:true,
        children:[
            {
                text:"一年级",
                expanded:true,
                children:[
                    {
                        text:'语文',
                        leaf:true
                    },
                    {
                        text:'数学',
                        leaf:true
                    },
                    {
                        text:'英语',
                        leaf:true
                    },
                    {
                        text:'理科综合',
                        leaf:true
                    },

                    {
                        text:'文科综合',
                        leaf:true
                    }
                ]


            },

            { text:"二年级",
                expanded:true,
                children:[
                    {
                        text:'语文',
                        leaf:true
                    },
                    {
                        text:'数学',
                        leaf:true
                    },
                    {
                        text:'英语',
                        leaf:true
                    },
                    {
                        text:'理科综合',
                        leaf:true
                    },

                    {
                        text:'文科综合',
                        leaf:true
                    }
                ]
            },

            { text:"三年级",
                children:[
                    {
                        text:'语文',
                        leaf:true
                    },
                    {
                        text:'数学',
                        leaf:true
                    },
                    {
                        text:'英语',
                        leaf:true
                    },
                    {
                        text:'理科综合',
                        leaf:true
                    },

                    {
                        text:'文科综合',
                        leaf:true
                    }
                ]

            },
            { text:"考前冲刺",
                children:[
                    {
                        text:'语文',
                        leaf:true
                    },
                    {
                        text:'数学',
                        leaf:true
                    },
                    {
                        text:'英语',
                        leaf:true
                    },
                    {
                        text:'理科综合',
                        leaf:true
                    },

                    {
                        text:'文科综合',
                        leaf:true
                    }
                ]

            }
        ]
    }
});
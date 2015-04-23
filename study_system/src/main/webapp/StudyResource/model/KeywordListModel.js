/**
 * Created by jx
 */
Ext.define('Mgr.model.KeywordListModel', {
	extend : 'Ext.data.Model',
	fields : [ 'keywordId', 'keywordName', 'keywordType', 'commodityTypeId',
			'keywordFormat', {
				name : 'operateTime',
				type : 'date',
				convert : function(value, record) {
					if (!value || value == null || value == 0)
						return null;
					return new Date(value);
				}
			}, 'operatorId' ]

});

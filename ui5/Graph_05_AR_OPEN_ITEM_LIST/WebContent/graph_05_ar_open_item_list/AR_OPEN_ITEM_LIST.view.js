sap.ui.jsview("graph_05_ar_open_item_list.AR_OPEN_ITEM_LIST", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf graph_05_ar_open_item_list.AR_OPEN_ITEM_LIST
	*/ 
	getControllerName : function() {
		return "graph_05_ar_open_item_list.AR_OPEN_ITEM_LIST";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf graph_05_ar_open_item_list.AR_OPEN_ITEM_LIST
	*/ 
	createContent : function(oController) {

		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [ {
				axis : 1,
				name : 'Kunnr',
				value : "{Kunnr}"
			} ],
			measures : [ {
				name : 'Dmbtr',
				value : '{Dmbtr}'
			} ],
			data : {
				path : "/ZTIT12_22Set",
				filters : [
//				 new
//				 sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
				]
			}
		});

		var oChart = new sap.viz.ui5.Donut({
			width : "80%",
			height : "400px",
			title : {
				visible : true,
				text : 'ZTIT12_22Set Graph'
			},
		});

		oChart.setDataset(oDataset);
	//	oChart.bindRows("/FlightChartSet");
		
//		oChart.setModel(oModel);

		return oChart;

	}

});
sap.ui.jsview("graph_05_table.TABLE", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf graph_05_table.TABLE
	*/ 
	getControllerName : function() {
		return "graph_05_table.TABLE";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf graph_05_table.TABLE
	*/ 
	createContent : function(oController) {

		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [ {
				axis : 1,
				name : 'Lifnr',
				value : "{Lifnr}"
			} ],
			measures : [ {
				name : 'Dmbtr',
				value : '{Dmbtr}'
			} ],
			data : {
				path : "/ZTIT12_21Set",
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
				text : 'ZTIT12_21Set'
			},
		});

		oChart.setDataset(oDataset);
	//	oChart.bindRows("/FlightChartSet");
		
//		oChart.setModel(oModel);

		return oChart;

	}

});
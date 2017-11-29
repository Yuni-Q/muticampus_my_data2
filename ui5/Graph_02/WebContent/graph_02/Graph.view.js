sap.ui.jsview("graph_02.Graph", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf graph_02.Graph
	 */
	getControllerName : function() {
		return "graph_02.Graph";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf graph_02.Graph
	 */
	createContent : function(oController) {

//		var oModel = new sap.ui.model.json.JSONModel({
//			"DocumentSet" : [ {
//				"Bukrs" : "1000",
//				"Gjahr" : "2017",
//				"Belnr" : "0100000012",
//				"Dmbtr" : "3795.85",
//				"Kostl" : "4230"
//			}, {
//				"Bukrs" : "1000",
//				"Gjahr" : "2017",
//				"Belnr" : "0100000014",
//				"Dmbtr" : "1083.39",
//				"Kostl" : "4220"
//			}, {
//				"Bukrs" : "1000",
//				"Gjahr" : "2017",
//				"Belnr" : "0100000014",
//				"Dmbtr" : "883.76",
//				"Kostl" : "4230"
//			}, {
//				"Bukrs" : "1000",
//				"Gjahr" : "2017",
//				"Belnr" : "0100000014",
//				"Dmbtr" : "1354.17",
//				"Kostl" : "4230"
//			}, {
//				"Bukrs" : "1000",
//				"Gjahr" : "2017",
//				"Belnr" : "0100000058",
//				"Dmbtr" : "1410.64",
//				"Kostl" : "4230"
//			}, {
//				"Bukrs" : "1000",
//				"Gjahr" : "2017",
//				"Belnr" : "0100000058",
//				"Dmbtr" : "218.08",
//				"Kostl" : "4230"
//			} ]
//		});
		
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [ {
				axis : 1,
				name : 'Connid',
				value : "{Connid}"
			} ],
			measures : [ {
				name : 'Price',
				value : '{Price}'
			} ],
			data : {
				path : "/FlightChartSet",
				filters : [
				// new
				// sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
				]
			}
		});

		var oChart = new sap.viz.ui5.Donut({
			width : "80%",
			height : "400px",
			title : {
				visible : true,
				text : 'Documen Graph'
			},
		});

		oChart.setDataset(oDataset);
	//	oChart.bindRows("/FlightChartSet");
		
//		oChart.setModel(oModel);

		return oChart;

	}

});

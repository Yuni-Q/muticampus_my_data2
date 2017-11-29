sap.ui.jsview("graph_04_bkpfandbsik.bkpfandbsik", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf graph_04_bkpfandbsik.bkpfandbsik
	*/ 
	getControllerName : function() {
		return "graph_04_bkpfandbsik.bkpfandbsik";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf graph_04_bkpfandbsik.bkpfandbsik
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
				path : "/BKPFandBKIKSet",
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
				text : 'ZTIT12_18 Graph'
			},
		});

		oChart.setDataset(oDataset);
	//	oChart.bindRows("/FlightChartSet");
		
//		oChart.setModel(oModel);

		return oChart;

	}

});
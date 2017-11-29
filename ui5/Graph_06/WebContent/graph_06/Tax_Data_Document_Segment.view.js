sap.ui.jsview("graph_06.Tax_Data_Document_Segment", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf graph_06.Tax_Data_Document_Segment
	*/ 
	getControllerName : function() {
		return "graph_06.Tax_Data_Document_Segment";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf graph_06.Tax_Data_Document_Segment
	*/ 
	createContent : function(oController) {

		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [ {
				axis : 1,
				name : 'Mwskz',
				value : "{Mwskz}"
			} ],
			measures : [ {
				name : 'Amount',
				value : '{Hwbas}'
			} ],
			data : {
				path : "/ZTIT12_33Set",
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
				text : 'Chart of Tax segment'
			},
		});

		oChart.setDataset(oDataset);
	//	oChart.bindRows("/FlightChartSet");
		
//		oChart.setModel(oModel);

		return oChart;

	}

});
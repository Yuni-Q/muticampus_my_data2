sap.ui.jsview("ztit12_adbc_g.ADBC", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ztit12_adbc_g.ADBC
	*/ 
	getControllerName : function() {
		return "ztit12_adbc_g.ADBC";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ztit12_adbc_g.ADBC
	*/ 
	createContent : function(oController) {

		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [ {
				axis : 1,
				name : 'Ctime',
				value : "{Br}"
			} ],
			measures : [ {
				name : 'Humi',
				value : '{Humi}'
			} ],
			data : {
				path : "/TEST02Set",
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
				text : 'ADBC'
			},
		});

		oChart.setDataset(oDataset);
	//	oChart.bindRows("/FlightChartSet");
		
//		oChart.setModel(oModel);

		return oChart;

	}

});
sap.ui.controller("graph_06.Tax_Data_Document_Segment", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf graph_06.Tax_Data_Document_Segment
*/
	onInit: function() {
		var oModel = new sap.ui.model.odata.ODataModel(
				"proxy/http/ehp8.innoever.net:8080/sap/opu/odata/sap/Z_TAX_DATA_DOCUMENT_SEGMENT_SRV/");
		sap.ui.getCore().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf graph_06.Tax_Data_Document_Segment
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf graph_06.Tax_Data_Document_Segment
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf graph_06.Tax_Data_Document_Segment
*/
//	onExit: function() {
//
//	}

});
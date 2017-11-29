sap.ui.jsview("zit12_01.ALV_Test", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf zit12_01.ALV_Test
	 */
	getControllerName : function() {
		return "zit12_01.ALV_Test";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf zit12_01.ALV_Test
	 */
	createContent : function(oController) {
		// Input field
		var oform = new sap.ui.layout.form.SimpleForm("form1", {
			title : "Data Maintainance",
			content : [ new sap.ui.commons.Label({
				text : "항공사"
			}), new sap.ui.commons.TextField("Carrid", {
				width : "50px"
			}),

			new sap.ui.commons.Label({
				text : "항공사 name"
			}), new sap.ui.commons.TextField("Carrname", {
				width : "100px"
			}),

			new sap.ui.commons.Label({
				text : "URL"
			}), new sap.ui.commons.TextField("Url", {
				width : "200px"
			}),

			new sap.ui.commons.Label({
				text : ""
			}), new sap.ui.commons.Button({
				text : "Save",
				width : "100px",
				press : function() {
					oController.save();
				}
			})

			]
		});
		var myButton = new sap.ui.commons.Button("btn");
		myButton.setText("Fade out");
		myButton.attachPress(function() {
			$("#btn").fadeOut()
		});

		// Button
		var clickButton = new sap.ui.commons.Button({
			text : "Click",
			width : "100px",
			press : function() {
				oController.msg();
			}
		});

		// Table
//		var oModel = new sap.ui.model.json.JSONModel({
//			"ScarrSet" : [ {
//				"Carrid" : "AA",
//				"Carrname" : "American Airlines",
//				"Currcode" : "USD",
//				"Url" : "http://www.aa.com"
//			}, {
//				"Carrid" : "AB",
//				"Carrname" : "Air Berlin",
//				"Currcode" : "EUR",
//				"Url" : "http://www.airberlin.de"
//			}, {
//				"Carrid" : "AC",
//				"Carrname" : "Air Canada",
//				"Currcode" : "CAD",
//				"Url" : "http://www.aircanada.ca"
//			}, {
//				"Carrid" : "AF",
//				"Carrname" : "Air France",
//				"Currcode" : "EUR",
//				"Url" : "http://www.airfrance.fr"
//			}, {
//				"Carrid" : "AZ",
//				"Carrname" : "Alitalia",
//				"Currcode" : "EUR",
//				"Url" : "http://www.alitalia.it"
//			}, {
//				"Carrid" : "BA",
//				"Carrname" : "British Airways",
//				"Currcode" : "GBP",
//				"Url" : "http://www.british-airways.com"
//			}, {
//				"Carrid" : "CO",
//				"Carrname" : "Continental Airlines",
//				"Currcode" : "USD",
//				"Url" : "http://www.continental.com"
//			}, {
//				"Carrid" : "DL",
//				"Carrname" : "Delta Airlines",
//				"Currcode" : "USD",
//				"Url" : "http://www.delta-air.com"
//			}, {
//				"Carrid" : "FJ",
//				"Carrname" : "Air Pacific",
//				"Currcode" : "USD",
//				"Url" : "http://www.airpacific.com"
//			}, {
//				"Carrid" : "JL",
//				"Carrname" : "Japan Airlines",
//				"Currcode" : "JPY",
//				"Url" : "http://www.jal.co.jp"
//			}, {
//				"Carrid" : "LH",
//				"Carrname" : "Lufthansa",
//				"Currcode" : "EUR",
//				"Url" : "http://www.lufthansa.com"
//			}, {
//				"Carrid" : "NG",
//				"Carrname" : "Lauda Air",
//				"Currcode" : "EUR",
//				"Url" : "http://www.laudaair.com"
//			}, {
//				"Carrid" : "NW",
//				"Carrname" : "Northwest Airlines",
//				"Currcode" : "USD",
//				"Url" : "http://www.nwa.com"
//			}, {
//				"Carrid" : "QF",
//				"Carrname" : "Qantas Airways",
//				"Currcode" : "AUD",
//				"Url" : "http://www.qantas.com.au"
//			}, {
//				"Carrid" : "SA",
//				"Carrname" : "South African Air.",
//				"Currcode" : "ZAR",
//				"Url" : "http://www.saa.co.za"
//			}, {
//				"Carrid" : "SQ",
//				"Carrname" : "Singapore Airlines",
//				"Currcode" : "SGD",
//				"Url" : "http://www.singaporeair.com"
//			}, {
//				"Carrid" : "SR",
//				"Carrname" : "Swiss",
//				"Currcode" : "CHF",
//				"Url" : "http://www.swiss.com"
//			}, {
//				"Carrid" : "UA",
//				"Carrname" : "United Airlines",
//				"Currcode" : "USD",
//				"Url" : "http://www.ual.com"
//			} ]
//		});

		// Create table
		var oTable = new sap.ui.table.Table({
			title : "Scarr table",
			visibleRowCount : 7,
			selectionMode : sap.ui.table.SelectionMode.Single,
			// selectionMode: sap.ui.table.SelectionMode.Multi,
			navigationMode : sap.ui.table.NavigationMode.Paginator,
			fixedColumnCount : 1,
			width : "755px"
		});

		// Add column
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "항공사 code"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Carrid"),
			sortProperty : "Carrid",
			filterProperty : "Carrid",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "항공사 name"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Carrname"),
			sortProperty : "Carrname",
			filterProperty : "Carrname",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "현지통화"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Currcode"),
			sortProperty : "Currcode",
			filterProperty : "Currcode",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "URL"
			}),
			template : new sap.ui.commons.TextView()
					.bindProperty("text", "Url"),
			sortProperty : "Url",
			filterProperty : "Url",
			width : "180px"
		}));
		oTable.bindRows("/AirlineSet");
//		oTable.setModel(oModel);

		// Shell
		var oShell = new sap.ui.ux3.Shell({
			appTitle : "Test Shell",
			showSearchTool : true,
			showFeederTool : true,
			worksetItems : [ new sap.ui.ux3.NavigationItem("oNavItem1", {key : "Nav_1",	text : "Table",}),
			                 new sap.ui.ux3.NavigationItem("oNavItem2", {key : "Nav_2",	text : "oform",}),
			                 ],
			content : [oTable, oform],
			worksetItemSelected : function(oEvent) {
				var sId = oEvent.getParameter("id");
				var oShell = oEvent.oSource;
				switch (sId) {
				case "oNavItem1":
					oShell.setContent(oTable)
					oShell.addContent(oform);
					break;
				case "oNavItem2" :
					oShell.setContent(oform);
					break;					
				default:
					break;

				}
			}
		
		});

			

		var rtn = [ myButton, clickButton, oShell,];
		return rtn;

	}

});

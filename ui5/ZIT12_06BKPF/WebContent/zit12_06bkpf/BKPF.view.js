sap.ui.jsview("zit12_06bkpf.BKPF", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zit12_06bkpf.BKPF
	*/ 
	getControllerName : function() {
		return "zit12_06bkpf.BKPF";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zit12_06bkpf.BKPF
	*/ 
	createContent : function(oController) {

		// Create table
		var oTable = new sap.ui.table.Table({
			title : "BKPF",
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
				text : "Company Code"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Bukrs"),
			sortProperty : "Bukrs",
			filterProperty : "Bukrs",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Accounting Document Number"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Belnr"),
			sortProperty : "Belnr",
			filterProperty : "Belnr",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Fiscal Year"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Gjahr"),
			sortProperty : "Gjahr",
			filterProperty : "Gjahr",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Document type"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Blart"),
			sortProperty : "Blart",
			filterProperty : "Blart",
			width : "150px"
		}));		
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Document Date in Document"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Budat"),
			sortProperty : "Budat",
			filterProperty : "Budat",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Document Header Text"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Bktxt"),
			sortProperty : "Bktxt",
			filterProperty : "Bktxt",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Currency Key"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Waers"),
			sortProperty : "Waers",
			filterProperty : "Waers",
			width : "150px"
		}));
		
		oTable.bindRows("/BKPFSet");

		// Shell
		var oShell = new sap.ui.ux3.Shell({
			appTitle : "Test Shell",
			showSearchTool : true,
			showFeederTool : true,
			worksetItems : [ new sap.ui.ux3.NavigationItem("oNavItem1", {
				key : "Nav_1",
				text : "Table"
			}), ],
			content : oTable,
			worksetItemSelected : function(oEvent) {
				var sId = oEvent.getParameter("id");
				var oShell = oEvent.oSource;
				switch (sId) {
				case "oNavItem1":
					oShell.setContent(oTable);
					break;
				default:
					break;
				}
			}
		});

		var rtn = [ oShell ];
		return rtn;

	}

});
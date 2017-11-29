sap.ui.jsview("zit12_adbc.ADBC", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zit12_06bkpf.BKPF
	*/ 
	getControllerName : function() {
		return "zit12_06adbc.ADBC";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zit12_06bkpf.BKPF
	*/ 
	createContent : function(oController) {

		// Create table
		var oTable = new sap.ui.table.Table({
			title : "ADBC",
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
				text : "Devid"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Devid"),
			sortProperty : "Devid",
			filterProperty : "Devid",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Cdate"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Cdate"),
			sortProperty : "Cdate",
			filterProperty : "Cdate",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Ctime"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Ctime"),
			sortProperty : "Ctime",
			filterProperty : "Ctime",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Tem"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Tem"),
			sortProperty : "Tem",
			filterProperty : "Tem",
			width : "150px"
		}));		
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Humi"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Humi"),
			sortProperty : "Humi",
			filterProperty : "Humi",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Br"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Br"),
			sortProperty : "Br",
			filterProperty : "Br",
			width : "150px"
		}));
			
		oTable.bindRows("/ADBCSampleSet");

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
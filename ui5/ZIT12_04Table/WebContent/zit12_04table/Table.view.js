sap.ui.jsview("zit12_04table.Table", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf zit12_04table.Table
	 */
	getControllerName : function() {
		return "zit12_04table.Table";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf zit12_04table.Table
	 */
	createContent : function(oController) {

		// Create table
		var oTable = new sap.ui.table.Table({
			title : "Business area text",
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
				text : "Client"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Mandt"),
			sortProperty : "Mandt",
			filterProperty : "Mandt",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Language"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Spras"),
			sortProperty : "Spras",
			filterProperty : "Spras",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Biz Area"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Gsber"),
			sortProperty : "Gsber",
			filterProperty : "Gsber",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Biz area name"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Gtext"),
			sortProperty : "Gtext",
			filterProperty : "Gtext",
			width : "150px"
		}));

		oTable.bindRows("/BizAreaTextSet");
		//		oTable.setModel(oModel);

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

sap.ui.jsview("zit12_02_table.Table", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf zit12_02_table.Table
	 */
	getControllerName : function() {
		return "zit12_02_table.Table";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf zit12_02_table.Table
	 */
	createContent : function(oController) {
		// Table
		var oModel = new sap.ui.model.json.JSONModel({
			"HeaderSet" : [ {
				"Belnr" : "0100000802",
				"Bktxt" : "AFB01201600101-0000000001",
				"Budat" : "2016.01.31",
				"Waers" : "EUR"
			}, {
				"Belnr" : "0500000227",
				"Bktxt" : "AFB20201600301-0000000009",
				"Budat" : "2016.02.29",
				"Waers" : "EUR"
			}, {
				"Belnr" : "0500000244",
				"Bktxt" : "AFB01201600401-0000000011",
				"Budat" : "2016.03.31",
				"Waers" : "KRW"
			}, {
				"Belnr" : "0500000246",
				"Bktxt" : "AFB01201600101-0000000087",
				"Budat" : "2016.04.30",
				"Waers" : "KRW"
			}, {
				"Belnr" : "0600000173",
				"Bktxt" : "AFB01201600101-0000000077",
				"Budat" : "2016.05.31",
				"Waers" : "KRW"
			}, {
				"Belnr" : "0600000174",
				"Bktxt" : "AFB01201600101-0000000767",
				"Budat" : "2016.06.30",
				"Waers" : "USD"
			}, {
				"Belnr" : "0500000233",
				"Bktxt" : "AFB01201600101-0000000786",
				"Budat" : "2016.07.31",
				"Waers" : "CAD"
			}, {
				"Belnr" : "0600000167",
				"Bktxt" : "AFB01201600101-0000000081",
				"Budat" : "2016.08.31",
				"Waers" : "BEF"
			}, {
				"Belnr" : "0600000168",
				"Bktxt" : "AFB01201600101-0000000097",
				"Budat" : "2016.09.30",
				"Waers" : "ATS"
			} ]
		});

		// Create table
		var oTable = new sap.ui.table.Table({
			title : "BKPF table",
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
				text : "회계 전표 번호"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Belnr"),
			sortProperty : "Belnr",
			filterProperty : "Belnr",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "전표의 전기일"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Bktxt"),
			sortProperty : "Bktxt",
			filterProperty : "Bktxt",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "전표 헤더 텍스트"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Budat"),
			sortProperty : "Budat",
			filterProperty : "Budat",
			width : "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "통화키"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text",
					"Waers"),
			sortProperty : "Waers",
			filterProperty : "Waers",
			width : "150px"
		}));
		
		oTable.bindRows("/HeaderSet");
		oTable.setModel(oModel);
		
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
		
		var rtn = [oShell];
		return rtn;

	}

});

sap.ui.jsview("zit12_07_set_02.SET_02", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf zit12_07_set_02.SET_02
	 */
	getControllerName : function() {
		return "zit12_07_set_02.SET_02";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf zit12_07_set_02.SET_02
	 */
	createContent : function(oController) {

		//Table
		var oTable = new sap.ui.table.Table("itab1",{
				visibleRowCount: 10,
				selectionMode: sap.ui.table.SelectionMode.Single,
				navigationMode: sap.ui.table.NavigationMode.Paginator,
				fixedColumnCount: 2,
				width: "550px"});
		
		// Add column
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "코드"}),
			template : new sap.ui.commons.TextView().bindProperty("text","Code"),
			sortProperty: "Code", filterProperty: "Code", width: "100px" }));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "코드그룹"}),
			template : new sap.ui.commons.TextView().bindProperty("text","Group1"),
			sortProperty: "Group1", filterProperty: "Group1", width: "100px" }));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "코드명"}),
			template : new sap.ui.commons.TextView().bindProperty("text","Name"),
			sortProperty: "Name", filterProperty: "Name", width: "310px" }));
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "총합"}),
			template : new sap.ui.commons.TextView().bindProperty("text","Total"),
			sortProperty: "Total", filterProperty: "Total", width: "310px" }));
		
		oTable.bindRows("/UI5TestSet");
		
		// Input field
	    var oform = new sap.ui.layout.form.SimpleForm("form1", {
				title: "Data Maintainance",
				content: [
				     new sap.ui.commons.Label({text: "코드"}),
				     new sap.ui.commons.TextField("code", {width: "50px"}),
				     
				     new sap.ui.commons.Label({text: "코드그룹"}),
				     new sap.ui.commons.TextField("group1", {width: "30px"}),
				     
				     new sap.ui.commons.Label({text: "코드명"}),
				     new sap.ui.commons.TextField("name", {width: "80px"}),
				     
				     new sap.ui.commons.Label({text: "총합"}),
				     new sap.ui.commons.TextField("total", {width: "80px"}),
				     				     
				     new sap.ui.commons.Label({text: ""}),
				     new sap.ui.commons.Button({
				    	 text: "Save",
				    	 width: "100px",
				    	 press: function(){
				    		 oController.save();
				    	 }
				     })
				     
				 ]});
		
		var rtn = [oTable, oform];
		
		return rtn;

	}

});

var oModle = '';
sap.ui
		.controller(
				"zit12_07_set_02.SET_02",
				{

					/**
					* Called when a controller is instantiated and its View controls (if available) are already created.
					* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
					* @memberOf zit16_10.TEST
					*/
					   onInit: function() {
					      oModel = new sap.ui.model.odata.ODataModel
					      ("proxy/http/ehp8.innoever.net:8080/sap/opu/odata/sap/Z_UI5_12_SRV");
					      sap.ui.getCore().setModel(oModel);
					   },
					   save: function(){
					      sap.ui.getCore().setModel(oModel);
					      oModel.setHeaders({"X-Requested-With": "XMLHttpRequest",    //mandatory
					                          "Content-Type": "application/atom+xml",
					                          "DataServiceVersion": "2.0",
					                          "X-CSRF-Token": "Fetch"});
					         
					      var newData = {
					         "Code": $("#code").val(),
					         "Group1": $("#group1").val(),
					         "Name": $("#name").val(),
					         "Total": $("#total").val()
					      }
					         
					         oModel.create('/UI5TestSet',
					            newData,
					            null,
					            function(){
					               sap.ui.getCore().getModel().refresh();
//					                         $("#form1").slideUp();
					               $("#form1").slideDown(function(){
					            	   $("#code").val('');
					            	   $("#group1").val('');
					            	   $("#name").val('');
					            	   $("#total").val('');
					            	   
					               });
					            },
					            function(){
					               alert("Create failed");
					            }
					          );
					   }

				/**
				 * Similar to onAfterRendering, but this hook is invoked before
				 * the controller's View is re-rendered (NOT before the first
				 * rendering! onInit() is used for that one!).
				 * 
				 * @memberOf zit12_07_set_02.SET_02
				 */
				// onBeforeRendering: function() {
				//
				// },
				/**
				 * Called when the View has been rendered (so its HTML is part
				 * of the document). Post-rendering manipulations of the HTML
				 * could be done here. This hook is the same one that SAPUI5
				 * controls get after being rendered.
				 * 
				 * @memberOf zit12_07_set_02.SET_02
				 */
				// onAfterRendering: function() {
				//
				// },
				/**
				 * Called when the Controller is destroyed. Use this one to free
				 * resources and finalize activities.
				 * 
				 * @memberOf zit12_07_set_02.SET_02
				 */
				// onExit: function() {
				//
				// }
				});
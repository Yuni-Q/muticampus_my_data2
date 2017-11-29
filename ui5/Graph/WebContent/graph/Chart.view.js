sap.ui.jsview("graph.Chart", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf graph.Chart
	 */
	getControllerName : function() {
		return "graph.Chart";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf graph.Chart
	 */
	createContent : function(oController) {

		// Graph
		var oModel = new sap.ui.model.json.JSONModel({
			"SflightSet" : [ {
				"Carrid" : "AA",
				"Connid" : "0017",
				"Fldate" : "\/Date(1268179200000)\/",
				"Price" : "422.94",
				"Currency" : "USD",
				"Planetype" : "747-400",
				"Seatsmax" : 385,
				"Seatsocc" : 0,
				"Paymentsum" : "0.00",
				"SeatsmaxB" : 31,
				"SeatsoccB" : 0,
				"SeatsmaxF" : 21,
				"SeatsoccF" : 0
			}, {
				"Carrid" : "AZ",
				"Connid" : "0555",
				"Fldate" : "\/Date(1268179200000)\/",
				"Price" : "185.00",
				"Currency" : "EUR",
				"Planetype" : "A319",
				"Seatsmax" : 220,
				"Seatsocc" : 15,
				"Paymentsum" : "3777.70",
				"SeatsmaxB" : 22,
				"SeatsoccB" : 2,
				"SeatsmaxF" : 10,
				"SeatsoccF" : 1
			}, {
				"Carrid" : "AZ",
				"Connid" : "0789",
				"Fldate" : "\/Date(1268179200000)\/",
				"Price" : "1030.00",
				"Currency" : "EUR",
				"Planetype" : "DC-10-10",
				"Seatsmax" : 380,
				"Seatsocc" : 19,
				"Paymentsum" : "24668.50",
				"SeatsmaxB" : 41,
				"SeatsoccB" : 2,
				"SeatsmaxF" : 18,
				"SeatsoccF" : 1
			}, {
				"Carrid" : "AZ",
				"Connid" : "0790",
				"Fldate" : "\/Date(1268179200000)\/",
				"Price" : "1014.00",
				"Currency" : "EUR",
				"Planetype" : "747-400",
				"Seatsmax" : 385,
				"Seatsocc" : 44,
				"Paymentsum" : "58071.78",
				"SeatsmaxB" : 31,
				"SeatsoccB" : 4,
				"SeatsmaxF" : 21,
				"SeatsoccF" : 3
			}, {
				"Carrid" : "QF",
				"Connid" : "0006",
				"Fldate" : "\/Date(1268179200000)\/",
				"Price" : "788.64",
				"Currency" : "AUD",
				"Planetype" : "A319",
				"Seatsmax" : 220,
				"Seatsocc" : 25,
				"Paymentsum" : "24881.62",
				"SeatsmaxB" : 22,
				"SeatsoccB" : 3,
				"SeatsmaxF" : 10,
				"SeatsoccF" : 1
			}, {
				"Carrid" : "SQ",
				"Connid" : "0015",
				"Fldate" : "\/Date(1268179200000)\/",
				"Price" : "2320.04",
				"Currency" : "SGD",
				"Planetype" : "DC-10-10",
				"Seatsmax" : 380,
				"Seatsocc" : 16,
				"Paymentsum" : "49300.85",
				"SeatsmaxB" : 41,
				"SeatsoccB" : 2,
				"SeatsmaxF" : 18,
				"SeatsoccF" : 1
			} ]
		});

		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [ {
				axis : 1,
				name : 'Connid',
				value : "{Connid}"
			} ],
			measures : [ {
				name : 'Price',
				value : '{Price}'
			} ],
			data : {
				path : "/SflightSet",
				filters : [
				// new
				// sap.ui.model.Filter("Fldate",sap.ui.model.FilterOperator.EQ,"2010-03-10")
				]
			}
		});

		var oChart = new sap.viz.ui5.HorizontalArea({
			width : "80%",
			height : "400px",
			title : {
				visible : true,
				text : 'SFlight Chart'
			},
		});

		oChart.setDataset(oDataset);
		oChart.setModel(oModel);

		return oChart;

	}

});

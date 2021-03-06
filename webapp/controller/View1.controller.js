sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.yash.demojd3northwind.controller.View1", {
			onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("model/data.json");
                var otable = this.getView().byId("__table0");
                otable.setModel(oModel);
			}
		});
	});

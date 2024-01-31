sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.uxap.sample.ProfileObjectPageHeader.controller.ProfileObjectPageHeader", {
		onInit: function () {
			var oJsonModel = new JSONModel(sap.ui.require.toUrl("sap/uxap/sample/SharedJSONData/employee.json"));
			this.getView().setModel(oJsonModel, "ObjectPageModel");
		},

		handlePressLinkedIn        : function (oEvent) {
			window.location.href = "https://www.linkedin.com/";
		},
		handlePressGitHub: function (oEvent) {
			window.location.href= "https://github.com/srikanthsc";
		},
		handlePressYoutube: function (oEvent) {
			window.location.href="https://www.youtube.com/@CinematicSpectra-fn1qd";
		},
		handlePressGmail: function (oEvent) {
			window.location.href="https://www.gmail.com/";
		},
		handlePressTwitter: function (oEvent) {
			window.location.href="https://www.twitter.com/";
		},
	});
});

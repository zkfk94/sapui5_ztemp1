/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["ztemp1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});

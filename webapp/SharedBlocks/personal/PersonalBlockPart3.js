sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var PersonalBlockPart3 = BlockBase.extend("sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart3", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart3",
					type: "XML"
				},
				Expanded: {
					viewName: "sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart3",
					type: "XML"
				}
			}
		}
	});

	return PersonalBlockPart3;
});

//@ui5-bundle sap/uxap/sample/ProfileObjectPageHeader/Component-preload.js
sap.ui.require.preload({
	"sap/uxap/sample/ProfileObjectPageHeader/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent"],function(e){"use strict";return e.extend("sap.uxap.sample.ProfileObjectPageHeader.Component",{metadata:{manifest:"json"}})});
},
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/goals/GoalsBlock.js":function(){
sap.ui.define(["sap/ui/core/library","sap/uxap/BlockBase"],function(a,e){"use strict";var s=a.mvc.ViewType;var l=e.extend("sap.uxap.sample.SharedBlocks.goals.GoalsBlock",{metadata:{views:{Collapsed:{viewName:"sap.uxap.sample.SharedBlocks.goals.GoalsBlock",type:s.XML},Expanded:{viewName:"sap.uxap.sample.SharedBlocks.goals.GoalsBlock",type:s.XML}}}});return l});
},
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/goals/GoalsBlock.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:forms="sap.ui.layout.form" xmlns="sap.m"><forms:SimpleForm editable="false" layout="ColumnLayout"><Label text="Job Opportunities" /><Text text="SAP Full Stack developer"/><Label text="Country" /><Text text="France - International"/><Label text="Availibility" /><Text text="2024"/></forms:SimpleForm></mvc:View>\n',
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/BlockAdresses.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(a){"use strict";var e=a.extend("sap.uxap.sample.SharedBlocks.personal.BlockAdresses",{metadata:{}});return e});
},
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/BlockAdresses.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:forms="sap.ui.layout.form"\n\t\t  xmlns:core="sap.ui.core" xmlns="sap.m"><forms:SimpleForm layout="ColumnLayout" editable="false" width="100%"><core:Title text="Addresses"/><Label text="Home Address"/><Text text="176 Grande rue"/><Label text="Mailing Address"/><Text text="Collaty"/></forms:SimpleForm></mvc:View>\n',
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/BlockMailing.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(a){"use strict";var e=a.extend("sap.uxap.sample.SharedBlocks.personal.BlockMailing",{metadata:{}});return e});
},
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/BlockMailing.view.xml":'<mvc:View\n\t\txmlns:mvc="sap.ui.core.mvc"\n\t\txmlns:forms="sap.ui.layout.form"\n\t\txmlns:core="sap.ui.core"\n\t\txmlns="sap.m"><forms:SimpleForm layout="ColumnLayout" width="100%"><core:Title text="Mailing Address"/><Label text="Work"/><Text text="collaty@et.esiea.fr"/></forms:SimpleForm></mvc:View>\n',
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/BlockPhoneNumber.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(a){"use strict";var e=a.extend("sap.uxap.sample.SharedBlocks.personal.BlockPhoneNumber",{metadata:{}});return e});
},
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/BlockPhoneNumber.view.xml":'<mvc:View\n\t\txmlns:mvc="sap.ui.core.mvc"\n\t\txmlns:forms="sap.ui.layout.form"\n\t\txmlns:core="sap.ui.core"\n\t\txmlns="sap.m"><forms:SimpleForm layout="ColumnLayout" width="100%"><core:Title text="Phone Numbers"/><Label text="Home"/><Text text="+ 33 0783******"/><Label text="Office phone"/><Text text=" N/A"/></forms:SimpleForm></mvc:View>\n',
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/BlockSocial.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(a){"use strict";var e=a.extend("sap.uxap.sample.SharedBlocks.personal.BlockSocial",{metadata:{}});return e});
},
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/BlockSocial.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:forms="sap.ui.layout.form"\n          xmlns:core="sap.ui.core" xmlns="sap.m"><forms:SimpleForm editable="false" labelSpanL="4" labelSpanM="4"\n                      labelSpanS="4" emptySpanL="0" emptySpanM="0" emptySpanS="0"\n                      maxContainerCols="2" width="100%"><core:Title text="Social Accounts"/><Label text="LinkedIn"/><Link text="/SrikanthCollaty" href="https://www.linkedin.com/in/srikanth-collaty-9343a520b/" target="_blank"/></forms:SimpleForm></mvc:View>\n',
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/PersonalBlockPart1.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(a){"use strict";var e=a.extend("sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart1",{metadata:{views:{Collapsed:{viewName:"sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart1",type:"XML"},Expanded:{viewName:"sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart1",type:"XML"}}}});return e});
},
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/PersonalBlockPart1.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:core="sap.ui.core" xmlns:forms="sap.ui.layout.form" xmlns="sap.m"><forms:SimpleForm editable="false" layout="ColumnLayout"><core:Title text="Education Background"/><Label text="ESIEA"/><Text text="Enginering degree"/><Label text="Preparatory class for Grandes Ecoles - Jacquard high school Paris"/><Text text="Math, Physics, Mechanics"/><Label text="Jacquard high school Paris"/><Text text="Two years technical studies in electrical engineering"/></forms:SimpleForm></mvc:View>\n',
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/PersonalBlockPart2.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(a){"use strict";var e=a.extend("sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart2",{metadata:{views:{Collapsed:{viewName:"sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart2",type:"XML"},Expanded:{viewName:"sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart2",type:"XML"}}}});return e});
},
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/PersonalBlockPart2.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:core="sap.ui.core"\n          xmlns:forms="sap.ui.layout.form" xmlns="sap.m"><forms:SimpleForm editable="false" layout="ColumnLayout"><core:Title text="Year"/><Label text="Extra Travel Expenses"/><Text text="Cash 100 USD"/></forms:SimpleForm></mvc:View>\n\n',
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/PersonalBlockPart3.js":function(){
sap.ui.define(["sap/uxap/BlockBase"],function(a){"use strict";var e=a.extend("sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart3",{metadata:{views:{Collapsed:{viewName:"sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart3",type:"XML"},Expanded:{viewName:"sap.uxap.sample.SharedBlocks.personal.PersonalBlockPart3",type:"XML"}}}});return e});
},
	"sap/uxap/sample/ProfileObjectPageHeader/SharedBlocks/personal/PersonalBlockPart3.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns:core="sap.ui.core" xmlns:forms="sap.ui.layout.form" xmlns="sap.m"><forms:SimpleForm editable="false" layout="ColumnLayout"><core:Title text="Work Experience background"/><Label text="Vinci Construction S.I"/><Text text="SAP Full Stack Developer - Associate manager"/><Label text="TRACTEBEL – ENGIE GROUP"/><Text text="BIM Developer"/><Label text="Istya"/><Text text="Project Manager and developer"/></forms:SimpleForm></mvc:View>\r\n',
	"sap/uxap/sample/ProfileObjectPageHeader/controller/ProfileObjectPageHeader.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("sap.uxap.sample.ProfileObjectPageHeader.controller.ProfileObjectPageHeader",{onInit:function(){var e=new t(sap.ui.require.toUrl("sap/uxap/sample/SharedJSONData/employee.json"));this.getView().setModel(e,"ObjectPageModel")},handlePressLinkedIn:function(e){window.location.href="https://www.linkedin.com/in/srikanth-collaty-9343a520b/"},handlePressGitHub:function(e){window.location.href="https://github.com/srikanthsc"},handlePressYoutube:function(e){window.location.href="https://www.youtube.com/@CinematicSpectra-fn1qd"},handlePressGmail:function(e){window.location.href="https://www.gmail.com/"},handlePressTwitter:function(e){window.location.href="https://www.twitter.com/"}})});
},
	"sap/uxap/sample/ProfileObjectPageHeader/manifest.json":'{"sap.app":{"id":"sap.uxap.sample.ProfileObjectPageHeader","applicationVersion":{"version":"1.0.0"}},"sap.ui5":{"rootView":{"viewName":"sap.uxap.sample.ProfileObjectPageHeader.view.ProfileObjectPageHeader","type":"XML","async":true},"resourceRoots":{"sap.uxap.sample.SharedBlocks":"./SharedBlocks","sap.uxap.sample.SharedJSONData":"./SharedJSONData","sap.m.images":"./images"},"dependencies":{"libs":{"sap.m":{},"sap.ui.core":{},"sap.uxap":{}}},"resources":{"css":[{"uri":"css/style.css"}]},"config":{"sample":{"stretch":true,"files":["view/ProfileObjectPageHeader.view.xml","controller/ProfileObjectPageHeader.controller.js","./SharedBlocks/goals/GoalsBlock.js","./SharedBlocks/goals/GoalsBlock.view.xml","./SharedBlocks/personal/BlockAdresses.js","./SharedBlocks/personal/BlockAdresses.view.xml","./SharedBlocks/personal/BlockMailing.js","./SharedBlocks/personal/BlockMailing.view.xml","./SharedBlocks/personal/BlockPhoneNumber.js","./SharedBlocks/personal/BlockPhoneNumber.view.xml","./SharedBlocks/personal/BlockSocial.js","./SharedBlocks/personal/BlockSocial.view.xml","./SharedBlocks/personal/PersonalBlockPart1.js","./SharedBlocks/personal/PersonalBlockPart1.view.xml","./SharedBlocks/personal/PersonalBlockPart2.js","./SharedBlocks/personal/PersonalBlockPart2.view.xml","./SharedBlocks/personal/PersonalBlockPart3.js","./SharedBlocks/personal/PersonalBlockPart3.view.xml","./SharedJSONData/employee.json","manifest.json","./images/icons8-youtube.svg","./images/icons8-linkedin.svg","./images/icons8-twitter.svg","./images/icons8-gmail.svg"]}}}}',
	"sap/uxap/sample/ProfileObjectPageHeader/view/ProfileObjectPageHeader.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc"\n\txmlns="sap.uxap"\n\txmlns:layout="sap.ui.layout"\n\txmlns:m="sap.m"\n\txmlns:goals="sap.uxap.sample.SharedBlocks.goals"\n\txmlns:personal="sap.uxap.sample.SharedBlocks.personal"\n\tcontrollerName="sap.uxap.sample.ProfileObjectPageHeader.controller.ProfileObjectPageHeader"\n\theight="100%"><ObjectPageLayout id="ObjectPageLayout" showTitleInHeaderContent="true" upperCaseAnchorBar="false"><headerTitle><ObjectPageHeader id="headerForTest"\n\t\t\t\t\t\t\t  objectTitle="Srikanth COLLATY"\n\t\t\t\t\t\t\t  objectImageShape="Circle"\n\t\t\t\t\t\t\t  objectSubtitle="IT Engineer - SAP Software Engineer"\n\t\t\t\t\t\t\t  isObjectTitleAlwaysVisible="false"\n\t\t\t\t\t\t\t  isObjectSubtitleAlwaysVisible="false"\n\t\t\t\t\t\t\t  isActionAreaAlwaysVisible="true"\n\t\t\t\t\t\t\t  showPlaceholder="true"><navigationBar><m:Bar><m:contentLeft><m:Button icon="sap-icon://nav-back" tooltip="nav-back"/></m:contentLeft><m:contentMiddle><m:Text text="Portfolio"/></m:contentMiddle></m:Bar></navigationBar><actions><ObjectPageHeaderActionButton\n            icon="./images/icons8-linkedin.svg"\n            text="Srikanth\'s profile"\n            importance="Low"\n            tooltip="Srikanth\'s profile"\n            press="handlePressLinkedIn"/><ObjectPageHeaderActionButton\n            icon="./images/icons8-youtube.svg"\n            text="Cinematic Spectra"\n            importance="Low"\n            tooltip="Cinematic Spectra"\n            press="handlePressYoutube"/><ObjectPageHeaderActionButton\n            icon="./images/icons8-gmail.svg"\n            text="Click for Gmail"\n            importance="Low"\n            tooltip="Click for Gmail"\n            press="handlePressGmail"/><ObjectPageHeaderActionButton\n            icon="./images/icons8-twitter.svg"\n            text="Click for Twitter"\n            importance="Low"\n            tooltip="Click for Twitter"\n            press="handlePressTwitter"/></actions></ObjectPageHeader></headerTitle><headerContent><layout:VerticalLayout><m:ObjectStatus title="Address" text="Paris"/><m:ObjectStatus title="Office phone" text="0783******"/><m:ObjectStatus title="Email" text="srikanthcollaty92@gmail.com"/></layout:VerticalLayout><layout:HorizontalLayout></layout:HorizontalLayout><m:ObjectStatus state="Success" icon="sap-icon://employee-approvals" text="Available"/><layout:VerticalLayout><m:Label text="Paris, France"/><m:Label text="OPEN TO WORK"/></layout:VerticalLayout><layout:VerticalLayout><m:Label text="I am Srikanth Collaty, I have recently graduated, I am a Tech enthusiast. I am always open to collaborating on projects and innovative/disruptive ideas."/><m:Label text="When I am not coding, you will find me lifting weights in the gym or at my desk sketching stuff"/></layout:VerticalLayout></headerContent><sections><ObjectPageSection titleUppercase="false" title="Information"><subSections><ObjectPageSubSection titleUppercase="false"><blocks><goals:GoalsBlock id="goalsblock"/></blocks></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection titleUppercase="false" title="Personal"><subSections><ObjectPageSubSection title="Connect" titleUppercase="false"><blocks><personal:BlockPhoneNumber id="phone"/><personal:BlockSocial id="social"/><personal:BlockAdresses id="adresses"/><personal:BlockMailing id="mailing" columnLayout="1"/></blocks></ObjectPageSubSection><ObjectPageSubSection id="paymentSubSection" title="Education" titleUppercase="false"><blocks><personal:PersonalBlockPart1 id="part1" columnLayout="1"/></blocks></ObjectPageSubSection><ObjectPageSubSection id="paymentSubSection2" title="Work Experience" titleUppercase="false"><blocks><personal:PersonalBlockPart3 id="part1r" columnLayout="1"/></blocks></ObjectPageSubSection></subSections></ObjectPageSection></sections></ObjectPageLayout></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map

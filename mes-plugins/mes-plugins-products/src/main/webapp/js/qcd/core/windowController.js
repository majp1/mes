var QCD = QCD || {};

QCD.WindowController = function() {
	
	var iframe = null;
	
	var loadingIndicator;
	
	var statesStack = new Array();
	
	var serializationObjectToInsert = null;
	
	function constructor() {
		QCDLogger.info("init main page");
		iframe = $("#mainPageIframe");
		loadingIndicator = $("#loadingIndicator");
		loadingIndicator.hide();
		iframe.load(function() {
			onIframeLoad(this);
		});

	}
	
	this.goToSelectedPage = function() {
		var selectedValue = $("#viewsSelect").val();
		performGoToPage("page/"+selectedValue+".html");
	}

	this.performLogout = function() {
		QCDLogger.info("logout");
	}
	
	this.goToPage = function(url, serializationObject) {
		var stateObject = {
			url: iframe.attr('src'),
			serializationObject: serializationObject
		};
		statesStack.push(stateObject);
		performGoToPage("page/"+url);
	}
	
	this.goBack = function() {
		var stateObject = statesStack.pop();
		//iframe.insertState(stateObject.serializationObject);
		serializationObjectToInsert = stateObject.serializationObject;
		performGoToPage(stateObject.url);
	}
	
	function performGoToPage(url) {
		loadingIndicator.show();
		iframe.attr('src', url);
	}
	
	function onIframeLoad() {
		if (serializationObjectToInsert) {
			iframe[0].contentWindow.insertState(serializationObjectToInsert);
		}
		serializationObjectToInsert = null;
		loadingIndicator.hide();
	}
	
	constructor();
	
}
var QCD = QCD || {};

QCD.PageConstructor = function(_viewName) {
	
	var viewName = _viewName;
	
	function constructGrid(gridName, mainController) {
		var parameters = getElementParameters(gridName);
		
		var colNames = new Array();
		var colModel = new Array();
		for (var i in parameters.columns) {
			colNames.push(parameters.columns[i]);
			colModel.push({name:parameters.columns[i], index:parameters.columns[i], width:100, sortable: false});
		}
		
		var gridParameters = new Object();
		gridParameters.element = gridName;
		gridParameters.viewName = viewName,
		gridParameters.viewElementName = gridName;
		gridParameters.colNames = colNames;
		gridParameters.colModel = colModel;
		gridParameters.fields = parameters.fields;
		//gridParameters.loadingText = '<spring:message code="commons.loading.gridLoading"/>'; // TODO mina loadingtext
		gridParameters.loadingText = 'TODO';
		gridParameters.paging = parameters.options.paging == "true" ? true : false;
		gridParameters.parentDefinition = parameters.parentDefinition ? parameters.parentDefinition : null;
		if (parameters.options) {
			gridParameters.paging = parameters.options.paging == "true" ? true : false;
			gridParameters.sortable = parameters.options.sortable == "true" ? true : false;
			gridParameters.filter = parameters.options.filter == "true" ? true : false;
			gridParameters.multiselect = parameters.options.multiselect == "true" ? true : false;
			gridParameters.canNew = parameters.options.canNew == "false" ? false : true;
			gridParameters.canDelete = parameters.options.canDelete == "false" ? false : true;
			if (parameters.options.height) { gridParameters.height = parseInt(parameters.options.height); }
		}
		gridParameters.events = parameters.events;
		gridParameters.parent = parameters.parent;
		gridParameters.correspondingViewName = parameters.correspondingViewName;
		gridParameters.isCorrespondingViewModal = parameters.isCorrespondingViewModal;
		
		var grid = new QCD.elements.GridElement(gridParameters, mainController);
		
		return grid;
	}
	
	function constructForm(formName, mainController) {
		var parameters = getElementParameters(formName);
		parameters.viewName = viewName;
		var formElement = new QCD.elements.FormElement(parameters, mainController);
		return formElement;
	}
	
	function getElementParameters(elementName) {
		var optionsElement = $("#"+elementName+" .element_options");
		var options = jsonParse(optionsElement.html());
		optionsElement.remove();
		return options;
	}
	
	this.constructPageElements = function(mainController) {
		var pageElements = new Object();
		$(".element_table").each(function(i,e) {
			pageElements[e.id] = constructGrid(e.id, mainController);
		});
	
		$(".element_form").each(function(i,e){
			pageElements[e.id] = constructForm(e.id, mainController);
		});
		return pageElements;
	}
}
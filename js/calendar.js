$(document).ready( function() {
	var ADD = "#dummy-add-modal-button";
	var EVENT = "#dummy-event";
	var SHOW_ALL = "#calendar-show-all";
	var SHOW_ACTIVES = "#calendar-show-actives";
	var SHOW_EXEC = "#calendar-show-exec";
	var SHOW_LEAD = "#calendar-show-lead";
	var SHOW_BROTHERHOOD = "#calendar-show-brotherhood";

	var showAll = true;

	var EVENTS = ".calendar-event";
	var EVENTS_ALL = ".groups-all";
	var EVENTS_ACTIVES = ".groups-actives";
	var EVENTS_EXEC = ".groups-exec";

	$(EVENT).hide();

	$(ADD).click( function(evt) {
		evt.preventDefault();
		$(EVENT).show();
	});

	$(SHOW_ALL).click(function(evt) {
		if ($(EVENTS).is(":visible") ) {
			$(EVENTS).hide();
		}
		else {
			$(EVENTS).show();	
		}
	});

/*
	$(SHOW_ACTIVES).click(function(evt) {
		if ($(EVENTS_ACTIVES).is(":visible") ) {
			$(EVENTS_ACTIVES).hide();
		}
		else {
			$(EVENTS_ACTIVES).show();	
		}
	});
*/
});

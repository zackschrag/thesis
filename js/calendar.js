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

	$(SHOW_ALL).prop("checked", true);
	$(SHOW_ACTIVES).prop("checked", true);
	$(SHOW_EXEC).prop("checked", true);
	$(SHOW_LEAD).prop("checked", true);
	$(SHOW_BROTHERHOOD).prop("checked", true);

	$(EVENT).hide();

	$(ADD).click( function(evt) {
		evt.preventDefault();
		$(EVENT).show();
	});

	$(SHOW_ALL).click(function() {
		if ($(SHOW_ALL).is(":checked")) {
			$(EVENTS_ALL).show();
		}
		else {
			$(EVENTS_ALL).hide();
		}	});

	$(SHOW_ACTIVES).click(function () {
		if ($(SHOW_ACTIVES).is(":checked")) {
			$(EVENTS_ACTIVES).show();
		}
		else {
			$(EVENTS_ACTIVES).hide();
		}
	});

	$(SHOW_EXEC).click(function () {
		if ($(SHOW_EXEC).is(":checked")) {
			$(EVENTS_EXEC).show();
		}
		else {
			$(EVENTS_EXEC).hide();
		}
	});

	var HOME = "#page-nav-item-home";
	var MESSAGES = "#page-nav-item-messages";
	var CALENDAR = "#page-nav-item-calendar";
	var PEOPLE = "#page-nav-item-people";
	var FILES = "#page-nav-item-files";
	var ACTIVITY = "#page-nav-item-activity";

	$(HOME).css("opacity", "0.5");
	$(MESSAGES).css("opacity", "0.5");
	$(CALENDAR).css("opacity", "1.0");
	$(PEOPLE).css("opacity", "0.5");
	$(FILES).css("opacity", "0.5");
	$(ACTIVITY).css("opacity", "0.5");

	$(HOME).mouseenter(function() {
		$(HOME).css("opacity", "1.0");
	});
	$(HOME).mouseleave(function() {
		$(HOME).css("opacity", "0.5");
	});

	$(MESSAGES).mouseenter(function() {
		$(MESSAGES).css("opacity", "1.0");
	});
	$(MESSAGES).mouseleave(function() {
		$(MESSAGES).css("opacity", "0.5");
	});

	$(CALENDAR).mouseenter(function() {
		$(CALENDAR).css("opacity", "1.0");
	});
	$(CALENDAR).mouseleave(function() {
		$(CALENDAR).css("opacity", "1.0");
	});

	$(PEOPLE).mouseenter(function() {
		$(PEOPLE).css("opacity", "1.0");
	});
	$(PEOPLE).mouseleave(function() {
		$(PEOPLE).css("opacity", "0.5");
	});

	$(FILES).mouseenter(function() {
		$(FILES).css("opacity", "1.0");
	});
	$(FILES).mouseleave(function() {
		$(FILES).css("opacity", "0.5");
	});

	$(ACTIVITY).mouseenter(function() {
		$(ACTIVITY).css("opacity", "1.0");
	});
	$(ACTIVITY).mouseleave(function() {
		$(ACTIVITY).css("opacity", "0.5");
	});
});

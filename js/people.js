$(document).ready( function() {
	var SHOW_ALL = "#people-show-all";
	var SHOW_ACTIVES = "#people-show-actives";
	var SHOW_EXEC = "#people-show-exec";
	var SHOW_LEAD = "#people-show-lead";
	var SHOW_BROTHERHOOD = "#people-show-brotherhood";

	//var EVENTS = ".people-actives";
	//var EVENTS_ALL = ".people-";
	var PEOPLE = ".people";
	var PEOPLE_ACTIVES = ".people-actives";
	var PEOPLE_EXEC = ".people-exec";
	var PEOPLE_LEAD = ".people-lead-committee";
	var PEOPLE_BROTHERHOOD = ".people-brotherhood-committee";

	$(SHOW_ALL).prop("checked", true);
	$(SHOW_ACTIVES).prop("checked", true);
	$(SHOW_EXEC).prop("checked", true);
	$(SHOW_LEAD).prop("checked", true);
	$(SHOW_BROTHERHOOD).prop("checked", true);

	/*$(SHOW_ALL).click(function () {
		if ($(SHOW_ALL).is(":checked")) {
			$(PEOPLE).show();
		}
		else {
			$(PEOPLE).hide();
			$(SHOW_ACTIVES).prop("checked", false);
			$(SHOW_EXEC).prop("checked", false);
			$(SHOW_LEAD).prop("checked", false);
			$(SHOW_BROTHERHOOD).prop("checked", false);
		}
	});*/

	$(SHOW_ACTIVES).click(function () {
		if ($(SHOW_ACTIVES).is(":checked")) {
			$(PEOPLE_ACTIVES).show();
		}
		else {
			$(PEOPLE_ACTIVES).hide();
		}
	});

	$(SHOW_EXEC).click(function () {
		if ($(SHOW_EXEC).is(":checked")) {
			$(PEOPLE_EXEC).show();
		}
		else {
			$(PEOPLE_EXEC).hide();
		}
	});

	$(SHOW_LEAD).click(function () {
		if ($(SHOW_LEAD).is(":checked")) {
			$(PEOPLE_LEAD).show();
		}
		else {
			$(PEOPLE_LEAD).hide();
		}
	});

	$(SHOW_BROTHERHOOD).click(function () {
		if ($(SHOW_BROTHERHOOD).is(":checked")) {
			$(PEOPLE_BROTHERHOOD).show();
		}
		else {
			$(PEOPLE_BROTHERHOOD).hide();
		}
	});
});

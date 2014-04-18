$(document).ready( function() {
	var SHOW_ALL = "#activity-show-all";
	var SHOW_ACTIVES = "#activity-show-actives";
	var SHOW_EXEC = "#activity-show-exec";
	var SHOW_LEAD = "#activity-show-lead";
	var SHOW_BROTHERHOOD = "#activity-show-brotherhood";

	var SHOW_TEXT = "#activity-show-text";
	var SHOW_EMAIL = "#activity-show-email";

	var TEXTS = ".activity-text";
	var EMAILS = ".activity-email";

	$(SHOW_ALL).prop("checked", true);
	$(SHOW_ACTIVES).prop("checked", true);
	$(SHOW_EXEC).prop("checked", true);
	$(SHOW_LEAD).prop("checked", true);
	$(SHOW_BROTHERHOOD).prop("checked", true);

	$(SHOW_TEXT).click(function() {
		if ($(SHOW_TEXT).is(":checked")) {
			$(".activity-card").hide();
			$(TEXTS).show();
		}
		else {
			$(".activity-card").show();
			//$(TEXTS).hide();
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
	$(CALENDAR).css("opacity", "0.5");
	$(PEOPLE).css("opacity", "0.5");
	$(FILES).css("opacity", "0.5");
	$(ACTIVITY).css("opacity", "1.0");

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
		$(CALENDAR).css("opacity", "0.5");
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
		$(ACTIVITY).css("opacity", "1.0");
	});
});



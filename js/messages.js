$(document).ready( function() {
	var MESSAGE_SENT = "#message-sent-success";
	var SEND_MESSAGE = "#send-message";

	var SHOW_ALL = "#all-box";
	var SHOW_ACTIVES = "#actives-box";
	var SHOW_EXEC = "#exec-box";
	var SHOW_LEAD = "#lead-box";
	var SHOW_BROTHERHOOD = "#brotherhood-box";

	var MESSAGES_ALL = ".messages-name";
	var MESSAGES_ACTIVES = ".messages-actives";
	var MESSAGES_EXEC = ".messages-exec";
	var MESSAGES_LEAD = ".messages-lead";
	var MESSAGES_BROTHERHOOD = ".messages-brotherhood";

	var ALL_DIV = ".name-div";
	var ALL_DIV_VIS = ".name-div:visible";
	var ACTIVES_DIV = ".actives-div";
	var EXEC_DIV = ".exec-div";
	var LEAD_DIV = ".lead-div";
	var BROTHERHOOD_DIV = ".brotherhood-div";
	
	$(MESSAGE_SENT).hide();

	$(".vertical-line").css("height", $(ALL_DIV).height()*($(ALL_DIV_VIS).length) + $(ALL_DIV_VIS).length*9);
	$(".checkbox").click( function() {
		$(".vertical-line").css("height", $(ALL_DIV).height()*($(ALL_DIV_VIS).length) + $(ALL_DIV_VIS).length*9);
	});

	$(SHOW_ALL).click(function() {
		if ($(SHOW_ALL).is(":checked")) {
			$(ALL_DIV).show();
			$(MESSAGES_ALL).each(function(i, el) {
				$(el).prop("checked", true);
			});
		}
		else {
			$(MESSAGES_ALL).each(function(i, el) {
				$(el).prop("checked", false);
			});
		}	
	});

	$(SHOW_ACTIVES).click(function () {
		var cycle = false;

		if ($(SHOW_ACTIVES).is(":checked")) {
			$(ALL_DIV).hide();
			$(ACTIVES_DIV).show();
			$(MESSAGES_ACTIVES).each(function(i, el) {
				$(el).prop("checked", true);
			});
		}
		else {
			$(ALL_DIV).show();	
			$(MESSAGES_ACTIVES).each(function(i, el) {
				$(el).prop("checked", false);
			});
		}
	});

	$(SHOW_EXEC).click(function () {
		if ($(SHOW_EXEC).is(":checked") && !$(SHOW_ACTIVES).is(":checked")) {
			$(ALL_DIV).hide();
			$(EXEC_DIV).show();
			$(MESSAGES_EXEC).each(function(i, el) {
				$(el).prop("checked", true);
			});
		}
		else {
			$(ALL_DIV).show();
			$(MESSAGES_EXEC).each(function(i, el) {
				$(el).prop("checked", false);
			});
		}
	});

	$(SHOW_LEAD).click(function () {
		if ($(SHOW_LEAD).is(":checked")) {
			$(ALL_DIV).hide();
			$(LEAD_DIV).show();
			$(MESSAGES_LEAD).each(function(i, el) {
				$(el).prop("checked", true);
			});
		}
		else {
			$(ALL_DIV).show();
			$(MESSAGES_LEAD).each(function(i, el) {
				$(el).prop("checked", false);
			});
		}
	});

	$(SHOW_BROTHERHOOD).click(function () {
		if ($(SHOW_BROTHERHOOD).is(":checked")) {
			$(ALL_DIV).hide();
			$(BROTHERHOOD_DIV).show();
			$(MESSAGES_BROTHERHOOD).each(function(i, el) {
				$(el).prop("checked", true);
			});
		}
		else {
			$(ALL_DIV).show();
			$(MESSAGES_BROTHERHOOD).each(function(i, el) {
				$(el).prop("checked", false);
			});
		}
	});

	$("#messages-search-box").on("input", function() {
		$(ALL_DIV).hide();
		$("#adamjohnson").show();
		$("#adamjameson").show();

		if ($("#messages-search-box").val().length === 0) {
			$(ALL_DIV).show();
		}
	});

	$(SEND_MESSAGE).click( function(evt) {
		evt.preventDefault();
		$(MESSAGE_SENT).show();
	});

	var HOME = "#page-nav-item-home";
	var MESSAGES = "#page-nav-item-messages";
	var CALENDAR = "#page-nav-item-calendar";
	var PEOPLE = "#page-nav-item-people";
	var FILES = "#page-nav-item-files";
	var ACTIVITY = "#page-nav-item-activity";

	$(HOME).css("opacity", "0.5");
	$(MESSAGES).css("opacity", "1.0");
	$(CALENDAR).css("opacity", "0.5");
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
		$(MESSAGES).css("opacity", "1.0");
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
		$(ACTIVITY).css("opacity", "0.5");
	});
});
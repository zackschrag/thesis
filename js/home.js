$(document).ready(function() {
	var HOME = "#page-nav-item-home";
	var MESSAGES = "#page-nav-item-messages";
	var CALENDAR = "#page-nav-item-calendar";
	var PEOPLE = "#page-nav-item-people";
	var FILES = "#page-nav-item-files";
	var ACTIVITY = "#page-nav-item-activity";

	$(HOME).css("opacity", "1.0");
	$(MESSAGES).css("opacity", "0.5");
	$(CALENDAR).css("opacity", "0.5");
	$(PEOPLE).css("opacity", "0.5");
	$(FILES).css("opacity", "0.5");
	$(ACTIVITY).css("opacity", "0.5");

	$(HOME).mouseenter(function() {
		$(HOME).css("opacity", "1.0");
	});
	$(HOME).mouseleave(function() {
		$(HOME).css("opacity", "1.0");
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
		$(ACTIVITY).css("opacity", "0.5");
	});
});
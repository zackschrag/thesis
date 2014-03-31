$(document).ready( function() {
	var MESSAGE_SENT = "#message-sent-success";
	var SEND_MESSAGE = "#send-message";
	
	$(MESSAGE_SENT).hide();

	$(SEND_MESSAGE).click( function(evt) {
		evt.preventDefault();
		$(MESSAGE_SENT).show();
	});
});
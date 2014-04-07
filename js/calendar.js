$(document).ready( function() {
	var ADD = "#dummy-add-modal-button";
	var EVENT = "#dummy-event";
	
	$(EVENT).hide();

	$(ADD).click( function(evt) {
		evt.preventDefault();
		$(EVENT).show();
	});
});
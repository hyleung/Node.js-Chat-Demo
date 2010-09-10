function publishMessage(message)
{
	liveStatsClient.client.publish('/chatRoom',{
		messageBody:message
	})
}

function subscribeMessages()
{
	//setup a path to subscribe to events at
	liveStatsClient.client.subscribe('/chatRoom',function(message) {
		//console.log('Incoming MESSAGE',message);
		var textArea = jQuery('#messagesTextArea');
		textArea.val(textArea.val()  + message.messageBody + '\n');
	});
}

jQuery(function(){
	subscribeMessages();
	jQuery('#submitButton').click(function() {
		publishMessage(jQuery('#messageTextBox').val());
		jQuery('#messageTextBox').val('');
	});
	jQuery('#messageTextBox').keypress(function(e) {
		if(e.keyCode=='13')
		{
			publishMessage($.trim(jQuery('#messageTextBox').val()));
			jQuery('#messageTextBox').val('');
		}
	});
});


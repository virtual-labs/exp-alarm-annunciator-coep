ConnHint = function(numOfWindows, alarmtype, ISASeq, appId) {

	if(alarmtype == 1){
		
		if (numOfWindows == 6) {

			$("#Alarm1_win6").css("display", "block");

		}
		if (numOfWindows == 5) {

			$("#Alarm1_win5").css("display", "block");

		}
		if (numOfWindows == 4) {

			$("#Alarm1_win4").css("display", "block");

		}
		if (numOfWindows == 3) {

			$("#Alarm1_win3").css("display", "block");

		}
		if (numOfWindows == 2) {

			$("#Alarm1_win2").css("display", "block");

		}
	}
	
	
	if(alarmtype == 2){
		
		if (numOfWindows == 6) {

			$("#Alarm2_win6").css("display", "block");

		}
		if (numOfWindows == 5) {

			$("#Alarm2_win5").css("display", "block");

		}
		if (numOfWindows == 4) {

			$("#Alarm2_win4").css("display", "block");

		}
		if (numOfWindows == 3) {

			$("#Alarm2_win3").css("display", "block");
		}
		if (numOfWindows == 2) {

			$("#Alarm2_win2").css("display", "block");

		}
	}
	

}

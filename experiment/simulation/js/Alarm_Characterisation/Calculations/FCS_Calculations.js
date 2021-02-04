function FCS_blinkWinPlayHooter_LSH(){
	if(FCS_anim_LSH == null){
		
		FCS_glow_LSH = glowWindow(FCS_alarmWindow_LSH);						    
		FCS_anim_LSH = raphealAnimation();						
		FCS_glow_LSH.animate(FCS_anim_LSH);
		
		playHooter();
		
	}
}

function FCS_blinkWinPlayHooter_LSL(){
	if(FCS_anim_LSL == null){
		
		FCS_glow_LSL = glowWindow(FCS_alarmWindow_LSL);						    
		FCS_anim_LSL = raphealAnimation();						
		FCS_glow_LSL.animate(FCS_anim_LSL);
		
		playHooter();
		
	}
}

function FCS_blinkWinPlayHooter_PSL(){
	if(FCS_anim_PSL == null){
		
		FCS_glow_PSL = glowWindow(FCS_alarmWindow_PSL);						    
		FCS_anim_PSL = raphealAnimation();						
		FCS_glow_PSL.animate(FCS_anim_PSL);
		
		playHooter();
		
	}
}

function FCS_blinkWinPlayHooter_PSH(){
	if(FCS_anim_PSH == null){
		
		FCS_glow_PSH = glowWindow(FCS_alarmWindow_PSH);						    
		FCS_anim_PSH = raphealAnimation();						
		FCS_glow_PSH.animate(FCS_anim_PSH);
		
		playHooter();
		
	}
}

function FCS_blinkWinPlayHooter_FSL(){
	if(FCS_anim_FSL == null){
		
		FCS_glow_FSL = glowWindow(FCS_alarmWindow_FSL);						    
		FCS_anim_FSL = raphealAnimation();						
		FCS_glow_FSL.animate(FCS_anim_FSL);
		
		playHooter();
		
	}
}

function FCS_blinkWinPlayHooter_FSH(){
	if(FCS_anim_FSH == null){
		
		FCS_glow_FSH = glowWindow(FCS_alarmWindow_FSH);						    
		FCS_anim_FSH = raphealAnimation();						
		FCS_glow_FSH.animate(FCS_anim_FSH);
		
		playHooter();
		
	}
}

function playHooter(){
	
	if(hutter.hasAttribute('src') == false){
		hutter.setAttribute('src', "audio/TF029.WAV");
		hutter.play();
	}
}




// Glow and pause hooter



function FCS_glowWinPauseHooter_LSH(){
	
	if(FCS_anim_LSH != null){
		
		FCS_glow_LSH.stop(FCS_anim_LSH);
		FCS_alarmWindow_LSH.attr({fill: "100-#ffffff-#ddc7c7"});
		FCS_WindowLabel_LSH.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		FCS_isGlow_LSH = true;
	}
	
	
}

function FCS_glowWinPauseHooter_LSL(){
	
	if(FCS_anim_LSL != null){
		
		FCS_glow_LSL.stop(FCS_anim_LSL);
		FCS_alarmWindow_LSL.attr({fill: "100-#ffffff-#ddc7c7"});
		FCS_WindowLabel_LSL.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		FCS_isGlow_LSL = true;
	}
	
	
}


function FCS_glowWinPauseHooter_PSL(){
	
	if(FCS_anim_PSL != null){
		
		FCS_glow_PSL.stop(FCS_anim_PSL);
		FCS_alarmWindow_PSL.attr({fill: "100-#ffffff-#ddc7c7"});
		FCS_WindowLabel_PSL.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		FCS_isGlow_PSL = true;
	}
	
	
}

function FCS_glowWinPauseHooter_PSH(){
	
	if(FCS_anim_PSH != null){
		
		FCS_glow_PSH.stop(FCS_anim_PSH);
		FCS_alarmWindow_PSH.attr({fill: "100-#ffffff-#ddc7c7"});
		FCS_WindowLabel_PSH.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		FCS_isGlow_PSH = true;
	}
	
	
}

function FCS_glowWinPauseHooter_FSL(){
	
	if(FCS_anim_FSL != null){
		
		FCS_glow_FSL.stop(FCS_anim_FSL);
		FCS_alarmWindow_FSL.attr({fill: "100-#ffffff-#ddc7c7"});
		FCS_WindowLabel_FSL.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		FCS_isGlow_FSL = true;
	}
	
	
}

function FCS_glowWinPauseHooter_FSH(){
	
	if(FCS_anim_FSH != null){
		
		FCS_glow_FSH.stop(FCS_anim_FSH);
		FCS_alarmWindow_FSH.attr({fill: "100-#ffffff-#ddc7c7"});
		FCS_WindowLabel_FSH.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		FCS_isGlow_FSH = true;
	}
	
	
}

function pauseHooter(){
	
	if(hutter.hasAttribute('src') == true){
		hutter.pause();
		hutter.removeAttribute('src');
	}
}






function FCS_firstResetAfterTestFor2A2B(){
	
	if(FCS_isGlow_LSH == true){
		FCS_alarmWindow_LSH.hide();
		FCS_WindowLabel_LSH.hide();
		FCS_glow_LSH.hide();
		FCS_anim_LSH = null;
		FCS_isGlow_LSH = false;
		FCS_alarmWindow_LSH = rectForWindows((x1 ), (y1),100,60, 5);
		FCS_WindowLabel_LSH = WindowLabel((x1 + 25 ), (y1 + 10), "LSH");
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_LSH();
		}
		
	}
	if(FCS_isGlow_LSL == true){
		FCS_alarmWindow_LSL.hide();
		FCS_WindowLabel_LSL.hide();
		FCS_glow_LSL.hide();
		FCS_anim_LSL = null;
		FCS_isGlow_LSL = false;
		FCS_alarmWindow_LSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		FCS_WindowLabel_LSL = WindowLabel((x1 + 135 ), (y1 + 10), "LSL");
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_LSL();
		}
	}
	
	if(FCS_isGlow_PSL == true){
		FCS_alarmWindow_PSL.hide();
		FCS_WindowLabel_PSL.hide();
		FCS_glow_PSL.hide();
		FCS_anim_PSL = null;
		FCS_isGlow_PSL = false;
		FCS_alarmWindow_PSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		FCS_WindowLabel_PSL = WindowLabel((x1 + 245), (y1 + 10), "PSL");
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_PSL();
		}
	}
	
	if(FCS_isGlow_PSH == true){
		FCS_alarmWindow_PSH.hide();
		FCS_WindowLabel_PSH.hide();
		FCS_glow_PSH.hide();
		FCS_anim_PSH = null;
		FCS_isGlow_PSH = false;
		FCS_alarmWindow_PSH = rectForWindows((x1 ), (y1+70),100,60, 5);
		FCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1+75), "PSH");
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_PSH();
		}
		
	}
	
	if(FCS_isGlow_FSL == true){
		FCS_alarmWindow_FSL.hide();
		FCS_WindowLabel_FSL.hide();
		FCS_glow_FSL.hide();
		FCS_anim_FSL = null;
		FCS_isGlow_FSL = false;
		FCS_alarmWindow_FSL = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		FCS_WindowLabel_FSL = WindowLabel((x1 + 135), (y1+75), "FSL");
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_FSL();
		}
		
	}
	
	if(FCS_isGlow_FSH == true){
		FCS_alarmWindow_FSH.hide();
		FCS_WindowLabel_FSH.hide();
		FCS_glow_FSH.hide();
		FCS_anim_FSH = null;
		FCS_isGlow_FSH = false;
		FCS_alarmWindow_FSH = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		FCS_WindowLabel_FSH = WindowLabel((x1 + 245), (y1+75), "FSH");
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_FSH();
		}
		
	}
}

function playHooterToACkBack(){
	
	if(hutterForACKBack.hasAttribute('src') == false){
		hutterForACKBack.setAttribute('src', "audio/TF011.WAV");
		hutterForACKBack.play();
	}
}

function pauseHooterToACKBack(){
	
	if(hutterForACKBack.hasAttribute('src') == true){
		hutterForACKBack.pause();
		hutterForACKBack.removeAttribute('src');
	}
}


function FCS_resetOnRedGreenAlarm(){
	

	
	if(FCS_isGlow_LSH == true &&  FCS_isGreen_LSH == true){
		
		FCS_alarmWindow_LSH.hide();
		FCS_WindowLabel_LSH.hide();
		FCS_glow_LSH.hide();
		FCS_anim_LSH = null;
		FlagFCS_WindowBlinkForgreater70 = 0;
		FCS_isGlow_LSH = false;
		FCS_alarmWindow_LSH = rectForWindows((x1 ), (y1),100,60, 5);
		FCS_WindowLabel_LSH = WindowLabel((x1 + 25 ), (y1 + 10), "LSH");
		
		FCSAlarmCheck_LSH = true;
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_LSH();
		}
		
	}
	if(FCS_isGlow_LSL == true &&  FCS_isGreen_LSL == true){
		
		FCS_alarmWindow_LSL.hide();
		FCS_WindowLabel_LSL.hide();
		FCS_glow_LSL.hide();
		FCS_anim_LSL = null;
		FlagFCS_WindowBlinkForless30 = 0;
		FCS_isGlow_LSL = false;
		FCS_alarmWindow_LSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		FCS_WindowLabel_LSL = WindowLabel((x1 + 135 ), (y1 + 10), "LSL");
		
		FCSAlarmCheck_LSL = true;
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_LSL();
		}
		
	}
	if(FCS_isGlow_PSL == true &&  FCS_isGreen_PSL == true){
		FCS_alarmWindow_PSL.hide();
		FCS_WindowLabel_PSL.hide();
		FCS_glow_PSL.hide();
		FCS_anim_PSL = null;
		FlagFCS_WindowBlinkForless30 = 0;
		FCS_isGlow_PSL = false;
		FCS_alarmWindow_PSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		FCS_WindowLabel_PSL = WindowLabel((x1 + 245), (y1 + 10), "PSL");
		
		FCSAlarmCheck_PSL = true;
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_PSL();
		}
		
	}
	if(FCS_isGlow_PSH == true &&  FCS_isGreen_PSH == true){
		FCS_alarmWindow_PSH.hide();
		FCS_WindowLabel_PSH.hide();
		FCS_glow_PSH.hide();
		FCS_anim_PSH = null;
		FlagFCS_WindowBlinkForless30 = 0;
		FCS_isGlow_PSH = false;
		FCS_alarmWindow_PSH = rectForWindows((x1 ), (y1+70),100,60, 5);
		FCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1+75), "PSH");
		
		FCSAlarmCheck_PSH = true;
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_PSH();
		}
		
		
	}	
	if(FCS_isGlow_FSL == true &&  FCS_isGreen_FSL == true){
		FCS_alarmWindow_FSL.hide();
		FCS_WindowLabel_FSL.hide();
		FCS_glow_FSL.hide();
		FCS_anim_FSL = null;
		FCS_isGlow_FSL = false;
		FCS_alarmWindow_FSL = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		FCS_WindowLabel_FSL = WindowLabel((x1 + 135), (y1+75), "FSL");
		
		FCSAlarmCheck_FSL = true;
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_FSL();
		}
		
	}
	if(FCS_isGlow_FSH == true &&  FCS_isGreen_FSH == true){
		FCS_alarmWindow_FSH.hide();
		FCS_WindowLabel_FSH.hide();
		FCS_glow_FSH.hide();
		FCS_anim_FSH = null;
		FCS_isGlow_FSH = false;
		FCS_alarmWindow_FSH = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		FCS_WindowLabel_FSH = WindowLabel((x1 + 245), (y1+75), "FSH");
		
		FCSAlarmCheck_FSH = true;
		
		if(ISASeq == 3){
			
			FCS_RingBackFor2C_FSH();
		}
		
	}
	
	

}


function FCS_RingBackFor2C_LSH(){
	
	FCS_alarmWindow_LSH.attr({fill: "100-#70db70-#ddc7c7"});		
	FCS_WindowLabel_LSH.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		FCS_alarmWindow_LSH.hide();
		FCS_WindowLabel_LSH.hide();				
		FCS_alarmWindow_LSH = rectForWindows((x1 ), (y1),100,60, 5);
		FCS_WindowLabel_LSH = WindowLabel((x1 + 25 ), (y1 + 10), "LSH");
		pauseHooterToACKBack();
	}, 9000);
	
	
}

function FCS_RingBackFor2C_LSL(){
	
	FCS_alarmWindow_LSL.attr({fill: "100-#70db70-#ddc7c7"});		
	FCS_WindowLabel_LSL.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		FCS_alarmWindow_LSL.hide();
		FCS_WindowLabel_LSL.hide();				
		FCS_alarmWindow_LSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		FCS_WindowLabel_LSL = WindowLabel((x1 + 135 ), (y1 + 10), "LSL");
		pauseHooterToACKBack();
	}, 9000);
	
	
}
function FCS_RingBackFor2C_PSL(){
	
	FCS_alarmWindow_PSL.attr({fill: "100-#70db70-#ddc7c7"});		
	FCS_WindowLabel_PSL.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		FCS_alarmWindow_PSL.hide();
		FCS_WindowLabel_PSL.hide();				
		FCS_alarmWindow_PSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		FCS_WindowLabel_PSL = WindowLabel((x1 + 245), (y1 + 10), "PSL");
		pauseHooterToACKBack();
	}, 9000);
	
	
}
function FCS_RingBackFor2C_PSH(){
	
	FCS_alarmWindow_PSH.attr({fill: "100-#70db70-#ddc7c7"});		
	FCS_WindowLabel_PSH.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		FCS_alarmWindow_PSH.hide();
		FCS_WindowLabel_PSH.hide();				
		FCS_alarmWindow_PSH = rectForWindows((x1 ), (y1+70),100,60, 5);
		FCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1+75), "PSH");
		pauseHooterToACKBack();
	}, 9000);
	
	
}
function FCS_RingBackFor2C_FSL(){
	
	FCS_alarmWindow_FSL.attr({fill: "100-#70db70-#ddc7c7"});		
	FCS_WindowLabel_FSL.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		FCS_alarmWindow_FSL.hide();
		FCS_WindowLabel_FSL.hide();				
		FCS_alarmWindow_FSL = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		FCS_WindowLabel_FSL = WindowLabel((x1 + 135), (y1+75), "FSL");
		pauseHooterToACKBack();
	}, 9000);
	
	
}
function FCS_RingBackFor2C_FSH(){
	
	FCS_alarmWindow_FSH.attr({fill: "100-#70db70-#ddc7c7"});		
	FCS_WindowLabel_FSH.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		FCS_alarmWindow_FSH.hide();
		FCS_WindowLabel_FSH.hide();				
		FCS_alarmWindow_FSH = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		FCS_WindowLabel_FSH = WindowLabel((x1 + 245), (y1+75), "FSH");
		pauseHooterToACKBack();
	}, 9000);
	
	
}

function AllAlarmCheck_FCS(){
	
	text = " ";
	FCS_AlarmNotChkArr = [];
	FCS_Count++;
	
	if(numOfWindows == 6){
	
			if (FCSAlarmCheck_LSH == true && FCSAlarmCheck_LSL == true
				&& FCSAlarmCheck_PSL == true && FCSAlarmCheck_PSH == true
				&& FCSAlarmCheck_FSL == true && FCSAlarmCheck_FSH == true) {
					
				ExpTrackData.FCS_NotCheckedAlarm = FCS_AlarmNotChkArr;
				ExpTrackData.FCS_Count = FCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_FCS();
					
		}else{
			
			AllAlarmNotChecked_FCS();
		}
				
		}else if(numOfWindows == 5){
			
			if (FCSAlarmCheck_LSH == true && FCSAlarmCheck_LSL == true
					&& FCSAlarmCheck_PSL == true && FCSAlarmCheck_PSH == true
					&& FCSAlarmCheck_FSL == true) {
						
				ExpTrackData.FCS_NotCheckedAlarm = FCS_AlarmNotChkArr;
				ExpTrackData.FCS_Count = FCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_FCS();
					
		}else{
			
			AllAlarmNotChecked_FCS();
		}
			
		}else if(numOfWindows == 4){
			
			if (FCSAlarmCheck_LSH == true && FCSAlarmCheck_LSL == true
					&& FCSAlarmCheck_PSL == true && FCSAlarmCheck_PSH == true) {
						
				ExpTrackData.FCS_NotCheckedAlarm = FCS_AlarmNotChkArr;
				ExpTrackData.FCS_Count = FCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_FCS();
					
		}else{
			
			AllAlarmNotChecked_FCS();
		}
			
			
		}else if(numOfWindows == 3){
			
			if (FCSAlarmCheck_LSH == true && FCSAlarmCheck_LSL == true
					&& FCSAlarmCheck_PSL == true) {
						
				ExpTrackData.FCS_NotCheckedAlarm = FCS_AlarmNotChkArr;
				ExpTrackData.FCS_Count = FCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_FCS();
					
		}else{
			
			AllAlarmNotChecked_FCS();
		}
			
			
		}else if(numOfWindows == 2){
			
			if (FCSAlarmCheck_LSH == true && FCSAlarmCheck_LSL == true) {
						
				ExpTrackData.FCS_NotCheckedAlarm = FCS_AlarmNotChkArr;
				ExpTrackData.FCS_Count = FCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_FCS();
					
		}else{
			
			AllAlarmNotChecked_FCS();
		}
			
			
		}
	
}

function AllAlarmNotChecked_FCS(){
	

	if(numOfWindows == 2 || numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(FCSAlarmCheck_LSH == false){
			
			FCS_AlarmNotChkArr.push("LSH");
			
		}
		if(FCSAlarmCheck_LSL == false){
			
			FCS_AlarmNotChkArr.push("LSL");
			
		}
		
	}
	if(numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(FCSAlarmCheck_PSL == false){
			
			FCS_AlarmNotChkArr.push("PSL");
			
		}
	}
	if(numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(FCSAlarmCheck_PSH == false){
			
			FCS_AlarmNotChkArr.push("PSH");
			
		}
		
	}
	if(numOfWindows == 5 || numOfWindows == 6 ){
		
		if(FCSAlarmCheck_FSL == false){
			
			FCS_AlarmNotChkArr.push("FSL");
			
		}
		
	}
	
	if(numOfWindows == 6 ){
		
		if(FCSAlarmCheck_FSH == false){
			
			FCS_AlarmNotChkArr.push("FSH");
			
		}
	}
	
	
//	console.log(LCS_AlarmChkArr);
	
	for (var i = 0; i < FCS_AlarmNotChkArr.length; i++) {
		  text += FCS_AlarmNotChkArr[i] + ",";
		}
	if(FCS_Count <=3){
		
		alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please check "+text+"alarm for abnormal condition</b>");
		
	}else{
		
		ExpTrackData.FCS_NotCheckedAlarm = FCS_AlarmNotChkArr;
		ExpTrackData.FCS_Count = FCS_Count;
//		console.log(ExpTrackData);
		clearInterval(ref);
		clearInterval(ref1);
		
		 $('#mainDiv').html('');
		 $('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2" style="margin-top:50px; font-size:17px; font-weight:bold; text-align:center;"><div class="alert alert-danger" >Flow Control System plant stopped without checking '+text+' alarm to abnormal condition.<br/> To Restart the experiment <a onClick = "AlarmAnnunciator_SelectApp();">Click Here</a></div></div>');
		 
	}
	
	
}

function SuccessfulViewOfExp_FCS(){
	clearInterval(ref);
	clearInterval(ref1);
	 $('#mainDiv').html('');
		$('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:17px; font-weight:bold; text-align:center;">Congratulations!!!<br/> Flow Control system (Alarm Annunciator) experiment is completed successfully!!</div></div>');
	 
}


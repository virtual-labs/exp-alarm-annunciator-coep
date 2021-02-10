function blinkWinPlayHooter_LSH(){
	if(anim_LSH == null){
		
		glow_LSH = glowWindow(alarmWindow_LSH);						    
		anim_LSH = raphealAnimation();						
		glow_LSH.animate(anim_LSH);
		
		playHooter();
		
	}
}

function blinkWinPlayHooter_LSL(){
	if(anim_LSL == null){
		
		glow_LSL = glowWindow(alarmWindow_LSL);						    
		anim_LSL = raphealAnimation();						
		glow_LSL.animate(anim_LSL);
		
		playHooter();
		
	}
}

function blinkWinPlayHooter_PSL(){
	if(anim_PSL == null){
		
		glow_PSL = glowWindow(alarmWindow_PSL);						    
		anim_PSL = raphealAnimation();						
		glow_PSL.animate(anim_PSL);
		
		playHooter();
		
	}
}

function blinkWinPlayHooter_FSL(){
	if(anim_FSL == null){
		
		glow_FSL = glowWindow(alarmWindow_FSL);						    
		anim_FSL = raphealAnimation();						
		glow_FSL.animate(anim_FSL);
		
		playHooter();
		
	}
}

function blinkWinPlayHooter_FSH(){
	if(anim_FSH == null){
		
		glow_FSH = glowWindow(alarmWindow_FSH);						    
		anim_FSH = raphealAnimation();						
		glow_FSH.animate(anim_FSH);
		
		playHooter();
		
	}
}

function blinkWinPlayHooter_FSH1(){
	if(anim_FSH1 == null){
		
		glow_FSH1 = glowWindow(alarmWindow_FSH1);						    
		anim_FSH1 = raphealAnimation();						
		glow_FSH1.animate(anim_FSH1);
		
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



function glowWinPauseHooter_LSH(){
	
	if(anim_LSH != null){
		
		glow_LSH.stop(anim_LSH);
		alarmWindow_LSH.attr({fill: "100-#ffffff-#ddc7c7"});
		WindowLabel_LSH.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		isGlow_LSH = true;
	}
	
	
}


function glowWinPauseHooter_LSL(){
	
	if(anim_LSL != null){
		
		
		glow_LSL.stop(anim_LSL);
		alarmWindow_LSL.attr({fill: "100-#ffffff-#ddc7c7"});	
		WindowLabel_LSL.attr({'stroke' : '#000'});		
		
		pauseHooter();
		
		isGlow_LSL = true;
	}
}


function glowWinPauseHooter_PSL(){
	
	if(anim_PSL != null){

		glow_PSL.stop(anim_PSL);		
		alarmWindow_PSL.attr({fill: "100-#ffffff-#ddc7c7"});		
		WindowLabel_PSL.attr({'stroke' : '#000'});		
		
		pauseHooter();
		
		isGlow_PSL = true;
	}
}

function glowWinPauseHooter_FSL(){
	
	if(anim_FSL != null){

		glow_FSL.stop(anim_FSL);		
		alarmWindow_FSL.attr({fill: "100-#ffffff-#ddc7c7"});		
		WindowLabel_FSL.attr({'stroke' : '#000'});		
		
		pauseHooter();
		
		isGlow_FSL = true;
	}
}


function glowWinPauseHooter_FSH(){
	
	if(anim_FSH != null){

		glow_FSH.stop(anim_FSH);		
		alarmWindow_FSH.attr({fill: "100-#ffffff-#ddc7c7"});		
		WindowLabel_FSH.attr({'stroke' : '#000'});		
		
		pauseHooter();
		
		isGlow_FSH = true;
	}
}

function glowWinPauseHooter_FSH1(){
	
	if(anim_FSH1 != null){

		glow_FSH1.stop(anim_FSH1);		
		alarmWindow_FSH1.attr({fill: "100-#ffffff-#ddc7c7"});		
		WindowLabel_FSH1.attr({'stroke' : '#000'});		
		
		pauseHooter();
		
		isGlow_FSH1 = true;
	}
}



function pauseHooter(){
	
	if(hutter.hasAttribute('src') == true){
		hutter.pause();
		hutter.removeAttribute('src');
	}
}






function firstResetAfterTestFor2A2B(){
	
	if(isGlow_LSH == true){
		alarmWindow_LSH.hide();
		WindowLabel_LSH.hide();
		glow_LSH.hide();
		anim_LSH = null;
		isGlow_LSH = false;
		alarmWindow_LSH = rectForWindows((x1 ), (y1),100,60, 5);
		WindowLabel_LSH = WindowLabel((x1 + 25 ), (y1 + 10), "LSH");
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_LSH();
			
		}
		
		
	}
	if(isGlow_LSL == true){
		alarmWindow_LSL.hide();
		WindowLabel_LSL.hide();
		glow_LSL.hide();
		anim_LSL = null;
		isGlow_LSL = false;
		alarmWindow_LSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		WindowLabel_LSL = WindowLabel((x1 + 135 ), (y1 + 10), "LSL");
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_LSL();
		}
		
		
		
		
	}
	if(isGlow_PSL == true){
		alarmWindow_PSL.hide();
		WindowLabel_PSL.hide();
		glow_PSL.hide();
		anim_PSL = null;
		isGlow_PSL = false;
		alarmWindow_PSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		WindowLabel_PSL = WindowLabel((x1 + 245), (y1 + 10), "PSL");
		
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_PSL();
		}
		
		
	}
	if(isGlow_FSL == true){
		alarmWindow_FSL.hide();
		WindowLabel_FSL.hide();
		glow_FSL.hide();
		anim_FSL = null;
		isGlow_FSL = false;
		alarmWindow_FSL = rectForWindows((x1 ), (y1+70),100,60, 5);
		WindowLabel_FSL = WindowLabel((x1 + 25 ), (y1+75), "FSL");
		
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_FSL();
		}
		
	}
	if(isGlow_FSH == true){
		alarmWindow_FSH.hide();
		WindowLabel_FSH.hide();
		glow_FSH.hide();
		anim_FSH = null;
		isGlow_FSH = false;
		alarmWindow_FSH = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		WindowLabel_FSH = WindowLabel((x1 + 135), (y1+75), "FSH");
		
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_FSH();
		}
		
		
	}
	if(isGlow_FSH1 == true){
		alarmWindow_FSH1.hide();
		WindowLabel_FSH1.hide();
		glow_FSH1.hide();
		anim_FSH1 = null;
		isGlow_FSH1 = false;
		alarmWindow_FSH1 = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		WindowLabel_FSH1 = WindowLabel((x1 + 245), (y1+75), "FSH1");
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_FSH1();
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


function resetOnRedGreenAlarm(){
	

	
	if(isGlow_LSH == true &&  isGreen_LSH == true){
		
		alarmWindow_LSH.hide();
		WindowLabel_LSH.hide();
		glow_LSH.hide();
		anim_LSH = null;
		Flag_WindowBlinkForgreater70 = 0;
		isGlow_LSH = false;
		alarmWindow_LSH = rectForWindows((x1 ), (y1),100,60, 5);
		WindowLabel_LSH = WindowLabel((x1 + 25 ), (y1 + 10), "LSH");
		
		LCSAlarmCheck_LSH = true;
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_LSH();
			
		}
		
		
	}
	if(isGlow_LSL == true &&  isGreen_LSL == true){
		
		alarmWindow_LSL.hide();
		WindowLabel_LSL.hide();
		glow_LSL.hide();
		anim_LSL = null;
		Flag_WindowBlinkForless30 = 0;
		isGlow_LSL = false;
		alarmWindow_LSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		WindowLabel_LSL = WindowLabel((x1 + 135 ), (y1 + 10), "LSL");
		
		LCSAlarmCheck_LSL = true;
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_LSL();
		}
		
		
	}
	if(isGlow_PSL == true &&  isGreen_PSL == true){
		alarmWindow_PSL.hide();
		WindowLabel_PSL.hide();
		glow_PSL.hide();
		anim_PSL = null;
		Flag_WindowBlinkForless30 = 0;
		isGlow_PSL = false;
		alarmWindow_PSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		WindowLabel_PSL = WindowLabel((x1 + 245), (y1 + 10), "PSL");
		
		LCSAlarmCheck_PSL = true;
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_PSL();
		}
		
		
		
	}
	if(isGlow_FSL == true &&  isGreen_FSL == true){
		alarmWindow_FSL.hide();
		WindowLabel_FSL.hide();
		glow_FSL.hide();
		anim_FSL = null;
		isGlow_FSL = false;
		alarmWindow_FSL = rectForWindows((x1 ), (y1+70),100,60, 5);
		WindowLabel_FSL = WindowLabel((x1 + 25 ), (y1+75), "FSL");
		
		LCSAlarmCheck_FSL = true;
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_FSL();
		}
		
		
	}
	if(isGlow_FSH == true &&  isGreen_FSH == true){
		alarmWindow_FSH.hide();
		WindowLabel_FSH.hide();
		glow_FSH.hide();
		anim_FSH = null;
		isGlow_FSH = false;
		alarmWindow_FSH = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		WindowLabel_FSH = WindowLabel((x1 + 135), (y1+75), "FSH");
		
		LCSAlarmCheck_FSH = true;
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_FSH();
		}
		
		
	}
	if(isGlow_FSH1 == true &&  isGreen_FSH1 == true){
		alarmWindow_FSH1.hide();
		WindowLabel_FSH1.hide();
		glow_FSH1.hide();
		anim_FSH1 = null;
		isGlow_FSH1 = false;
		alarmWindow_FSH1 = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		WindowLabel_FSH1 = WindowLabel((x1 + 245), (y1+75), "FSH1");
		
		LCSAlarmCheck_FSH1 = true;
		
		if(ISASeq == 3){
			
			LCS_RingBackFor2C_FSH1();
		}
		
	}
	

}


function LCS_RingBackFor2C_LSH(){
	
	alarmWindow_LSH.attr({fill: "100-#70db70-#ddc7c7"});		
	WindowLabel_LSH.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		alarmWindow_LSH.hide();
		WindowLabel_LSH.hide();
		alarmWindow_LSH = rectForWindows((x1 ), (y1),100,60, 5);
		WindowLabel_LSH = WindowLabel((x1 + 25 ), (y1 + 10), "LSH");
		pauseHooterToACKBack();
	}, 9000);
	
}


function LCS_RingBackFor2C_LSL(){
	
	alarmWindow_LSL.attr({fill: "100-#70db70-#ddc7c7"});		
	WindowLabel_LSL.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		alarmWindow_LSL.hide();
		WindowLabel_LSL.hide();				
		alarmWindow_LSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		WindowLabel_LSL = WindowLabel((x1 + 135 ), (y1 + 10), "LSL");
		pauseHooterToACKBack();
	}, 9000);
	
}

function LCS_RingBackFor2C_PSL(){
	
	alarmWindow_PSL.attr({fill: "100-#70db70-#ddc7c7"});		
	WindowLabel_PSL.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		alarmWindow_PSL.hide();
		WindowLabel_PSL.hide();				
		alarmWindow_PSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		WindowLabel_PSL = WindowLabel((x1 + 245), (y1 + 10), "PSL");
		pauseHooterToACKBack();
	}, 9000);
	
	
}

function LCS_RingBackFor2C_FSL(){
	
	alarmWindow_FSL.attr({fill: "100-#70db70-#ddc7c7"});		
	WindowLabel_FSL.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		alarmWindow_FSL.hide();
		WindowLabel_FSL.hide();
		alarmWindow_FSL = rectForWindows((x1 ), (y1+70),100,60, 5);
		WindowLabel_FSL = WindowLabel((x1 + 25 ), (y1+75), "FSL");
		pauseHooterToACKBack();
	}, 9000);
	
	
}

function LCS_RingBackFor2C_FSH(){
	
	alarmWindow_FSH.attr({fill: "100-#70db70-#ddc7c7"});		
	WindowLabel_FSH.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		alarmWindow_FSH.hide();
		WindowLabel_FSH.hide();			
		alarmWindow_FSH = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		WindowLabel_FSH = WindowLabel((x1 + 135), (y1+75), "FSH");
		pauseHooterToACKBack();
	}, 9000);
	
	
}

function LCS_RingBackFor2C_FSH1(){
	
	alarmWindow_FSH1.attr({fill: "100-#70db70-#ddc7c7"});		
	WindowLabel_FSH1.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		alarmWindow_FSH1.hide();
		WindowLabel_FSH1.hide();				
		alarmWindow_FSH1 = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		WindowLabel_FSH1 = WindowLabel((x1 + 245), (y1+75), "FSH1");
		pauseHooterToACKBack();
	}, 9000);
	
	
}


function AllAlarmCheck_LCS(){
	
	text = " ";
	LCS_AlarmNotChkArr = [];
	LCS_Count++;
	
	if(numOfWindows == 6){
		

			if (LCSAlarmCheck_LSH == true && LCSAlarmCheck_LSL == true
				&& LCSAlarmCheck_PSL == true && LCSAlarmCheck_FSL == true
				&& LCSAlarmCheck_FSH == true && LCSAlarmCheck_FSH1 == true) {
					
				ExpTrackData.LCS_NotCheckedAlarm = LCS_AlarmNotChkArr;
				ExpTrackData.LCS_Count = LCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_LCS();
					
		}else{
			
			AllAlarmNotChecked_LCS();
		}
				
		}else if(numOfWindows == 5){
			
			if (LCSAlarmCheck_LSH == true && LCSAlarmCheck_LSL == true
					&& LCSAlarmCheck_PSL == true && LCSAlarmCheck_FSL == true
					&& LCSAlarmCheck_FSH == true) {
						
					ExpTrackData.LCS_NotCheckedAlarm = LCS_AlarmNotChkArr;
					ExpTrackData.LCS_Count = LCS_Count;
//					console.log(ExpTrackData);
					SuccessfulViewOfExp_LCS();
						
			}else{
				
				AllAlarmNotChecked_LCS();
			}
			
		}else if(numOfWindows == 4){
			
			if (LCSAlarmCheck_LSH == true && LCSAlarmCheck_LSL == true
					&& LCSAlarmCheck_PSL == true && LCSAlarmCheck_FSL == true) {
						
					ExpTrackData.LCS_NotCheckedAlarm = LCS_AlarmNotChkArr;
					ExpTrackData.LCS_Count = LCS_Count;
//					console.log(ExpTrackData);
					SuccessfulViewOfExp_LCS();
						
			}else{
				
				AllAlarmNotChecked_LCS();
			}
			
			
		}else if(numOfWindows == 3){
			
			if (LCSAlarmCheck_LSH == true && LCSAlarmCheck_LSL == true
					&& LCSAlarmCheck_PSL == true ) {
						
					ExpTrackData.LCS_NotCheckedAlarm = LCS_AlarmNotChkArr;
					ExpTrackData.LCS_Count = LCS_Count;
//					console.log(ExpTrackData);
					SuccessfulViewOfExp_LCS();
						
			}else{
				
				AllAlarmNotChecked_LCS();
			}
			
			
		}else if(numOfWindows == 2){
			
			if (LCSAlarmCheck_LSH == true && LCSAlarmCheck_LSL == true) {
						
					ExpTrackData.LCS_NotCheckedAlarm = LCS_AlarmNotChkArr;
					ExpTrackData.LCS_Count = LCS_Count;
//					console.log(ExpTrackData);
					SuccessfulViewOfExp_LCS();
						
			}else{
				
				AllAlarmNotChecked_LCS();
			}
			
			
		}
		
	
		

	
	
}

function AllAlarmNotChecked_LCS(){
	
	if(numOfWindows == 2 || numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(LCSAlarmCheck_LSH == false){
			
			LCS_AlarmNotChkArr.push("LSH");
			
		}
		if(LCSAlarmCheck_LSL == false){
			
			LCS_AlarmNotChkArr.push("LSL");
			
		}
		
	}
	if(numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(LCSAlarmCheck_PSL == false){
			
			LCS_AlarmNotChkArr.push("PSL");
			
		}
	}
	if(numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(LCSAlarmCheck_FSL == false){
			
			LCS_AlarmNotChkArr.push("FSL");
			
		}
		
	}
	if(numOfWindows == 5 || numOfWindows == 6 ){
		
		if(LCSAlarmCheck_FSH == false){
			
			LCS_AlarmNotChkArr.push("FSH");
			
		}
		
	}
	
	if(numOfWindows == 6 ){
		
		if(LCSAlarmCheck_FSH1 == false){
			
			LCS_AlarmNotChkArr.push("FSH1");
			
		}
	}
	
	
//	console.log(LCS_AlarmChkArr);
	
	for (var i = 0; i < LCS_AlarmNotChkArr.length; i++) {
	
		  text += LCS_AlarmNotChkArr[i] + ",";
		}
	if(LCS_Count <=3){
		
		alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please check "+text+"alarm for abnormal condition</b>");
		
	}else{
		
		ExpTrackData.LCS_NotCheckedAlarm = LCS_AlarmNotChkArr;
		ExpTrackData.LCS_Count = LCS_Count;
//		console.log(ExpTrackData);
		clearInterval(ref);
		clearInterval(ref1);
		
		 $('#mainDiv').html('');
		 $('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2" style="margin-top:50px; font-size:17px; font-weight:bold; text-align:center;"><div class="alert alert-danger" >Level Control System plant stopped without checking '+text+' alarm for the abnormal condition.<br/> To Restart the experiment <a onClick = "AlarmAnnunciator_SelectApp();">Click Here</a></div></div>');
		 
	}
	
	
}

function SuccessfulViewOfExp_LCS(){
	clearInterval(ref);
	clearInterval(ref1);
	 $('#mainDiv').html('');
		$('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:17px; font-weight:bold; text-align:center;">Congratulations!!!<br/> Level Control system (Alarm Annunciator) experiment is completed successfully!!</div></div>');
	 
}

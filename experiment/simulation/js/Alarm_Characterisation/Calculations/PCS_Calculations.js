function PCS_blinkWinPlayHooter_PSH(){
	if(PCS_anim_PSH == null){
		
		PCS_glow_PSH = glowWindow(PCS_alarmWindow_PSH);						    
		PCS_anim_PSH = raphealAnimation();						
		PCS_glow_PSH.animate(PCS_anim_PSH);
		
		playHooter();
		
	}
}

function PCS_blinkWinPlayHooter_PSL(){
	if(PCS_anim_PSL == null){
		
		PCS_glow_PSL = glowWindow(PCS_alarmWindow_PSL);						    
		PCS_anim_PSL = raphealAnimation();						
		PCS_glow_PSL.animate(PCS_anim_PSL);
		
		playHooter();
		
	}
}

function PCS_blinkWinPlayHooter_FSH1(){
	if(PCS_anim_FSH1 == null){
		
		PCS_glow_FSH1 = glowWindow(PCS_alarmWindow_FSH1);						    
		PCS_anim_FSH1 = raphealAnimation();						
		PCS_glow_FSH1.animate(PCS_anim_FSH1);
		
		playHooter();
		
	}
}


function PCS_blinkWinPlayHooter_FSH2(){
	if(PCS_anim_FSH2 == null){
		
		PCS_glow_FSH2 = glowWindow(PCS_alarmWindow_FSH2);						    
		PCS_anim_FSH2 = raphealAnimation();						
		PCS_glow_FSH2.animate(PCS_anim_FSH2);
		
		playHooter();
		
	}
}

function PCS_blinkWinPlayHooter_FSL1(){
	if(PCS_anim_FSL1 == null){
		
		PCS_glow_FSL1 = glowWindow(PCS_alarmWindow_FSL1);						    
		PCS_anim_FSL1 = raphealAnimation();						
		PCS_glow_FSL1.animate(PCS_anim_FSL1);
		
		playHooter();
		
	}
}


function PCS_blinkWinPlayHooter_FSL2(){
	if(PCS_anim_FSL2 == null){
		
		PCS_glow_FSL2 = glowWindow(PCS_alarmWindow_FSL2);						    
		PCS_anim_FSL2 = raphealAnimation();						
		PCS_glow_FSL2.animate(PCS_anim_FSL2);
		
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



function PCS_glowWinPauseHooter_PSH(){
	
	if(PCS_anim_PSH != null){
		
		PCS_glow_PSH.stop(PCS_anim_PSH);
		PCS_alarmWindow_PSH.attr({fill: "100-#ffffff-#ddc7c7"});
		PCS_WindowLabel_PSH.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		PCS_isGlow_PSH = true;
	}
}

function PCS_glowWinPauseHooter_PSL(){
	
	if(PCS_anim_PSL != null){
		
		PCS_glow_PSL.stop(PCS_anim_PSL);
		PCS_alarmWindow_PSL.attr({fill: "100-#ffffff-#ddc7c7"});
		PCS_WindowLabel_PSL.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		PCS_isGlow_PSL = true;
	}
}

function PCS_glowWinPauseHooter_FSH1(){
	
	if(PCS_anim_FSH1 != null){
		
		PCS_glow_FSH1.stop(PCS_anim_FSH1);
		PCS_alarmWindow_FSH1.attr({fill: "100-#ffffff-#ddc7c7"});
		PCS_WindowLabel_FSH1.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		PCS_isGlow_FSH1 = true;
	}
}

function PCS_glowWinPauseHooter_FSH2(){
	
	if(PCS_anim_FSH2 != null){
		
		PCS_glow_FSH2.stop(PCS_anim_FSH2);
		PCS_alarmWindow_FSH2.attr({fill: "100-#ffffff-#ddc7c7"});
		PCS_WindowLabel_FSH2.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		PCS_isGlow_FSH2 = true;
	}
}

function PCS_glowWinPauseHooter_FSL1(){
	
	if(PCS_anim_FSL1 != null){
		
		PCS_glow_FSL1.stop(PCS_anim_FSL1);
		PCS_alarmWindow_FSL1.attr({fill: "100-#ffffff-#ddc7c7"});
		PCS_WindowLabel_FSL1.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		PCS_isGlow_FSL1 = true;
	}
}

function PCS_glowWinPauseHooter_FSL2(){
	
	if(PCS_anim_FSL2 != null){
		
		PCS_glow_FSL2.stop(PCS_anim_FSL2);
		PCS_alarmWindow_FSL2.attr({fill: "100-#ffffff-#ddc7c7"});
		PCS_WindowLabel_FSL2.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		PCS_isGlow_FSL2 = true;
	}
}



function pauseHooter(){
	
	if(hutter.hasAttribute('src') == true){
		hutter.pause();
		hutter.removeAttribute('src');
	}
}






function PCS_firstResetAfterTestFor2A2B(){
	
	if(PCS_isGlow_PSH == true){
		PCS_alarmWindow_PSH.hide();
		PCS_WindowLabel_PSH.hide();
		PCS_glow_PSH.hide();
		PCS_anim_PSH = null;
		PCS_isGlow_PSH = false;
		PCS_alarmWindow_PSH = rectForWindows((x1 ), (y1),100,60, 5);
		PCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1 + 10), "PSH");
		
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_PSH();
		}
		
	}
	if(PCS_isGlow_PSL == true){
		PCS_alarmWindow_PSL.hide();
		PCS_WindowLabel_PSL.hide();
		PCS_glow_PSL.hide();
		PCS_anim_PSL = null;
		PCS_isGlow_PSL = false;
		PCS_alarmWindow_PSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		PCS_WindowLabel_PSL = WindowLabel((x1 + 135 ), (y1 + 10), "PSL");
		
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_PSL();
		}
		
	}
	if(PCS_isGlow_FSH1 == true){
		PCS_alarmWindow_FSH1.hide();
		PCS_WindowLabel_FSH1.hide();
		PCS_glow_FSH1.hide();
		PCS_anim_FSH1 = null;
		PCS_isGlow_FSH1 = false;
		PCS_alarmWindow_FSH1 = rectForWindows((x1 + 220), (y1),100,60, 5);
		PCS_WindowLabel_FSH1 = WindowLabel((x1 + 245), (y1 + 10), "FSH 1");
		
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_FSH1();
		}
		
	}
	if(PCS_isGlow_FSH2 == true){
		PCS_alarmWindow_FSH2.hide();
		PCS_WindowLabel_FSH2.hide();
		PCS_glow_FSH2.hide();
		PCS_anim_FSH2 = null;
		PCS_isGlow_FSH2 = false;
		PCS_alarmWindow_FSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		PCS_WindowLabel_FSH2 = WindowLabel((x1 + 25 ), (y1+75), "FSH 2");
		
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_FSH2();
		}
		
	}
	if(PCS_isGlow_FSL1 == true){
		PCS_alarmWindow_FSL1.hide();
		PCS_WindowLabel_FSL1.hide();
		PCS_glow_FSL1.hide();
		PCS_anim_FSL1 = null;
		PCS_isGlow_FSL1 = false;
		PCS_alarmWindow_FSL1 = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		PCS_WindowLabel_FSL1 = WindowLabel((x1 + 135), (y1+75), "FSL 1");
		
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_FSL1();
		}
		
	}
	if(PCS_isGlow_FSL2 == true){
		PCS_alarmWindow_FSL2.hide();
		PCS_WindowLabel_FSL2.hide();
		PCS_glow_FSL2.hide();
		PCS_anim_FSL2 = null;
		PCS_isGlow_FSL2 = false;
		PCS_alarmWindow_FSL2 = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		PCS_WindowLabel_FSL2 = WindowLabel((x1 + 245), (y1+75), "FSL 2");
		
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_FSL2();
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


function PCS_resetOnRedGreenAlarm(){
	
	if(PCS_isGlow_PSH == true &&  PCS_isGreen_PSH == true){
		
		PCS_alarmWindow_PSH.hide();
		PCS_WindowLabel_PSH.hide();
		PCS_glow_PSH.hide();
		PCS_anim_PSH = null;
		FlagPCS_WindowBlinkForgreater70 = 0;
		PCS_isGlow_PSH = false;
		PCS_alarmWindow_PSH = rectForWindows((x1 ), (y1),100,60, 5);
		PCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1 + 10), "PSH");
		
		PCSAlarmCheck_PSH = true;
		
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_PSH();
		}
		
	}
	if(PCS_isGlow_PSL == true &&  PCS_isGreen_PSL == true){
		
		PCS_alarmWindow_PSL.hide();
		PCS_WindowLabel_PSL.hide();
		PCS_glow_PSL.hide();
		PCS_anim_PSL = null;
		FlagPCS_WindowBlinkForless30 = 0;
		PCS_isGlow_PSL = false;
		PCS_alarmWindow_PSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		PCS_WindowLabel_PSL = WindowLabel((x1 + 135 ), (y1 + 10), "PSL");
		
		PCSAlarmCheck_PSL = true;
		
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_PSL();
		}
		
	}
	if(PCS_isGlow_FSH1 == true &&  PCS_isGreen_FSH1 == true){
		
		PCS_alarmWindow_FSH1.hide();
		PCS_WindowLabel_FSH1.hide();
		PCS_glow_FSH1.hide();
		PCS_anim_FSH1 = null;		
		PCS_isGlow_FSH1 = false;
		PCS_alarmWindow_FSH1 = rectForWindows((x1 + 220), (y1),100,60, 5);
		PCS_WindowLabel_FSH1 = WindowLabel((x1 + 245), (y1 + 10), "FSH 1");
		
		PCSAlarmCheck_FSH1 = true;
		
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_FSH1();
		}
		
	}
	if(PCS_isGlow_FSH2 == true &&  PCS_isGreen_FSH2 == true){
		
		PCS_alarmWindow_FSH2.hide();
		PCS_WindowLabel_FSH2.hide();
		PCS_glow_FSH2.hide();
		PCS_anim_FSH2 = null;		
		PCS_isGlow_FSH2 = false;
		PCS_alarmWindow_FSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		PCS_WindowLabel_FSH2 = WindowLabel((x1 + 25 ), (y1+75), "FSH 2");
		
		PCSAlarmCheck_FSH2 = true;
		
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_FSH2();
		}
		
	}
	if(PCS_isGlow_FSL1 == true &&  PCS_isGreen_FSL1 == true){
		
		PCS_alarmWindow_FSL1.hide();
		PCS_WindowLabel_FSL1.hide();
		PCS_glow_FSL1.hide();
		PCS_anim_FSL1 = null;		
		PCS_isGlow_FSL1 = false;
		PCS_alarmWindow_FSL1 = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		PCS_WindowLabel_FSL1 = WindowLabel((x1 + 135), (y1+75), "FSL 1");
		
		PCSAlarmCheck_FSL1 = true;
	
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_FSL1();
		}
		
	}
	if(PCS_isGlow_FSL2 == true &&  PCS_isGreen_FSL2 == true){
		
		PCS_alarmWindow_FSL2.hide();
		PCS_WindowLabel_FSL2.hide();
		PCS_glow_FSL2.hide();
		PCS_anim_FSL2 = null;		
		PCS_isGlow_FSL2 = false;
		PCS_alarmWindow_FSL2 = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		PCS_WindowLabel_FSL2 = WindowLabel((x1 + 245), (y1+75), "FSL 2");
		
		PCSAlarmCheck_FSL2 = true;
		
		if(ISASeq == 3){
			
			PCS_RingBackFor2C_FSL2();
		}
		
	}

}


function PCS_RingBackFor2C_PSH(){
	
	PCS_alarmWindow_PSH.attr({fill: "100-#70db70-#ddc7c7"});		
	PCS_WindowLabel_PSH.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		PCS_alarmWindow_PSH.hide();
		PCS_WindowLabel_PSH.hide();
		PCS_alarmWindow_PSH = rectForWindows((x1 ), (y1),100,60, 5);
		PCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1 + 10), "PSH");		
		pauseHooterToACKBack();
	}, 9000);
	
}


function PCS_RingBackFor2C_PSL(){
	
	PCS_alarmWindow_PSL.attr({fill: "100-#70db70-#ddc7c7"});		
	PCS_WindowLabel_PSL.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		PCS_alarmWindow_PSL.hide();
		PCS_WindowLabel_PSL.hide();				
		PCS_alarmWindow_PSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		PCS_WindowLabel_PSL = WindowLabel((x1 + 135 ), (y1 + 10), "PSL");
		pauseHooterToACKBack();
	}, 9000);
	
}

function PCS_RingBackFor2C_FSH1(){
	
	PCS_alarmWindow_FSH1.attr({fill: "100-#70db70-#ddc7c7"});		
	PCS_WindowLabel_FSH1.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		PCS_alarmWindow_FSH1.hide();
		PCS_WindowLabel_FSH1.hide();				
		PCS_alarmWindow_FSH1 = rectForWindows((x1 + 220), (y1),100,60, 5);
		PCS_WindowLabel_FSH1 = WindowLabel((x1 + 245), (y1 + 10), "FSH 1");
		pauseHooterToACKBack();
	}, 9000);
	
	
}

function PCS_RingBackFor2C_FSH2(){
	
	PCS_alarmWindow_FSH2.attr({fill: "100-#70db70-#ddc7c7"});		
	PCS_WindowLabel_FSH2.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		PCS_alarmWindow_FSH2.hide();
		PCS_WindowLabel_FSH2.hide();
		PCS_alarmWindow_FSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		PCS_WindowLabel_FSH2 = WindowLabel((x1 + 25 ), (y1+75), "FSH 2");
		pauseHooterToACKBack();
	}, 9000);
	
	
}

function PCS_RingBackFor2C_FSL1(){
	
	PCS_alarmWindow_FSL1.attr({fill: "100-#70db70-#ddc7c7"});		
	PCS_WindowLabel_FSL1.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		PCS_alarmWindow_FSL1.hide();
		PCS_WindowLabel_FSL1.hide();			
		PCS_alarmWindow_FSL1 = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		PCS_WindowLabel_FSL1 = WindowLabel((x1 + 135), (y1+75), "FSL 1");
		pauseHooterToACKBack();
	}, 9000);
	
	
}

function PCS_RingBackFor2C_FSL2(){
	
	PCS_alarmWindow_FSL2.attr({fill: "100-#70db70-#ddc7c7"});		
	PCS_WindowLabel_FSL2.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		PCS_alarmWindow_FSL2.hide();
		PCS_WindowLabel_FSL2.hide();				
		PCS_alarmWindow_FSL2 = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		PCS_WindowLabel_FSL2 = WindowLabel((x1 + 245), (y1+75), "FSL 2");
		pauseHooterToACKBack();
	}, 9000);
	
	
}



function AllAlarmCheck_PCS(){
	
	text = " ";
	PCS_AlarmNotChkArr = [];
	PCS_Count++;
	
	if(numOfWindows == 6){
		

			if (PCSAlarmCheck_PSH == true && PCSAlarmCheck_PSL == true
				&& PCSAlarmCheck_FSH1 == true && PCSAlarmCheck_FSH2 == true
				&& PCSAlarmCheck_FSL1 == true && PCSAlarmCheck_FSL2 == true) {
					
				ExpTrackData.PCS_NotCheckedAlarm = PCS_AlarmNotChkArr;
				ExpTrackData.PCS_Count = PCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_PCS();
					
		}else{
			
			AllAlarmNotChecked_PCS();
		}
				
		}else if(numOfWindows == 5){
			
			if (PCSAlarmCheck_PSH == true && PCSAlarmCheck_PSL == true
					&& PCSAlarmCheck_FSH1 == true && PCSAlarmCheck_FSH2 == true
					&& PCSAlarmCheck_FSL1 == true) {
						
				ExpTrackData.PCS_NotCheckedAlarm = PCS_AlarmNotChkArr;
				ExpTrackData.PCS_Count = PCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_PCS();
					
		}else{
			
			AllAlarmNotChecked_PCS();
		}
			
		}else if(numOfWindows == 4){
			
			if (PCSAlarmCheck_PSH == true && PCSAlarmCheck_PSL == true
					&& PCSAlarmCheck_FSH1 == true && PCSAlarmCheck_FSH2 == true) {
						
				ExpTrackData.PCS_NotCheckedAlarm = PCS_AlarmNotChkArr;
				ExpTrackData.PCS_Count = PCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_PCS();
					
		}else{
			
			AllAlarmNotChecked_PCS();
		}
			
			
		}else if(numOfWindows == 3){
			
			if (PCSAlarmCheck_PSH == true && PCSAlarmCheck_PSL == true
					&& PCSAlarmCheck_FSH1 == true) {
						
				ExpTrackData.PCS_NotCheckedAlarm = PCS_AlarmNotChkArr;
				ExpTrackData.PCS_Count = PCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_PCS();
					
		}else{
			
			AllAlarmNotChecked_PCS();
		}
			
			
		}else if(numOfWindows == 2){
			
			if (PCSAlarmCheck_PSH == true && PCSAlarmCheck_PSL == true) {
						
				ExpTrackData.PCS_NotCheckedAlarm = PCS_AlarmNotChkArr;
				ExpTrackData.PCS_Count = PCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_PCS();
					
		}else{
			
			AllAlarmNotChecked_PCS();
		}
			
			
		}
		
	
}



function AllAlarmNotChecked_PCS(){
	
	if(numOfWindows == 2 || numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(PCSAlarmCheck_PSH == false){
			
			PCS_AlarmNotChkArr.push("PSH");
			
		}
		if(PCSAlarmCheck_PSL == false){
			
			PCS_AlarmNotChkArr.push("PSL");
			
		}
		
	}
	if(numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(PCSAlarmCheck_FSH1 == false){
			
			PCS_AlarmNotChkArr.push("FSH1");
			
		}
	}
	if(numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(PCSAlarmCheck_FSH2 == false){
			
			PCS_AlarmNotChkArr.push("FSH2");
			
		}
		
	}
	if(numOfWindows == 5 || numOfWindows == 6 ){
		
		if(PCSAlarmCheck_FSL1 == false){
			
			PCS_AlarmNotChkArr.push("FSL1");
			
		}
		
	}
	
	if(numOfWindows == 6 ){
		
		if(PCSAlarmCheck_FSL2 == false){
			
			PCS_AlarmNotChkArr.push("FSL2");
			
		}
	}
	
	
//	console.log(LCS_AlarmChkArr);
	
	for (var i = 0; i < PCS_AlarmNotChkArr.length; i++) {
		  text += PCS_AlarmNotChkArr[i] + ",";
		}
	if(PCS_Count <=3){
		
		alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please check "+text+"alarm for abnormal condition</b>");
		
	}else{
		
		ExpTrackData.PCS_NotCheckedAlarm = PCS_AlarmNotChkArr;
		ExpTrackData.PCS_Count = PCS_Count;
//		console.log(ExpTrackData);
		clearInterval(ref);
		clearInterval(ref1);
		
		 $('#mainDiv').html('');
		 $('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2" style="margin-top:50px; font-size:17px; font-weight:bold; text-align:center;"><div class="alert alert-danger" >Pressure Control System plant stopped without checking '+text+' alarm to abnormal condition.<br/> To Restart the experiment <a onClick = "AlarmAnnunciator_SelectApp();">Click Here</a></div></div>');
		 
	}
	
	
}

function SuccessfulViewOfExp_PCS(){
	clearInterval(ref);
	clearInterval(ref1);
	 $('#mainDiv').html('');
		$('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:17px; font-weight:bold; text-align:center;">Congratulations!!!<br/> Pressure Control system (Alarm Annunciator) experiment is completed successfully!!</div></div>');
	 
}

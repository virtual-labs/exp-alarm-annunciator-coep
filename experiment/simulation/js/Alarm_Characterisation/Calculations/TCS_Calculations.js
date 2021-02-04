function TCSblinkWinPlayHooter_FSH(){
	if(TCSanim_FSH == null){
		
		TCSglow_FSH = glowWindow(TCSalarmWindow_FSH);						    
		TCSanim_FSH = raphealAnimation();						
		TCSglow_FSH.animate(TCSanim_FSH);
		
		playHooter();
		
	}
}

function TCSblinkWinPlayHooter_FSL(){
	if(TCSanim_FSL == null){
		
		TCSglow_FSL = glowWindow(TCSalarmWindow_FSL);						    
		TCSanim_FSL = raphealAnimation();						
		TCSglow_FSL.animate(TCSanim_FSL);
		
		playHooter();
		
	}
}

function TCSblinkWinPlayHooter_TSL(){
	if(TCSanim_TSL == null){
		
		TCSglow_TSL = glowWindow(TCSalarmWindow_TSL);						    
		TCSanim_TSL = raphealAnimation();						
		TCSglow_TSL.animate(TCSanim_TSL);
		
		playHooter();
		
	}
}

function TCSblinkWinPlayHooter_TSH2(){
	if(TCSanim_TSH2 == null){
		
		TCSglow_TSH2 = glowWindow(TCSalarmWindow_TSH2);						    
		TCSanim_TSH2 = raphealAnimation();						
		TCSglow_TSH2.animate(TCSanim_TSH2);
		
		playHooter();
		
	}
}

function TCSblinkWinPlayHooter_PSH(){
	if(TCSanim_PSH == null){
		
		TCSglow_PSH = glowWindow(TCSalarmWindow_PSH);						    
		TCSanim_PSH = raphealAnimation();						
		TCSglow_PSH.animate(TCSanim_PSH);
		
		playHooter();
		
	}
}

function TCSblinkWinPlayHooter_TSH1(){
	if(TCSanim_TSH1 == null){
		
		TCSglow_TSH1 = glowWindow(TCSalarmWindow_TSH1);						    
		TCSanim_TSH1 = raphealAnimation();						
		TCSglow_TSH1.animate(TCSanim_TSH1);
		
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



function TCSglowWinPauseHooter_FSH(){
	
	if(TCSanim_FSH != null){
		
		TCSglow_FSH.stop(TCSanim_FSH);
		TCSalarmWindow_FSH.attr({fill: "100-#ffffff-#ddc7c7"});
		TCSWindowLabel_FSH.attr({'stroke' : '#000'});
		
		pauseHooter();
		
		TCSisGlow_FSH = true;
	}
	
	
}


function TCSglowWinPauseHooter_FSL(){
	
	if(TCSanim_FSL != null){
		
		
		TCSglow_FSL.stop(TCSanim_FSL);
		TCSalarmWindow_FSL.attr({fill: "100-#ffffff-#ddc7c7"});	
		TCSWindowLabel_FSL.attr({'stroke' : '#000'});		
		
		pauseHooter();
		
		TCSisGlow_FSL = true;
	}
}


function TCSglowWinPauseHooter_TSL(){
	
	if(TCSanim_TSL != null){

		TCSglow_TSL.stop(TCSanim_TSL);		
		TCSalarmWindow_TSL.attr({fill: "100-#ffffff-#ddc7c7"});		
		TCSWindowLabel_TSL.attr({'stroke' : '#000'});		
		
		pauseHooter();
		
		TCSisGlow_TSL = true;
	}
}

function TCSglowWinPauseHooter_TSH2(){
	
	if(TCSanim_TSH2 != null){

		TCSglow_TSH2.stop(TCSanim_TSH2);		
		TCSalarmWindow_TSH2.attr({fill: "100-#ffffff-#ddc7c7"});		
		TCSWindowLabel_TSH2.attr({'stroke' : '#000'});		
		
		pauseHooter();
		
		TCSisGlow_TSH2 = true;
	}
}


function TCSglowWinPauseHooter_PSH(){
	
	if(TCSanim_PSH != null){

		TCSglow_PSH.stop(TCSanim_PSH);		
		TCSalarmWindow_PSH.attr({fill: "100-#ffffff-#ddc7c7"});		
		TCSWindowLabel_PSH.attr({'stroke' : '#000'});		
		
		pauseHooter();
		
		TCSisGlow_PSH = true;
	}
}

function TCSglowWinPauseHooter_TSH1(){
	
	if(TCSanim_TSH1 != null){

		TCSglow_TSH1.stop(TCSanim_TSH1);		
		TCSalarmWindow_TSH1.attr({fill: "100-#ffffff-#ddc7c7"});		
		TCSWindowLabel_TSH1.attr({'stroke' : '#000'});		
		
		pauseHooter();
		
		TCSisGlow_TSH1 = true;
	}
}



function pauseHooter(){
	
	if(hutter.hasAttribute('src') == true){
		hutter.pause();
		hutter.removeAttribute('src');
	}
}






function TCSfirstResetAfterTestFor2A2B(){
	
	if(TCSisGlow_FSH == true){
		TCSalarmWindow_FSH.hide();
		TCSWindowLabel_FSH.hide();
		TCSglow_FSH.hide();
		TCSanim_FSH = null;
		TCSisGlow_FSH = false;
		TCSalarmWindow_FSH = rectForWindows((x1 ), (y1),100,60, 5);
		TCSWindowLabel_FSH = WindowLabel((x1 + 25 ), (y1 + 10), "FSH");
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_FSH();
		}
		
	}
	if(TCSisGlow_FSL == true){
		TCSalarmWindow_FSL.hide();
		TCSWindowLabel_FSL.hide();
		TCSglow_FSL.hide();
		TCSanim_FSL = null;
		TCSisGlow_FSL = false;
		TCSalarmWindow_FSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		TCSWindowLabel_FSL = WindowLabel((x1 + 135 ), (y1 + 10), "FSL");
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_FSL();
		}
		
	}
	if(TCSisGlow_TSL == true){
		TCSalarmWindow_TSL.hide();
		TCSWindowLabel_TSL.hide();
		TCSglow_TSL.hide();
		TCSanim_TSL = null;
		TCSisGlow_TSL = false;
		TCSalarmWindow_TSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		TCSWindowLabel_TSL = WindowLabel((x1 + 245), (y1 + 10), "TSL");
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_TSL();
		}
		
	}
	if(TCSisGlow_TSH2 == true){
		TCSalarmWindow_TSH2.hide();
		TCSWindowLabel_TSH2.hide();
		TCSglow_TSH2.hide();
		TCSanim_TSH2 = null;
		TCSisGlow_TSH2 = false;
		TCSalarmWindow_TSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		TCSWindowLabel_TSH2 = WindowLabel((x1 + 25 ), (y1+75), "TSH2");
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_TSH2();
		}
		
	}
	if(TCSisGlow_PSH == true){
		TCSalarmWindow_PSH.hide();
		TCSWindowLabel_PSH.hide();
		TCSglow_PSH.hide();
		TCSanim_PSH = null;
		TCSisGlow_PSH = false;
		TCSalarmWindow_PSH = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		TCSWindowLabel_PSH = WindowLabel((x1 + 135), (y1+75), "PSH");
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_PSH();
		}
		
	}
	if(TCSisGlow_TSH1 == true){
		TCSalarmWindow_TSH1.hide();
		TCSWindowLabel_TSH1.hide();
		TCSglow_TSH1.hide();
		TCSanim_TSH1 = null;
		TCSisGlow_TSH1 = false;
		TCSalarmWindow_TSH1 = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		TCSWindowLabel_TSH1 = WindowLabel((x1 + 245), (y1+75), "TSH1");
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_TSH1();
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

function TCSresetOnRedGreenAlarm(){
	

	
	if(TCSisGlow_FSH == true &&  TCSisGreen_FSH == true){
		
		TCSalarmWindow_FSH.hide();
		TCSWindowLabel_FSH.hide();
		TCSglow_FSH.hide();
		TCSanim_FSH = null;
		//TCSFlag_WindowBlinkForgreater70 = 0;
		TCSisGlow_FSH = false;
		TCSalarmWindow_FSH = rectForWindows((x1 ), (y1),100,60, 5);
		TCSWindowLabel_FSH = WindowLabel((x1 + 25 ), (y1 + 10), "FSH");
		
		TCSAlarmCheck_FSH = true;
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_FSH();
		}
		
	}
	if(TCSisGlow_FSL == true &&  TCSisGreen_FSL == true){
		
		TCSalarmWindow_FSL.hide();
		TCSWindowLabel_FSL.hide();
		TCSglow_FSL.hide();
		TCSanim_FSL = null;
		//TCSFlag_WindowBlinkForless30 = 0;
		TCSisGlow_FSL = false;
		TCSalarmWindow_FSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		TCSWindowLabel_FSL = WindowLabel((x1 + 135 ), (y1 + 10), "FSL");
		
		TCSAlarmCheck_FSL = true;
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_FSL();
		}
		
	}
	if(TCSisGlow_TSL == true &&  TCSisGreen_TSL == true){
		TCSalarmWindow_TSL.hide();
		TCSWindowLabel_TSL.hide();
		TCSglow_TSL.hide();
		TCSanim_TSL = null;
		//TCSFlag_WindowBlinkForless30 = 0;
		TCSisGlow_TSL = false;
		TCSalarmWindow_TSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		TCSWindowLabel_TSL = WindowLabel((x1 + 245), (y1 + 10), "TSL");
		
		TCSAlarmCheck_TSL = true;
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_TSL();
		}
		
	}
	if(TCSisGlow_TSH2 == true &&  TCSisGreen_TSH2 == true){
		TCSalarmWindow_TSH2.hide();
		TCSWindowLabel_TSH2.hide();
		TCSglow_TSH2.hide();
		TCSanim_TSH2 = null;
		TCSisGlow_TSH2 = false;
		TCSalarmWindow_TSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		TCSWindowLabel_TSH2 = WindowLabel((x1 + 25 ), (y1+75), "TSH2");
		
		TCSAlarmCheck_TSH2 = true;
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_TSH2();
		}
		
	}
	if(TCSisGlow_PSH == true &&  TCSisGreen_PSH == true){
		TCSalarmWindow_PSH.hide();
		TCSWindowLabel_PSH.hide();
		TCSglow_PSH.hide();
		TCSTCSanim_PSH = null;
		TCSisGlow_PSH = false;
		TCSalarmWindow_PSH = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		TCSWindowLabel_PSH = WindowLabel((x1 + 135), (y1+75), "PSH");
		
		TCSAlarmCheck_PSH = true;
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_PSH();
		}
		
	}
	if(TCSisGlow_TSH1 == true &&  TCSisGreen_TSH1 == true){
		TCSalarmWindow_TSH1.hide();
		TCSWindowLabel_TSH1.hide();
		TCSglow_TSH1.hide();
		TCSanim_TSH1 = null;
		TCSisGlow_TSH1 = false;
		TCSalarmWindow_TSH1 = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		TCSWindowLabel_TSH1 = WindowLabel((x1 + 245), (y1+75), "TSH1");
		
		TCSAlarmCheck_TSH1 = true;
		
		if(ISASeq == 3){
			
			TCS_RingBackFor2C_TSH1();
		}
		
	}
	

}


function TCS_RingBackFor2C_FSH(){
	
	TCSalarmWindow_FSH.attr({fill: "100-#70db70-#ddc7c7"});		
	TCSWindowLabel_FSH.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		TCSalarmWindow_FSH.hide();
		TCSWindowLabel_FSH.hide();
		TCSalarmWindow_FSH = rectForWindows((x1 ), (y1),100,60, 5);
		TCSWindowLabel_FSH = WindowLabel((x1 + 25 ), (y1 + 10), "FSH");
		pauseHooterToACKBack();
	}, 9000);
	
}

function TCS_RingBackFor2C_FSL(){
	
	TCSalarmWindow_FSL.attr({fill: "100-#70db70-#ddc7c7"});		
	TCSWindowLabel_FSL.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		TCSalarmWindow_FSL.hide();
		TCSWindowLabel_FSL.hide();
		TCSalarmWindow_FSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		TCSWindowLabel_FSL = WindowLabel((x1 + 135 ), (y1 + 10), "FSL");
		pauseHooterToACKBack();
	}, 9000);
	
}
function TCS_RingBackFor2C_TSL(){
	
	TCSalarmWindow_TSL.attr({fill: "100-#70db70-#ddc7c7"});		
	TCSWindowLabel_TSL.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		TCSalarmWindow_TSL.hide();
		TCSWindowLabel_TSL.hide();
		TCSalarmWindow_TSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		TCSWindowLabel_TSL = WindowLabel((x1 + 245), (y1 + 10), "TSL");
		pauseHooterToACKBack();
	}, 9000);
	
}
function TCS_RingBackFor2C_TSH2(){
	
	TCSalarmWindow_TSH2.attr({fill: "100-#70db70-#ddc7c7"});		
	TCSWindowLabel_TSH2.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		TCSalarmWindow_TSH2.hide();
		TCSWindowLabel_TSH2.hide();
		TCSalarmWindow_TSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		TCSWindowLabel_TSH2 = WindowLabel((x1 + 25 ), (y1+75), "TSH2");
		pauseHooterToACKBack();
	}, 9000);
	
}

function TCS_RingBackFor2C_PSH(){
	
	TCSalarmWindow_PSH.attr({fill: "100-#70db70-#ddc7c7"});		
	TCSWindowLabel_PSH.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		TCSalarmWindow_PSH.hide();
		TCSWindowLabel_PSH.hide();
		TCSalarmWindow_PSH = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		TCSWindowLabel_PSH = WindowLabel((x1 + 135), (y1+75), "PSH");
		pauseHooterToACKBack();
	}, 9000);
	
}
function TCS_RingBackFor2C_TSH1(){
	
	TCSalarmWindow_TSH1.attr({fill: "100-#70db70-#ddc7c7"});		
	TCSWindowLabel_TSH1.attr({'stroke' : '#000'});
	playHooterToACkBack();
	
	setTimeout(function(){ 
		TCSalarmWindow_TSH1.hide();
		TCSWindowLabel_TSH1.hide();
		TCSalarmWindow_TSH1 = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		TCSWindowLabel_TSH1 = WindowLabel((x1 + 245), (y1+75), "TSH1");
		pauseHooterToACKBack();
	}, 9000);
	
}


function AllAlarmCheck_TCS(){
	
	text = " ";
	TCS_AlarmNotChkArr = [];
	TCS_Count++;
	
	if(numOfWindows == 6){
	
			if (TCSAlarmCheck_FSH == true && TCSAlarmCheck_FSL == true
				&& TCSAlarmCheck_TSL == true && TCSAlarmCheck_TSH2 == true
				&& TCSAlarmCheck_PSH == true && TCSAlarmCheck_TSH1 == true) {
					
				ExpTrackData.TCS_NotCheckedAlarm = TCS_AlarmNotChkArr;
				ExpTrackData.TCS_Count = TCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_TCS();
					
		}else{
			
			AllAlarmNotChecked_TCS();
		}
				
		}else if(numOfWindows == 5){
			
			if (TCSAlarmCheck_FSH == true && TCSAlarmCheck_FSL == true
					&& TCSAlarmCheck_TSL == true && TCSAlarmCheck_TSH2 == true
					&& TCSAlarmCheck_PSH == true) {
						
				ExpTrackData.TCS_NotCheckedAlarm = TCS_AlarmNotChkArr;
				ExpTrackData.TCS_Count = TCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_TCS();
						
			}else{
				
				AllAlarmNotChecked_TCS();
			}
			
		}else if(numOfWindows == 4){
			
			if (TCSAlarmCheck_FSH == true && TCSAlarmCheck_FSL == true
					&& TCSAlarmCheck_TSL == true && TCSAlarmCheck_TSH2 == true) {
						
					ExpTrackData.LCS_NotCheckedAlarm = LCS_AlarmNotChkArr;
					ExpTrackData.TCS_NotCheckedAlarm = TCS_AlarmNotChkArr;
					ExpTrackData.TCS_Count = TCS_Count;
//					console.log(ExpTrackData);
					SuccessfulViewOfExp_TCS();
						
			}else{
				
				AllAlarmNotChecked_TCS();
			}
			
			
		}else if(numOfWindows == 3){
			
			if (TCSAlarmCheck_FSH == true && TCSAlarmCheck_FSL == true
					&& TCSAlarmCheck_TSL == true) {
						
				ExpTrackData.TCS_NotCheckedAlarm = TCS_AlarmNotChkArr;
				ExpTrackData.TCS_Count = TCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_TCS();
						
			}else{
				
				AllAlarmNotChecked_TCS();
			}
			
			
		}else if(numOfWindows == 2){
			
			if (TCSAlarmCheck_FSH == true && TCSAlarmCheck_FSL == true) {
						
				ExpTrackData.TCS_NotCheckedAlarm = TCS_AlarmNotChkArr;
				ExpTrackData.TCS_Count = TCS_Count;
//				console.log(ExpTrackData);
				SuccessfulViewOfExp_TCS();
						
			}else{
				
				AllAlarmNotChecked_TCS();
			}
			
			
		}
		
}

function AllAlarmNotChecked_TCS(){
	
	
	if(numOfWindows == 2 || numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(TCSAlarmCheck_FSH == false){
			
			TCS_AlarmNotChkArr.push("FSH");
			
		}
		if(TCSAlarmCheck_FSL == false){
			
			TCS_AlarmNotChkArr.push("FSL");
			
		}
		
	}
	if(numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(TCSAlarmCheck_TSL == false){
			
			TCS_AlarmNotChkArr.push("TSL");
			
		}
	}
	if(numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6 ){
		
		if(TCSAlarmCheck_TSH2 == false){
			
			TCS_AlarmNotChkArr.push("TSH2");
			
		}
		
	}
	if(numOfWindows == 5 || numOfWindows == 6 ){
		
		if(TCSAlarmCheck_PSH == false){
			
			TCS_AlarmNotChkArr.push("PSH");
			
		}
		
	}
	
	if(numOfWindows == 6 ){
		
		if(TCSAlarmCheck_TSH1 == false){
			
			TCS_AlarmNotChkArr.push("TSH1");
			
		}
	}
	
	
//	console.log(LCS_AlarmChkArr);
	
	for (var i = 0; i < TCS_AlarmNotChkArr.length; i++) {
		  text += TCS_AlarmNotChkArr[i] + ",";
		}
	if(TCS_Count <=3){
		
		alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please check "+text+"alarm for abnormal condition</b>");
		
	}else{
		
		ExpTrackData.TCS_NotCheckedAlarm = TCS_AlarmNotChkArr;
		ExpTrackData.TCS_Count = TCS_Count;
//		console.log(ExpTrackData);
		clearInterval(ref);
		clearInterval(ref1);
		
		 $('#mainDiv').html('');
		 $('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2" style="margin-top:50px; font-size:17px; font-weight:bold; text-align:center;"><div class="alert alert-danger" >Temperature Control System plant stopped without checking '+text+' alarm to abnormal condition.<br/> To Restart the experiment <a onClick = "AlarmAnnunciator_SelectApp();">Click Here</a></div></div>');
		 
	}
	
	
}



function SuccessfulViewOfExp_TCS(){
	clearInterval(ref);
	clearInterval(ref1);
	 $('#mainDiv').html('');
		$('#mainDiv').html('<div class="col-md-offset-2 col-md-8 col-md-offset-2"><div class="alert alert-success" style="margin-top:50px; font-size:17px; font-weight:bold; text-align:center;">Congratulations!!!<br/> Temperature Control system (Alarm Annunciator) experiment is completed successfully!!</div></div>');
	 
}


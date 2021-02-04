function waterlvlHT_TCS(tanklevel){
	 
	var ht; 
	if(tanklevel == 0){
		ht = 0;
	}
	if(tanklevel > 0 && tanklevel <=5){
		ht = 20;
	}
	if(tanklevel > 5 && tanklevel <=10){
		ht = 25;
	}
	if(tanklevel > 10 && tanklevel <=15){
		ht = 30;
	}
	if(tanklevel > 15 && tanklevel <=20){
		ht = 35;
	}
	if(tanklevel > 20 && tanklevel <=25){
		ht = 40;
	}
	if(tanklevel > 25 && tanklevel <=30){
		ht = 45;
	}
	if(tanklevel > 30 && tanklevel <=35){
		ht = 50;
	}
	if(tanklevel > 35 && tanklevel <=40){
		ht = 70;
	}
	if(tanklevel > 40 && tanklevel <=45){
		ht = 90;
	}
	if(tanklevel > 45 && tanklevel <=50){
		ht = 110;
	}
	if(tanklevel > 50 && tanklevel <=55){
		ht = 130;
	}
	if(tanklevel > 55 && tanklevel <=60){
		ht = 140;
	}
	if(tanklevel > 60 && tanklevel <=65){
		ht = 150;
	}
	if(tanklevel > 65 && tanklevel <=70){
		ht = 160;
	}
	if(tanklevel > 70 && tanklevel <=75){
		ht = 170;
	}
	if(tanklevel > 75 && tanklevel <=80){
		ht = 180;
	}
	if(tanklevel > 80 && tanklevel <=85){
		ht = 190;
	}
	if(tanklevel > 85 && tanklevel <=90){
		ht = 200;
	}
	if(tanklevel > 90 && tanklevel <=95){
		ht = 210;
	}
	if(tanklevel > 95 && tanklevel <=100){
		ht = 220;
	}
	
	return ht;
	
}

function drawWaterLvl_TCS(ht) {
	
	var a = paper.path('M'+(x+100)+' '+(y+201)).attr({'stroke':'#7fbfff','stroke-width': '148', opacity : 1});
	 a.animate( {path:"M"+ (x+100) +" "+ (y+201) +" l 0" + -ht, 'stroke-width': '148', 'stroke':'#7fbfff',
			opacity : 1}, 0).toBack();
	 return a;
	
}

function increaseWaterLvl_TCSWin6(){
	
	
	waterlvlLabel = waterlvlLabel + 5;
 
	if(waterlvlLabel > 100){
		
		waterlvlLabel = 100;

	}
	
	waterlvl.hide();	

	
	waterlvlHT = waterlvlHT_TCS(waterlvlLabel);
	
	waterlvl.hide();
	waterlvl = drawWaterLvl_TCS(waterlvlHT);
	
	waterlvlper.hide();				
	waterlvlper = Label1((x + 100), (y + 100), waterlvlLabel+" %");
	
	
	
	//dependantAlarmGenerationFromTankLvl();
	
	if(waterlvlLabel == 100){
		alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Tank is full</b>");
		clearInterval(ref);
	}
	
}




function decreaseWaterLvl_TCSWin6() {
	
	waterlvlLabel = waterlvlLabel - 5;

	if(waterlvlLabel < 0){
		
		waterlvlLabel = 0;

	}
	
	waterlvl.hide();	

	waterlvlHT = waterlvlHT_TCS(waterlvlLabel);
	
	waterlvl.hide();
	waterlvl = drawWaterLvl_TCS(waterlvlHT);
	
	
	waterlvlper.hide();				
	waterlvlper = Label1((x + 100), (y + 100), waterlvlLabel+" %");
	

	
	//dependantAlarmGenerationFromTankLvl();
	
	
	if(waterlvlLabel == 0){
		alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Tank is empty</b>");
		clearInterval(ref);
	}
	
}




function WindowBlinkForless30(){
	
	blinkWinPlayHooter_LSL();
	
	if(numOfWindows != 2){
		
		blinkWinPlayHooter_PSL();
		
	}
	
	TCSFlag_WindowBlinkForless30 = 1;
}

function WindowBlinkForgreater70(){

	blinkWinPlayHooter_LSH();	
	TCSFlag_WindowBlinkForgreater70 = 1;
}

function TCSdependantAlarmGenerationFromTankLvl(){
	if(FSH_IP < minLimit && TSH2_IP > maxLimit && FSL_IP < minLimit ){
		if(numOfWindows == 5 || numOfWindows == 6){
			TCS_PSH.attr({'fill':'#FF0000'});	
			TCSisGreen_PSH = false;
			TCSblinkWinPlayHooter_PSH();
		}
			
	}else
		{
		if(numOfWindows == 5 || numOfWindows == 6){
		TCS_PSH.attr({'fill':'#6bc66c'});	
		TCSisGreen_PSH = true;
		}
		}
	
	if(FSH_IP < minLimit && TSH2_IP > maxLimit && FSL_IP > minLimit ) 
		{
		if(numOfWindows == 6){
			TCS_TSH1.attr({'fill':'#FF0000'});	
			TCSisGreen_TSH1 = false;
			TCSblinkWinPlayHooter_TSH1();
			}
		}else
		{
			if(numOfWindows == 6){
			TCS_TSH1.attr({'fill':'#6bc66c'});	
			TCSisGreen_TSH1 = true;
			}
		}
//	if(waterlvlLabel < 30){
//		
//		LCS_LSL.attr({'fill':'#FF0000'});
//		//for 2A
//		
//			isGreen_LSL = false;
//		
//		if(numOfWindows != 2){
//			
//			LCS_PSL.attr({'fill':'#FF0000'});
//			//for 2A
//			
//				isGreen_PSL = false;
//			
//		}
//		
//		LCS_LSH.attr({'fill':'#6bc66c'});
//		//for 2A
//		
//			isGreen_LSH = true;
//		
//		//For 2B
////		if(ISASeq == 2){
////			anim_LSH = null;
////			TCSFlag_WindowBlinkForgreater70 = 0;
////		}
//		
//		if(TCSFlag_WindowBlinkForless30 == 0){
//			WindowBlinkForless30();
//		}
//		
//	}else if(waterlvlLabel > 70){
//		
//		LCS_LSL.attr({'fill':'#6bc66c'});
//		//for 2A
//		
//			isGreen_LSL = true;
//		
//		//For 2B
//		if(ISASeq == 2){
//			anim_LSL = null;
//			TCSFlag_WindowBlinkForless30 = 0;
//		}
//		if(numOfWindows != 2){
//			LCS_PSL.attr({'fill':'#6bc66c'});
//			//for 2A
//			
//				isGreen_PSL = true;
//			
//			//For 2B
////			if(ISASeq == 2){
////				anim_PSL = null;
////				TCSFlag_WindowBlinkForless30 = 0;
////			}
//		}
//		
//		LCS_LSH.attr({'fill':'#FF0000'});
//		//for 2A
//		
//			isGreen_LSH = false;
//		
//		
//		if(TCSFlag_WindowBlinkForgreater70 == 0){
//			WindowBlinkForgreater70();
//		}
//	}else if(waterlvlLabel > 30 && waterlvlLabel < 70){
//		
//		LCS_LSL.attr({'fill':'#6bc66c'});
//		//for 2A
//		
//			isGreen_LSL = true;
//		
//		//For 2B
////		if(ISASeq == 2){
////			anim_LSL = null;
////			TCSFlag_WindowBlinkForless30 = 0;
////		}
//		if(numOfWindows != 2){
//			LCS_PSL.attr({'fill':'#6bc66c'});
//			//for 2A
//			
//				isGreen_PSL = true;
//			
//			//For 2B
////			if(ISASeq == 2){
////				anim_PSL = null;
////				TCSFlag_WindowBlinkForless30 = 0;
////			}
//		}
//		
//		LCS_LSH.attr({'fill':'#6bc66c'});
//		//for 2A
//		
//			isGreen_LSH = true;
//		
//		//For 2B
////		if(ISASeq == 2){
////			anim_LSH = null;
////			TCSFlag_WindowBlinkForgreater70 = 0;
////		}
//	}
	
}
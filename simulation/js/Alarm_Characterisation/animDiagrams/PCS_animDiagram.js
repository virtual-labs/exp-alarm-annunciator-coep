function waterlvlHT_PCS(tanklevel){
	 
	var ht;
	
	if(tanklevel == 0){
		ht = 0;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#d8d97e",  opacity : 0.50});
	}
	if(tanklevel > 0 && tanklevel <=5){
		ht = 10;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#cbcc7a",  opacity : 0.50});
	}
	if(tanklevel > 5 && tanklevel <=10){
		ht = 15;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#bdbe72",  opacity : 0.50});
	}
	if(tanklevel > 10 && tanklevel <=15){
		ht = 20;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#b1b26c",  opacity : 0.50});
	}
	if(tanklevel > 15 && tanklevel <=20){
		ht = 25;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#b2ac6c",  opacity : 0.50});
	}
	if(tanklevel > 20 && tanklevel <=25){
		ht = 30;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#b2ab6c",  opacity : 0.50});
	}
	if(tanklevel > 25 && tanklevel <=30){
		ht = 35;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#b2a26c",  opacity : 0.50});
	}
	if(tanklevel > 30 && tanklevel <=35){
		ht = 40;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#a59764",  opacity : 0.50});
	}
	if(tanklevel > 35 && tanklevel <=40){
		ht = 45;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#a59064",  opacity : 0.50});
	}
	if(tanklevel > 40 && tanklevel <=45){
		ht = 50;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#9a875e",  opacity : 0.50});
	}
	if(tanklevel > 45 && tanklevel <=50){
		ht = 55;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#9a805e",  opacity : 0.50});			
	}
	if(tanklevel > 50 && tanklevel <=55){
		ht = 65;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#917859",  opacity : 0.50});
	}
	if(tanklevel > 55 && tanklevel <=60){
		ht = 75;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#846e51",  opacity : 0.50});
//	//	PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"90-#ccffb3:10-#aaff80:20-#ffd1b3:40-#ffd6cc:60-#ffad99:100",opacity : 0.3});
	}
	if(tanklevel > 60 && tanklevel <=65){
		ht = 85;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#846c51",  opacity : 0.50});
	}
	if(tanklevel > 65 && tanklevel <=70){
		ht = 95;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#846951",  opacity : 0.50});
	}
	if(tanklevel > 70 && tanklevel <=75){
		ht = 105;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#846351",  opacity : 0.50});
	}
	if(tanklevel > 75 && tanklevel <=80){
		ht = 115;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#7d5e4d",  opacity : 0.50});
	}
	if(tanklevel > 80 && tanklevel <=85){
		ht = 125;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#7d564d",  opacity : 0.50});
	}
	if(tanklevel > 85 && tanklevel <=90){
		ht = 135;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#7d564d",  opacity : 0.50});
	}
	if(tanklevel > 90 && tanklevel <=95){
		ht = 145;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#7d564d",  opacity : 0.50});
	}
	if(tanklevel > 95 && tanklevel <=100){
		ht = 150;
		PL_tank.attr({'stroke':'black',"stroke-width" : 1, "fill":"#7d564d",  opacity : 0.70});
	}
	
	return ht;
	
}

function drawWaterLvl_PCS(ht) {
	
	var a = paper.path('M'+(x+50)+' '+(y+131)).attr({'stroke':'#7fbfff','stroke-width': '280', opacity : 1});
	 a.animate( {path:"M"+ (x+50) +" "+ (y+131) +" l 0" + -ht, 'stroke-width': '280', 'stroke':'#7fbfff',
			opacity : 1}, 0).toBack();
	 return a;
	
}

function increaseWaterLvl_PCSWin6(){
	
	
	waterlvlLabel = waterlvlLabel + 5;
 
	if(waterlvlLabel > 100){
		
		waterlvlLabel = 100;

	}
	
//	waterlvl.hide();	

	
	waterlvlHT = waterlvlHT_PCS(waterlvlLabel);
	
//	waterlvl.hide();
//	waterlvl = drawWaterLvl_PCS(waterlvlHT);
//	
	waterlvlper.hide();				
	waterlvlper = Label1((x + 50), (y + 80), waterlvlLabel+" %");
	
	
	
	dependantAlarmGenerationFromTankLvl_PCS();
	
	if(waterlvlLabel == 100){
		alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Tank is full</b>");
		clearInterval(ref);
	}
	
}




function decreaseWaterLvl_PCSWin6() {
	
	waterlvlLabel = waterlvlLabel - 5;

	if(waterlvlLabel < 0){
		
		waterlvlLabel = 0;

	}
	
//	waterlvl.hide();	

	waterlvlHT = waterlvlHT_PCS(waterlvlLabel);
	
//	waterlvl.hide();
//	waterlvl = drawWaterLvl_PCS(waterlvlHT);
	
	
	waterlvlper.hide();				
	waterlvlper = Label1((x + 50), (y + 80), waterlvlLabel+" %");
	

	
	dependantAlarmGenerationFromTankLvl_PCS();
	
	
	if(waterlvlLabel == 0){
		alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Tank is empty</b>");
		clearInterval(ref);
	}
	
}




function WindowBlinkForless30_PCS(){
	
	PCS_blinkWinPlayHooter_PSL();
	FlagPCS_WindowBlinkForless30 = 1;
}

function WindowBlinkForgreater70_PCS(){

	PCS_blinkWinPlayHooter_PSH();
	FlagPCS_WindowBlinkForgreater70 = 1;
}

function dependantAlarmGenerationFromTankLvl_PCS(){
	
	if(waterlvlLabel < minLimit){
		
		PCS_PSL.attr({'fill':'#FF0000'});		
		PCS_isGreen_PSL = false;
		
		
		PCS_PSH.attr({'fill':'#6bc66c'});		
		PCS_isGreen_PSH = true;
			
		if(FlagPCS_WindowBlinkForless30 == 0){
			WindowBlinkForless30_PCS();
		}
		
	}else if(waterlvlLabel > maxLimit){
		
		PCS_PSL.attr({'fill':'#6bc66c'});		
		PCS_isGreen_PSL = true;
	
	
		PCS_PSH.attr({'fill':'#FF0000'});		
		PCS_isGreen_PSH = false;
		
		
		if(FlagPCS_WindowBlinkForgreater70 == 0){
			WindowBlinkForgreater70_PCS();
		}
	}else if(waterlvlLabel > minLimit && waterlvlLabel < maxLimit){
		
		PCS_PSL.attr({'fill':'#6bc66c'});		
		PCS_isGreen_PSL = true;
	
	
		PCS_PSH.attr({'fill':'#6bc66c'});		
		PCS_isGreen_PSH = true;
	}
	
}
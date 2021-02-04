
//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//	SINGLEACTINGCYLINDER.LCS_Characterisation2A2B = function(numOfWindows1, alarmtype, ISASeq1, appId, maxLimit1, minLimit1){

	LCS_Characterisation2A2B = function(numOfWindows1, alarmtype, ISASeq1, appId, maxLimit1, minLimit1){
		

	
//		console.log(numOfWindows, alarmtype, ISASeq, appId, maxLimit1, minLimit1);
				
		LCS_inletUDReading_Data = [];
		
		
		
		LCS_Count = 0;
		
		numOfWindows = numOfWindows1;
		ISASeq = ISASeq1;
		
		maxLimit =  maxLimit1;
		minLimit =  minLimit1;
		
		ref = 0;
		ref1 = 0;
		
		LCSAlarmCheck_LSH = false;
		LCSAlarmCheck_LSL = false;
		LCSAlarmCheck_PSL = false;
		LCSAlarmCheck_FSL = false;
		LCSAlarmCheck_FSH = false;
		LCSAlarmCheck_FSH1 = false;
		
		anim_LSH = null;
		anim_LSL = null;
		anim_PSL = null;
		anim_FSL = null;
		anim_FSH = null;
		anim_FSH1 = null;
		
		isGlow_LSH = false;
		isGlow_LSL = false;
		isGlow_PSL = false;
		isGlow_FSL = false;
		isGlow_FSH = false;
		isGlow_FSH1 = false;
		
		
		isGreen_LSH = false;
		isGreen_LSL = false;
		isGreen_PSL = false;
		isGreen_FSL = false;
		isGreen_FSH = false;
		isGreen_FSH1 = false;
		
		
		
		testFlag = 0;
		ackFlag = 0;
		if(ISASeq == 1){
			resetFlag = 0;
		}
		if(ISASeq == 2 || ISASeq == 3){
			resetFlag = 1;
		}
		
		$("#mainDiv").html('');
		
		var selectApp = '';
		selectApp +='<audio  autoplay loop id="hutter" ></audio>'
			if(ISASeq == 3){
				selectApp +='<audio id="hutterForACKBack" ></audio>'
			}
		selectApp +='<div id = "LCSConfigDiv" class="container-fluid">'
		    +'<div class="row">'
		   
		    +'<div class="col-sm-12 col-md-8 col-xl-8">'
		    +'<div id = "canvas"></div>'
		    +'</div>'
		    +'<div class="col-sm-12 col-md-4 col-xl-4">'
		    if(ISASeq == 1){
				selectApp +='<h1>Alarm Annunciator for ISA sequence 2A</h1>'
			}
			if(ISASeq == 2){
				selectApp +='<h1>Alarm Annunciator for ISA sequence 2B</h1>'
			}
			if(ISASeq == 3){
				selectApp +='<h1>Alarm Annunciator for ISA sequence 2C</h1>'
			}
			selectApp +='<p class="AlarmSoundError">Make sure your system sound is not muted / very low for alarm</p>'
			+'<div  id = "canvasForWindows"></div>'
		    +'<button id="LCS_Test" class="AlarmTstAckRst">TEST</button>'
		    +'<button id="LCS_ACK" class="AlarmTstAckRst">ACK</button>'
		    if(ISASeq == 1){
		    	
		    	selectApp +='<button id="LCS_Reset" class="AlarmTstAckRst">RESET</button>'
		    }
		    
		selectApp +='<div class="slidecontainer" id="LCS_SliderForInlet">'
			+ '<div class="header">Input for Inlet Source</div>'
		    +'<input step="1" type="range" min='
			+ 0
			+ ' max='
			+ 100
			+ ' value='
			+ 0
			+ ' id="Input_inlet">'
			+ '<p>Value: <span id="demo_1"></span></p>'
			+ '</div><br/>'
				
			+'<div class="slidecontainer" id="LCS_SliderForUD">'
			+ '<div class="header">Input for User Demand</div>'
		    +'<input step="1" type="range" min='
			+ 0
			+ ' max='
			+ 100
			+ ' value='
			+ 0
			+ ' id="Input_UD">'
			+ '<p>Value: <span id="demo_UD"></span></p>'
			+ '</div><br/>'
			+'<button id="submit_LCS">Submit</button>'
			+'<button id="submit_ActionLCS" hidden>Take Action</button>'
			+'<button id="Stop_LCS">ShutDown Plant</button><br/>'
			 
			
			
			
				+'</div>' // col close
				+'</div>' // row close 
				+'</div>'; // container close
				
			
			$("#mainDiv").html(selectApp);
			
			$("#LCS_Test").click(function(){
				
				$("#LCS_Test").prop("disabled", true);
				$("#LCS_Test").removeClass("AlarmTstAckRst").addClass("disabledBtn");
				
				if(numOfWindows == 2)
				{			
					blinkWinPlayHooter_LSH();
					blinkWinPlayHooter_LSL();
					
				}
				if(numOfWindows == 3)
				{					
					blinkWinPlayHooter_LSH();
					blinkWinPlayHooter_LSL();
					blinkWinPlayHooter_PSL();
					
				}
				if(numOfWindows == 4)
				{
					blinkWinPlayHooter_LSH();
					blinkWinPlayHooter_LSL();
					blinkWinPlayHooter_PSL();
					blinkWinPlayHooter_FSL();
					
					
				}
				if(numOfWindows == 5)
				{
					blinkWinPlayHooter_LSH();
					blinkWinPlayHooter_LSL();
					blinkWinPlayHooter_PSL();
					blinkWinPlayHooter_FSL();
					blinkWinPlayHooter_FSH();					
				}
				if(numOfWindows == 6)
				{
					blinkWinPlayHooter_LSH();
					blinkWinPlayHooter_LSL();
					blinkWinPlayHooter_PSL();
					blinkWinPlayHooter_FSL();
					blinkWinPlayHooter_FSH();
					blinkWinPlayHooter_FSH1();
					
					
				}
				
				testFlag = 1;
				
				
			});
			$("#LCS_ACK").click(function(){

				
//				$("#LCS_ACK").prop("disabled", true);
				if(testFlag == 1){
					
					
						
					
				if(numOfWindows == 2)
				{
					glowWinPauseHooter_LSH();
					glowWinPauseHooter_LSL();
				}
				if(numOfWindows == 3)
				{
					glowWinPauseHooter_LSH();
					glowWinPauseHooter_LSL();
					glowWinPauseHooter_PSL();					
				}
				if(numOfWindows == 4)
				{
					glowWinPauseHooter_LSH();
					glowWinPauseHooter_LSL();
					glowWinPauseHooter_PSL();					
					glowWinPauseHooter_FSL();
					
				}
				if(numOfWindows == 5)
				{
					glowWinPauseHooter_LSH();
					glowWinPauseHooter_LSL();
					glowWinPauseHooter_PSL();					
					glowWinPauseHooter_FSL();
					glowWinPauseHooter_FSH();
					
				}
				if(numOfWindows == 6)
				{
					glowWinPauseHooter_LSH();
					glowWinPauseHooter_LSL();
					glowWinPauseHooter_PSL();
					
					glowWinPauseHooter_FSL();
					glowWinPauseHooter_FSH();
					glowWinPauseHooter_FSH1();
					
					
				}
				
				
				
				if(ISASeq == 2 && Flag_setBlinkToNullFor2B == 0){
					
					setTimeout(function(){ 
						firstResetAfterTestFor2A2B();
						alertify.alert("<img src='images/correct.png' style='width:40px; height:53px;'>&nbsp;&nbsp;<b style='color:#0b5603;'>Functioning of alarm annunciator is satisfactory.</b>");
												
					}, 1000);
					
					
					
					Flag_setBlinkToNullFor2B = 1;
//					setInterval(firstResetAfterTestFor2A2B, 3000);
					ref1 = setInterval(resetOnRedGreenAlarm, 2000);
					
					
				}
				
				if(ISASeq == 3 && FlagLCS_ToReset2C == 0){
					
					setTimeout(function(){ 
						firstResetAfterTestFor2A2B();
						alertify.alert("<img src='images/correct.png' style='width:40px; height:53px;'>&nbsp;&nbsp;<b style='color:#0b5603;'>Functioning of alarm annunciator is satisfactory.</b>");
												
					}, 1000);
					
					
					
					FlagLCS_ToReset2C = 1;
//					setInterval(firstResetAfterTestFor2A2B, 3000);
					ref1 = setInterval(resetOnRedGreenAlarm, 2000);
					
					
				}
				ackFlag = 1;
				
				}	
				
			})
			$("#LCS_Reset").click(function(){

				if(ISASeq == 1){
				if(Flag_firstReset == 0 && ackFlag == 1){
					
					firstResetAfterTestFor2A2B();
					alertify.alert("<img src='images/correct.png' style='width:40px; height:53px;'>&nbsp;&nbsp;<b style='color:#0b5603;'>Functioning of alarm annunciator is satisfactory.</b>");
					Flag_firstReset = 1;
					
				}else{
					
					
					resetOnRedGreenAlarm();
				}
			}
				
				resetFlag = 1;
				
				
				
			})
			var w = 900;
    var h = 500;

var width = $(window).width();

  if ($(window).width() < 500) {
	    width = $(this).width();
	    paper = new Raphael(document.getElementById('canvas'), '100%', 500);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 500);
  }else
  {
      paper = new Raphael(document.getElementById('canvas'), '100%', 700);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 700);
  }		
			paper1 = new Raphael(document.getElementById('canvasForWindows'), '100%',150);
//			value for slider Inlet Source
			var slider_1 = document.getElementById("Input_inlet");
			var output_1 = document.getElementById("demo_1");
			output_1.innerHTML = slider_1.value;

			slider_1.oninput = function() {
				
				output_1.innerHTML = this.value;
				inletSourceLbl.hide();
				inletSourceLbl =  paper.text((x+450), (y-85), this.value+" %").attr({	stroke : 'Blue','font-size' : 20,	"font-family": "sans-serif"	});

			}
			
			
//			value for slider User Demand
			var slider_2 = document.getElementById("Input_UD");
			var output_2 = document.getElementById("demo_UD");
			output_2.innerHTML = slider_2.value;

			slider_2.oninput = function() {
				output_2.innerHTML = this.value;
				userDemandLbl.hide();
				userDemandLbl =  paper.text((x+540), (y+325), this.value+" %").attr({	stroke : 'blue','font-size' : 20,	"font-family": "sans-serif"	});
			}
			
			
			
			redrawLCS(numOfWindows, maxLimit, minLimit);			
			Alarmindow_LCS(numOfWindows);
			
			
			
			$("#submit_LCS").on("click", function(){
				
		if(testFlag == 1){
			
			if(ackFlag == 1){
				
				if(resetFlag == 1){
					
					
					$("#submit_LCS").prop("hidden", true);
					
					$("#Input_inlet").prop("disabled", true);
					$("#Input_UD").prop("disabled", true);
					
					$("#submit_ActionLCS").prop("hidden", false);
					
					LCS_readingData = {};
					
					 inletSource = parseInt(slider_1.value);
					 userDemand = parseInt(slider_2.value);
					 
					
					 
					 if(Flag_waterlvlLabel == 0){
						 
						 waterlvlHT = waterlvlHT_LCS(inletSource);
							
							waterlvl.hide();
							waterlvl = drawWaterLvl_LCS(waterlvlHT);
							
							waterlvlper.hide();				
							waterlvlper = Label1((x + 100), (y + 100), inletSource+" %");
						 
						 waterlvlLabel = inletSource;
					 }
					
					
					

						// InDependat alarms on tank level 
						
						if(inletSource <= minLimit){
							if(numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
								
								LCS_FSL.attr({'fill':'#FF0000'});
								//for 2A
								
									isGreen_FSL = false;
								

								blinkWinPlayHooter_FSL();
								
							}
							if(numOfWindows == 6){
								LCS_FSH1.attr({'fill':'#6bc66c'});
								//For 2A
								
									isGreen_FSH1 = true;
								
								//for 2B
//								if(ISASeq == 2){
//									anim_FSH1 = null;
//								}
							}
							
							
							
							
						}else if(inletSource >= maxLimit){
							if(numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
								
								LCS_FSL.attr({'fill':'#6bc66c'});
								//for 2A
								
									isGreen_FSL = true;
							
								//For 2B
//								if(ISASeq == 2){
//									anim_FSL = null;
//								}
							}
							if(numOfWindows == 6){
								
								LCS_FSH1.attr({'fill':'#FF0000'});
								//for 2A
								
									isGreen_FSH1 = false;
								

								blinkWinPlayHooter_FSH1();
								
							}
							
							
						}else if(inletSource > minLimit &&  inletSource < maxLimit){
							
							if(numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
								
								LCS_FSL.attr({'fill':'#6bc66c'});
								//for 2A
								
									isGreen_FSL = true;
								
								//For 2B
//								if(ISASeq == 2){
//									anim_FSL = null;
//								}
							}
							if(numOfWindows == 6){
								
								LCS_FSH1.attr({'fill':'#6bc66c'});
								//for 2A
								
									isGreen_FSH1 = true;
								
								//For 2B
//								if(ISASeq == 2){
//									anim_FSH1 = null;
//								}
							}
							
						}
						
						
						if(userDemand >= maxLimit){
							if( numOfWindows == 5 || numOfWindows == 6){
								
								LCS_FSH.attr({'fill':'#FF0000'});
								//for 2A
								
									isGreen_FSH = false;
								
								blinkWinPlayHooter_FSH();
								
							}
							
							
						}else if(userDemand < maxLimit){
							if( numOfWindows == 5 || numOfWindows == 6){
								
								LCS_FSH.attr({'fill':'#6bc66c'});
								//for 2A
								
									isGreen_FSH = true;
								
								//For 2B
//								if(ISASeq == 2){
//									anim_FSH = null;
//								}
							}
							
						}

						
						//Dependat alarms on tank level 
						
						if(inletSource > userDemand){
							dependantAlarmGenerationFromTankLvl();
							clearInterval(ref);
							ref = setInterval(increaseWaterLvl_LCSWin6, 7000);					
							
						}else if(inletSource < userDemand){
							dependantAlarmGenerationFromTankLvl();
							clearInterval(ref);
							ref = setInterval(decreaseWaterLvl_LCSWin6, 7000);
							
							
							
						}else{
							
							clearInterval(ref);
							
							
							waterlvlHT = waterlvlHT_LCS(inletSource);	
							waterlvl.hide();
							waterlvl = drawWaterLvl_LCS(waterlvlHT);
							
							waterlvlper.hide();				
							waterlvlper = Label1((x + 100), (y + 100), inletSource+" %");
							
							waterlvlLabel = inletSource;
							
							dependantAlarmGenerationFromTankLvl();
							
						}
						
						

					
					
				}else{
					
					alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please first reset alarm annunciator</b>");
					
				}
				
			}else{
				
				alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please first acknowledge alarm annunciator</b>");
			}
			
		}else{
			
			alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please first test alarm annunciator</b>");
		}		
				
			
				
			});
			
			
			$("#submit_ActionLCS").on("click", function(){
			
				//For 2B
				if(ISASeq == 2 && hutter.hasAttribute('src') == true){
					
						alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please Acknowledge generated alarm</b>");
					
				}else{
					
					//For 2A & 2B	
					clearInterval(ref);
					Flag_waterlvlLabel = 1;
					
					$("#submit_ActionLCS").prop("hidden", true);
					
					$("#submit_LCS").prop("hidden", false);
					
					$("#Input_inlet").prop("disabled", false);
					$("#Input_UD").prop("disabled", false);
					
					 LCS_readingData.inlet = inletSource;
					 LCS_readingData.userDemand = userDemand;
					 LCS_readingData.tankLvl = waterlvlLabel;
					
					 LCS_inletUDReading_Data.push(LCS_readingData);
					 
					 ExpTrackData.LCSAlarmConditionData = LCS_inletUDReading_Data;
					 
//					 console.log(LCS_inletUDReading_Data);
					
				}
				
				
				 
				
			});
			
			
			
			$("#Stop_LCS").on("click", function(){
				
				AllAlarmCheck_LCS();
				
			});
			
			
}

 
		   
});	
	
	
function redrawLCS(numOfWindows, maxLimit, minLimit){
	
	paper.clear();
	
	LevelControl();
	
	if(numOfWindows == 2){
		
		LCS_draw2AlarmComponent();
		paper.text((x+245), (y+150), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+245), (y-60), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	}
	if(numOfWindows == 3){
		
		LCS_draw3AlarmComponent();
		paper.text((x+245), (y+150), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+245), (y-60), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x), (y+270), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		
	}
	if(numOfWindows == 4){
		
		LCS_draw4AlarmComponent();
		paper.text((x+245), (y+150), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+245), (y-60), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x), (y+270), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+140), (y-157), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	}
	if(numOfWindows == 5){
		
		LCS_draw5AlarmComponent();
		paper.text((x+245), (y+150), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+245), (y-60), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x), (y+270), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+140), (y-157), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+245), (y+250), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});

	}
	if(numOfWindows == 6){
		
		LCS_draw6AlarmComponent();
		paper.text((x+245), (y+150), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+245), (y-60), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x), (y+270), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+140), (y-157), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+245), (y+250), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+200), (y-157), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		

	}
	
}
							
							
			
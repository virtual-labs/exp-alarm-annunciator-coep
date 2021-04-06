
//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//	SINGLEACTINGCYLINDER.PCS_Characterisation2A2B = function(numOfWindows1, alarmtype, ISASeq1, appId, maxLimit1, minLimit1){

PCS_Characterisation2A2B = function(numOfWindows1, alarmtype, ISASeq1, appId, maxLimit1, minLimit1){
		

	
//		console.log(numOfWindows, alarmtype, ISASeq, appId, maxLimit1, minLimit1);
				
		PCS_inletUDReading_Data = [];
		PCS_Count = 0;
		
		numOfWindows = numOfWindows1;
		ISASeq = ISASeq1;
		maxLimit =  maxLimit1;
		minLimit =  minLimit1;
		
		ref = 0;
		ref1 = 0;
		
		
		PCSAlarmCheck_PSH = false;
		PCSAlarmCheck_PSL = false;
		PCSAlarmCheck_FSH1 = false;
		PCSAlarmCheck_FSH2 = false;
		PCSAlarmCheck_FSL1 = false;
		PCSAlarmCheck_FSL2 = false;
		
		
		PCS_anim_PSH = null;
		PCS_anim_PSL = null;
		PCS_anim_FSH1 = null;
		PCS_anim_FSH2 = null;
		PCS_anim_FSL1 = null;
		PCS_anim_FSL2 = null;
		
		PCS_isGlow_PSH = false;
		PCS_isGlow_PSL = false;
		PCS_isGlow_FSH1 = false;
		PCS_isGlow_FSH2 = false;
		PCS_isGlow_FSL1 = false;
		PCS_isGlow_FSL2 = false;
		
		
		PCS_isGreen_PSH = false;
		PCS_isGreen_PSL = false;
		PCS_isGreen_FSH1 = false;
		PCS_isGreen_FSH2 = false;
		PCS_isGreen_FSL1 = false;
		PCS_isGreen_FSL2 = false;
		
		
		
		PCS_testFlag = 0;
		PCS_ackFlag = 0;
		if(ISASeq == 1){
			PCS_resetFlag = 0;
		}
		if(ISASeq == 2 || ISASeq == 3){
			PCS_resetFlag = 1;
		}
		
		$("#mainDiv").html('');
		
		var selectApp = '';
		selectApp +='<audio  autoplay loop id="hutter" >'
			if(ISASeq == 3){
				selectApp +='<audio id="hutterForACKBack" ></audio>'
			}
		selectApp +='</audio><div id = "PCSConfigDiv" class="container-fluid">'
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
			selectApp +='<div  id = "canvasForWindows"></div>'
		    +'<button id="PCS_Test" class="AlarmTstAckRst">TEST</button>'
		    +'<button id="PCS_ACK" class="AlarmTstAckRst">ACK</button>'
		    if(ISASeq == 1){
		    	
		    	selectApp +='<button id="PCS_Reset" class="AlarmTstAckRst">RESET</button>'
		    }
		    
		selectApp +='<div class="slidecontainer" id="PCS_SliderForInlet">'
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
				
			+'<div class="slidecontainer" id="PCS_SliderForUD">'
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
			+'<button id="submit_PCS">Submit</button>'
			+'<button id="submit_ActionPCS" hidden>Take Action</button>'
			+'<button id="Stop_PCS">ShutDown Plant</button><br/>'
			
			
			
				+'</div>' // col close
				+'</div>' // row close 
				+'</div>'; // container close
				
			
			$("#mainDiv").html(selectApp);
			
			$("#PCS_Test").click(function(){
				
				$("#PCS_Test").prop("disabled", true);
				$("#PCS_Test").removeClass("AlarmTstAckRst").addClass("disabledBtn");
				
				if(numOfWindows == 2)
				{			
					PCS_blinkWinPlayHooter_PSH();
					PCS_blinkWinPlayHooter_PSL();
					
					
				}
				if(numOfWindows == 3)
				{					
					PCS_blinkWinPlayHooter_PSH();
					PCS_blinkWinPlayHooter_PSL();
					PCS_blinkWinPlayHooter_FSH1();
					
					
				}
				if(numOfWindows == 4)
				{
					PCS_blinkWinPlayHooter_PSH();
					PCS_blinkWinPlayHooter_PSL();
					PCS_blinkWinPlayHooter_FSH1();
					PCS_blinkWinPlayHooter_FSH2();
				
				}
				if(numOfWindows == 5)
				{
					PCS_blinkWinPlayHooter_PSH();
					PCS_blinkWinPlayHooter_PSL();
					PCS_blinkWinPlayHooter_FSH1();
					PCS_blinkWinPlayHooter_FSH2();
					PCS_blinkWinPlayHooter_FSL1();
									
				}
				if(numOfWindows == 6)
				{
					PCS_blinkWinPlayHooter_PSH();
					PCS_blinkWinPlayHooter_PSL();
					PCS_blinkWinPlayHooter_FSH1();
					PCS_blinkWinPlayHooter_FSH2();
					PCS_blinkWinPlayHooter_FSL1();
					PCS_blinkWinPlayHooter_FSL2();
					
					
				}
				
				PCS_testFlag = 1;
				
				
			});
			$("#PCS_ACK").click(function(){

				
//				$("#PCS_ACK").prop("disabled", true);
				if(PCS_testFlag == 1){
					
				
				if(numOfWindows == 2)
				{
					PCS_glowWinPauseHooter_PSH();
					PCS_glowWinPauseHooter_PSL();
				}
				if(numOfWindows == 3)
				{
					PCS_glowWinPauseHooter_PSH();
					PCS_glowWinPauseHooter_PSL();
					PCS_glowWinPauseHooter_FSH1();	
				}
				if(numOfWindows == 4)
				{
					PCS_glowWinPauseHooter_PSH();
					PCS_glowWinPauseHooter_PSL();
					PCS_glowWinPauseHooter_FSH1();					
					PCS_glowWinPauseHooter_FSH2();
					
				}
				if(numOfWindows == 5)
				{
					PCS_glowWinPauseHooter_PSH();
					PCS_glowWinPauseHooter_PSL();
					PCS_glowWinPauseHooter_FSH1();					
					PCS_glowWinPauseHooter_FSH2();
					PCS_glowWinPauseHooter_FSL1();
					
					
				}
				if(numOfWindows == 6)
				{
					PCS_glowWinPauseHooter_PSH();
					PCS_glowWinPauseHooter_PSL();
					PCS_glowWinPauseHooter_FSH1();					
					PCS_glowWinPauseHooter_FSH2();
					PCS_glowWinPauseHooter_FSL1();
					PCS_glowWinPauseHooter_FSL2();
					
					
				}
				
				
				
				//for 2B
				if(ISASeq == 2 && FlagPCS_setBlinkToNullFor2B == 0){
					
					setTimeout(function(){ 
						PCS_firstResetAfterTestFor2A2B();
						alertify.alert("<img src='images/correct.png' style='width:40px; height:53px;'>&nbsp;&nbsp;<b style='color:#0b5603;'>Functioning of alarm annunciator is satisfactory.</b>");
												
					}, 1000);
					
					
					FlagPCS_setBlinkToNullFor2B = 1;
//					setInterval(firstResetAfterTestFor2A2B, 3000);
					ref1 = setInterval(PCS_resetOnRedGreenAlarm, 2000);
					
					
				}
				
				
				if(ISASeq == 3 && FlagPCS_ToReset2C == 0){
					
					setTimeout(function(){ 
						PCS_firstResetAfterTestFor2A2B();
						alertify.alert("<img src='images/correct.png' style='width:40px; height:53px;'>&nbsp;&nbsp;<b style='color:#0b5603;'>Functioning of alarm annunciator is satisfactory.</b>");
												
					}, 1000);
					
					
					
					FlagPCS_ToReset2C = 1;
//					setInterval(firstResetAfterTestFor2A2B, 3000);
					ref1 = setInterval(PCS_resetOnRedGreenAlarm, 2000);
					
					
				}
				PCS_ackFlag = 1;
				}
				
			})
			$("#PCS_Reset").click(function(){
				
//				paper1.clear();
//				Alarmindow_PCS(numOfWindows);
//				
//				anim_LSH = null;
//				anim_LSL = null;
//				anim_PSL = null;
//				anim_FSL = null;
//				anim_FSH = null;
//				anim_FSH1 = null;
//				Flag_WindowBlinkForless30 = 0;
//				Flag_WindowBlinkForgreater70 = 0;
//				
//				pauseHooter();
				if(ISASeq == 1){
				if(FlagPCS_firstReset == 0 && PCS_ackFlag == 1){
					
					PCS_firstResetAfterTestFor2A2B();
					alertify.alert("<img src='images/correct.png' style='width:40px; height:53px;'>&nbsp;&nbsp;<b style='color:#0b5603;'>Functioning of alarm annunciator is satisfactory.</b>");
					FlagPCS_firstReset = 1;
					
				}else{
					
					
					PCS_resetOnRedGreenAlarm();
				}
			}
				
				PCS_resetFlag = 1;
				
				
				
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
				inletSourceLbl = paper.text((x-350), (y+35), this.value+" %").attr({	stroke : 'blue','font-size' : 20,	"font-family": "sans-serif"	});

			}
			
			
//			value for slider User Demand
			var slider_2 = document.getElementById("Input_UD");
			var output_2 = document.getElementById("demo_UD");
			output_2.innerHTML = slider_2.value;

			slider_2.oninput = function() {
				output_2.innerHTML = this.value;
				userDemandLbl.hide();
				userDemandLbl =  paper.text((x+364), (y+50), this.value+" %").attr({	stroke : 'blue','font-size' : 20,	"font-family": "sans-serif"	});
			}
			
			
			
			redrawPCS(numOfWindows, maxLimit, minLimit);	
			
			Alarmindow_PCS(numOfWindows);
			
			
			
			$("#submit_PCS").on("click", function(){
				
		if(PCS_testFlag == 1){
			
			if(PCS_ackFlag == 1){
				
				if(PCS_resetFlag == 1){
				
					
					$("#submit_PCS").prop("hidden", true);
					
					$("#Input_inlet").prop("disabled", true);
					$("#Input_UD").prop("disabled", true);
					
					$("#submit_ActionPCS").prop("hidden", false);
					
					PCS_readingData = {};
					
					 inletSource = parseInt(slider_1.value);
					 userDemand = parseInt(slider_2.value);
					 
					 if(FlagPCS_waterlvlLabel == 0){
						 
						 waterlvlHT = waterlvlHT_PCS(inletSource);
							
//							waterlvl.hide();
//							waterlvl = drawWaterLvl_PCS(waterlvlHT);
							
							waterlvlper.hide();				
							waterlvlper = Label1((x + 50), (y + 80), inletSource+" %");
						 
						 waterlvlLabel = inletSource;
					 }
					
					
					

						// InDependat alarms on tank level 
						if(numOfWindows != 2){
							
						
						if(inletSource <= minLimit){
							if(numOfWindows == 6){
								
								PCS_FSL2.attr({'fill':'#FF0000'});								
									PCS_isGreen_FSL2 = false;
									PCS_blinkWinPlayHooter_FSL2();
									
								PCS_FSH2.attr({'fill':'#6bc66c'});								
									PCS_isGreen_FSH2 = true;
									
								
							}
							if(numOfWindows == 4 || numOfWindows == 5){
								
								PCS_FSH2.attr({'fill':'#6bc66c'});								
								PCS_isGreen_FSH2 = true;

							}
							
							
							
							
						}else if(inletSource >= maxLimit){
							if(numOfWindows == 6){
								
							PCS_FSH2.attr({'fill':'#FF0000'});								
								PCS_isGreen_FSH2 = false;
								PCS_blinkWinPlayHooter_FSH2();
								
							PCS_FSL2.attr({'fill':'#6bc66c'});								
								PCS_isGreen_FSL2 = true;
								
							}
							if(numOfWindows == 4 || numOfWindows == 5){
								
							PCS_FSH2.attr({'fill':'#FF0000'});								
								PCS_isGreen_FSH2 = false;
								PCS_blinkWinPlayHooter_FSH2();
								
							}
							
							
						}else if(inletSource > minLimit &&  inletSource < maxLimit){
							
							if(numOfWindows == 6){
								
								PCS_FSH2.attr({'fill':'#6bc66c'});								
									PCS_isGreen_FSH2 = true;
									
								PCS_FSL2.attr({'fill':'#6bc66c'});								
									PCS_isGreen_FSL2 = true;
									
								}
								if(numOfWindows == 4 || numOfWindows == 5){
									
									PCS_FSH2.attr({'fill':'#6bc66c'});								
									PCS_isGreen_FSH2 = true;
									
								}
							
							
							
							
						}
						
						
						if(userDemand <= minLimit){
							if(numOfWindows == 5 || numOfWindows == 6){
								
								PCS_FSH1.attr({'fill':'#6bc66c'});
								PCS_isGreen_FSH1 = true;
								
								PCS_FSL1.attr({'fill':'#FF0000'});
								PCS_isGreen_FSL1 = false;
								PCS_blinkWinPlayHooter_FSL1();
								
							}
							if(numOfWindows == 3 || numOfWindows == 4){
								
								PCS_FSH1.attr({'fill':'#6bc66c'});
								PCS_isGreen_FSH1 = true;
								
							}
							
							
						}else if(userDemand >= maxLimit){
							if(numOfWindows == 5 || numOfWindows == 6){
								
								PCS_FSH1.attr({'fill':'#FF0000'});
								PCS_isGreen_FSH1 = false;
								PCS_blinkWinPlayHooter_FSH1();
								
								PCS_FSL1.attr({'fill':'#6bc66c'});
								PCS_isGreen_FSL1 = true;
							
								
							}
							if(numOfWindows == 3 || numOfWindows == 4){
								
								PCS_FSH1.attr({'fill':'#FF0000'});
								PCS_isGreen_FSH1 = false;
								PCS_blinkWinPlayHooter_FSH1();
								
							}
						}else if(userDemand > minLimit &&  userDemand < maxLimit){
							if(numOfWindows == 3 || numOfWindows == 4){
								
								PCS_FSH1.attr({'fill':'#6bc66c'});
								PCS_isGreen_FSH1 = true;
								
							}
							if(numOfWindows == 5 || numOfWindows == 6){
								
								PCS_FSH1.attr({'fill':'#6bc66c'});
								PCS_isGreen_FSH1 = true;
								
								PCS_FSL1.attr({'fill':'#6bc66c'});
								PCS_isGreen_FSL1 = true;
								
							}
							
							
						}
							
						}

						
						//Dependat alarms on tank level 
						
						if(inletSource > userDemand){
							dependantAlarmGenerationFromTankLvl_PCS();
							clearInterval(ref);
							ref = setInterval(increaseWaterLvl_PCSWin6, 7000);					
							
						}else if(inletSource < userDemand){
							dependantAlarmGenerationFromTankLvl_PCS();
							clearInterval(ref);
							ref = setInterval(decreaseWaterLvl_PCSWin6, 7000);
							
							
							
						}else{
							
							clearInterval(ref);
							
							
							waterlvlHT = waterlvlHT_PCS(inletSource);	
//							waterlvl.hide();
//							waterlvl = drawWaterLvl_PCS(waterlvlHT);
							
							waterlvlper.hide();				
							waterlvlper = Label1((x + 50), (y + 80), inletSource+" %");
							
							waterlvlLabel = inletSource;
							
							dependantAlarmGenerationFromTankLvl_PCS();
							
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
			
			
			$("#submit_ActionPCS").on("click", function(){
			
				//For 2B
				if(ISASeq == 2 && hutter.hasAttribute('src') == true){
					
						alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please Acknowledge generated alarm</b>");
					
				}else{
					
					//For 2A & 2B	
					clearInterval(ref);
					FlagPCS_waterlvlLabel = 1;
					
					$("#submit_ActionPCS").prop("hidden", true);
					
					$("#submit_PCS").prop("hidden", false);
					
					$("#Input_inlet").prop("disabled", false);
					$("#Input_UD").prop("disabled", false);
					
					 PCS_readingData.inlet = inletSource;
					 PCS_readingData.userDemand = userDemand;
					 PCS_readingData.tankLvl = waterlvlLabel;
					
					 PCS_inletUDReading_Data.push(PCS_readingData);
					 
					 ExpTrackData.PCSAlarmConditionData = PCS_inletUDReading_Data;
					 
//					 console.log(PCS_inletUDReading_Data);
					
				}
				
				
				 
				
			});
			
			
			$("#Stop_PCS").on("click", function(){
				
				AllAlarmCheck_PCS();
				
			});
			
}

 
		   
});	
	
	
function redrawPCS(numOfWindows, maxLimit, minLimit){
	
	paper.clear();
	
	PressureControl();
	
	if(numOfWindows == 2){
		
		PCS_draw2AlarmComponent();
		paper.text((x-20), (y-100), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+120), (y-100), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		
	}
	if(numOfWindows == 3){
		
		PCS_draw3AlarmComponent();
		paper.text((x-20), (y-100), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+120), (y-100), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+280), (y+15), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		
		
	}
	if(numOfWindows == 4){
		
		PCS_draw4AlarmComponent();
		paper.text((x-20), (y-100), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+120), (y-100), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+280), (y+15), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x-130), (y-15), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		
	}
	if(numOfWindows == 5){
		
		PCS_draw5AlarmComponent();
		paper.text((x-20), (y-100), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+120), (y-100), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+280), (y+15), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x-130), (y-15), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+230), (y+175), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});	
		
	}
	if(numOfWindows == 6){
		
		PCS_draw6AlarmComponent();
		paper.text((x-20), (y-100), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+120), (y-100), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+280), (y+15), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x-130), (y-15), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		paper.text((x+230), (y+175), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});	
		paper.text((x-170), (y+145), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	}
	
}
							
							
			
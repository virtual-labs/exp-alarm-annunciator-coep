
//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//	SINGLEACTINGCYLINDER.FCS_Characterisation2A2B = function(numOfWindows1, alarmtype, ISASeq1, appId, maxLimit1, minLimit1){

	FCS_Characterisation2A2B = function(numOfWindows1, alarmtype, ISASeq1, appId, maxLimit1, minLimit1){
		

	
//		console.log(numOfWindows, alarmtype, ISASeq, appId, maxLimit1, minLimit1);
				
		FCS_inletUDReading_Data = [];
		FCS_Count = 0;
		
		numOfWindows = numOfWindows1;
		ISASeq = ISASeq1;
		maxLimit =  maxLimit1;
		minLimit =  minLimit1;
		
		ref = 0;
		ref1 = 0;
		
		FCSAlarmCheck_LSH = false;
		FCSAlarmCheck_LSL = false;
		FCSAlarmCheck_PSL = false;
		FCSAlarmCheck_PSH = false;
		FCSAlarmCheck_FSL = false;
		FCSAlarmCheck_FSH = false;
		
		FCS_anim_LSH = null;
		FCS_anim_LSL = null;
		FCS_anim_PSL = null;
		FCS_anim_PSH = null;
		FCS_anim_FSL = null;
		FCS_anim_FSH = null;
		
		
		FCS_isGlow_LSH = false;
		FCS_isGlow_LSL = false;
		FCS_isGlow_PSL = false;
		FCS_isGlow_PSH = false;
		FCS_isGlow_FSL = false;
		FCS_isGlow_FSH = false;
		
		FCS_isGreen_LSH = false;
		FCS_isGreen_LSL = false;
		FCS_isGreen_PSL = false;
		FCS_isGreen_PSH = false;
		FCS_isGreen_FSL = false;
		FCS_isGreen_FSH = false;
		
		
		FCS_testFlag = 0;
		FCS_ackFlag = 0;
		if(ISASeq == 1){
			FCS_resetFlag = 0;
		}
		if(ISASeq == 2 || ISASeq == 3){
			FCS_resetFlag = 1;
		}
		
		$("#mainDiv").html('');
		
		var selectApp = '';
		selectApp +='<audio  autoplay loop id="hutter" ></audio>'
			if(ISASeq == 3){
				selectApp +='<audio id="hutterForACKBack" ></audio>'
			}
		selectApp +='<div id = "FCSConfigDiv" class="container-fluid">'
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
		    +'<button id="FCS_Test" class="AlarmTstAckRst">TEST</button>'
		    +'<button id="FCS_ACK" class="AlarmTstAckRst">ACK</button>'
		    if(ISASeq == 1){
		    	
		    	selectApp +='<button id="FCS_Reset" class="AlarmTstAckRst">RESET</button>'
		    }
		    
		selectApp +='<div class="slidecontainer" id="FCS_SliderForInlet">'
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
				
			+'<div class="slidecontainer" id="FCS_SliderForUD">'
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
			+'<button id="submit_FCS">Submit</button>'
			+'<button id="submit_ActionFCS" hidden>Take Action</button>'
			+'<button id="Stop_FCS">ShutDown Plant</button><br/>'
			
			
			
				+'</div>' // col close
				+'</div>' // row close 
				+'</div>'; // container close
				
			
			$("#mainDiv").html(selectApp);
			
			$("#FCS_Test").click(function(){
				
				$("#FCS_Test").prop("disabled", true);
				$("#FCS_Test").removeClass("AlarmTstAckRst").addClass("disabledBtn");
				
				if(numOfWindows == 2)
				{			
					FCS_blinkWinPlayHooter_LSH();
					FCS_blinkWinPlayHooter_LSL();
					
					
				}
				if(numOfWindows == 3)
				{					
					FCS_blinkWinPlayHooter_LSH();
					FCS_blinkWinPlayHooter_LSL();
					FCS_blinkWinPlayHooter_PSL();
					
					
				}
				if(numOfWindows == 4)
				{
					FCS_blinkWinPlayHooter_LSH();
					FCS_blinkWinPlayHooter_LSL();
					FCS_blinkWinPlayHooter_PSL();
					FCS_blinkWinPlayHooter_PSH();
				
					
				}
				if(numOfWindows == 5)
				{
					FCS_blinkWinPlayHooter_LSH();
					FCS_blinkWinPlayHooter_LSL();
					FCS_blinkWinPlayHooter_PSL();
					FCS_blinkWinPlayHooter_PSH();
					FCS_blinkWinPlayHooter_FSL();
						
				}
				if(numOfWindows == 6)
				{
					FCS_blinkWinPlayHooter_LSH();
					FCS_blinkWinPlayHooter_LSL();
					FCS_blinkWinPlayHooter_PSL();
					FCS_blinkWinPlayHooter_PSH();
					FCS_blinkWinPlayHooter_FSL();
					FCS_blinkWinPlayHooter_FSH();
			
					
				}
				
				FCS_testFlag = 1;
				
				
			});
			$("#FCS_ACK").click(function(){

				
//				$("#FCS_ACK").prop("disabled", true);
				if(FCS_testFlag == 1){
					
				
				if(numOfWindows == 2)
				{
					FCS_glowWinPauseHooter_LSH();
					FCS_glowWinPauseHooter_LSL();
					
				}
				if(numOfWindows == 3)
				{
					FCS_glowWinPauseHooter_LSH();
					FCS_glowWinPauseHooter_LSL();
					FCS_glowWinPauseHooter_PSL();					
									
				}
				if(numOfWindows == 4)
				{
					FCS_glowWinPauseHooter_LSH();
					FCS_glowWinPauseHooter_LSL();
					FCS_glowWinPauseHooter_PSL();					
					FCS_glowWinPauseHooter_PSH();
					
					
				}
				if(numOfWindows == 5)
				{
					FCS_glowWinPauseHooter_LSH();
					FCS_glowWinPauseHooter_LSL();
					FCS_glowWinPauseHooter_PSL();					
					FCS_glowWinPauseHooter_PSH();
					FCS_glowWinPauseHooter_FSL();
					
					
				}
				if(numOfWindows == 6)
				{
					FCS_glowWinPauseHooter_LSH();
					FCS_glowWinPauseHooter_LSL();
					FCS_glowWinPauseHooter_PSL();					
					FCS_glowWinPauseHooter_PSH();
					FCS_glowWinPauseHooter_FSL();
					FCS_glowWinPauseHooter_FSH();
					
					
				}
				
				
				
				if(ISASeq == 2 && FlagFCS_setBlinkToNullFor2B == 0){
					
					setTimeout(function(){ 
						FCS_firstResetAfterTestFor2A2B();
						alertify.alert("<img src='images/correct.png' style='width:40px; height:53px;'>&nbsp;&nbsp;<b style='color:#0b5603;'>Functioning of alarm annunciator is satisfactory.</b>");
												
					}, 1000);
					
					
					
					FlagFCS_setBlinkToNullFor2B = 1;
//					setInterval(firstResetAfterTestFor2A2B, 3000);
					ref1 = setInterval(FCS_resetOnRedGreenAlarm, 2000);
					
					
				}
				
				if(ISASeq == 3 && FlagFCS_ToReset2C == 0){
					
					setTimeout(function(){ 
						FCS_firstResetAfterTestFor2A2B();
						alertify.alert("<img src='images/correct.png' style='width:40px; height:53px;'>&nbsp;&nbsp;<b style='color:#0b5603;'>Functioning of alarm annunciator is satisfactory.</b>");
												
					}, 1000);
					
					
					
					FlagFCS_ToReset2C = 1;
//					setInterval(firstResetAfterTestFor2A2B, 3000);
					ref1 = setInterval(FCS_resetOnRedGreenAlarm, 2000);
					
					
				}
				FCS_ackFlag = 1;
				}
				
				
			})
			$("#FCS_Reset").click(function(){

				if(ISASeq == 1){
				if(FlagFCS_firstReset == 0 && FCS_ackFlag == 1){
					
					FCS_firstResetAfterTestFor2A2B();
					alertify.alert("<img src='images/correct.png' style='width:40px; height:53px;'>&nbsp;&nbsp;<b style='color:#0b5603;'>Functioning of alarm annunciator is satisfactory.</b>");
					FlagFCS_firstReset = 1;
					
				}else{
					
					
					FCS_resetOnRedGreenAlarm();
				}
			}
				
				FCS_resetFlag = 1;
				
				
				
			})
			//paper = new Raphael(document.getElementById('canvas'), '100%', 700);	
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
				inletSourceLbl =  paper.text((x+95), (y-150), this.value+" %").attr({	stroke : 'Blue','font-size' : 20,	"font-family": "sans-serif"	});

			}
			
			
//			value for slider User Demand
			var slider_2 = document.getElementById("Input_UD");
			var output_2 = document.getElementById("demo_UD");
			output_2.innerHTML = slider_2.value;

			slider_2.oninput = function() {
				output_2.innerHTML = this.value;
				userDemandLbl.hide();
				userDemandLbl =  paper.text((x+620), (y+230), this.value+" %").attr({	stroke : 'blue','font-size' : 20,	"font-family": "sans-serif"	});
			}
			
			
			
			redrawFCS(numOfWindows, maxLimit, minLimit);			
			Alarmindow_FCS(numOfWindows);
			
			
			
			$("#submit_FCS").on("click", function(){
				
		if(FCS_testFlag == 1){
			
			if(FCS_ackFlag == 1){
				
				if(FCS_resetFlag == 1){
					
					
					$("#submit_FCS").prop("hidden", true);
					
					$("#Input_inlet").prop("disabled", true);
					$("#Input_UD").prop("disabled", true);
					
					$("#submit_ActionFCS").prop("hidden", false);
					
					FCS_readingData = {};
					
					 inletSource = parseInt(slider_1.value);
					 userDemand = parseInt(slider_2.value);
					 
					
					 
					 if(FlagFCS_waterlvlLabel == 0){
						 
						 waterlvlHT = waterlvlHT_FCS(inletSource);
							
							waterlvl.hide();
							waterlvl = drawWaterLvl_FCS(waterlvlHT);
							
							waterlvlper.hide();				
							waterlvlper = Label1((x + 100), (y + 100), inletSource+" %");
						 
						 waterlvlLabel = inletSource;
					 }
					
					
					

						// InDependat alarms on tank level 
						
					 if(inletSource >= maxLimit){
							if(numOfWindows == 6){
								
								FCS_FSH.attr({'fill':'#FF0000'});
								
								FCS_isGreen_FSH = false;
								
								FCS_blinkWinPlayHooter_FSH();
	
							}							
					}else{
						
						if(numOfWindows == 6){
							FCS_FSH.attr({'fill':'#6bc66c'});
							
							FCS_isGreen_FSH = true;
						}
						
					}
					 
						
											
						if(userDemand <=  minLimit){
							if( numOfWindows == 5 || numOfWindows == 6){
								
								FCS_FSL.attr({'fill':'#FF0000'});
								
								FCS_isGreen_FSL = false;
								
								FCS_blinkWinPlayHooter_FSL();
								
							}
							
							
						}else if(userDemand > minLimit){
							if( numOfWindows == 5 || numOfWindows == 6){
								
								FCS_FSL.attr({'fill':'#6bc66c'});
								
								FCS_isGreen_FSL = true;
								
								
							}
							
						}

						
						//Dependat alarms on tank level 
						
						if(inletSource > userDemand){
							FCS_dependantAlarmGenerationFromTankLvl();
							clearInterval(ref);
							ref = setInterval(increaseWaterLvl_FCSWin6, 7000);					
							
						}else if(inletSource < userDemand){
							FCS_dependantAlarmGenerationFromTankLvl();
							clearInterval(ref);
							ref = setInterval(decreaseWaterLvl_FCSWin6, 7000);
							
							
							
						}else{
							
							clearInterval(ref);
							
							
							waterlvlHT = waterlvlHT_FCS(inletSource);	
							waterlvl.hide();
							waterlvl = drawWaterLvl_FCS(waterlvlHT);
							
							waterlvlper.hide();				
							waterlvlper = Label1((x + 100), (y + 100), inletSource+" %");
							
							waterlvlLabel = inletSource;
							
							FCS_dependantAlarmGenerationFromTankLvl();
							
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
			
			
			$("#submit_ActionFCS").on("click", function(){
			
				//For 2B
				if(ISASeq == 2 && hutter.hasAttribute('src') == true){
					
						alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please Acknowledge generated alarm</b>");
					
				}else{
					
					//For 2A & 2B	
					clearInterval(ref);
					FlagFCS_waterlvlLabel = 1;
					
					$("#submit_ActionFCS").prop("hidden", true);
					
					$("#submit_FCS").prop("hidden", false);
					
					$("#Input_inlet").prop("disabled", false);
					$("#Input_UD").prop("disabled", false);
					
					 FCS_readingData.inlet = inletSource;
					 FCS_readingData.userDemand = userDemand;
					 FCS_readingData.tankLvl = waterlvlLabel;
					
					 FCS_inletUDReading_Data.push(FCS_readingData);
					 
					 ExpTrackData.FCSAlarmConditionData = FCS_inletUDReading_Data;
					 
//					 console.log(FCS_inletUDReading_Data);
					
				}
				
				
				 
				
			});
			
			
			$("#Stop_FCS").on("click", function(){
				
				AllAlarmCheck_FCS();
				
			});
			
}

 
		   
});	
	
	
function redrawFCS(numOfWindows, maxLimit, minLimit){
	
	paper.clear();
	
	FlowControl();
	
	if(numOfWindows == 2){
		
		FCS_draw2AlarmComponent();
		
		paper.text((x-40), (y-60), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x-40), (y+120), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	}
	if(numOfWindows == 3){
		
		FCS_draw3AlarmComponent();
		
		paper.text((x-40), (y-60), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x-40), (y+120), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+230), (y+10), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	
	}
	if(numOfWindows == 4){
		
		FCS_draw4AlarmComponent();
		
		paper.text((x-40), (y-60), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x-40), (y+120), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+230), (y+10), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+250), (y+340), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	
	}
	if(numOfWindows == 5){
		
		FCS_draw5AlarmComponent();
		
		paper.text((x-40), (y-60), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x-40), (y+120), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+230), (y+10), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+250), (y+340), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+200), (y+180), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	
	}
	if(numOfWindows == 6){
		
		FCS_draw6AlarmComponent();
		
		paper.text((x-40), (y-60), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x-40), (y+120), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+230), (y+10), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+250), (y+340), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+200), (y+180), minLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});		
		paper.text((x+155), (y-130), maxLimit+"%").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		

	}
	
}
							
							
			
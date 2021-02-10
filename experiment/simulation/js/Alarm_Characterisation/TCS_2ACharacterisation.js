
//var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(function () {

//	SINGLEACTINGCYLINDER.TCS_Characterisation2A2B = function(numOfWindows, alarmtype, ISASeq1, appId, maxLimit1, minLimit1){

TCS_Characterisation2A2B = function(numOfWindows1, alarmtype, ISASeq1, appId, maxLimit1, minLimit1){
		

	
//		console.log(numOfWindows, alarmtype, ISASeq, appId, maxLimit1, minLimit1);
		//userDemand = minLimit;
		TCS_inletUDReading_Data = [];
		
		numOfWindows = numOfWindows;
		ISASeq = ISASeq1;
		maxLimit =  maxLimit1;
		minLimit =  minLimit1;
		TCS_Count = 0;
		ref = 0;
		ref1 = 0;
		
		
		TCSAlarmCheck_FSH = false;
		TCSAlarmCheck_FSL = false;
		TCSAlarmCheck_TSL = false;
		TCSAlarmCheck_TSH2 = false;
		TCSAlarmCheck_PSH = false;
		TCSAlarmCheck_TSH1 = false;
		
		TCSanim_FSH = null;
		TCSanim_FSL = null;
		TCSanim_TSL = null;
		TCSanim_TSH2 = null;
		TCSanim_PSH = null;
		TCSanim_TSH1 = null;
		
		TCSisGlow_FSH = false;
		TCSisGlow_FSL = false;
		TCSisGlow_TSL = false;
		TCSisGlow_TSH2 = false;
		TCSisGlow_PSH = false;
		TCSisGlow_TSH1 = false;
		
		
		TCSisGreen_FSH = false;
		TCSisGreen_FSL = false;
		TCSisGreen_TSL = false;
		TCSisGreen_TSH2 = false;
		TCSisGreen_PSH = false;
		TCSisGreen_TSH1 = false;
		
		
		
		TCStestFlag = 0;
		TCSackFlag = 0;
		
//		var FSH_IP;
//		var FSL_IP;
//		var TSL_IP;
//		var TSH2_IP;
		if(ISASeq == 1){
			TCSresetFlag = 0;
		}
		if(ISASeq == 2 || ISASeq == 3){
			TCSresetFlag = 1;
		}
		
		$("#mainDiv").html('');
		
		var selectApp = '';
		selectApp +='<audio  autoplay loop id="hutter" >'
			if(ISASeq == 3){
				selectApp +='<audio id="hutterForACKBack" ></audio>'
			}
		selectApp +='</audio><div id = "TCSConfigDiv" class="container-fluid">'
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
		    +'<div class="col-sm-12 col-md-12 col-xl-12">'
		    +'<button id="TCS_Test" class="AlarmTstAckRst">TEST</button>'
		    +'<button id="TCS_ACK" class="AlarmTstAckRst">ACK</button>'
		    if(ISASeq == 1){
		    	
		    	selectApp +='<button id="TCS_Reset" class="AlarmTstAckRst">RESET</button>'
		    }
		selectApp +='</div>'
		if(numOfWindows == 2 || numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
		selectApp +='<div class="col-sm-12 col-md-6 col-xl-6"><div class="slidecontainer" id="FSH_ColdWaterIn">'
			+ '<div class="header">Input for FSH</div>'
		    +'<input step="1" type="range" min='
			+ 0
			+ ' max='
			+ 100
			+ ' value='
			+ 0
			+ ' id="FSH_ColdWaterInlet">'
			+ '<p>Value: <span id="FSH_ColdWaterInletValue"></span></p>'
			+ '</div></div>'
				
			+'<div class="col-sm-12 col-md-6 col-xl-6"><div class="slidecontainer" id="FSL_SteamIn">'
			+ '<div class="header">Input for FSL</div>'
		    +'<input step="1" type="range" min='
			+ 0
			+ ' max='
			+ 100
			+ ' value='
			+ 0
			+ ' id="FSL_SteamInlet">'
			+ '<p>Value: <span id="FSL_SteamInletValue"></span></p>'
			selectApp +='</div></div>'
		}
		if(numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
			selectApp +='<div class="col-sm-12 col-md-6 col-xl-6"><div class="slidecontainer" id="TSL_ColdWaterIn">'
				+ '<div class="header">Input for TSL</div>'
			    +'<input step="1" type="range" min='
				+ 0
				+ ' max='
				+ 100
				+ ' value='
				+ 0
				+ ' id="TSL_ColdWaterInlet">'
				+ '<p>Value: <span id="TSL_ColdWaterInletValue"></span></p>'
				selectApp +='</div></div>'
		}
		if( numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
			selectApp +='<div class="col-sm-12 col-md-6 col-xl-6"><div class="slidecontainer" id="TSH2_SteamIn">'
				+ '<div class="header">Input for TSH2</div>'
			    +'<input step="1" type="range" min='
				+ 0
				+ ' max='
				+ 100
				+ ' value='
				+ 0
				+ ' id="TSH2_SteamInlet">'
				+ '<p>Value: <span id="TSH2_SteamInletValue"></span></p>'
				selectApp +='</div></div>'
		}
		selectApp +='<div class="col-sm-12 col-md-6 col-xl-6"><div class="slidecontainer" id="LCS_SliderForUD">'
				+ '<div class="header">Input for User Demand</div>'
			    +'<input step="1" type="range" min='
				+ 0
				+ ' max='
				+ 100
				+ ' value='
				+ 0
				+ ' id="Input_UD">'
				+ '<p>Value: <span id="demo_UD"></span></p>'
				+ '</div>'
			+'<div><button id="submit_TCS">Submit</button>'
			+'<button id="submit_ActionTCS" hidden>Take Action</button></div>'
			+'<button id="Stop_TCS">ShutDown Plant</button><br/>'
			 
			
			
			
				+'</div>' // col close
				+'</div>' // row close 
				+'</div>'; // container close
				
			
			$("#mainDiv").html(selectApp);
			
			$("#TCS_Test").click(function(){
				console.log($("#canvasForWindows").width());
				$("#TCS_Test").prop("disabled", true);
				$("#TCS_Test").removeClass("AlarmTstAckRst").addClass("disabledBtn");
				
				if(numOfWindows == 2)
				{			
					TCSblinkWinPlayHooter_FSH();
					TCSblinkWinPlayHooter_FSL();
					
				}
				if(numOfWindows == 3)
				{					
					TCSblinkWinPlayHooter_FSH();
					TCSblinkWinPlayHooter_FSL();
					TCSblinkWinPlayHooter_TSL();
					
				}
				if(numOfWindows == 4)
				{
					TCSblinkWinPlayHooter_FSH();
					TCSblinkWinPlayHooter_FSL();
					TCSblinkWinPlayHooter_TSL();
					TCSblinkWinPlayHooter_TSH2();
					
					
				}
				if(numOfWindows == 5)
				{
					TCSblinkWinPlayHooter_FSH();
					TCSblinkWinPlayHooter_FSL();
					TCSblinkWinPlayHooter_TSL();
					TCSblinkWinPlayHooter_TSH2();
					TCSblinkWinPlayHooter_PSH();					
				}
				if(numOfWindows == 6)
				{
					TCSblinkWinPlayHooter_FSH();
					TCSblinkWinPlayHooter_FSL();
					TCSblinkWinPlayHooter_TSL();
					TCSblinkWinPlayHooter_TSH2();
					TCSblinkWinPlayHooter_PSH();		
					TCSblinkWinPlayHooter_TSH1();
					
					
				}
				
				TCStestFlag = 1;
				
				
			});
			$("#TCS_ACK").click(function(){

				
//				$("#TCS_ACK").prop("disabled", true);
				if(TCStestFlag == 1){
					
				
				if(numOfWindows == 2)
				{
					TCSglowWinPauseHooter_FSH();
					TCSglowWinPauseHooter_FSL();
				}
				if(numOfWindows == 3)
				{
					TCSglowWinPauseHooter_FSH();
					TCSglowWinPauseHooter_FSL();
					TCSglowWinPauseHooter_TSL();					
				}
				if(numOfWindows == 4)
				{
					TCSglowWinPauseHooter_FSH();
					TCSglowWinPauseHooter_FSL();
					TCSglowWinPauseHooter_TSL();					
					TCSglowWinPauseHooter_TSH2();
					
				}
				if(numOfWindows == 5)
				{
					TCSglowWinPauseHooter_FSH();
					TCSglowWinPauseHooter_FSL();
					TCSglowWinPauseHooter_TSL();					
					TCSglowWinPauseHooter_TSH2();
					TCSglowWinPauseHooter_PSH();
					
				}
				if(numOfWindows == 6)
				{
					TCSglowWinPauseHooter_FSH();
					TCSglowWinPauseHooter_FSL();
					TCSglowWinPauseHooter_TSL();					
					TCSglowWinPauseHooter_TSH2();
					TCSglowWinPauseHooter_PSH();
					TCSglowWinPauseHooter_TSH1();
					
					
				}
				
				
				if(ISASeq == 2 && TCSFlag_setBlinkToNullFor2B == 0){
					
					setTimeout(function(){ 
						TCSfirstResetAfterTestFor2A2B();
						alertify.alert("<img src='images/correct.png' style='width:40px; height:53px;'>&nbsp;&nbsp;<b style='color:#0b5603;'>Functioning of alarm annunciator is satisfactory.</b>");
												
					}, 1000);
					
					
					
					TCSFlag_setBlinkToNullFor2B = 1;
//					setInterval(firstResetAfterTestFor2A2B, 3000);
					ref1 = setInterval(TCSresetOnRedGreenAlarm, 2000);
					
					
				}
				
				if(ISASeq == 3 && FlagTCS_ToReset2C == 0){
					
					setTimeout(function(){ 
						TCSfirstResetAfterTestFor2A2B();
						alertify.alert("<img src='images/correct.png' style='width:40px; height:53px;'>&nbsp;&nbsp;<b style='color:#0b5603;'>Functioning of alarm annunciator is satisfactory.</b>");
												
					}, 1000);
					
					
					
					FlagTCS_ToReset2C = 1;
//					setInterval(firstResetAfterTestFor2A2B, 3000);
					ref1 = setInterval(TCSresetOnRedGreenAlarm, 2000);
					
					
				}
				TCSackFlag = 1;
				}
				
			})
			$("#TCS_Reset").click(function(){
				
//				paper1.clear();
//				Alarmindow_LCS(numOfWindows);
//				
//				TCSanim_FSH = null;
//				anim_TSH2 = null;
//				anim_TSL = null;
//				anim_FSL = null;
//				anim_PSH = null;
//				anim_TSH1 = null;
//				TCSFlag_WindowBlinkForless30 = 0;
//				TCSFlag_WindowBlinkForgreater70 = 0;
//				
//				pauseHooter();
				if(ISASeq == 1){
				if(TCSFlag_firstReset == 0 && TCSackFlag == 1){
					
					TCSfirstResetAfterTestFor2A2B();
					TCSFlag_firstReset = 1;
					
				}else{
					
					
					TCSresetOnRedGreenAlarm();
				}
			}
				
				TCSresetFlag = 1;
				
				
				
			})
			var w = 900;
    var h = 500;

var width = $(window).width();

  if ($(window).width() < 500) {
	    width = $(this).width();
	    paper = new Raphael(document.getElementById('canvas'), '100%', 500);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 500);
	console.log("in 500");
  }else
  {
      paper = new Raphael(document.getElementById('canvas'), '100%', 700);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 700);
	console.log("in 700");
  }				
			paper1 = new Raphael(document.getElementById('canvasForWindows'), '100%',150);
//			value for slider Inlet Source
			if(numOfWindows == 2 || numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
					var slider_FSH = document.getElementById("FSH_ColdWaterInlet");
					var output_FSH = document.getElementById("FSH_ColdWaterInletValue");
					output_FSH.innerHTML = slider_FSH.value;
					
		             slider_FSH.oninput = function() {
						output_FSH.innerHTML = this.value;
						FSH_IP_val = parseInt(this.value);
						printSiderValue(numOfWindows);
//						TCSinletSourceLbl.hide();
//						TCSinletSourceLbl =  paper.text((x+450), (y-85), this.value+" %").attr({	stroke : 'Blue','font-size' : 20,	"font-family": "sans-serif"	});
					}
					var slider_FSL = document.getElementById("FSL_SteamInlet");
					var output_FSL = document.getElementById("FSL_SteamInletValue");
					output_FSL.innerHTML = slider_FSL.value;
					
					slider_FSL.oninput = function() {
						output_FSL.innerHTML = this.value;
						FSL_IP_val = parseInt(this.value);
						printSiderValue(numOfWindows);
//							TCSinletSourceLbl.hide();
//							TCSinletSourceLbl =  paper.text((x+320), (y+200), this.value+" %").attr({	stroke : 'Blue','font-size' : 20,	"font-family": "sans-serif"	});
						}
			}
			if(numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
			var slider_TSL = document.getElementById("TSL_ColdWaterInlet");
			var output_TSL = document.getElementById("TSL_ColdWaterInletValue");
			output_TSL.innerHTML = slider_TSL.value;
			 
			slider_TSL.oninput = function() {
				output_TSL.innerHTML = this.value;
				TSL_IP_val = parseInt(this.value);
				printSiderValue(numOfWindows);
					//inletSourceLbl.hide();
					//inletSourceLbl =  paper.text((x+450), (y-85), this.value+" %").attr({	stroke : 'Blue','font-size' : 20,	"font-family": "sans-serif"	});
				}
			}
			if(numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
			var slider_TSH2 = document.getElementById("TSH2_SteamInlet");
			var output_TSH2 = document.getElementById("TSH2_SteamInletValue");
			output_TSH2.innerHTML = slider_TSH2.value;
			
			slider_TSH2.oninput = function() {
				output_TSH2.innerHTML = this.value;
				TSH2_IP_val = parseInt(this.value);
				printSiderValue(numOfWindows);
					//inletSourceLbl.hide();
					//inletSourceLbl =  paper.text((x+450), (y-85), this.value+" %").attr({	stroke : 'Blue','font-size' : 20,	"font-family": "sans-serif"	});
				}
			}
			//FSH_ColdWaterInlet,FSL_SteamInlet,TSL_ColdWaterInlet,TSH2_SteamInlet
			
			
//			
//			
//			value for slider User Demand
			var slider_2 = document.getElementById("Input_UD");
			var output_2 = document.getElementById("demo_UD");
			output_2.innerHTML = slider_2.value;

			slider_2.oninput = function() {
				output_2.innerHTML = this.value;
				TCSuserDemandLbl.hide();
				TCSuserDemandLbl =  paper.text((x+320), (y+250), this.value+" %").attr({	stroke : 'blue','font-size' : 20,	"font-family": "sans-serif"	});
			}
			
			
			
			redrawTCS(numOfWindows,FSH_IP_val, maxLimit, minLimit);			
			Alarmindow_TCS(numOfWindows);
			
			
			
			$("#submit_TCS").on("click", function(){
				
		if(TCStestFlag == 1){
			
			if(TCSackFlag == 1){
				
				if(TCSresetFlag == 1){
					//for 2B
					
					
					$("#submit_TCS").prop("hidden", true);
					
					$("#FSH_ColdWaterInlet").prop("disabled", true);
					$("#FSL_SteamInlet").prop("disabled", true);
					$("#TSL_ColdWaterInlet").prop("disabled", true);
					$("#TSH2_SteamInlet").prop("disabled", true);
					
					$("#submit_ActionTCS").prop("hidden", false);
					
					TCS_readingData = {};
					if(numOfWindows == 2 || numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
					 FSH_IP = parseInt(slider_FSH.value);
					 FSL_IP = parseInt(slider_FSL.value);
					}
					if(numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
					 TSL_IP = parseInt(slider_TSL.value);
					}
					if( numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
					 TSH2_IP = parseInt(slider_TSH2.value);
					}
					 userDemand = parseInt(slider_2.value);
					
					 if(TCSFlag_waterlvlLabel == 0){
						 
						 waterlvlHT = waterlvlHT_TCS(FSH_IP);
							
							waterlvl.hide();
							waterlvl = drawWaterLvl_TCS(waterlvlHT);
							
							waterlvlper.hide();				
							waterlvlper = Label1((x + 100), (y + 100), FSH_IP+" %");
						 
						 waterlvlLabel = FSH_IP;
					 }
					
					
					

						// InDependat alarms on tank level 
					 
					 // FSH start
					 if(FSH_IP >= maxLimit){
						 if(numOfWindows == 2 || numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
						    	TCS_FSH.attr({'fill':'#FF0000'});
								//for 2A
								
						    	TCSisGreen_FSH = false;
								
						    	TCSblinkWinPlayHooter_FSH();
						    	}
					 }else
					  {
						 if(numOfWindows == 2 || numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
					    		TCS_FSH.attr({'fill':'#6bc66c'});
								//for 2A
								
					    		TCSisGreen_FSH = true;
								
//					    		TCSglowWinPauseHooter_FSH();
					    		}
					  }
					 // FSH end
					 
					 // FSL start
					 if(FSL_IP <= minLimit){
						 if(numOfWindows == 2 || numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
							 TCS_FSL.attr({'fill':'#FF0000'});
								//for 2A
								
						    	TCSisGreen_FSL = false;
								
						    	TCSblinkWinPlayHooter_FSL();
						    	}
					 }else
					  {
						 if(numOfWindows == 2 || numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
							 TCS_FSL.attr({'fill':'#6bc66c'});
								//for 2A
								
					    		TCSisGreen_FSL = true;
								
//					    		TCSglowWinPauseHooter_FSL();
					    		}
					  }
					// FSL end
					 
					// TSL start
					 if(numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
					 if(TSL_IP <= minLimit){
						 if(numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
							 TCS_TSL.attr({'fill':'#FF0000'});
							//for 2A
							
					    	TCSisGreen_TSL = false;
							
					    	TCSblinkWinPlayHooter_TSL();
					    	} 
					 }else
					  {
						 if(numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
							 TCS_TSL.attr({'fill':'#6bc66c'});
							//for 2A
							
					    	TCSisGreen_TSL = true;
							
					    	//TCSglowWinPauseHooter_TSL();
					    	} 
					  }
					 }
					// TSL end
					   
					// TSH2 start
					 if(numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
					 if(TSH2_IP >= maxLimit){
						 if(numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
							 TCS_TSH2.attr({'fill':'#FF0000'});
							//for 2A
							
					    	TCSisGreen_TSH2 = false;
							
					    	TCSblinkWinPlayHooter_TSH2();
					    	}
					 }else
					  {
						 if(numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
							 TCS_TSH2.attr({'fill':'#6bc66c'});
							//for 2A
							
					    	TCSisGreen_TSH2 = true;
							
					    	//TCSglowWinPauseHooter_TSH2();
					    	}
					  }
					 }
					// TSH2 end
						/*
							
							
							
							
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
							
						}*/

						
						//Dependat alarms on tank level 
					 if(numOfWindows == 5 || numOfWindows == 6){
					 TCSdependantAlarmGenerationFromTankLvl();
					 }
						if(FSH_IP > userDemand){
							//TCSdependantAlarmGenerationFromTankLvl();
							clearInterval(ref);
							ref = setInterval(increaseWaterLvl_TCSWin6, 7000);					
							
						}else if(FSH_IP < userDemand){
							//TCSdependantAlarmGenerationFromTankLvl();
							clearInterval(ref);
							ref = setInterval(decreaseWaterLvl_TCSWin6, 7000);
							
							
							
						}else{
							
							clearInterval(ref);
							
							
							waterlvlHT = waterlvlHT_TCS(FSH_IP);	
							waterlvl.hide();
							waterlvl = drawWaterLvl_TCS(waterlvlHT);
							
							waterlvlper.hide();				
							waterlvlper = Label1((x + 100), (y + 100), FSH_IP+" %");
							
							waterlvlLabel = FSH_IP;
							
							//TCSdependantAlarmGenerationFromTankLvl();
							
						}
						
						

					
					
				}else{
					
					alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please Resset all windows/b>");
					
				}
				
			}else{
				
				alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please Acknowledge all windows/b>");
			}
			
		}else{
			
			alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please Test all windows</b>");
		}		
				
			
				
			});
			
			
			$("#submit_ActionTCS").on("click", function(){
			
				//For 2B
				if(ISASeq == 2 && hutter.hasAttribute('src') == true){
					
						alertify.alert("<img src='images/alertWarning.jpg' style='width:40px; height:40px;'><b>Please Acknowledge generated window alarm</b>");
					
				}else{
					
					//For 2A & 2B	
					clearInterval(ref);
					TCSFlag_waterlvlLabel = 1;
					
					$("#submit_ActionTCS").prop("hidden", true);
					
					$("#submit_TCS").prop("hidden", false);
					
					//FSH_ColdWaterInlet,FSL_SteamInlet,TSL_ColdWaterInlet,TSH2_SteamInlet
					$("#FSH_ColdWaterInlet").prop("disabled", false);
					$("#FSL_SteamInlet").prop("disabled", false);
					$("#TSL_ColdWaterInlet").prop("disabled", false);
					$("#TSH2_SteamInlet").prop("disabled", false);
					
					 TCS_readingData.inlet = FSH_IP;
					 TCS_readingData.userDemand = userDemand;
					 TCS_readingData.tankLvl = waterlvlLabel;
					
					 TCS_inletUDReading_Data.push(TCS_readingData);
					 
					 ExpTrackData.TCSAlarmConditionData = TCS_inletUDReading_Data;
					 
//					 console.log(TCS_inletUDReading_Data);
					
				}
				
				
				 
				
			});
			
			
			
			$("#Stop_TCS").on("click", function(){
				
				AllAlarmCheck_TCS();
				
			});
			
			
}

 
		   
});	
	
	
function redrawTCS(numOfWindows, FSH_IP_val, maxLimit, minLimit){
	
	paper.clear();
	
	TempControl();
	
	if(numOfWindows == 2){
		
		TCS_draw2AlarmComponent();
		FSH_IPV =	paper.text((x+160), (y-127), FSH_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		FSL_IPV = paper.text((x-5), (y-30), FSL_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		
	}
	if(numOfWindows == 3){
		
		TCS_draw3AlarmComponent();
		FSH_IPV =	paper.text((x+160), (y-127), FSH_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		FSL_IPV = paper.text((x-5), (y-30), FSL_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		TSL_IPV = paper.text((x+245), (y-127), TSL_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		
	}
	if(numOfWindows == 4){
		
		TCS_draw4AlarmComponent();
		TSH2_IPV = paper.text((x-50), (y+140), TSH2_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		FSH_IPV =	paper.text((x+160), (y-127), FSH_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		FSL_IPV = paper.text((x-5), (y-30), FSL_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		TSL_IPV = paper.text((x+245), (y-127), TSL_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		
	}
	if(numOfWindows == 5){
		
		TCS_draw5AlarmComponent();
		
		PSH_IPV = paper.text((x+245), (y+110), minLimit+"  %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		//TSH1_IPV =  paper.text((x+245), (y-30), maxLimit+"  %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		TSH2_IPV = paper.text((x-50), (y+140), TSH2_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		FSH_IPV =	paper.text((x+160), (y-127), FSH_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		FSL_IPV = paper.text((x-5), (y-30), FSL_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		TSL_IPV = paper.text((x+245), (y-127), TSL_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		
	}
	if(numOfWindows == 6){
		
		TCS_draw6AlarmComponent();
		PSH_IPV = paper.text((x+245), (y+110), minLimit+"  %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		TSH1_IPV =  paper.text((x+245), (y-30), maxLimit+"  %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		TSH2_IPV = paper.text((x-50), (y+140), TSH2_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		FSH_IPV =	paper.text((x+160), (y-127), FSH_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		FSL_IPV = paper.text((x-5), (y-30), FSL_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		TSL_IPV = paper.text((x+245), (y-127), TSL_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
		

	}
	
}

 function printSiderValue(numOfWindows)
 {
	 
	 FSH_IPV.hide();
	 FSL_IPV.hide();
	 FSH_IPV = paper.text((x+160), (y-127), FSH_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	 FSL_IPV = 	paper.text((x-5), (y-30), FSL_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	
	 if(numOfWindows == 3 || numOfWindows == 4 || numOfWindows == 5 || numOfWindows == 6){
	 TSL_IPV.hide();
	 TSL_IPV =	paper.text((x+245), (y-127), TSL_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	 }
	 if(numOfWindows == 4 ||numOfWindows == 5 || numOfWindows == 6){
	 TSH2_IPV.hide();
	 TSH2_IPV = paper.text((x-50), (y+140), TSH2_IP_val+" %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	 }
	 if( numOfWindows == 5 || numOfWindows == 6){
	 PSH_IPV.hide();
	 PSH_IPV = paper.text((x+245), (y+110), minLimit+"  %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	 }
	 if( numOfWindows == 6){
	 TSH1_IPV.hide();
	 TSH1_IPV = paper.text((x+245), (y-30), maxLimit+"  %").attr({	stroke : 'blue','font-size' : 12,	"font-family": "sans-serif"	});
	 }
	 
	
//							
	 }							
			
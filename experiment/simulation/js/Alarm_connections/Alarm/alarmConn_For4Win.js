

ConnForAlarmAnnunciatro_For4Win = function(numOfWindows, alarmtype, ISASeq,jsonarray){
/* var reader = new draw2d.io.json.Reader();
 reader.unmarshal(canvas1, json); */
 
 testIpToOrGate = 0, OrGateToJKFF_JInput  = 0;
 ACKToAndGate_ACKInput = 0, ACKToAndGate_RessetInput = 0;
 AndGateOutputToACKInput = 0;
 AndGateToJKFF = 0;
 AndGateToMuxAndInput = 0
 AndGateToJkffMuxInput = 0; 
 JKFF_OutputQToALARM_Input = 0;
 JKFF_OutputQToMV_Input = 0;
 MV_OutputToMVTOMUX_Input = 0;
 MuxOutputToMuxBulb1 = 0;
 MuxOutputToMuxBulb2 = 0;
 MuxOutputToMuxBulb3 = 0;
 MuxOutputToMuxBulb4 = 0;
// MuxOutputToMuxBulb5 = 0;
// MuxOutputToMuxBulb6 = 0;
 wrongConnection = 0;
 // app  = new example.Application(appId, type);

 
 var temp = JSON.parse(jsonarray);
 
// console.log(temp);
 
 var temp1 = 0;
	 

	 
$.each(temp , function (key, value) {
  if(value.type == "draw2d.Connection"){
	  
	temp1 = 1; 
   
 }
 
});
	 
	 

	 if(temp1 != 0){
		 
		   for(i= 0; i < temp.length; i++){
		 
		if(temp[i].type == "draw2d.Connection"){
		 
		 
		 if((temp[i].source.port == "TEST_Input" &&  temp[i].target.port) == "orGateInputTest" || ( temp[i].source.port == "orGateInputTest"  &&  temp[i].target.port == "TEST_Input" )){
			
			 testIpToOrGate = 1;
			
	 
		}else if(( temp[i].source.port == "orGateOutput" &&  temp[i].target.port == "JKFF_InputJ" ) || ( temp[i].source.port == "JKFF_InputJ" && temp[i].target.port == "orGateOutput")){
			
			OrGateToJKFF_JInput = 1;
			
		}else if(( temp[i].source.port == "ACK_Input" &&  temp[i].target.port == "andGate_ACKInput" ) || ( temp[i].source.port == "andGate_ACKInput" && temp[i].target.port == "ACK_Input")){
			
			ACKToAndGate_ACKInput = 1;
			
		}else if(( temp[i].source.port == "RESET_Input" &&  temp[i].target.port == "andGate_ResetInput" ) || ( temp[i].source.port == "andGate_ResetInput" && temp[i].target.port == "RESET_Input")){
			
			ACKToAndGate_RessetInput = 1;
			
		}else if(( temp[i].source.port == "andGateOutput" &&  temp[i].target.port == "ACK_Input" ) || ( temp[i].source.port == "ACK_Input" && temp[i].target.port == "andGateOutput")){
			
			AndGateOutputToACKInput = 1;
			
		}else if(( temp[i].source.port == "andGateOutput" &&  temp[i].target.port == "JKFF_InputK" ) || ( temp[i].source.port == "JKFF_InputK" && temp[i].target.port == "andGateOutput")){
			
			AndGateToJKFF = 1;
			
		}else if(( temp[i].source.port == "andGateOutput" &&  temp[i].target.port == "ANDTOMUX_Input" ) || ( temp[i].source.port == "ANDTOMUX_Input" && temp[i].target.port == "andGateOutput")){
			
			AndGateToMuxAndInput = 1;
			
		}else if(( temp[i].source.port == "andGateOutput" &&  temp[i].target.port == "ANDTOMUX_Input" ) || ( temp[i].source.port == "ANDTOMUX_Input" && temp[i].target.port == "andGateOutput")){
			
			AndGateToMuxAndInput = 1;
			
		}else if(( temp[i].source.port == "andGateOutput" &&  temp[i].target.port == "JKFFTOMUX_Input" ) || ( temp[i].source.port == "JKFFTOMUX_Input" && temp[i].target.port == "andGateOutput")){
			
			AndGateToJkffMuxInput = 1;
			
		}else if(( temp[i].source.port == "JKFF_OutputQ" &&  temp[i].target.port == "ALARM_Input" ) || ( temp[i].source.port == "ALARM_Input" && temp[i].target.port == "JKFF_OutputQ")){
			
			JKFF_OutputQToALARM_Input = 1;
			
		}else if(( temp[i].source.port == "JKFF_OutputQ" &&  temp[i].target.port == "MV_Input" ) || ( temp[i].source.port == "MV_Input" && temp[i].target.port == "JKFF_OutputQ")){
			
			JKFF_OutputQToMV_Input = 1;
			
		}else if(( temp[i].source.port == "MV_Output" &&  temp[i].target.port == "MVTOMUX_Input" ) || ( temp[i].source.port == "MVTOMUX_Input" && temp[i].target.port == "MV_Output")){
			
			MV_OutputToMVTOMUX_Input = 1;
			
		}else if(( temp[i].source.port == "MuxOutput" &&  temp[i].target.port == "MuxBulb1" ) || ( temp[i].source.port == "MuxBulb1" && temp[i].target.port == "MuxOutput")){
			
			MuxOutputToMuxBulb1 = 1;
			
		}else if(( temp[i].source.port == "MuxOutput" &&  temp[i].target.port == "MuxBulb2" ) || ( temp[i].source.port == "MuxBulb2" && temp[i].target.port == "MuxOutput")){
			
			MuxOutputToMuxBulb2 = 1;
			
		}else if(( temp[i].source.port == "MuxOutput" &&  temp[i].target.port == "MuxBulb3" ) || ( temp[i].source.port == "MuxBulb3" && temp[i].target.port == "MuxOutput")){
			
			MuxOutputToMuxBulb3 = 1;
			
		}else if(( temp[i].source.port == "MuxOutput" &&  temp[i].target.port == "MuxBulb4" ) || ( temp[i].source.port == "MuxBulb4" && temp[i].target.port == "MuxOutput")){
			
			MuxOutputToMuxBulb4 = 1;
			
		}
//		else if(( temp[i].source.port == "MuxOutput" &&  temp[i].target.port == "MuxBulb5" ) || ( temp[i].source.port == "MuxBulb5" && temp[i].target.port == "MuxOutput")){
//			
//			MuxOutputToMuxBulb5 = 1;
//			
//		}
//		else if(( temp[i].source.port == "MuxOutput" &&  temp[i].target.port == "MuxBulb6" ) || ( temp[i].source.port == "MuxBulb6" && temp[i].target.port == "MuxOutput")){
//			
//			MuxOutputToMuxBulb6 = 1;
//			
//		}
		else{
			
			wrongConnection = 1;
			CheckWrongConnection();
			break;
			
		}
		 
		 
	 }
		
 }

		CheckRightConnection();
		 
	 }else{
		 
		 alertify.alert("Do Some Connection");
		 
	 }
	
 

 
}

CheckRightConnection = function(){
	

		if (testIpToOrGate == 1 && OrGateToJKFF_JInput == 1
			&& ACKToAndGate_ACKInput == 1 && ACKToAndGate_RessetInput == 1
			&& AndGateOutputToACKInput == 1
			&& AndGateToJKFF == 1
			&& AndGateToMuxAndInput == 1
			&& AndGateToJkffMuxInput == 1
			&& JKFF_OutputQToALARM_Input == 1
			&& JKFF_OutputQToMV_Input == 1
			&& MV_OutputToMVTOMUX_Input == 1
			&& MuxOutputToMuxBulb1 == 1
			&& MuxOutputToMuxBulb2 == 1
			&& MuxOutputToMuxBulb3 == 1
			&& MuxOutputToMuxBulb4 == 1
//			&& MuxOutputToMuxBulb5 == 1
//			&& MuxOutputToMuxBulb6 == 1
			&& wrongConnection == 0) {
		
		alertify.alert("Correct Connection. Please click next level");
		app.toolbar.characterisation_Button.show();
//		app.toolbar.characterisation_Button.hide();
	    rightConn = 1;
		
	}else{
		
		if(wrongConnection == 0){

		
					if(ConnFlagCnt == 3){
							app.toolbar.hintButton.show();							
							alertify.alert("Wrong Connection");	
							rightConn = 0;		
						}else{
							
							alertify.alert("Wrong Connection");
							ConnFlagCnt++
							rightConn = 0;
						}
		
			
			
		}
		
		
	}
	
}

CheckWrongConnection = function(){
	
	
	                    if(ConnFlagCnt == 3){
							 app.toolbar.hintButton.show();
							 
							 alertify.alert("Wrong Connection");
							 rightConn = 0;
							 
													
						}else{
			
							if(wrongConnection == 1){
		
							alertify.alert("Wrong Connection");
							ConnFlagCnt++;
							rightConn = 0;
		
							}
						}
	
	
	
	
	
	
	
}
	
	
	
	

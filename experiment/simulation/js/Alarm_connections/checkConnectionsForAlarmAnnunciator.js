

checkConnectionsForAlarmAnnunciator = function(numOfWindows, alarmtype, ISASeq,jsonarray, appId){

 var temp = JSON.parse(jsonarray);

 var connData = {};
 
		 if(temp.length != 0){
			 //  Connection Check
			if(numOfWindows == 6){
				 
			 ConnForAlarmAnnunciatro_For6Win(numOfWindows, alarmtype, ISASeq,jsonarray);
			 
			}
			if(numOfWindows == 5){
				 
				ConnForAlarmAnnunciatro_For5Win(numOfWindows, alarmtype, ISASeq,jsonarray);
				 
			}
			if(numOfWindows == 4){
				 
				ConnForAlarmAnnunciatro_For4Win(numOfWindows, alarmtype, ISASeq,jsonarray);
				 
			}
			if(numOfWindows == 3){
				 
				ConnForAlarmAnnunciatro_For3Win(numOfWindows, alarmtype, ISASeq,jsonarray);
				 
			}
			if(numOfWindows == 2){
				 
				ConnForAlarmAnnunciatro_For2Win(numOfWindows, alarmtype, ISASeq,jsonarray);
				 
			}
			connData.appId = appId;			
			connData.connDiagjson = jsonarray;
			connData.chkConnCnt = ConnFlagCnt;
			connData.chkRightConn = rightConn;
//		    console.log(connData);
			ExpTrackData.connData = connData
//			console.log(ExpTrackData);
			 
		 }else{
			 
			 alertify.alert("Please select right componants to do the connections");
			 
		 }
		 
		 
		 
		 
		 
		 
		
	
	
	
	
}	
	

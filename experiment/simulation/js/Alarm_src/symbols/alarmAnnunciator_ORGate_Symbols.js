	
// OR Gate Symbol
	
	function orGateSymbol(canvas,x1,y1,numOfWindows, alarmtype, ISASeq){
	
//		console.log(numOfWindows, alarmtype, ISASeq);
		
		var orGate = new LabeldorGateSymbolFigure({width:180,height:100}, numOfWindows);
		orGate.setId("ORGate");
		orGate.setResizeable(false);
		//test
		var Port_orGateinputTest = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,88));
		Port_orGateinputTest.setRadius(4);
		Port_orGateinputTest.setName("orGateInputTest");
		Port_orGateinputTest.setId("orGateInputTestId");
		
		//test
		var Port_orGateOutput = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,46));
		Port_orGateOutput.setRadius(4);
		Port_orGateOutput.setName("orGateOutput");
		Port_orGateOutput.setId("orGateOutputId");
		
		 if(numOfWindows == 2){
			 
			//1
			var Port_orGateInput1 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,5));
			Port_orGateInput1.setRadius(4);
			Port_orGateInput1.setName("orGateInput_alarm1");
			Port_orGateInput1.setId("orGateInput_alarm1Id");
			//6
			var Port_orGateInput2 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,73));
			Port_orGateInput2.setRadius(4);
			Port_orGateInput2.setName("orGateInput_alarm2");
			Port_orGateInput2.setId("orGateInput_alarm2Id");
			 
		 }
		 if(numOfWindows == 3){
			 
			//1
			var Port_orGateInput1 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,5));
			Port_orGateInput1.setRadius(4);
			Port_orGateInput1.setName("orGateInput_alarm1");
			Port_orGateInput1.setId("orGateInput_alarm1Id");
			//6
			var Port_orGateInput2 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,73));
			Port_orGateInput2.setRadius(4);
			Port_orGateInput2.setName("orGateInput_alarm2");
			Port_orGateInput2.setId("orGateInput_alarm2Id");
			//4
			var Port_orGateInput3 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,45));
			Port_orGateInput3.setRadius(4);
			Port_orGateInput3.setName("orGateInput_alarm3");
			Port_orGateInput3.setId("orGateInput_alarm3Id");
				
		 }
		
		 if(numOfWindows == 4){
			 
				//1
				var Port_orGateInput1 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,5));
				Port_orGateInput1.setRadius(4);
				Port_orGateInput1.setName("orGateInput_alarm1");
				Port_orGateInput1.setId("orGateInput_alarm1Id");
				//6
				var Port_orGateInput2 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,73));
				Port_orGateInput2.setRadius(4);
				Port_orGateInput2.setName("orGateInput_alarm2");
				Port_orGateInput2.setId("orGateInput_alarm2Id");
				//4
				var Port_orGateInput3 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,45));
				Port_orGateInput3.setRadius(4);
				Port_orGateInput3.setName("orGateInput_alarm3");
				Port_orGateInput3.setId("orGateInput_alarm3Id");
				//3
				var Port_orGateInput4 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,32));
				Port_orGateInput4.setRadius(4);
				Port_orGateInput4.setName("orGateInput_alarm4");
				Port_orGateInput4.setId("orGateInput_alarm4Id");
					
			 }
		 
		 if(numOfWindows == 5){
			 
				//1
				var Port_orGateInput1 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,5));
				Port_orGateInput1.setRadius(4);
				Port_orGateInput1.setName("orGateInput_alarm1");
				Port_orGateInput1.setId("orGateInput_alarm1Id");
				//6
				var Port_orGateInput2 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,73));
				Port_orGateInput2.setRadius(4);
				Port_orGateInput2.setName("orGateInput_alarm2");
				Port_orGateInput2.setId("orGateInput_alarm2Id");
				//4
				var Port_orGateInput3 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,45));
				Port_orGateInput3.setRadius(4);
				Port_orGateInput3.setName("orGateInput_alarm3");
				Port_orGateInput3.setId("orGateInput_alarm3Id");
				//3
				var Port_orGateInput4 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,32));
				Port_orGateInput4.setRadius(4);
				Port_orGateInput4.setName("orGateInput_alarm4");
				Port_orGateInput4.setId("orGateInput_alarm4Id");
				
				//2
				var Port_orGateInput5 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,18));
				Port_orGateInput5.setRadius(4);
				Port_orGateInput5.setName("orGateInput_alarm5");
				Port_orGateInput5.setId("orGateInput_alarm5Id");
				
			 }
		 
		 
		 if(numOfWindows == 6){
			 
				//1
				var Port_orGateInput1 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,5));
				Port_orGateInput1.setRadius(4);
				Port_orGateInput1.setName("orGateInput_alarm1");
				Port_orGateInput1.setId("orGateInput_alarm1Id");
				//6
				var Port_orGateInput2 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,73));
				Port_orGateInput2.setRadius(4);
				Port_orGateInput2.setName("orGateInput_alarm2");
				Port_orGateInput2.setId("orGateInput_alarm2Id");
				//4
				var Port_orGateInput3 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,45));
				Port_orGateInput3.setRadius(4);
				Port_orGateInput3.setName("orGateInput_alarm3");
				Port_orGateInput3.setId("orGateInput_alarm3Id");
				//3
				var Port_orGateInput4 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,32));
				Port_orGateInput4.setRadius(4);
				Port_orGateInput4.setName("orGateInput_alarm4");
				Port_orGateInput4.setId("orGateInput_alarm4Id");
				
				//2
				var Port_orGateInput5 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,18));
				Port_orGateInput5.setRadius(4);
				Port_orGateInput5.setName("orGateInput_alarm5");
				Port_orGateInput5.setId("orGateInput_alarm5Id");
				
				//5
				var Port_orGateInput6 = orGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,58));
				Port_orGateInput6.setRadius(4);
				Port_orGateInput6.setName("orGateInput_alarm6");
				Port_orGateInput6.setId("orGateInput_alarm6Id");
				
			 }
		 

		
		canvas.add( orGate, x1,y1); 
		return orGate;

}


var LabeldorGateSymbolFigure = draw2d.SetFigure.extend({

	init : function(attr, numOfWindows, alarmtype)
    {
//		console.log(numOfWindows);
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

  createSet : function()
    {
	  
	    x = 0;
	    y = 0;
	    
        this.canvas.paper.setStart();
    
      
     /*  this.canvas.paper.text(0, 6, 'header').attr({"text-anchor":"start"}); */
      /* this.canvas.paper.image('https://png.icons8.com/metro/1600/online.png',x,16,40, 40); */
      
      
     // var x =  ((this.width-20)/2);
      
      /* this.canvas.paper.path("M 15 0 l -15 30 l 30 0 l -15 -30").
       attr({"stroke-width" : 1
        }); */
		
       this.canvas.paper.rect(0, 0, 180, 100).
       attr({"stroke-width" : 0
        }); 
		
	   
       
	   this.canvas.paper.path("M 60 0 l 0 0 q 25 40 0 95 ").
       attr({"stroke-width" : 2
        }); 
	   
	   this.canvas.paper.path("M 60 0 l 0 0 q 50 0 95 48 ").
	   attr({"stroke-width" : 2
	   }); 
	   
	   this.canvas.paper.path("M 60 95 l 0 0 q 50 0 95 -48 ").
	   attr({"stroke-width" : 2
	   }); 
	   if(numOfWindows == 2){
		   if(alarmtype == 1){
			   //line 1 =  1st i/p
			   this.canvas.paper.path("M 62 5  l -58 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 6 = 2nd i/p
			   this.canvas.paper.path("M 67 75 l -71 0 ").
			   attr({"stroke-width" : 2
			   }); 
		   }
		   if(alarmtype == 2){
			 //line 1 =  1st i/p
			   this.canvas.paper.path("M 62 5  l -58 0 ").
			   attr({"stroke-width" : 2
			   });
			   notGate(this, x, y);
		       
		       //line 6 = 2nd i/p
			   this.canvas.paper.path("M 67 75 l -71 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   notGate(this, (x-15), (y+70));
		   }
		   
	   }
	   if(numOfWindows == 3){
		   
		   if(alarmtype == 1){
			   //line 1 =  1st i/p
			   this.canvas.paper.path("M 62 5  l -58 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 6 = 2nd i/p
			   this.canvas.paper.path("M 67 75 l -71 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 4 = 3rd i/p
			   this.canvas.paper.path("M 73 45 l -70 0 ").
			   attr({"stroke-width" : 2
			   }); 
		   }
		   if(alarmtype == 2){
			   //line 1 =  1st i/p
			   this.canvas.paper.path("M 62 5  l -58 0 ").
			   attr({"stroke-width" : 2
			   });
			   notGate(this, x, y);
		       
		       //line 6 = 2nd i/p
			   this.canvas.paper.path("M 67 75 l -71 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   notGate(this, (x-15), (y+70));
			   //line 4 = 3rd i/p
			   this.canvas.paper.path("M 73 45 l -70 0 ").
			   attr({"stroke-width" : 2
			   }).toBack(); 			  
			   notGate(this, (x-15), (y+39));
			   
		   }
		
		   
	   }
	   
	   if(numOfWindows == 4){
		   
		   if(alarmtype == 1){
			   //line 1 =  1st i/p
			   this.canvas.paper.path("M 62 5  l -58 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 6 = 2nd i/p
			   this.canvas.paper.path("M 67 75 l -71 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 4 = 3rd i/p
			   this.canvas.paper.path("M 73 45 l -70 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 3 = 4th i/p
			   this.canvas.paper.path("M 72 32 l -70 0 ").
			   attr({"stroke-width" : 2
			   }); 			   
		   }
		   if(alarmtype == 2){
			   //line 1 =  1st i/p
			   this.canvas.paper.path("M 62 5  l -58 0 ").
			   attr({"stroke-width" : 2
			   });
			   notGate(this, x, y);
		       
		       //line 6 = 2nd i/p
			   this.canvas.paper.path("M 67 75 l -71 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   notGate(this, (x-15), (y+70));
			   //line 4 = 3rd i/p
			   this.canvas.paper.path("M 73 45 l -70 0 ").
			   attr({"stroke-width" : 2
			   }).toBack(); 
			   notGate(this, (x-15), (y+39));
			   
			   //line 3 = 4th i/p
			   this.canvas.paper.path("M 72 32 l -70 0 ").
			   attr({"stroke-width" : 2
			   }); 
			 
			   notGate(this, (x+5), (y+27));
			   
		   }
		   
	   }
	   
	   
	   if(numOfWindows == 5){
		   if(alarmtype == 1){
			 //line 1 =  1st i/p
			   this.canvas.paper.path("M 62 5  l -58 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 6 = 2nd i/p
			   this.canvas.paper.path("M 67 75 l -71 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 4 = 3rd i/p
			   this.canvas.paper.path("M 73 45 l -70 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 3 = 4th i/p
			   this.canvas.paper.path("M 72 32 l -70 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 2 = 5th i/p
			   this.canvas.paper.path("M 67 18  l -63 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   
		   }
		   if(alarmtype == 2){
			   //line 1 =  1st i/p
			   this.canvas.paper.path("M 62 5  l -58 0 ").
			   attr({"stroke-width" : 2
			   });
			   notGate(this, x, y);
		       
		       //line 6 = 2nd i/p
			   this.canvas.paper.path("M 67 75 l -71 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   notGate(this, (x-15), (y+70));
			   //line 4 = 3rd i/p
			   this.canvas.paper.path("M 73 45 l -70 0 ").
			   attr({"stroke-width" : 2
			   }).toBack(); 
			   notGate(this, (x-15), (y+39));
			   
			   //line 3 = 4th i/p
			   this.canvas.paper.path("M 72 32 l -70 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   notGate(this, (x+5), (y+27));
			   
			   //line 2 = 5th i/p
			   this.canvas.paper.path("M 67 18  l -63 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   notGate(this, (x-17), (y+12));
			   
			   
			   
		   }

		 
		   
		   
	   }
	 
	   if(numOfWindows == 6){
		   if(alarmtype == 1){
			   
			 //line 1 =  1st i/p
			   this.canvas.paper.path("M 62 5  l -58 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 6 = 2nd i/p
			   this.canvas.paper.path("M 67 75 l -71 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 4 = 3rd i/p
			   this.canvas.paper.path("M 73 45 l -70 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 3 = 4th i/p
			   this.canvas.paper.path("M 72 32 l -70 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
			   //line 2 = 5th i/p
			   this.canvas.paper.path("M 67 18  l -63 0 ").
			   attr({"stroke-width" : 2
			   }); 
			
			   
			 //line 5 = 6th i/p
			   this.canvas.paper.path("M 71 60 l -75 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   
		   }
		   if(alarmtype == 2){
			   
			   //line 1 =  1st i/p
			   this.canvas.paper.path("M 62 5  l -58 0 ").
			   attr({"stroke-width" : 2
			   });
			   notGate(this, x, y);
		       
		       //line 6 = 2nd i/p
			   this.canvas.paper.path("M 67 75 l -71 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   notGate(this, (x-15), (y+70));
			   //line 4 = 3rd i/p
			   this.canvas.paper.path("M 73 45 l -70 0 ").
			   attr({"stroke-width" : 2
			   }).toBack(); 
			   notGate(this, (x-15), (y+39));
			   
			   //line 3 = 4th i/p
			   this.canvas.paper.path("M 72 32 l -70 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   notGate(this, (x+5), (y+27));
			  
			   
			   //line 2 = 5th i/p
			   this.canvas.paper.path("M 67 18  l -63 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   notGate(this, (x-17), (y+12));
			   
			   //line 5 = 6th i/p
			   this.canvas.paper.path("M 71 60 l -75 0 ").
			   attr({"stroke-width" : 2
			   }); 
			   notGate(this, (x+5), (y+55));
			   
		   }
		   
		  
	   }
	   
	   
	   
	   this.canvas.paper.path("M 62 90 l -58 0 ").
	   attr({"stroke-width" : 2
	   });   
	   
	   this.canvas.paper.text( 20, 97, "Test").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
	   
	   
	   this.canvas.paper.path("M 152 47 l 30 0 ").
	   attr({"stroke-width" : 2
	   }); 

	
      return this.canvas.paper.setFinish();
    },


});


function notGate(obj, x, y){
	
	 obj.canvas.paper.path("M "+(x+40)+" "+(y-3)+"l 8 8 -8 8 0 -16 ").
     attr({"stroke-width" : 2,
  	   "fill":'white'
      }).toFront();
     obj.canvas.paper.circle((x+51),(y+5), 3).
     attr({"stroke-width" : 2,
  	   "fill":'white'
     }).toFront();
	
	
}

	
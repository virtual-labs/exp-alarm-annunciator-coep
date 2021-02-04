	
// bulb Window Symbol
	
	function bulbWindowSymbol(canvas,x1,y1,numOfWindows, alarmtype, ISASeq){
	
//		console.log(numOfWindows, alarmtype, ISASeq);
		
		if(numOfWindows == 2){			
			w = 190;
			h = 160;			
		}
		if(numOfWindows == 3){			
			w = 190;
			h = 230;			
		}
		if(numOfWindows == 4){			
			w = 190;
			h = 310;			
		}
		if(numOfWindows == 5){			
			w = 190;
			h = 380;			
		}
		if(numOfWindows == 6){			
			w = 190;
			h = 460;			
		}
		var bulbSymbol = new LabeldbulbWindowSymbolFigure({width:w,height:h});
		bulbSymbol.setId("BulbSymbol");
		bulbSymbol.setResizeable(false);

		
		if(numOfWindows == 2){	
			
			var Port_MuxBulb1 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,9));
			Port_MuxBulb1.setName("MuxBulb1");
			Port_MuxBulb1.setId("MuxBulb1Id");	
			
			var Port_MuxBulb2 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,53));
			Port_MuxBulb2.setName("MuxBulb2");
			Port_MuxBulb2.setId("MuxBulb2Id");	
						
		}
		if(numOfWindows == 3){		
			
			var Port_MuxBulb1 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,6));
			Port_MuxBulb1.setName("MuxBulb1");
			Port_MuxBulb1.setId("MuxBulb1Id");	
			
			var Port_MuxBulb2 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,37));
			Port_MuxBulb2.setName("MuxBulb2");
			Port_MuxBulb2.setId("MuxBulb2Id");	
			
			var Port_MuxBulb3 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,68));
			Port_MuxBulb3.setName("MuxBulb3");
			Port_MuxBulb3.setId("MuxBulb3Id");
		}
		if(numOfWindows == 4){			
					
			var Port_MuxBulb1 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,5));
			Port_MuxBulb1.setName("MuxBulb1");
			Port_MuxBulb1.setId("MuxBulb1Id");	
			
			var Port_MuxBulb2 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,28));
			Port_MuxBulb2.setName("MuxBulb2");
			Port_MuxBulb2.setId("MuxBulb2Id");	
			
			var Port_MuxBulb3 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,52));
			Port_MuxBulb3.setName("MuxBulb3");
			Port_MuxBulb3.setId("MuxBulb3Id");	
			
			var Port_MuxBulb4 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,75));
			Port_MuxBulb4.setName("MuxBulb4");
			Port_MuxBulb4.setId("MuxBulb4Id");	
		}
		if(numOfWindows == 5){
			
			var Port_MuxBulb1 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,4));
			Port_MuxBulb1.setName("MuxBulb1");
			Port_MuxBulb1.setId("MuxBulb1Id");	
			
			var Port_MuxBulb2 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,23));
			Port_MuxBulb2.setName("MuxBulb2");
			Port_MuxBulb2.setId("MuxBulb2Id");	
			
			var Port_MuxBulb3 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,42.5));
			Port_MuxBulb3.setName("MuxBulb3");
			Port_MuxBulb3.setId("MuxBulb3Id");	
			
			var Port_MuxBulb4 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,62));
			Port_MuxBulb4.setName("MuxBulb4");
			Port_MuxBulb4.setId("MuxBulb4Id");	
			
			var Port_MuxBulb5 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,81));
			Port_MuxBulb5.setName("MuxBulb5");
			Port_MuxBulb5.setId("MuxBulb5Id");		
		}
		if(numOfWindows == 6){		
			
			var Port_MuxBulb1 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,3));
			Port_MuxBulb1.setName("MuxBulb1");
			Port_MuxBulb1.setId("MuxBulb1Id");	
			
			var Port_MuxBulb2 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,19.5));
			Port_MuxBulb2.setName("MuxBulb2");
			Port_MuxBulb2.setId("MuxBulb2Id");	
			
			var Port_MuxBulb3 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,35));
			Port_MuxBulb3.setName("MuxBulb3");
			Port_MuxBulb3.setId("MuxBulb3Id");	
			
			var Port_MuxBulb4 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,51));
			Port_MuxBulb4.setName("MuxBulb4");
			Port_MuxBulb4.setId("MuxBulb4Id");	
			
			var Port_MuxBulb5 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,67));
			Port_MuxBulb5.setName("MuxBulb5");
			Port_MuxBulb5.setId("MuxBulb5Id");	
			
			var Port_MuxBulb6 = bulbSymbol.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,82.5));
			Port_MuxBulb6.setName("MuxBulb6");
			Port_MuxBulb6.setId("MuxBulb6Id");	
			
		}
		
		
		canvas.add( bulbSymbol, x1,y1); 
		return bulbSymbol;

}


var LabeldbulbWindowSymbolFigure = draw2d.SetFigure.extend({

	init : function(attr, numOfWindows, w, h)
    {
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
    
        
        if(numOfWindows == 2){
			
			 this.canvas.paper.rect(x, y, (x+w), (y+h)).
		     attr({"stroke-width" : 0
		      }); 
		     
		     AndSymbol(this, x, (y-10), "Bulb 1", "Alarm 1");
		     AndSymbol(this, x, (y+65), "Bulb 2", "Alarm 2");
		}
        
        if(numOfWindows == 3){
			
			 this.canvas.paper.rect(x, y, (x+w), (y+h)).
		     attr({"stroke-width" : 0
		      }); 
		     
		     AndSymbol(this, x, (y-10), "Bulb 1", "Alarm 1");
		     AndSymbol(this, x, (y+65), "Bulb 2", "Alarm 2");
		     AndSymbol(this, x, (y+140), "Bulb 3","Alarm 3");
		}
        if(numOfWindows == 4){
			
			 this.canvas.paper.rect(x, y, (x+w), (y+h)).
		     attr({"stroke-width" : 0
		      }); 
		     
		     AndSymbol(this, x, (y-10), "Bulb 1", "Alarm 1");
		     AndSymbol(this, x, (y+65), "Bulb 2", "Alarm 2");
		     AndSymbol(this, x, (y+140), "Bulb 3","Alarm 3");
		     AndSymbol(this, x, (y+215), "Bulb 4","Alarm 4");
		}
       
        if(numOfWindows == 5){
			
			 this.canvas.paper.rect(x, y, (x+w), (y+h)).
		     attr({"stroke-width" : 0
		      }); 
		     
		     AndSymbol(this, x, (y-10), "Bulb 1", "Alarm 1");
		     AndSymbol(this, x, (y+65), "Bulb 2","Alarm 2");
		     AndSymbol(this, x, (y+140), "Bulb 3","Alarm 3");
		     AndSymbol(this, x, (y+215), "Bulb 4","Alarm 4");
		     AndSymbol(this, x, (y+290), "Bulb 5","Alarm 5");
		}
        if(numOfWindows == 6){
			
			 this.canvas.paper.rect(x, y, (x+w), (y+h)).
		     attr({"stroke-width" : 0
		      }); 
		     
		     AndSymbol(this, x, (y-10), "Bulb 1","Alarm 1");
		     AndSymbol(this, x, (y+65), "Bulb 2","Alarm 2");
		     AndSymbol(this, x, (y+140), "Bulb 3","Alarm 3");
		     AndSymbol(this, x, (y+215), "Bulb 4","Alarm 4");
		     AndSymbol(this, x, (y+290), "Bulb 5","Alarm 5");
		     AndSymbol(this, x, (y+365), "Bulb 6","Alarm 6");
		}

	
      return this.canvas.paper.setFinish();
    },


});



function  AndSymbol(obj, x, y, bulbNum, alarmnum){
	
	
	
	 obj.canvas.paper.path("M "+(x+40)+" "+(y+15)+" l 0 70 ").
    attr({"stroke-width" : 2
     });
	
	 obj.canvas.paper.path("M "+(x+40)+" "+(y+15)+" l 60 0 ").
     attr({"stroke-width" : 2
      }); 
	
	 obj.canvas.paper.path("M "+(x+100)+" "+(y+15)+" l 0 0 q 58 35 0 70 ").
    attr({"stroke-width" : 2
     }); 
	
	 obj.canvas.paper.path("M "+(x+40)+" "+(y+85)+" l 60 0 ").
	 attr({"stroke-width" : 2
	  }); 
	  
	 obj.canvas.paper.path("M "+(x+40)+" "+(y+25)+" l -40 0 ").
	 attr({"stroke-width" : 2
	  }); 
		
	 obj.canvas.paper.path("M "+(x+40)+" "+(y+42)+" l -40 0 ").
	 attr({"stroke-width" : 2
	  });   
	   
     obj.canvas.paper.path("M "+(x+40)+" "+(y+58)+" l -40 0 ").
     attr({"stroke-width" : 2
      }); 
     
     obj.canvas.paper.path("M "+(x+40)+" "+(y+75)+" l -40 0 ").
     attr({"stroke-width" : 2
      }); 
	   
	 obj.canvas.paper.path("M "+(x+130)+" "+(y+50)+" l 60 0 0 -10").
     attr({"stroke-width" : 2
      }); 
	 
	 obj.canvas.paper.text( (x+20), (y+18), "Mux").attr({
			stroke : 'black',
			'font-size' : 10,
			"font-family": "sans-serif" 
		});
	 obj.canvas.paper.text( (x+20), (y+35), alarmnum).attr({
			stroke : 'black',
			'font-size' : 9,
			"font-family": "sans-serif" 
		});
	 obj.canvas.paper.text( (x+20), (y+51), "Reset").attr({
			stroke : 'black',
			'font-size' : 9,
			"font-family": "sans-serif" 
		});
	 obj.canvas.paper.text( (x+20), (y+68), "Test").attr({
			stroke : 'black',
			'font-size' : 9,
			"font-family": "sans-serif" 
		});
	 
	 
	 obj.canvas.paper.text( (x+141), (y+25), bulbNum).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	
	 obj.canvas.paper.image("images/Bulb1.jpeg",(x+170), (y), 40, 40);
	
}
	
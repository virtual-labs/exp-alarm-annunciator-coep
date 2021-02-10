	
// AND Gate Symbol
	
	function andGateSymbol(canvas,x1,y1,numOfWindows, alarmtype, ISASeq){
	
//		console.log(numOfWindows, alarmtype, ISASeq);
		
		var andGate = new LabeldandGateSymbolFigure({width:150,height:100});
		andGate.setId("ANDGate");
		andGate.setResizeable(false);
		
		var Port_andGate_ACKInput = andGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,35));
		Port_andGate_ACKInput.setName("andGate_ACKInput");
		Port_andGate_ACKInput.setId("andGate_ACKInputId");
		
		var Port_andGate_ResetInput = andGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,65));
		Port_andGate_ResetInput.setName("andGate_ResetInput");
		Port_andGate_ResetInput.setId("andGate_ResetInputId");
		
		var Port_andGateOutput = andGate.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,50));
		Port_andGateOutput.setName("andGateOutput");
		Port_andGateOutput.setId("andGateOutputId");
		

		
		
		canvas.add( andGate, x1,y1); 
		return andGate;

}


var LabeldandGateSymbolFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },

  createSet : function()
    {
        this.canvas.paper.setStart();
    
      
     /*  this.canvas.paper.text(0, 6, 'header').attr({"text-anchor":"start"}); */
      /* this.canvas.paper.image('https://png.icons8.com/metro/1600/online.png',x,16,40, 40); */
      
      
     // var x =  ((this.width-20)/2);
      
      /* this.canvas.paper.path("M 15 0 l -15 30 l 30 0 l -15 -30").
       attr({"stroke-width" : 1
        }); */
		
       this.canvas.paper.rect(0, 0, 150, 100).
       attr({"stroke-width" : 0
        }); 
		
	   
       
	   this.canvas.paper.path("M 40 15 l 0 70 ").
       attr({"stroke-width" : 2
        }); 
	   
	   this.canvas.paper.path("M 40 15 l 60 0 ").
       attr({"stroke-width" : 2
        }); 
	   
	   this.canvas.paper.path("M 100 15 l 0 0 q 58 35 0 70 ").
       attr({"stroke-width" : 2
        }); 
	   
	   this.canvas.paper.path("M 40 85 l 60 0 ").
       attr({"stroke-width" : 2
        }); 
	  
	   this.canvas.paper.path("M 40 35 l -40 0 ").
       attr({"stroke-width" : 2
        }); 
		
	   this.canvas.paper.path("M 40 65 l -40 0 ").
       attr({"stroke-width" : 2
        });   
	   
	   this.canvas.paper.path("M 130 50 l 20 0 ").
       attr({"stroke-width" : 2
        }); 
	   this.canvas.paper.text( 20, 25, "A").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	   
	   this.canvas.paper.text( 20, 75, "R").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	   this.canvas.paper.text( 140, 40, "C").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	
      return this.canvas.paper.setFinish();
    },


});

function KJFFSymbol(canvas,x1,y1,numOfWindows, alarmtype, ISASeq){
	
//	console.log(numOfWindows, alarmtype, ISASeq);
	
	var JKFF = new LabelJKFFSymbolFigure({width:70,height:100});
	JKFF.setId("JKFF");
	JKFF.setResizeable(false);
	
	var Port_JKFFInputJ = JKFF.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(1,25));
	Port_JKFFInputJ.setName("JKFF_InputJ");
	Port_JKFFInputJ.setId("JKFF_InputJID");
	
	var Port_JKFFInputK = JKFF.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(1,75));
	Port_JKFFInputK.setName("JKFF_InputK");
	Port_JKFFInputK.setId("JKFF_InputKID");
	
	var Port_JKFFOutputQ = JKFF.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(98,40));
	Port_JKFFOutputQ.setName("JKFF_OutputQ");
	Port_JKFFOutputQ.setId("JKFF_OutputQ");

	
	canvas.add( JKFF, x1,y1); 
	return JKFF;

}

var LabelJKFFSymbolFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },
    createSet : function()
    {
        this.canvas.paper.setStart();
  
       this.canvas.paper.rect(0, 0, 70, 100).
       attr({"stroke-width" : 0
        }); 
		
	   
       
       this.canvas.paper.rect(1, 10, 100, 80).
       attr({"stroke-width" : 1
        }); 
	   
       this.canvas.paper.text( 20, 25, "j").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	   
	   this.canvas.paper.text( 20, 75, "k").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	   this.canvas.paper.text( 80, 40, "Q").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	
	   this.canvas.paper.text( 50, 50, "J K F F").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	
      return this.canvas.paper.setFinish();
    },


});

function MultiVibratorSymbol(canvas,x1,y1,numOfWindows, alarmtype, ISASeq){
	
//	console.log(numOfWindows, alarmtype, ISASeq);
	
	var MultiVibrator = new LabelMultiVibratorSymbolFigure({width:80,height:100});
	MultiVibrator.setId("MultiVibrator");
	MultiVibrator.setResizeable(false);
	
	var Port_MVInput = MultiVibrator.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(1,25));
	Port_MVInput.setName("MV_Input");
	Port_MVInput.setId("MV_InputID");
	
	
	var Port_MVOutput = MultiVibrator.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(102,70));
	Port_MVOutput.setName("MV_Output");
	Port_MVOutput.setId("MV_Output");

	
	canvas.add( MultiVibrator, x1,y1); 
	return MultiVibrator;

}

var LabelMultiVibratorSymbolFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },
    createSet : function()
    {
        this.canvas.paper.setStart();
  
       this.canvas.paper.rect(0, 0, 80, 100).
       attr({"stroke-width" : 0
        }); 
		
	   
       
       this.canvas.paper.rect(2, 10, 120, 80).
       attr({"stroke-width" : 1
        }); 
	   
       this.canvas.paper.text( 20, 25, "j").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	   
	 
	   this.canvas.paper.text( 100, 70, "Q").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	
	   this.canvas.paper.text( 65, 40, "Multi").attr({
			stroke : 'black',
			'font-size' : 15,
			"font-family": "sans-serif" 
		});
	   this.canvas.paper.text( 65, 55, "Vibrator").attr({
			stroke : 'black', 
			'font-size' : 15,
			"font-family": "sans-serif" 
		});
      return this.canvas.paper.setFinish();
    },


});


function MUXSymbol(canvas,x1,y1,numOfWindows, alarmtype, ISASeq){
	
//	console.log(numOfWindows, alarmtype, ISASeq);
	
	var MUX = new LabelMUXSymbolFigure({width:60,height:100});
	MUX.setId("MUX");
	MUX.setResizeable(false);
	
	var Port_MVTOMUXInput = MUX.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,25));
	Port_MVTOMUXInput.setName("MVTOMUX_Input");
	Port_MVTOMUXInput.setId("MVTOMUX_InputID");
	
	var Port_ANDTOMUXInput = MUX.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,80));
	Port_ANDTOMUXInput.setName("ANDTOMUX_Input");
	Port_ANDTOMUXInput.setId("ANDTOMUX_InputID");
	
	var Port_JKFFTOMUXInput = MUX.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(52,100));
	Port_JKFFTOMUXInput.setName("JKFFTOMUX_Input");
	Port_JKFFTOMUXInput.setId("JKFFTOMUX_InputID");
	
	var Port_MVOutput = MUX.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100,65));
	Port_MVOutput.setName("MuxOutput");
	Port_MVOutput.setId("MuxOutputId");

	
	canvas.add( MUX, x1,y1); 
	return MUX;

}

var LabelMUXSymbolFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },
    createSet : function()
    {
        this.canvas.paper.setStart();
  
       this.canvas.paper.rect(0, 0, 60, 100).
       attr({"stroke-width" : 0
        }); 
		
	   
       
       this.canvas.paper.rect(0, 5, 80, 100).
       attr({"stroke-width" : 1
        }); 
	   
       
	
	   this.canvas.paper.text( 40, 50, "MUX").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
      return this.canvas.paper.setFinish();
    },


});

function TESTInputSymbol(canvas,x1,y1,numOfWindows, alarmtype, ISASeq){
	
//	console.log(numOfWindows, alarmtype, ISASeq);
	
	var TESTInput = new LabelTESTInputSymbolFigure({width:70,height:40});
	TESTInput.setId("TESTInput");
	TESTInput.setResizeable(false);
	
//	
	var Port_TESTInput = TESTInput.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(105,50));
	Port_TESTInput.setName("TEST_Input");
	Port_TESTInput.setId("TEST_InputID");

	
	canvas.add( TESTInput, x1,y1); 
	return TESTInput;

}

var LabelTESTInputSymbolFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },
    createSet : function()
    {
        this.canvas.paper.setStart();
  
       this.canvas.paper.rect(0, 0, 70, 40).
       attr({"stroke-width" : 0
        }); 
		
       this.canvas.paper.path("M 0 20 l 30 0 12 -12").
       attr({"stroke-width" : 2
        });
       this.canvas.paper.path("M 50 20 l 20 0 ").
       attr({"stroke-width" : 2
        });
       
       this.canvas.paper.text( 30, 35, "TEST I / P").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
      return this.canvas.paper.setFinish();
    },


});

function ACKInputSymbol(canvas,x1,y1,numOfWindows, alarmtype, ISASeq){
	
//	console.log(numOfWindows, alarmtype, ISASeq);
	
	var ACKInput = new LabelACKInputSymbolFigure({width:60,height:30});
	ACKInput.setId("ACKInput");
	ACKInput.setResizeable(false);
	
//	
	var Port_ACKInput = ACKInput.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(105,92));
	Port_ACKInput.setName("ACK_Input");
	Port_ACKInput.setId("ACK_InputID");

	
	canvas.add( ACKInput, x1,y1); 
	return ACKInput;

}

var LabelACKInputSymbolFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },
    createSet : function()
    {
        this.canvas.paper.setStart();
  
       this.canvas.paper.rect(0, 0, 60, 30).
       attr({"stroke-width" : 0
        }); 
		
       this.canvas.paper.circle(20, 20, 3).
       attr({"stroke-width" : 2
       });
       this.canvas.paper.circle(30, 20, 3).
       attr({"stroke-width" : 2
       });
       this.canvas.paper.path("M 15 28 l 50 0 ").
       attr({"stroke-width" : 2
        });
       this.canvas.paper.path("M 15 13 l 20 0 ").
       attr({"stroke-width" : 2
        });
       this.canvas.paper.path("M 25 0 l 0 15  ").
       attr({"stroke-width" : 2
        });
       this.canvas.paper.text( 55, 10, "ACK").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
      return this.canvas.paper.setFinish();
    },


});

function RESETInputSymbol(canvas,x1,y1,numOfWindows, alarmtype, ISASeq){
	
//	console.log(numOfWindows, alarmtype, ISASeq);
	
	var RESETInput = new LabelRESETInputSymbolFigure({width:70,height:40});
	RESETInput.setId("RESETInput");
	RESETInput.setResizeable(false);
	
//	
	var Port_RESETInput = RESETInput.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(103,31));
	Port_RESETInput.setName("RESET_Input");
	Port_RESETInput.setId("RESET_InputID");

	
	canvas.add( RESETInput, x1,y1); 
	return RESETInput;

}

var LabelRESETInputSymbolFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },
    createSet : function()
    {
        this.canvas.paper.setStart();
  
       this.canvas.paper.rect(0, 0, 70, 40).
       attr({"stroke-width" : 0
        }); 
		
       this.canvas.paper.circle(20, 20, 3).
       attr({"stroke-width" : 2
       });
       this.canvas.paper.circle(30, 20, 3).
       attr({"stroke-width" : 2
       });
       this.canvas.paper.path("M 15 13 l 45 0 ").
       attr({"stroke-width" : 2
        });
       this.canvas.paper.path("M 15 28 l 20 0 ").
       attr({"stroke-width" : 2
        });
       this.canvas.paper.path("M 25 28 l 0 15  ").
       attr({"stroke-width" : 2
        });
       this.canvas.paper.path("M 60 3 l 12 12 -12 12 0 -23 ").
       attr({"stroke-width" : 2
        });
       this.canvas.paper.circle(75, 15, 3).
       attr({"stroke-width" : 2
       });
       this.canvas.paper.path("M 78 15 l 15 0  ").
       attr({"stroke-width" : 2
        });
       this.canvas.paper.text( 55, 40, "RESET").attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
      return this.canvas.paper.setFinish();
    },


});
function AlarmSymbol(canvas,x1,y1,numOfWindows, alarmtype, ISASeq){
	
//	console.log(numOfWindows, alarmtype, ISASeq);
	
	var ALARMInput = new LabelAlarmSymbolFigure({width:40,height:40});
	ALARMInput.setId("ALARMInput");
	ALARMInput.setResizeable(false);
	
//	TESTInput
	var Port_ALARM = ALARMInput.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0,50));
	Port_ALARM.setName("ALARM_Input");
	Port_ALARM.setId("ALARM_InputID");

	
	canvas.add( ALARMInput, x1,y1); 
	return ALARMInput;

}

var LabelAlarmSymbolFigure = draw2d.SetFigure.extend({

	init : function(attr)
    {
        this._super(attr);
        
        this.strokeScale = true; // scale the stroke width of the children nodes if the parent resize. available with version 5.1.0 of draw2d
        this.setKeepAspectRatio(false);
		//this.installEditPolicy(new SelectionMenuPolicy());
    },
    createSet : function()
    {
        this.canvas.paper.setStart();
  
       this.canvas.paper.rect(0, 0, 40, 40).
       attr({"stroke-width" : 0
        }); 
		
       this.canvas.paper.image("images/img/alarm4Conn.jpg",10, 1, 60, 50);
      return this.canvas.paper.setFinish();
    },


});

function Alarmindow_TCS(numOfWindows){
	
	x1 = 10;
	y1 = 10;
//	console.log(numOfWindows);
	

	
	if(numOfWindows == 2)
	{
		TCSalarmWindow_FSH = rectForWindows((x1 ), (y1),100,60, 5);
		TCSWindowLabel_FSH = WindowLabel((x1 + 25 ), (y1 + 10), "FSH");
		TCSalarmWindow_FSL = rectForWindows((x1 + 110), (y1),100,60, 5);
        TCSWindowLabel_FSL = WindowLabel((x1 + 135 ), (y1 + 10), "FSL");
		
	}
	if(numOfWindows == 3)
	{
		TCSalarmWindow_FSH = rectForWindows((x1 ), (y1),100,60, 5);
		TCSWindowLabel_FSH = WindowLabel((x1 + 25 ), (y1 + 10), "FSH");
		TCSalarmWindow_FSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		TCSWindowLabel_FSL = WindowLabel((x1 + 135 ), (y1 + 10), "FSL");
		TCSalarmWindow_TSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		TCSWindowLabel_TSL = WindowLabel((x1 + 245), (y1 + 10), "TSL");
		
		
	}
	if(numOfWindows == 4)
	{
		TCSalarmWindow_FSH = rectForWindows((x1 ), (y1),100,60, 5);
		TCSWindowLabel_FSH = WindowLabel((x1 + 25 ), (y1 + 10), "FSH");
		TCSalarmWindow_FSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		TCSWindowLabel_FSL = WindowLabel((x1 + 135 ), (y1 + 10), "FSL");
		TCSalarmWindow_TSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		TCSWindowLabel_TSL = WindowLabel((x1 + 245), (y1 + 10), "TSL");
		TCSalarmWindow_TSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		TCSWindowLabel_TSH2 = WindowLabel((x1 + 25 ), (y1+75), "TSH 2");
		
		
	}
	if(numOfWindows == 5)
	{
		TCSalarmWindow_FSH = rectForWindows((x1 ), (y1),100,60, 5);
		TCSWindowLabel_FSH = WindowLabel((x1 + 25 ), (y1 + 10), "FSH");
		TCSalarmWindow_FSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		TCSWindowLabel_FSL = WindowLabel((x1 + 135 ), (y1 + 10), "FSL");
		TCSalarmWindow_TSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		TCSWindowLabel_TSL = WindowLabel((x1 + 245), (y1 + 10), "TSL");
		TCSalarmWindow_TSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		TCSWindowLabel_TSH2 = WindowLabel((x1 + 25 ), (y1+75), "TSH 2");
		TCSalarmWindow_PSH = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		TCSWindowLabel_PSH = WindowLabel((x1 + 135), (y1+75), "PSH");
		
		
	}
	if(numOfWindows == 6)
	{
		TCSalarmWindow_FSH = rectForWindows((x1 ), (y1),100,60, 5);
		TCSWindowLabel_FSH = WindowLabel((x1 + 25 ), (y1 + 10), "FSH");
		
		TCSalarmWindow_FSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		TCSWindowLabel_FSL = WindowLabel((x1 + 135 ), (y1 + 10), "FSL");
		
		TCSalarmWindow_TSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		TCSWindowLabel_TSL = WindowLabel((x1 + 245), (y1 + 10), "TSL");
		
		TCSalarmWindow_TSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		TCSWindowLabel_TSH2 = WindowLabel((x1 + 25 ), (y1+75), "TSH 2");
		
		TCSalarmWindow_PSH = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		TCSWindowLabel_PSH = WindowLabel((x1 + 135), (y1+75), "PSH");
		
		TCSalarmWindow_TSH1 = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		TCSWindowLabel_TSH1 = WindowLabel((x1 + 245), (y1+75), "TSH 1");
		
	}
	
	
}
function rectForWindows(x1,y1,w1,h1, r)
{
	 paper1.setStart();
	 paper1.rect(x1,y1, w1, h1, r).attr({'stroke':'#999', 'stroke-width':'1', 'fill':'#333'});
	
	 var c = paper1.setFinish();
		return c;
 
}

function WindowLabel(x1,y1, txt){
	
	var c = paper1.text( (x1+25), (y1+25), txt).attr({'stroke' : '#fff','font-size' : 12,"font-family": "sans-serif"});
	return c;
}

function raphealAnimation(){
	
	var anim = Raphael.animation({
		"stroke-width": 1,
		opacity: 1
		}, 300);
		anim = anim.repeat(Infinity);
		
		return anim;
}

function glowWindow(obj){
	
	
	obj.attr({'stroke':'white', 'stroke-width':'1', 'fill':'red'});
	 var glow_obj = obj.glow().attr({
		    color: 'white',
			width: 1,
			
		});	
	 return glow_obj;
}

function Alarmindow_FCS(numOfWindows){
	
	x1 = 10;
	y1 = 10;
//	console.log(numOfWindows);
	

	
	if(numOfWindows == 2)
	{
		FCS_alarmWindow_LSH = rectForWindows((x1 ), (y1),100,60, 5);
		FCS_WindowLabel_LSH = WindowLabel((x1 + 25 ), (y1 + 10), "LSH");
		
		FCS_alarmWindow_LSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		FCS_WindowLabel_LSL = WindowLabel((x1 + 135 ), (y1 + 10), "LSL");
		
		
		
	}
	if(numOfWindows == 3)
	{
		FCS_alarmWindow_LSH = rectForWindows((x1 ), (y1),100,60, 5);
		FCS_WindowLabel_LSH = WindowLabel((x1 + 25 ), (y1 + 10), "LSH");
		
		FCS_alarmWindow_LSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		FCS_WindowLabel_LSL = WindowLabel((x1 + 135 ), (y1 + 10), "LSL");
		
		FCS_alarmWindow_PSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		FCS_WindowLabel_PSL = WindowLabel((x1 + 245), (y1 + 10), "PSL");
	
		
		
	}
	if(numOfWindows == 4)
	{
		FCS_alarmWindow_LSH = rectForWindows((x1 ), (y1),100,60, 5);
		FCS_WindowLabel_LSH = WindowLabel((x1 + 25 ), (y1 + 10), "LSH");
		
		FCS_alarmWindow_LSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		FCS_WindowLabel_LSL = WindowLabel((x1 + 135 ), (y1 + 10), "LSL");
		
		FCS_alarmWindow_PSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		FCS_WindowLabel_PSL = WindowLabel((x1 + 245), (y1 + 10), "PSL");
		
		FCS_alarmWindow_PSH = rectForWindows((x1 ), (y1+70),100,60, 5);
		FCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1+75), "PSH");
		
	
		
		
	}
	if(numOfWindows == 5)
	{
		FCS_alarmWindow_LSH = rectForWindows((x1 ), (y1),100,60, 5);
		FCS_WindowLabel_LSH = WindowLabel((x1 + 25 ), (y1 + 10), "LSH");
		
		FCS_alarmWindow_LSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		FCS_WindowLabel_LSL = WindowLabel((x1 + 135 ), (y1 + 10), "LSL");
		
		FCS_alarmWindow_PSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		FCS_WindowLabel_PSL = WindowLabel((x1 + 245), (y1 + 10), "PSL");
		
		FCS_alarmWindow_PSH = rectForWindows((x1 ), (y1+70),100,60, 5);
		FCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1+75), "PSH");
		
		FCS_alarmWindow_FSL = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		FCS_WindowLabel_FSL = WindowLabel((x1 + 135), (y1+75), "FSL");
		
	
		
		
	}
	if(numOfWindows == 6)
	{
		FCS_alarmWindow_LSH = rectForWindows((x1 ), (y1),100,60, 5);
		FCS_WindowLabel_LSH = WindowLabel((x1 + 25 ), (y1 + 10), "LSH");
		
		FCS_alarmWindow_LSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		FCS_WindowLabel_LSL = WindowLabel((x1 + 135 ), (y1 + 10), "LSL");
		
		FCS_alarmWindow_PSL = rectForWindows((x1 + 220), (y1),100,60, 5);
		FCS_WindowLabel_PSL = WindowLabel((x1 + 245), (y1 + 10), "PSL");
		
		FCS_alarmWindow_PSH = rectForWindows((x1 ), (y1+70),100,60, 5);
		FCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1+75), "PSH");
		
		FCS_alarmWindow_FSL = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		FCS_WindowLabel_FSL = WindowLabel((x1 + 135), (y1+75), "FSL");
		
		FCS_alarmWindow_FSH = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		FCS_WindowLabel_FSH = WindowLabel((x1 + 245), (y1+75), "FSH");
		
	
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
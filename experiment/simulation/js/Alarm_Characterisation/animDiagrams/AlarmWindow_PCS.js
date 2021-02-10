
function Alarmindow_PCS(numOfWindows){
	
	x1 = 10;
	y1 = 10;
//	console.log(numOfWindows);

	if(numOfWindows == 2)
	{
		PCS_alarmWindow_PSH = rectForWindows((x1 ), (y1),100,60, 5);
		PCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1 + 10), "PSH");
		PCS_alarmWindow_PSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		PCS_WindowLabel_PSL = WindowLabel((x1 + 135 ), (y1 + 10), "PSL");
		
	}
	if(numOfWindows == 3)
	{
		PCS_alarmWindow_PSH = rectForWindows((x1 ), (y1),100,60, 5);
		PCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1 + 10), "PSH");
		PCS_alarmWindow_PSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		PCS_WindowLabel_PSL = WindowLabel((x1 + 135 ), (y1 + 10), "PSL");
		
		PCS_alarmWindow_FSH1 = rectForWindows((x1 + 220), (y1),100,60, 5);
		PCS_WindowLabel_FSH1 = WindowLabel((x1 + 245), (y1 + 10), "FSH 1");
		
		
	}
	if(numOfWindows == 4)
	{
		PCS_alarmWindow_PSH = rectForWindows((x1 ), (y1),100,60, 5);
		PCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1 + 10), "PSH");
		PCS_alarmWindow_PSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		PCS_WindowLabel_PSL = WindowLabel((x1 + 135 ), (y1 + 10), "PSL");
		PCS_alarmWindow_FSH1 = rectForWindows((x1 + 220), (y1),100,60, 5);
		PCS_WindowLabel_FSH1 = WindowLabel((x1 + 245), (y1 + 10), "FSH 1");
		PCS_alarmWindow_FSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		PCS_WindowLabel_FSH2 = WindowLabel((x1 + 25 ), (y1+75), "FSH 2");
		
		
	}
	if(numOfWindows == 5)
	{
		PCS_alarmWindow_PSH = rectForWindows((x1 ), (y1),100,60, 5);
		PCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1 + 10), "PSH");
		PCS_alarmWindow_PSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		PCS_WindowLabel_PSL = WindowLabel((x1 + 135 ), (y1 + 10), "PSL");
		PCS_alarmWindow_FSH1 = rectForWindows((x1 + 220), (y1),100,60, 5);
		PCS_WindowLabel_FSH1 = WindowLabel((x1 + 245), (y1 + 10), "FSH 1");
		PCS_alarmWindow_FSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		PCS_WindowLabel_FSH2 = WindowLabel((x1 + 25 ), (y1+75), "FSH 2");
		PCS_alarmWindow_FSL1 = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		PCS_WindowLabel_FSL1 = WindowLabel((x1 + 135), (y1+75), "FSL 1");
		
		
	}
	if(numOfWindows == 6)
	{
		PCS_alarmWindow_PSH = rectForWindows((x1 ), (y1),100,60, 5);
		PCS_WindowLabel_PSH = WindowLabel((x1 + 25 ), (y1 + 10), "PSH");
		PCS_alarmWindow_PSL = rectForWindows((x1 + 110), (y1),100,60, 5);
		PCS_WindowLabel_PSL = WindowLabel((x1 + 135 ), (y1 + 10), "PSL");
		PCS_alarmWindow_FSH1 = rectForWindows((x1 + 220), (y1),100,60, 5);
		PCS_WindowLabel_FSH1 = WindowLabel((x1 + 245), (y1 + 10), "FSH 1");
		PCS_alarmWindow_FSH2 = rectForWindows((x1 ), (y1+70),100,60, 5);
		PCS_WindowLabel_FSH2 = WindowLabel((x1 + 25 ), (y1+75), "FSH 2");
		PCS_alarmWindow_FSL1 = rectForWindows((x1 + 110), (y1+70),100,60, 5);
		PCS_WindowLabel_FSL1 = WindowLabel((x1 + 135), (y1+75), "FSL 1");
		PCS_alarmWindow_FSL2 = rectForWindows((x1 + 220), (y1+70),100,60, 5);
		PCS_WindowLabel_FSL2 = WindowLabel((x1 + 245), (y1+75), "FSL 2");
		
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
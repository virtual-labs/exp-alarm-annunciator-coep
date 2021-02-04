

function LCS_draw2AlarmComponent(){
		
	paper.path('M'+(x+173)+' '+(y+180)+ 'l 51 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	LCS_LSL = LCS_AlarmCompCircle((x+245), (y+180), 20,"LSL");
	
	paper.path('M'+(x+173)+' '+(y)+ 'l 71 0 0 -20').attr({'stroke':'black', 'stroke-width':'1'});	
	LCS_LSH = LCS_AlarmCompCircle((x+245), (y-30), 20,"LSH");
	
}




function LCS_draw3AlarmComponent(){
	

	
	LCS_draw2AlarmComponent();
	
	paper.path('M'+(x+40)+' '+(y+210)+ 'l 0 40 ').attr({'stroke':'black', 'stroke-width':'1'});	
	LCS_PSL = LCS_AlarmCompCircle((x+40), (y+270), 20,"PSL");
	
}



function LCS_draw4AlarmComponent(){
	
//	LCS_draw2AlarmComponent();
	LCS_draw3AlarmComponent();
	
	paper.path('M'+(x+140)+' '+(y-108)+ 'l 0 20 ').attr({'stroke':'black', 'stroke-width':'1'});	
	LCS_FSL = LCS_AlarmCompCircle((x+140), (y-128), 20,"FSL");
	
}
function LCS_draw5AlarmComponent(){
	
//	LCS_draw2AlarmComponent();
//	LCS_draw3AlarmComponent();
	LCS_draw4AlarmComponent();
	
	paper.path('M'+(x+245)+' '+(y+300)+ 'l 0 25 ').attr({'stroke':'black', 'stroke-width':'1'});	
	LCS_FSH = LCS_AlarmCompCircle((x+245), (y+280), 20,"FSH");
	
}

function LCS_draw6AlarmComponent(){
	
//	LCS_draw2AlarmComponent();
//	LCS_draw3AlarmComponent();
//	LCS_draw4AlarmComponent();
	LCS_draw5AlarmComponent();
	
	paper.path('M'+(x+200)+' '+(y-108)+ 'l 0 20 ').attr({'stroke':'black', 'stroke-width':'1'});	
	LCS_FSH1 = LCS_AlarmCompCircle((x+200), (y-128), 20,"FSH 1");
	
}



 function LCS_AlarmCompCircle(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({ 'stroke-width':'2', 'fill':'#FCD392'});	
	LCS_AlarmCompLabel(x, y, l1);
	return c;
  
	
};


function LCS_AlarmCompLabel(x, y, text){
	
	paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	 
};

 
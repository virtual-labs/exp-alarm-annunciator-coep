

function PCS_draw2AlarmComponent(){
		
	paper.path('M'+(x-20)+' '+(y-18)+ 'l 0 -32').attr({'stroke':'black', 'stroke-width':'1'});	
	PCS_PSH = PCS_AlarmCompCircle((x-20),(y-70), 20, "PSH");
	
	paper.path('M'+(x+120)+' '+(y-18)+ 'l 0 -32').attr({'stroke':'black', 'stroke-width':'1'});	
	PCS_PSL = PCS_AlarmCompCircle((x+120),(y-70), 20, "PSL");
	
}




function PCS_draw3AlarmComponent(){
	
//	paper.path('M'+(x+173)+' '+(y+180)+ 'l 51 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
//	PCS_AlarmCompCircle((x+245), (y+180), 20,"LSL");
//	
//	paper.path('M'+(x+173)+' '+(y)+ 'l 71 0 0 -20').attr({'stroke':'black', 'stroke-width':'1'});	
//	PCS_AlarmCompCircle((x+245), (y-30), 20,"LSH");
	
	PCS_draw2AlarmComponent();
	
	paper.path('M'+(x+280)+' '+(y+95)+ 'l 0 -30').attr({'stroke':'black', 'stroke-width':'1'});	
	PCS_FSH1 = PCS_AlarmCompCircle((x+280), (y+45), 20,"FSH 1");
	
}



function PCS_draw4AlarmComponent(){
	
//	PCS_draw2AlarmComponent();
	PCS_draw3AlarmComponent();
	
	paper.path('M'+(x-130)+' '+(y+65)+ 'l 0 -30 ').attr({'stroke':'black', 'stroke-width':'1'});	
	PCS_FSH2 = PCS_AlarmCompCircle((x-130), (y+15), 20,"FSH 2");
	
}
function PCS_draw5AlarmComponent(){
	
//	PCS_draw2AlarmComponent();
//	PCS_draw3AlarmComponent();
	PCS_draw4AlarmComponent();
	
	paper.path('M'+(x+230)+' '+(y+95)+ 'l 0 30').attr({'stroke':'black', 'stroke-width':'1'});	
	PCS_FSL1 = PCS_AlarmCompCircle((x+230), (y+145), 20,"FSL 1");
	
}

function PCS_draw6AlarmComponent(){
	
//	PCS_draw2AlarmComponent();
//	PCS_draw3AlarmComponent();
//	PCS_draw4AlarmComponent();
	PCS_draw5AlarmComponent();
	
	paper.path('M'+(x-170)+' '+(y+65)+ 'l 0 30 ').attr({'stroke':'black', 'stroke-width':'1'});	
	PCS_FSL2 = PCS_AlarmCompCircle((x-170), (y+115), 20,"FSL 2");
	
}



 function PCS_AlarmCompCircle(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({ 'stroke-width':'2', 'fill':'#FCD392'});	
	PCS_AlarmCompLabel(x, y, l1);
	return c;
  
	
};


function PCS_AlarmCompLabel(x, y, text){
	
	paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	 
};

 
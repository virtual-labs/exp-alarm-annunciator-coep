

function TCS_draw2AlarmComponent(){
		
	paper.path('M'+(x+160)+' '+(y-50)+ 'l 0 -25 ').attr({'stroke':'black', 'stroke-width':'1'});	
	TCS_FSH = TCS_AlarmCompCircle((x+160), (y-90), 20,"FSH");
	
	paper.path('M'+(x-10)+' '+(y+50)+ 'l 0 -40').attr({'stroke':'black', 'stroke-width':'1'});	
	TCS_FSL = TCS_AlarmCompCircle((x-10), (y), 20,"FSL");
	

}




function TCS_draw3AlarmComponent(){
	
//	paper.path('M'+(x+173)+' '+(y+180)+ 'l 51 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
//	TCS_AlarmCompCircle((x+245), (y+180), 20,"LSL");
//	
//	paper.path('M'+(x+173)+' '+(y)+ 'l 71 0 0 -20').attr({'stroke':'black', 'stroke-width':'1'});	
//	TCS_AlarmCompCircle((x+245), (y-30), 20,"LSH");
	
	TCS_draw2AlarmComponent();
	
	paper.path('M'+(x+240)+' '+(y-50)+ 'l 0 -25 ').attr({'stroke':'black', 'stroke-width':'1'});	
	TCS_TSL = TCS_AlarmCompCircle((x+240), (y-90), 20,"TSL");
	
	
}



function TCS_draw4AlarmComponent(){
	
//	TCS_draw2AlarmComponent();
	TCS_draw3AlarmComponent();
	
	paper.path('M'+(x-50)+' '+(y+50)+ 'l 0 40').attr({'stroke':'black', 'stroke-width':'1'});	
	TCS_TSH2 = TCS_AlarmCompCircle((x-50), (y+110), 20,"TSH 2");
	
}
function TCS_draw5AlarmComponent(){
	
//	TCS_draw2AlarmComponent();
//	TCS_draw3AlarmComponent();
	TCS_draw4AlarmComponent();
	
	paper.path('M'+(x+190)+' '+(y+140)+ 'l 34 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	TCS_PSH = TCS_AlarmCompCircle((x+245), (y+140), 20,"PSH");
	
}

function TCS_draw6AlarmComponent(){
	
//	TCS_draw2AlarmComponent();
//	TCS_draw3AlarmComponent();
//	TCS_draw4AlarmComponent();
	TCS_draw5AlarmComponent();
	
	paper.path('M'+(x+174)+' '+(y)+ 'l 71 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	TCS_TSH1 = TCS_AlarmCompCircle((x+245), (y), 20,"TSH 1");
	
	
}



 function TCS_AlarmCompCircle(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({ 'stroke-width':'2', 'fill':'ff9900'});	
	TCS_AlarmCompLabel(x, y, l1);
	return c;
  
	
};


function TCS_AlarmCompLabel(x, y, text){
	
	paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	 
};

 


function FCS_draw2AlarmComponent(){
		
	paper.path('M'+(x-25)+' '+(y-30)+ 'l 51 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	FCS_LSH = FCS_AlarmCompCircle((x-40), (y-30), 20,"LSH");
	
	paper.path('M'+(x-25)+' '+(y+150)+ 'l 51 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	FCS_LSL = FCS_AlarmCompCircle((x-40), (y+150), 20,"LSL");
	
}




function FCS_draw3AlarmComponent(){
	
	FCS_draw2AlarmComponent();
	
	paper.path('M'+(x+175)+' '+(y+40)+ 'l 35 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	FCS_PSL = FCS_AlarmCompCircle((x+230), (y+40), 20,"PSL");
	
}



function FCS_draw4AlarmComponent(){
	
//	FCS_draw2AlarmComponent();
	FCS_draw3AlarmComponent();
	
	paper.path('M'+(x+250)+' '+(y+257)+ 'l 0 32 ').attr({'stroke':'black', 'stroke-width':'1'});	
	FCS_PSH = FCS_AlarmCompCircle((x+250), (y+310), 20,"PSH");
	
}
function FCS_draw5AlarmComponent(){
	
//	FCS_draw2AlarmComponent();
//	FCS_draw3AlarmComponent();
	FCS_draw4AlarmComponent();
	
	paper.path('M'+(x+200)+' '+(y+257)+ 'l 0 -32 ').attr({'stroke':'black', 'stroke-width':'1'});	
	FCS_FSL = FCS_AlarmCompCircle((x+200), (y+210), 20,"FSL");
	
}

function FCS_draw6AlarmComponent(){
	
//	FCS_draw2AlarmComponent();
//	FCS_draw3AlarmComponent();
//	FCS_draw4AlarmComponent();
	FCS_draw5AlarmComponent();
	
	paper.path('M'+(x+95)+' '+(y-100)+ 'l 40 0 ').attr({'stroke':'black', 'stroke-width':'1'});	
	FCS_FSH = FCS_AlarmCompCircle((x+155), (y-100), 20,"FSH");
	
}



 function FCS_AlarmCompCircle(x, y, r, l1){
	
	
	var c = paper.circle(x, y, r).attr({ 'stroke-width':'2', 'fill':'#FCD392'});	
	FCS_AlarmCompLabel(x, y, l1);
	return c;
  
	
};


function FCS_AlarmCompLabel(x, y, text){
	
	paper.text(x, y, text).attr({
			stroke : 'black',
			'font-size' : 12,
			"font-family": "sans-serif" 
		});
	 
};

 
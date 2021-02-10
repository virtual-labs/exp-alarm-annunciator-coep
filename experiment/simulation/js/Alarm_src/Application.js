// declare the namespace for this example
var example = {};

/**
 * 
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 * 
 * @author Andreas Herz
 * @extends draw2d.ui.parts.GraphicalEditor
 */
example.Application = Class.extend(
{
    NAME : "example.Application", 

    /**
     * @constructor
     * 
     * @param {String} canvasId the id of the DOM element to use as paint container
     */
    init : function(numOfWindows, alarmtype, ISASeq, appId, maxLimit, minLimit)
    {
	      this.view    = new example.View("draw2Did", numOfWindows, alarmtype, ISASeq, appId, maxLimit, minLimit);
          this.toolbar = new example.Toolbar("toolbar",  this.view, numOfWindows, alarmtype, ISASeq, appId, maxLimit, minLimit);
	       
	      
	  
	}
});

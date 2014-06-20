function attachDemoControls(slinky){

	var s = slinky.spring;

	$(".btnL1").click(function() {
		s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.doTransition(slinky.layouts.basicGridLayout,{axes:0,itemConstraint:200},800,slinky.easings.easeOutElastic,slinky.projections.xyPlane);
		}, 100)
	})
	
	$(".btnL2").click(function() {
		s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.doTransition(slinky.layouts.basicGridLayout,{axes:0,itemConstraint:350},800,slinky.easings.easeOutElastic,slinky.projections.turntable);
			s.setItemEasing(false);
		}, 100)
	})
	
	$(".btnL3").click(function() {
		s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.doTransition(slinky.layouts.basicGridLayout,{axes:0,itemConstraint:350},800,slinky.easings.easeOutElastic,slinky.projections.enterTheDragon);
			s.setItemEasing(false);
		}, 100)
	})
	
	$(".btnL4").click(function() {
		s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.doTransition(slinky.layouts.basicGridLayout,{axes:0,itemConstraint:100},800,slinky.easings.easeOutElastic,slinky.projections.sunrise);
			s.setItemEasing(false);
		}, 100)
	})
	
	$(".btnL5").click(function() {
		s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.doTransition(slinky.layouts.basicGridLayout,{axes:0,itemConstraint:100,itemMargins:[5,5]},800,slinky.easings.easeOutElastic,slinky.projections.expandedCenter);
			s.setItemEasing(false);
		}, 100)
	})
	
	
	$(".btn1").click(function() {
		s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.doTransition(slinky.layouts.basicGridLayout,{axes:0},800,slinky.easings.easeOutElastic);
			s.setItemEasing(false);
		}, 100)
	})

	$(".btn2").click(function() {
		s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.doTransition(slinky.layouts.basicGridLayout,{axes:1},800,slinky.easings.easeOutElastic);
			s.setItemEasing(false);
		}, 100)
	})
	$(".btn3").click(function() {
		s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.doTransition(slinky.layouts.basicGridLayout,{axes:2},800,slinky.easings.easeOutElastic);
			s.setItemEasing(false);
		}, 100)
	})



	$(".size1").click(function() {
		// s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.updateConfig({itemConstraint:100},true);
		}, 100)
	})

	$(".size2").click(function() {
		// s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.updateConfig({itemConstraint:200},true);
		}, 100)
	})

	$(".size3").click(function() {
		// s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.updateConfig({itemConstraint:300},true);
		}, 100)
	})



	$(".margin1").click(function() {
		// s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.updateConfig({itemMargins:[10,10]},true);
		}, 100)
	})

	$(".margin2").click(function() {
		// s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.updateConfig({itemMargins:[20,20]},true);
		}, 100)
	})

	$(".margin3").click(function() {
		// s.jumpToScrollProgress(0);
		setTimeout(function(){
			s.updateConfig({itemMargins:[30,30]},true);
		}, 100)
	})




	

	$(".toggleItemEase").click(function() {
		s.setItemEasing(!s.itemEasing);//easeInOutQuad
	})
	
	
	$(".toggleScrollAxis").click(function() {
		s.toggleScrollAxis();
	})
	
	
	$(".toggleIsLooping").click(function() {
		s.toggleIsLooping();
	})




	$(".tailScroll").click(function() {
		s.setLastTouchOrigin(s.gridDims[s.si]/2);
		s.easeTo(s.getScrollPos()-(s.getScrollViewDim()*.50),800)
	})
	
	
	$(".headScroll").click(function() {
		s.setLastTouchOrigin(s.gridDims[s.si]/2);
		s.easeTo(s.getScrollPos()+(s.getScrollViewDim()*.50),800)
	})





	// slinky.spring.updateConfig({itemConstraint:100,itemEasing:false});	
	// setTimeout(function(){
	// 	s.doTransition(slinky.layouts.basicGridLayout,{axes:2},800,slinky.easings.easeOutElastic);
	// }, 500)

	// slinky.spring.updateConfig({itemConstraint:300,itemEasing:false,staticAxisCount:2});	
	// setTimeout(function(){
	// 	s.doTransition(slinky.layouts.basicGridLayout,{axes:0},800,slinky.easings.easeOutElastic);
	// }, 500)




}






	


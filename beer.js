var orange = '#e58e36';
var gold = '#997a24';
var darkGold = '#856a20'
var teal = '#329681';
var blue =  '#07034c';
var green = '#1fe5bb';
var offWhite = '#FED';

const TAUTwo = Zdog.TAU;

//rotation variable 
let beerIsSpinning = true; 

let beerModel = new Zdog.Illustration({
    // set canvas with selector
    element: '.ingredient-illo',
    zoom: 1.4, 
    dragRotate: true,

    // stop rotation when dragged 
    onDragStart: function(){
        beerIsSpinning = false; 
    },
  });


  let bottle = new Zdog.RoundedRect({
      addTo: beerModel,
      width: 35, 
      height: 100, 
      stroke: 70,
      cornerRadius: 1,
      translate: {y: 50},
      color: green, 
      fill: true, 
  });

  let bottleNeck = new Zdog.RoundedRect({
      addTo: bottle,
      width: 20,
      stroke: 20, 
      height:80,
      cornerRadius: 1,
      translate:{y: -bottle.height},
      fill:true,
      color: green, 
  });

  let label = new Zdog.Polygon({
    addTo: bottle,
    radius: 30,
    sides: 5,
    stroke: 0.5,
    translate: {z:bottle.width},
    fill: true,
    color: offWhite,
  });

  let outerLabel = new Zdog.Ellipse({
    addTo: bottle,
    diameter: 65,
    quarters: 2,
    stroke: 1.5,
    translate: {z:bottle.width},
    rotate:{z:TAU/4},
    color: blue,
  });
  let innerLabel = new Zdog.Ellipse({
    addTo: bottle,
    diameter: 60,
    quarters: 2,
    stroke: 1,
    translate: {z:bottle.width},
    rotate:{z:TAU/4},
    color: offWhite,
  });

  let labelWrapper = new Zdog.Ellipse({
    addTo: bottle,
    width: 80,
    height: 110,
    stroke: 2,
    translate: {z:bottle.width-2},
    fill: true,
    color: teal,
  });

  let bottomRing = new Zdog.Ellipse({
      addTo: bottle,
      width: 55, 
      height: 40, 
      stroke: 3,
      translate: {y: bottle.height -14},
      rotate:{x:TAU/4},
      color: teal,
  });

  let cap = new Zdog.Ellipse({
      addTo: bottle,
      diameter: 30, 
      stroke: 8, 
      translate: {y: -bottle.height - 55},
      rotate:{x:TAU/4},
      color: blue,
      fill: true,
  });
 
  beerModel.updateRenderGraph();
  beerAnimate(); 


function beerAnimate() {
    if (beerIsSpinning){
        beerModel.rotate.y += 0.03;
    }
    beerModel.updateRenderGraph();
    requestAnimationFrame(beerAnimate); 
}
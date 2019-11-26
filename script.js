
var orange = '#e58e36';
var gold = '#997a24';
var darkGold = '#856a20'
var teal = '#329681';
var blue =  '#07034c';
var green = '#1fe5bb';
var offWhite = '#FED';

const TAU = Zdog.TAU;

//rotation variable 
let isSpinning = true;

// create illo
let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    zoom: 1.4, 
    dragRotate: true,

    // stop rotation when dragged 
    onDragStart: function(){
        isSpinning = false; 
    },
  });
  //table

  let table = new Zdog.Anchor({
    addTo: illo,
  });

  let tableTop = new Zdog.Ellipse({
    addTo: table, 
    diameter: 250, 
    stroke: 20, 
    color: offWhite,
    fill: true,  
    rotate: {x: TAU/4},
    translate: {y: 180},
  });

  let tableLeg = new Zdog.Shape ({
    addTo: table,
    path: [{ y:200, z:100}, {y: 800, z: 100}],
    stroke: 30,
    color: offWhite,
  });

 let legTwo =  tableLeg.copyGraph({
    translate: {z: -120, x: -100},
  });

  let legThree = legTwo.copyGraph({
    translate: {z: -120, x: 100},
  });

  let legFour = tableLeg.copyGraph({
    translate: {z: -200, x: 0},
  });

  let coaster = new Zdog.Ellipse({
    addTo: table, 
    diameter: 30, 
    stroke: 5, 
    color: green,
    fill: true,  
    rotate: {x: TAU/4},
    translate: {y:170, z: 70},
  });

  coaster.copyGraph({
    translate: {y: 170, z: -70},
  })
  //right dude 

  let rightDude = new Zdog.Anchor({
    addTo: illo, 
    translate: {z: tableTop.diameter},
  });
  
  let rtHead = new Zdog.Ellipse({
    addTo: rightDude, 
    translate: {y: -20},
    stroke: 110, 
    color: orange, 
    fill: true, 
  });

  let rtNeck = new Zdog.Rect({
    addTo: rightDude, 
    width: 25, 
    height: 50, 
    translate: {y: 25, x: 5},
    stroke: 25, 
    color: orange, 
    fill: true, 
  });

  let rtBody = new Zdog.Ellipse({
    addTo: rightDude, 
    diameter: 150, 
    stroke: 100, 
    translate: {y: 180},
    color: teal, 
    fill: true, 
  });
  var armX = rightDude.x + rtBody.diameter + rtBody.stroke;
  var armZ = rtBody.diameter + rtBody.stroke; 

  let rtFrontArm = new Zdog.Shape({
    addTo: rightDude,
    path: [{ y:100, z:-40}, {z: -140, y: 110}],
    translate: {x: rtBody.stroke-10},
    stroke: 30,
    color: orange,
  });

    new Zdog.Shape ({
      addTo: rightDude, 
      path:[{y:110, x:-120,}, {y: 200, x: -150}],
      stroke: 30, 
      color:orange,
    });


  new Zdog.Shape({
    addTo: rtFrontArm, 
    path: [{y:110, z:-140}, {y:70, z:-180}],
    stroke:30, 
    color: orange,
  });

  let fist= new Zdog.Ellipse({
    addTo:rtFrontArm, 
    translate:{y:70, z:-180},
    stroke: 40, 
    color: orange,
  });

  let rtBeer = new Zdog.Anchor ({
    addTo:fist, 
  });

  var hairAnchor = new Zdog.Anchor ({
    addTo: rtHead, 
  });

  new Zdog.RoundedRect({
    addTo: rtBeer, 
    width: 25, 
    height: 50, 
    stroke: 20,
    cornerRadius: 7, 
    translate: {x:-fist.stroke + 10},
    color: green,
    fill: true,
  });

  new Zdog.RoundedRect({ 
    addTo: rtBeer,
    width: 10, 
    height: 30, 
    stroke: 10, 
    cornerRadius: 1, 
    translate:{y: -50, x:-fist.stroke + 10},
    color: green, 
    fill: true, 
  });

  var hairZ = (rtHead.stroke) /2 + 1; 

  new Zdog.Ellipse({ 
    addTo: hairAnchor, 
    diameter: 30,
    translate: {z: hairZ, x: 10},
    rotate: {z:TAU/4},
    stroke: 30, 
    color: gold, 
});
new Zdog.Ellipse({
  addTo: hairAnchor,
  diameter: 50, 
  translate: {z: hairZ- 45, y: -40},
  rotate: {x: TAU/4.5},
  stroke: 50, 
  color: gold,
});

new Zdog.Ellipse({
  addTo: hairAnchor, 
  diameter:30, 
  translate: {z:hairZ-80, y: -40},
  rotate: {z: TAU/3},
  stroke: 30, 
  color: gold,
});

var rtEyeAnchor = new Zdog.Anchor({
  addTo: rtHead,
});


let rtEye = new Zdog.Ellipse({
  addTo: rtEyeAnchor,
  diameter: 15,
  quarters: 2,
  stroke: 5,
  color: teal,
  translate: {x:25, z: -rtHead.stroke/2.2},
  rotate: {z: -TAU/4},
});
new Zdog.Ellipse({
  addTo: rtHead,
  diameter: 30,
  quarters: 2,
  translate: { y: 15, z: -rtHead.stroke/2.2},
  rotate: { z: TAU/4 },
  closed: true,
  color: offWhite,
  stroke: 5,
  fill: true,
});

rtEye.copyGraph({
  translate: {x: -25, z: -rtHead.stroke/2.2},
});

// MODEL LEFT DUDE 

let leftDude = new Zdog.Anchor({
  addTo: illo, 
  translate: {z: -tableTop.diameter},
});

let lftHead = new Zdog.Ellipse({
  addTo: leftDude, 
  translate: {y: -20},
  stroke: 110, 
  color: gold, 
  fill: true, 
});

var lftHairAnchor = new Zdog.Anchor ({
  addTo: lftHead, 
});

var lftHairZ = (lftHead.stroke) /2 + 1; 



new Zdog.Ellipse({
addTo: lftHairAnchor,
diameter: 40, 
translate: {z: lftHairZ- 45, y: -40},
rotate: {x: TAU/4},
stroke: 50, 
color: teal,
});

var lftEyeAnchor = new Zdog.Anchor({
  addTo: lftHead,
});

let lftEye = new Zdog.Ellipse({
  addTo: lftEyeAnchor,
  diameter: 15,
  quarters: 2,
  stroke: 5,
  color: teal,
  translate: {x:25, z: +lftHead.stroke/2.2},
  rotate: {z: -TAU/4},
});
new Zdog.Ellipse({
  addTo: lftHead,
  diameter: 20,
  translate: { y: 25, z: +lftHead.stroke/2.2},
  color: gold,
  stroke: 10,
});

lftEye.copyGraph({
  translate: {x: -25, z: +lftHead.stroke/2.2},
});

let lftNeck = new Zdog.Rect({
  addTo: leftDude, 
  width: 25, 
  height: 50, 
  translate: {y: 25, x: 5},
  stroke: 25, 
  color: gold, 
  fill: true, 
});

let lftBody = new Zdog.Ellipse({
  addTo: leftDude, 
  diameter: 150, 
  stroke: 100, 
  translate: {y: 180},
  color: blue, 
  fill: true, 
});

new Zdog.Shape({
  addTo: leftDude, 
  path: [{y:100, z:40}, {z:120, y: 200}],
  translate: {x:lftBody.stroke -10},
  stroke:30, 
  color: gold,
})

let lftFrontArm = new Zdog.Shape({
  addTo: leftDude,
  path: [{ y:100, z:40}, {z: 140, y: 70}],
  translate: {x: -lftBody.stroke+10},
  stroke: 30,
  color: gold,
});

new Zdog.Shape({
  addTo: lftFrontArm, 
  path: [{y:70, z:140, x:0}, {y:10, z:80, x: lftBody.stroke -50}],
  stroke:30, 
  color: gold,
});

let lftfist= new Zdog.Ellipse({
  addTo:lftFrontArm, 
  translate:{y:10, z:80, x:lftBody.stroke-50},
  stroke: 40, 
  color: gold,
});

let lftBeer = new Zdog.Anchor ({
  addTo:lftfist, 
  rotate: { x: TAU/4},
  translate: {z: 35},
});

new Zdog.RoundedRect({
  addTo: lftBeer, 
  width: 25, 
  height: 50, 
  stroke: 20,
  cornerRadius: 7, 
  translate: {x:+fist.stroke -5},
  color: green,
  fill: true,
});

new Zdog.RoundedRect({ 
  addTo: lftBeer,
  width: 10, 
  height: 30, 
  stroke: 10, 
  cornerRadius: 1, 
  translate:{y: -50, x:+fist.stroke-5},
  color: green, 
  fill: true, 
});

  
  // update & render
  illo.updateRenderGraph();
  animate(); 


function animate() {
    if (isSpinning){
        illo.rotate.y += 0.003;
    }
    illo.updateRenderGraph();
    requestAnimationFrame(animate); 
}

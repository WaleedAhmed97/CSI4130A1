

function init() {
   
    var container = document.createElement('div');
    document.body.appendChild(container);
   
    renderer = new THREE.WebGLRenderer();
  
    renderer.setClearColor(new THREE.Color(0x333333));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);


    
    var scene = new THREE.Scene();

    

    var figure = new THREE.Group();
    scene.add(figure)

   var torsoGroup = new THREE.Group();
    figure.add(torsoGroup);


     //torso
    var geometry = new THREE.CylinderGeometry( 5, 5, 15,16);
    var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
    var torso = new THREE.Mesh( geometry, material );
    torso.position.set(0, 0, 0);
    torso.renderOrder = 998;
    torso.onBeforeRender = function( renderer ) { renderer.clearDepth(); };
    figure.add(torso);
    torsoGroup.add(torso);
  
    



    var HeadGroup = new THREE.Group();
    torsoGroup.add(HeadGroup);  
    
    //head
    var geometry = new THREE.SphereGeometry( 7, 25, 16 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var head = new THREE.Mesh( geometry, material );
    head.position.y=17;
    
    HeadGroup.add(head);
    

   
     //right eye
    var geometry = new THREE.SphereGeometry( 1.2, 25, 16 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    var rightEye = new THREE.Mesh( geometry, material );
    rightEye.renderOrder = 999;
    rightEye.onBeforeRender = function( renderer ) { renderer.clearDepth(); };
    rightEye.position.y=20;
    rightEye.position.x=3;
    HeadGroup.add(rightEye);


    //right inside eye 
    var geometry = new THREE.SphereGeometry( 0.8, 25, 16 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var rightinsideeye = new THREE.Mesh( geometry, material );
    rightinsideeye.renderOrder = 999;
    rightinsideeye.onBeforeRender = function( renderer ) { renderer.clearDepth(); };
    rightinsideeye.position.y=20.5;
    rightinsideeye.position.x=3;
    HeadGroup.add(rightinsideeye);

     //left eye 
    var geometry = new THREE.SphereGeometry( 1.2, 25, 16 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    var lefteye = new THREE.Mesh( geometry, material );
    lefteye.renderOrder = 999;
    lefteye.onBeforeRender = function( renderer ) { renderer.clearDepth(); };
    lefteye.position.y=20;
    lefteye.position.x=-3;
    HeadGroup.add(lefteye);


    //left inside eye 
    var geometry = new THREE.SphereGeometry( 0.8, 25, 16 );
    var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var leftinsideeye = new THREE.Mesh( geometry, material );
    leftinsideeye.renderOrder = 999;
    leftinsideeye.onBeforeRender = function( renderer ) { renderer.clearDepth(); };
    leftinsideeye.position.y=20.5;
    leftinsideeye.position.x=-3;
    HeadGroup.add(leftinsideeye);

     //nose
    var geometry = new THREE.SphereGeometry( 1, 25, 16 );
    var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var nose = new THREE.Mesh( geometry, material );
    nose.renderOrder = 999;
    nose.onBeforeRender = function( renderer ) { renderer.clearDepth(); };
    nose.position.y=16;
    HeadGroup.add(nose);


     //neck
    var geometry = new THREE.CylinderGeometry( 2, 2, 15,16);
    var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var neck = new THREE.Mesh( geometry, material );
    neck.position.y=3;

    HeadGroup.add(neck);



    

    var rightarmgroup=new THREE.Group();
    torsoGroup.add(rightarmgroup)
    //right arm
    var geometry = new THREE.CylinderGeometry( 2, 2, 20,25);
    var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var rightarm = new THREE.Mesh( geometry, material );
    rightarm.position.x=10;
    rightarm.position.y=8;
    rightarm.rotateZ(-1.2);

    rightarmgroup.add(rightarm);

    //right hand
    var geometry = new THREE.SphereGeometry( 3, 50,30);
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var righthand = new THREE.Mesh( geometry, material );
   
    righthand.position.x=21.3;
    righthand.position.y=12.3;
    rightarmgroup.add(righthand)

    var leftarmgroup=new THREE.Group();

    torsoGroup.add(leftarmgroup)

    //left arm
    var geometry = new THREE.CylinderGeometry( 2, 2, 20,25);
    var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var leftarm = new THREE.Mesh( geometry, material );
    leftarm.position.x=-10;
    leftarm.position.y=8;
    leftarm.rotateZ(1.2);

    leftarmgroup.add(leftarm);


    //left hand
    var geometry = new THREE.SphereGeometry( 3, 50,30);
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var lefthand = new THREE.Mesh( geometry, material );

    lefthand.position.x=-21.7;
    lefthand.position.y=12.3;
    leftarmgroup.add(lefthand)


    var leftleg= new THREE.Group();
    torsoGroup.add(leftleg);
    var rightleg= new THREE.Group();
    torsoGroup.add(rightleg);


    //right upper leg
    var geometry = new THREE.CylinderGeometry( 2, 2, 10,25);
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var rightuleg = new THREE.Mesh( geometry, material );
    rightuleg.position.x=7;
    rightuleg.position.y=-10;
    rightuleg.rotateZ(0.785398);
    rightleg.add(rightuleg);

    //left upper leg
    var geometry = new THREE.CylinderGeometry( 2, 2, 10,25);
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var leftuleg = new THREE.Mesh( geometry, material );
    leftuleg.position.x=-7;
    leftuleg.position.y=-10;
    leftuleg.rotateZ(-0.785398);
    leftleg.add(leftuleg);

    //leftfoot
     var geometry = new THREE.CylinderGeometry( 2, 2, 10,50);
    var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var leftfoot = new THREE.Mesh( geometry, material );
    leftfoot.rotateZ(1.5708);
    leftfoot.position.x=-15;
    leftfoot.position.y=-26
    leftleg.add(leftfoot)

     //right lower leg 
    var geometry = new THREE.CylinderGeometry( 2, 2, 15,25);
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var rightlleg = new THREE.Mesh( geometry, material );
    rightlleg.position.x=10;
    rightlleg.position.y=-20;
    rightleg.add(rightlleg);

    //left lower leg
    var geometry = new THREE.CylinderGeometry( 2, 2, 15,25);
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var leftlleg = new THREE.Mesh( geometry, material );
    leftlleg.position.x=-10;
    leftlleg.position.y=-20;
    leftleg.add(leftlleg);

    //rightfoot
    var geometry = new THREE.CylinderGeometry( 2, 2, 10,25);
    var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var rightfoot = new THREE.Mesh( geometry, material );
    rightfoot.rotateZ(-1.5708);
    rightfoot.position.x=15;
    rightfoot.position.y=-26
    rightleg.add(rightfoot)


    //top button
    var geometry = new THREE.SphereGeometry( 1, 25, 25 );
    var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var topb = new THREE.Mesh( geometry, material );
    topb.renderOrder = 999;
    topb.onBeforeRender = function( renderer ) { renderer.clearDepth(); };
    topb.position.y=3;
    torsoGroup.add(topb);

    
    
    //bottom button
    var geometry = new THREE.SphereGeometry( 1, 25, 25 );
    var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var bottomb = new THREE.Mesh( geometry, material );
    bottomb.renderOrder = 999;
    bottomb.onBeforeRender = function( renderer ) { renderer.clearDepth(); };
    bottomb.position.y=-4;
    torsoGroup.add(bottomb);






    Stringgroup= new THREE.Group();
    torsoGroup.add(Stringgroup)
    //String
    var geometry = new THREE.CylinderGeometry( .1, .1, 35,35);
    var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
    var rope = new THREE.Mesh( geometry, material );
    rope.position.x=0;
    rope.position.y=-10;
    Stringgroup.add(rope);


    //Marble
    var geometry = new THREE.SphereGeometry( 1, 25, 25);
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var mrble = new THREE.Mesh( geometry, material );
    mrble.position.y=-27
    Stringgroup.add(mrble);

    







    var aspectRatio = window.innerWidth / window.innerHeight;
    var width = 20;
    // Camera needs to be global
    camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1000);
    // position the camera back and point to the center of the scene
    camera.position.z = 100;

    camera.lookAt(scene.position);
    var camera_axis = new THREE.Vector3(-30,30,30).normalize(); // viewing axis




     renderer.render(scene, camera);
     




  // setup the control gui

  

   var controls = new function () {
    this.leftandright =0;
    this.upanddown=0;
    this.cameraturn=0;
    this.redraw = function () {
        };
    };

    var on = { add:function(){ console.log("on") }};
    var off = { add:function(){ console.log("off") }};


    var gui = new dat.GUI();
    gui.add(controls, 'leftandright', -0.25, 0.25).onChange(controls.redraw).name('Left/Right');
    gui.add(controls, 'upanddown', -0.25, 0.25).onChange(controls.redraw).name('Forward/Backward');
    

    gui.add(on,'add').name('Animation On');
    gui.add(off,'add').name('Animation Off');
    
    render();


 function render() {
    requestAnimationFrame(render);
    right = controls.leftandright
    backward =  controls.upanddown
    updown=controls.cameraturn
  
    
    HeadGroup.rotation.z=right;
    HeadGroup.rotation.x=backward;
    Stringgroup.rotation.x+=0.01

        // render using requestAnimationFrame - register function



        

        renderer.render(scene, camera);
        
   

        
    } }

 

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // If we use a canvas then we also have to worry of resizing it
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.onload = init;

// register our resize event function
window.addEventListener('resize', onResize, true);
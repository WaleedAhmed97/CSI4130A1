
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
   


     //torso
    var geometry = new THREE.CylinderGeometry( 7, 7, 15,25);
    var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
    var torso = new THREE.Mesh( geometry, material );

    figure.add(torso);

    //head
    var geometry = new THREE.SphereGeometry( 7, 25, 25 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.y=15;
    figure.add(sphere);


    //right arm
    var geometry = new THREE.CylinderGeometry( 3, 3, 15,25);
    var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
    var torso = new THREE.Mesh( geometry, material );
    torso.position.x=25;
    torso.position.y=10;
    figure.add(torso);

    //left arm
    var geometry = new THREE.CylinderGeometry( 3, 3, 15,25);
    var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
    var torso = new THREE.Mesh( geometry, material );
    torso.position.x=-25;
    torso.position.y=10;
    figure.add(torso);

    //right upper leg
    var geometry = new THREE.CylinderGeometry( 4, 4, 15,25);
    var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
    var torso = new THREE.Mesh( geometry, material );
    torso.position.x=25;
    torso.position.y=-10;
    figure.add(torso);

    //left upper leg
    var geometry = new THREE.CylinderGeometry( 4, 4, 15,25);
    var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
    var torso = new THREE.Mesh( geometry, material );
    torso.position.x=-25;
    torso.position.y=-10;
    figure.add(torso);

     //right lower leg 
    var geometry = new THREE.CylinderGeometry( 4, 4, 15,25);
    var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
    var torso = new THREE.Mesh( geometry, material );
    torso.position.x=25;
    torso.position.y=-40;
    figure.add(torso);

    //left lower leg
    var geometry = new THREE.CylinderGeometry( 4, 4, 15,25);
    var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
    var torso = new THREE.Mesh( geometry, material );
    torso.position.x=-25;
    torso.position.y=-40;
    figure.add(torso);


    //top button
    var geometry = new THREE.SphereGeometry( 1, 25, 25 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere = new THREE.Mesh( geometry, material );
    figure.add(sphere);

    
    
    //bottom button
    var geometry = new THREE.SphereGeometry( 1, 25, 25 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere = new THREE.Mesh( geometry, material );
    figure.add(sphere);
  

    //String
    var geometry = new THREE.CylinderGeometry( .1, .1, 35,35);
    var material = new THREE.MeshBasicMaterial( {color: 0x00FFFF} );
    var torso = new THREE.Mesh( geometry, material );
    torso.position.x=0;
    torso.position.y=-10;
    figure.add(torso);


    //Marble
    var geometry = new THREE.SphereGeometry( 1, 25, 25);
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.y=-27
    figure.add(sphere);









    var aspectRatio = window.innerWidth / window.innerHeight;
    var width = 20;
    // Camera needs to be global
    camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1000);
    // position the camera back and point to the center of the scene
    camera.position.z = 100;
    camera.lookAt(scene.position);




     renderer.render(scene, camera);
     render();

 function render() {
        // render using requestAnimationFrame - register function
        requestAnimationFrame(render);
   

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


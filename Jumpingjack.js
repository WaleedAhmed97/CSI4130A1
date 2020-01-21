// initialization of Three.js
function init() {
    // Check if WebGL is available see Three/examples
    // No need for webgl2 here - change as appropriate
    
    // add our rendering surface and initialize the renderer
    var container = document.createElement( 'div' );
    document.body.appendChild( container );
    // WebGL2 examples suggest we need a canvas
    // canvas = document.createElement( 'canvas' );
    // var context = canvas.getContext( 'webgl2' );
    // var renderer = new THREE.WebGLRenderer( { canvas: canvas, context: context } );
    var renderer = new THREE.WebGLRenderer( );
    // set some state - here just clear color
    renderer.setClearColor(new THREE.Color(0x333333));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    
    
    // All drawing will be organized in a scene graph
    var scene = new THREE.Scene();
    
    // show axes at the origin
    var axes = new THREE.AxesHelper(10);
    scene.add(axes);
    
    }
let container;
let camera, scene, renderer;
let uniforms, material, mesh, texture;


let mouseX = 0, mouseY = 0,
    lat = 0, lon = 0, phy = 0, theta = 0;

let width = window.innerWidth;
let height = window.innerHeight;

let startTime = Date.now();

init();
animate();


function init() {
  // Shader
  container = document.getElementsByClassName('baner__background')[0];
  camera = new THREE.Camera();
  camera.position.z = 1;
  scene = new THREE.Scene();
  texture = new THREE.TextureLoader().load('images/apple-971148_1280_blur.jpg');
  uniforms = {
    time:       { type: 'f',  value: 1.0 },
    resolution: { type: 'v2', value: new THREE.Vector2() },
    u_mouse:    { type: 'v2', value: new THREE.Vector2() },
    texture:    { type: 't',  value: texture}
  };
  material = new THREE.ShaderMaterial({
    uniforms, 
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent
  });
  mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(mesh);
  renderer = new THREE.WebGLRenderer();
  container.prepend(renderer.domElement);
  uniforms.resolution.value.x = width;
  uniforms.resolution.value.y = height;

  renderer.setSize(width, height);

  document.onmousemove = (e) => {
    uniforms.u_mouse.value.x = e.pageX;
    uniforms.u_mouse.value.y = height - e.pageY;
  };

  // Text animation

  TweenMax.fromTo(document.getElementsByClassName('baner__name'), 2, {
    opacity: 0,
    top: -50
  }, {
    opacity: 1,
    top: 0, 
    delay: 0.5
  });
  TweenMax.fromTo(document.getElementsByClassName('baner__text'), 3, {
    opacity: 0
  }, {
    opacity: 1,
    delay: 0.5
  });
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  let elapsedMillisecond = Date.now() - startTime;
  let elapsedSeconds = elapsedMillisecond / 1000.;
  uniforms.time.value = 60. * elapsedSeconds;
  renderer.render(scene, camera);
}
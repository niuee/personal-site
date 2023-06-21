import {useRef, useEffect} from 'react';
import {Color, PerspectiveCamera, Scene, WebGLRenderer, Clock, AmbientLight} from "three";
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader'


export default function TCanvas(){
    
    let animationFrameRef = useRef<number>();
    let animationMixerRef = useRef<THREE.AnimationMixer>(null);
    let clockRef = useRef<THREE.Clock>(new Clock());
    let cameraRef = useRef<THREE.Camera>();
    let sceneRef = useRef<THREE.Scene>();
    let gltfLoaderRef = useRef<GLTFLoader>();

    useEffect(setup, []);
    function setup(){
        const scene = new Scene();
        sceneRef.current = scene;
        scene.background = new Color(0x3a3a3a);
        const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        camera.position.x = 0.007378;
        camera.position.y = -0.089091;
        camera.position.z = 2;
        cameraRef.current = camera;
        const renderer = new WebGLRenderer({antialias: true, canvas: document.querySelector("#three")});
        renderer.setSize( window.innerWidth, window.innerHeight );
        const loader = new GLTFLoader();
        gltfLoaderRef.current = loader;
        window.addEventListener("test", ()=>{
            console.log("camera reached position");
        })

        const light = new AmbientLight( 0xffffff ); // soft white light
        scene.add( light );


        function animate() {
            if (animationMixerRef.current != null) {
                animationMixerRef.current.update(clockRef.current.getDelta());
            }
            animationFrameRef.current = requestAnimationFrame( animate );

            renderer.render( scene, cameraRef.current );
        }

        animate();
        return ()=>{
            cancelAnimationFrame(animationFrameRef.current);
        }
    };


    return (
        <canvas id="three" style={{position: 'fixed'}}></canvas>
    );
}

// FUTURE REf
        // gltfLoaderRef.current.load("/intro2.gltf", function(gltf){
        //     animationMixerRef.current = new THREE.AnimationMixer(gltf.scene);
        //     const clips = gltf.animations;
        //     clips.forEach((clip)=>{

        //         let animation = animationMixerRef.current.clipAction(clip);
        //         animation.setLoop(THREE.LoopOnce, 0);
        //         animation.clampWhenFinished = true;
        //         animation.play();
        //     })
        //     sceneRef.current.add(gltf.scene);
        //     setInitialDisplay("none");
        //     let tl = gsap.timeline().to(cameraRef.current.position, {
        //         z: 5,
        //         duration: 3,
        //     }).to(cameraRef.current.position, {
        //         z: -2,
        //         duration: 5,
        //     }).then(()=>{
        //         console.log("Transition complete");
        //     })
            
        //     cameraRef.current.lookAt(new THREE.Vector3(0, 0, -50));
        // })

        // Another block
        // let animationMixer = new THREE.AnimationMixer(modelRef.current.scene);
        // animationMixerRef.current = animationMixer;
        // const clips = modelRef.current.animations;
        // clips.forEach((clip)=>{
        //     let animation = animationMixer.clipAction(clip);
        //     animation.setLoop(THREE.LoopOnce, 0);
        //     animation.clampWhenFinished = true;
        //     animation.play();
        // })
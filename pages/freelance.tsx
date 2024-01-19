/*

<script> 
    import LogoSVG from "@/components/svg/LogoSVG.vue";
    import MiniMenu from "@/components/MiniMenu.vue";
    import coords from "@/data/coords.json";
    import { gsap } from 'gsap'
    import {
        PlaneGeometry,
        BufferAttribute,
        Raycaster,
        Scene,
        PerspectiveCamera,
        Group,
        Clock
    } from "three";
    import { CSS3DObject, CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer"
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
    import Footer from "@/components/Footer.vue";
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);


    const cube = new Group();

    export default {
        data() {
            return {
                animation: 0,
                show:true,
            }
        },
        methods: {
            increment: function() {
                this.animation++;
                console.log(this.animation)

                let rotations;
                switch(this.animation) {
                    case 0:
                        rotations = {duration: 1, x: 0, y: 0};
                        break;
                    case 1:
                        rotations = {duration: 1, x: -1.57, y:0};
                        break;
                    case 2:
                        rotations = {duration: 1, y: 1.57, x:0};
                        break;
                    case 3: 
                        rotations = {duration: 1, x: 0, y: -1.57};
                        break;
                    case 4:
                        rotations = {duration: 1, x: 0, y: -3.14}
                        break;
                    case 5:
                        rotations = {duration: 1, x: 1.57, y:0}
                        break;
                    default:
                        rotations = {duration: 2, x: 0, y:0}; 
                        break;
                }

                gsap.to(cube.rotation,  rotations)

                if(this.animation == 6) this.reset();
            },
            reset: function() {
                this.animation = 0;
            },
            toggleFade: function() {
                this.show = !this.show;
            }
        },
        components: {
            LogoSVG,
            MiniMenu,
            Footer,
        },
        mounted() {

            //toggle click to avoid display bug
            this.toggleFade();

            const clock = new Clock();
            const scene = new Scene();
            // Determines the position from which the user "sees"
            const camera = new PerspectiveCamera(
            75,
            innerWidth / innerHeight,
            0.1,
            1000
            );
            // Converts 3D to 2D via calculations
            const renderer = new CSS3DRenderer();
            let body = document.querySelector('body');
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById( 'three-container' ).appendChild( renderer.domElement );

            const container = this.$el.querySelector('#d-container')
            const panel3d = [];


            // const logo = this.$el.querySelector("#first-side");
            // const logo3 = new CSS3DObject(logo);
            // logo3.position.z = -5;  
            // scene.add(logo3);


            [...container.children].map((panel, i) => {
                panel3d[i] = document.createElement('div');
                panel3d[i].className = 'panel';
                panel3d[i].style.backgroundColor = 'rgba(127,0,127,0.8)'; 
                const details = document.createElement( 'div' );
                details.className = 'details';
                details.innerHTML = panel.innerHTML;
                panel3d[i].appendChild(details);
                panel3d[i].addEventListener('pointerup', this.increment)

                const objectCSS = new CSS3DObject( panel3d[i] );
                let scaler = 100;
                objectCSS.position.set(coords.data[i].tx*scaler, coords.data[i].ty*scaler, coords.data[i].tz*scaler);
                objectCSS.rotateX(coords.data[i].rx)
                objectCSS.rotateY(coords.data[i].ry)
                cube.add( objectCSS );
            })

            scene.add(cube);

            // const controls = new OrbitControls( camera, renderer.domElement );
            // controls.movementSpeed = 50;
            // controls.lookSpeed = 0.05;

            camera.position.z = 500;

            function animate() {
				requestAnimationFrame( animate );

				// cube.rotation.x += 0.01;
				// cube.rotation.y += 0.01;

				renderer.render( scene, camera );
                // controls.update( clock.getDelta() );
			};

			animate();

            document.querySelector('div.panel').addEventListener('click', ()=> {
                console.log('click');
            })
        }
    }
</script>

<template>
    <!-- <Layout> -->
        <div>
            <!-- menu bar -->
            <MiniMenu @toggleRender="toggleFade" />
        <div id="three-container">
        </div>
        <transition name="fade">
            <div id="d-container" v-if="show">
                <div id="first-side">
                        <LogoSVG id="first-side" fill="#ffffff"/>
                </div>
                <div id="2nd-side"> 
                    I’m a freelance <br>creative technologist<br>
                    working with<br> <a href="https://justinkuhn.media/wearable-mushroom-log/">3D Generative Art</a>,<br>
                     <a href="https://justinkuhn.media/planet-echo/">Audio</a>, & 
                     <a href="https://justinkuhn.media/digital-education-and-learning-technologies-applications-delta/">WebXR</a>
                </div>
                <div id="3rd-side">
                    I make websites,<br> immersive experiences,<br> sound & video
                </div>
                <div id="4th-side">
                    Based in <br>London, UK 
                </div>
                <div id="5th-side">
                    Book a <br>consultation <a href="https://calendly.com/justintkuhn/consultation">here</a>
                </div>
                <div id="sixth-side">
                    Built with Gridsome (Vue 2), <br> Three.js, and GreenSock. <br><a href="https://github.com/justinkuhn/darkfolio">Source</a>
                </div>
            </div>
        </transition>
        <Footer />
    </div>
    <!-- </Layout> -->
</template>

<style lang="scss" >

#three-container {
    z-index: -10;
    position: absolute;
    top: 0px;
}

#d-container {
    position: relative;
    display: grid;
    grid-template-rows: repeat(6, [row-start] 33% [row-end]);
    padding: 20px;
}

#d-container > div {
    background-color: rgba(0,0,0, 0.4);
    display: inline;
    padding-top: 40px;
    margin: 10px;
    height: auto;
    font-size: 25px;
    font-family: 'Optima';
    line-height: 35px;
    text-align:center;
    vertical-align: middle;

    box-shadow: 0px 0px 12px rgba(255,0,255,0.75);
    backdrop-filter: blur(10px);
}

#d-container div:hover {
    box-shadow: 0px 0px 12px rgba(255,0,255,0.75);
    border: 1px solid rgba(255,100,255,0.75);
}

#svg-container {
    width: 100%;
    margin: auto;
    display: block;
}

#first-side svg {
    width: 250px;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align:center;
    display: block;
}

.panel {
    width: 200px;
    height: 200px;
    box-shadow: 0px 0px 60px rgba(217, 70, 236, 0.5);
    border: 1px solid rgba(35, 9, 40, 0.25);
    text-align: center;
    line-height: normal;
    cursor: default;
}

.panel:hover {
    box-shadow: 0px 0px 12px rgba(255,0,255,0.75);
    border: 1px solid rgba(255,100,255,0.75);
}

.panel .details {
    position: absolute;
    bottom: 50px;
    left: 0px;
    right: 0px;
    font-size: 20px;
    text-align: center;
    color: rgba(255,255,255,0.75);
    font-family: 'Optima';
}

.panel svg {
    width: 180px;
    height: 180px;
    position: absolute;
    left:10px;
    right:10px;
    bottom:-40px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8  {
    opacity: 0;
}

#d-container a:link {
    color: rgb(255, 100, 255);
}

#d-container a:visited {
    color: rgb(255, 200, 255);
}

@media (min-width: 700px) {
    #d-container {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 100%;
    } 
}

@media  (min-width: 1100px) {
    #d-container {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: 
            "header header header"
            "main main sidebar"
            "footer footer footer";
        height: 100%;

    }

    #d-container > div {
        font-size: 30px;
        text-align: left;
        padding: 30px;
        margin: 15px;
    }
}
</style>

*/
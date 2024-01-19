/*

<script>
    import AudioSVG from './svg/AudioSVG.vue';
    import AudioOffSVG from './svg/AudioOffSVG.vue'
    import MenuSVG from './svg/MenuSVG.vue';
    import CloseSVG from './svg/CloseSVG.vue';
    import Dropdown from './Dropdown.vue';

    export default {
        data() {
            return {
                three: true,
                audio: false,
                menuOpen: false,
                show:true,
            }
        },
        components: {
            AudioSVG,
            CloseSVG,
            MenuSVG,
            AudioOffSVG,
            Dropdown,
        },
        methods: {
            toggleAudio: function() {
                //get audio status

                console.log(this.audio);
                if(this.audio) {
                    //turn off audio
                    this.audio = false;
                } else {
                    //turn on audio
                    this.audio = true;
                }
                // vm.$forceUpdate();
            },
            toggleRender: function() {
                //get render status
                console.log(this.three);
                if(this.three) {
                    document.querySelector("#render-toggle").innerHTML = "2D";
                    this.three = false;
                } else {
                    document.querySelector("#render-toggle").innerHTML = "3D";
                    this.three = true;
                }
                //toggle 2d/3d 
                this.$emit('toggleRender')
            },
            toggleHamburger: function() {
                if(this.menuOpen) {
                    this.$refs.dropdown.toggleFade();
                    this.menuOpen = false;
                } else {
                    this.$refs.dropdown.toggleFade();
                    this.menuOpen = true;
                }
            }

        }
    }
</script>

<template>
        <div id="mini-menu">
            <!-- <div class="menu-left" @click="toggleAudio">
                <AudioSVG v-show="this.audio" fill="white" />
                <AudioOffSVG v-show="!this.audio" fill="white" />
            </div> -->
            <div class="menu-left" id="render-toggle" @click="toggleRender">3D</div>
            <div id="flex-spacer"></div>
            <div class="menu-svg" @click="toggleHamburger">
                <CloseSVG v-show="this.menuOpen" fill="white"/>
                <MenuSVG v-show="!this.menuOpen" fill="white"/>
            </div>
            <Dropdown ref="dropdown"/>
        </div>
</template>

<style scoped>
.menu-svg {
    height: 30px;
    width: 30px;
    margin-left: 10px;
    margin-right: 10px;
    margin: auto;
    flex-grow: 1;
    max-width: 150px;
    cursor: pointer;
}

svg {
    width: 30px;
    height: 30px;
}
#mini-menu {
    z-index: 20;
    background-color: rgba(0,0,0,1);
    height: 60px;
    width: 100vw;
    top: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    text-align:center;
}
 .menu-left {
    height: 30px;
    width: 30px;
    flex-grow: 0.5;
    max-width: 100px;
    cursor: pointer;
 }

 #render-toggle {
    color: white;
    font-size: 30px;
    height: 35px;
    width: 35px;
    flex-grow: 0.5;
 }

 #flex-spacer {
    flex-grow: 3;
 }

</style>

*/
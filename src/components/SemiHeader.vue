<script setup>
import { RouterLink } from "vue-router";
import LaptopImage from "./LaptopImage.vue";
</script>

<template>
    <div class="semi-header-main-container">
        <div class="semi-header-main-container-semi-container">
            <div class="semi-header-main-container-semi-container-text">
                <p class="semi-header-main-container-semi-container-text-p">
                    Hey, I'm <b class="intro-name">Ra<b style="color: rgb(248, 2, 2);text-transform:uppercase;">ch</b>a<b style="color: rgb(248, 2, 2);text-transform:uppercase;">el</b></b> and I love building beautiful websites
                </p>
                <RouterLink to="/stack" class="semi-header-main-container-semi-container-text-btn-link">
                    <button class="semi-header-main-container-semi-container-text-btn">My stack</button>
                </RouterLink>
            </div>
            <LaptopImage class="laptop-image"/>
        </div>
    </div>


</template>
<style scoped>
.intro-name:hover{
    cursor:pointer;
    text-transform:uppercase;
    transition:all .5s;
}
.semi-header-main-container-semi-container{
    display: flex;
    justify-content: space-between;
}
.semi-header-main-container-semi-container-text{
    margin:auto 0;
    width:20vw;
}
.semi-header-main-container-semi-container-text-p{
    color:aliceblue;
    font-size: xx-large;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
}
.semi-header-main-container-semi-container-text-btn-link{
    text-decoration: none;
}
.semi-header-main-container-semi-container-text-btn{
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    padding:10px 30px;
    font-size:16px;
    background-color: hsl(0, 0%, 100%);
    color:hsl(0, 0%, 0%);
    border: 2px solid hsl(0, 0%, 0%);
}
.semi-header-main-container-semi-container-text-btn:hover{
    cursor:pointer;
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
    border: 2px solid hsl(0, 0%, 100%);
    transform:scaleX(0.98);
    transition: all .5s;
}
.semi-header-main-container{
    padding: 0 4vw;
    display:flex;
    place-items: center;
    justify-content: center;
}

@media screen and (max-width:950px) {
    .semi-header-main-container{
        padding:2vh 4vw;
    }
    .semi-header-main-container-semi-container{
        display: flex;
        flex-direction: column-reverse;
    }
    .semi-header-main-container-semi-container-text{
        width:100%;
        text-align:center;
    }
}

</style>
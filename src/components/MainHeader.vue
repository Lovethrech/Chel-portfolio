<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

import BrandName from "./BrandName.vue";
import DropDownMenu from "./DropDownMenu.vue";

const showMenuBar = ref(false);
const showMenu = ref(false);
const showDropDown = () => {
    if (showMenuBar.value == false) {
        showMenu.value = true;
        showMenuBar.value = true;
    }
    else {
        showMenu.value = false;
        showMenuBar.value = false;
    }
}
</script>

<template>
    <div class="main-header-main-container">
        <BrandName class="brand-name"></BrandName>
        <ul class="main-header-main-container-nav-list">
            <RouterLink to="/" class="main-header-main-container-nav-link"><li class="main-header-main-container-nav">Home</li></RouterLink>
            <RouterLink to="/projects" class="main-header-main-container-nav-link"><li class="main-header-main-container-nav">Project</li></RouterLink>
            <RouterLink to="/stack" class="main-header-main-container-nav-link"><li class="main-header-main-container-nav">Service</li></RouterLink>
            <RouterLink to="/contact" class="main-header-main-container-nav-link"><li class="main-header-main-container-nav-contact">Contact</li></RouterLink>
        </ul>  
        <div @click="showDropDown()"  class="menu-bar">
            <i v-if="!showMenuBar" class='bx bx-menu'></i>
            <i v-else  class='bx bx-x'></i>
        </div>
        <div class="dropdown">
            <DropDownMenu v-if="showMenu"></DropDownMenu>
        </div>                   
    </div>
</template>
<style scoped>
.menu-bar {
    font-size:30px;
    display: none;
    margin:auto 0;
    color:hsl(0, 100%, 100%);
    
}
.menu-bar:hover{
    transform:scale(0.9);
    transition: all .5s;
}
.dropdown{
    position: absolute;
    top:10vh;
    right:0;
    margin:0 8vw 0 0;
}
.dropdown{
    display:none;
}
.brand-name{
    margin:auto 0;
}
.main-header-main-container{
    padding:1vh 5vw;
    display:flex;
    justify-content:space-between;
}
.main-header-main-container-nav-list{
    font-family: 'Josefin Sans', sans-serif;
    display:flex;
    justify-content:space-between;
    gap:3vw;
}

.main-header-main-container-nav-link{
    text-decoration:none;
    margin:auto 0;
    outline:none;
}
.main-header-main-container-nav{
    color: hsl(0, 0%,100%);
    list-style:none;
    margin:auto 0;
}
.main-header-main-container-nav-contact{
    padding:2vh 2vw;
    font-size:20px;
    background-color:hsl(0, 0%, 0%);
    color:hsl(0, 0%, 100%);
    border:2px solid hsl(0, 0%, 100%);
    list-style:none;
}
.main-header-main-container-nav-contact:hover{
    background-color:hsl(0, 0%, 100%);
    color:hsl(0, 0%, 0%);
    border:2px solid hsl(0, 0%, 0%);
    transition: all .5s;
}

.main-header-main-container-nav:hover{
    cursor:pointer;
    color: hsl(0, 98%, 49%);
    transition: all .6s;
}


@media screen and (max-width:850px){
    .main-header-main-container-nav-list{
        display:none;
    }
    .main-header-container{
        padding:2vh 8vw;
    }
    .dropdown{
        display:block;
    }
    .menu-bar{
        display: block;
    }
}
</style>
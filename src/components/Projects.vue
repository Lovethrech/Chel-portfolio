<script setup>
import projectPageProjects from '../data/project-page-projects.json';
</script>

<template>
    <hr class="hr">
    <h2 class="project-main-container-h2">Projects</h2>
    <hr class="hr">
    <div class="project-main-container">
        <div 
            v-for="project in projectPageProjects" :key="project.id" 
            class="project-main-container-semi-container"
        >
            <a :href="project.link" class="project-main-container-semi-container-link" target="_blank">
                <div class="project-main-container-image-container">
                    <img :src="project.image" :alt="project.title" class="project-main-container-image"/>
                </div>
                <div class="project-main-container-text-container">
                    <p class="project-name"> {{ project.title }}</p>
                </div>
            </a>
        </div>
    </div>
    
    
</template>
<style scoped>
.hr{
    margin: 0 5vw;
}
.project-main-container{
    padding:2vh 5vw;
    margin:2vh 0;
    display:flex;
    gap:20px;
    flex-wrap: wrap;
    justify-content:center;
}
.project-main-container-semi-container-link{
    text-decoration:none;
}
.project-main-container-semi-container-link:hover{
    cursor:pointer;
    transform:scale(0.98);
    transition:all .5s;
}
.project-main-container-semi-container{
    position:relative;
    outline:0;
    border-radius: 20px;
}
.project-main-container-image{
    width:50vh;
    height:250px;
    border-radius: 20px;
}
.project-main-container-text-container{
    position:absolute;
    bottom:0;
    background-color:hsla(0, 0%, 0%, 0.445);
    width:40vh;
    color:hsl(0, 0%, 100%);
    padding:2px 10px;
    border-radius: 0 10px 10px 0;
    font-size:20px;
    text-align:left;
    text-transform:uppercase;
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}
.project-main-container-text-container:hover{
    background-color:hsla(0, 0%, 0%, 0.668);
    transition: all .5s;
}

.project-main-container-h2{
    color:hsl(0, 0%, 100%);
    text-transform: uppercase;
    font-size: 60px;
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    text-align: center;
}
@media screen and (max-width:950px) {
    .project-name{
        font-size: 16px;
    }
}
@media screen and (max-width:450px){
    .project-main-container-image{
        width:90vw;
    }
    .project-main-container-text-container{
        width:90%;
    }
    .project-main-container-h2{
        font-size:30px;
    }
}
</style>
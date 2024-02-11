<script setup>
import {ref} from "vue";
import landingPageProjects from "../data/landing-page-projects.json";

const firstProjectWorkRadioBtn = ref("<i class='bx bx-radio-circle-marked' ></i>");
const secondProjectWorkRadioBtn = ref("<i class='bx bx-radio-circle'></i>");
const thirdProjectWorkRadioBtn = ref("<i class='bx bx-radio-circle'></i>");
const projectMarginLeft = ref("-12vw");


const slideProject = () => {

    if (secondProjectWorkRadioBtn.value === "<i class='bx bx-radio-circle'></i>") {
        firstProjectWorkRadioBtn.value = "<i class='bx bx-radio-circle'></i>"
        secondProjectWorkRadioBtn.value = "<i class='bx bx-radio-circle-marked' ></i>"
        thirdProjectWorkRadioBtn.value = "<i class='bx bx-radio-circle'></i>"
        projectMarginLeft.value = "-210vw"
    }
    else if(thirdProjectWorkRadioBtn.value === "<i class='bx bx-radio-circle'></i>") {
        firstProjectWorkRadioBtn.value = "<i class='bx bx-radio-circle'></i>"
        secondProjectWorkRadioBtn.value = "<i class='bx bx-radio-circle' ></i>"
        thirdProjectWorkRadioBtn.value = "<i class='bx bx-radio-circle-marked' ></i>"
        projectMarginLeft.value = "-412vw"
    }
    else {
        firstProjectWorkRadioBtn.value = "<i class='bx bx-radio-circle-marked ' ></i>"
        secondProjectWorkRadioBtn.value = "<i class='bx bx-radio-circle'></i>"
        thirdProjectWorkRadioBtn.value = "<i class='bx bx-radio-circle'></i>"
        projectMarginLeft.value = "-12vw"
    }
    
}

</script>

<template>
    <div class="project-overview-main-container">
        <h2 class="project-overview-title">Project overview</h2>
        <div class="project-work-main-container">
            <div
                v-for="project in landingPageProjects" 
                :key="project.id"
                class="project-work"
            >
                <a :href="project.link">
                    <div class="project-work-image-container">
                        <img 
                            :src="project.image"
                            :alt="project.title" 
                            class="project-work-image"
                        >
                    </div>
                    <div class="project-work-text-container">
                        <p class="project-work-title">
                            {{ project.title }}
                        </p>
                        <p class="project-work-description">
                            {{ project.description }}
                        </p>
                    </div>

                </a>
            </div>
            
        </div>
        <div class="project-work-radio-btn-main-container" >
            <div
                class="project-work-radio-btn-container"
                v-html="firstProjectWorkRadioBtn" 
                @click="slideProject()"
            >
            </div>
            <div 
                class="project-work-radio-btn-container" 
                v-html="secondProjectWorkRadioBtn" 
                @click="slideProject()" 
            >
            </div>
            <div
                class="project-work-radio-btn-container" 
                v-html="thirdProjectWorkRadioBtn" 
                @click="slideProject()"
            >
            </div>
        </div>
        <RouterLink to="/projects" class="about-section-main-container-text-container-btn-link">
            <button class="about-section-main-container-text-container-btn">Go To Projects</button>
        </RouterLink>
    </div>
</template>
<style scoped>
.project-work-radio-btn-container{
    display:none;
}
.project-overview-main-container{
    padding:20vh 4vw;
    background:url("../assets/Images/bg-particles.png") center/auto no-repeat;
}
.project-overview-title{
    color:hsl(0, 0%, 100%);
    font-size: 4vw;
    text-align:center;
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
}
.project-work-main-container{
    display: grid;
    justify-content: space-between;
    gap:2vw;

}
.project-work a{
    text-decoration: none;
    color: hsl(0, 0%, 100%);
}

.project-work-image{
    width:100%;
    height:250px;
}
.project-work{
    text-align: justify;
    background-color: hsl(0, 0%, 8%);
    border: 2px solid hsl(0, 0%, 8%);
}
.project-work-title:hover{
    cursor:pointer;
    width:70%;
    transition: all .7s;

}

.project-work-title{
    text-transform:uppercase;
    background-color: hsl(0, 0%, 100%);    
    color:hsl(0, 0%, 0%);
    padding:2px 10px;
    border-radius: 0 10px 10px 0;
    width:60%;
}
.project-work-description{
    padding: 2px 20px;
    color: hsl(0, 19%, 93%);
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: italic;
}
.project-work:first-child{
    grid-column:1;
    grid-row: 1;
    transform:scaleY(0.95);
}
.project-work:nth-child(2){
    grid-column:2;
    grid-row: 1;
    transform:scaleY(1.02);
}
.project-work:last-child{
    grid-column:3;
    grid-row: 1;
    transform:scaleY(0.95);
}
.project-work-radio-btn-main-container{
    display: flex;
    justify-content: center;
    margin:2vh 0;
}
.project-work-radio-btn-container{
    color: hsl(0,100%, 100%);

}
.about-section-main-container-text-container-btn-link{
    text-decoration: none;
}
.about-section-main-container-text-container-btn{
    margin:4vh 0 0 0;
    width:100%;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: italic;
    padding:10px 30px;
    font-size:16px;
    background-color: hsl(0, 0%, 0%);
    color:hsl(0, 0%, 100%);
    border: 2px solid hsl(0, 0%, 100%);
}
.about-section-main-container-text-container-btn:hover{
    cursor:pointer;
    transform:scale(0.98);
    transition: all .5s;
    
}
@media screen and (max-width:959px) {
    .project-overview-main-container{
        overflow-x: hidden;
    }
    .project-work-main-container{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: nowrap;
        width:300vw;
    }
    .project-work-radio-btn-container{
        display:block;
    }
    .project-work{
        width:60vw;
        margin-left: v-bind("projectMarginLeft")
    }
    .project-work:first-child{
        transform:scaleY(1);
    }
    .project-work:nth-child(2){
        transform:scaleY(1);
    }
    .project-work:last-child{
        transform: scaleY(1);
    }
    .project-work-image{
        width:100%;
        height: 250px;
    }
}

@media screen and (max-width:600px) {
    .project-work{
        width:90vw;
        margin-left: v-bind("projectMarginLeft")
    }
    .project-work-image{
        width:100%;
        height: 250px;
    }
}
</style>

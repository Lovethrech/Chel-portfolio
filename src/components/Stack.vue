<template>
    <div class="stack-main-container">
        <hr class="hr">
        <h2 class="stack-main-container-h2">Skills</h2>
        <hr class="hr">
        <div class="skills-container">
            <div class="skills-container-prog-lang-container">
                <h3 class="skills-container-prog-lang">HTML</h3>
                <p class="skills-container-prog-lang-years">4 years of experience</p>
            </div>

            <div class="skills-container-prog-lang-container">
                <h3 class="skills-container-prog-lang">CSS</h3>
                <p class="skills-container-prog-lang-years">4 years of experience</p>
            </div>

            <div class="skills-container-prog-lang-container">
                <h3 class="skills-container-prog-lang">Javascript</h3>
                <p class="skills-container-prog-lang-years">4 years of experience</p>
            </div>

            <div class="skills-container-prog-lang-container">
                <h3 class="skills-container-prog-lang">Accessibility</h3>
                <p class="skills-container-prog-lang-years">3 years of experience</p>
            </div>

            <div class="skills-container-prog-lang-container">
                <h3 class="skills-container-prog-lang">Vue</h3>
                <p class="skills-container-prog-lang-years">3 years of experience</p>
            </div>

            <div class="skills-container-prog-lang-container">
                <h3 class="skills-container-prog-lang">LESS</h3>
                <p class="skills-container-prog-lang-years">4 years of experience</p>
            </div>
        </div>
        <hr class="hr"><br>
    </div>
</template>
<style scoped>
.stack-main-container-h2{
    color:hsl(0, 0%, 100%);
    text-transform: uppercase;
    font-size: 60px;
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    text-align: center;
}
.hr{
    margin: 0 5vw;
}
.stack-main-container{
    color:hsl(0, 0%, 100%);
}
.skills-container{
    padding:2vh 5vw;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-size:20px;
    font-style: normal;
}
.skills-container-prog-lang-container{
    width:50%;
}

.skills-container-prog-lang-years{
    color:rgb(157, 157, 157);
}

@media screen and (max-width:950px) {
    .skills-container-prog-lang-container{
        width:100%;
    }
}
@media screen and (max-width:450px){
    .stack-main-container-h2{
        font-size:30px;
    }
}
</style>
<template>
    <div class="mini-about-project-main-container">
        <div class="mini-about-project-first-container">
            <img src="../assets/Images/sunnyside.jpg" alt="" class="mini-images">
        </div>
        <div class="mini-about-project-second-container">
            <img src="../assets/Images/news-homepage.jpg" alt="" class="mini-images">
            <img src="../assets/Images/project-tracking-intro-page.jpg" alt="" class="mini-images"> 
        </div>
    </div>

</template>
<style scoped>
.mini-about-project-main-container{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    gap:1vw;
}
.mini-about-project-first-container{
    display:flex;
    place-items: center;
}
.mini-images{
    width:100px;
    box-shadow: -10px 10px 5px hsl(0, 5%, 16%);
}
</style>
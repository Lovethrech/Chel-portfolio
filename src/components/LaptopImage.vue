<template>
    <div class="laptop-image-main-container">
        <div class="laptop-image-center-main-container">
            <div class="laptop-image-main-container-first-section-container">
                <div class="laptop-image-main-container-first-section">
                </div>
            </div>
            <div class="laptop-image-main-container-second-section">
            </div>
        </div>
    </div>

</template>

<style scoped>
.laptop-image-main-container{
    display:flex;
    place-items: center;
    justify-content: center;
    width:50vw;
}
.laptop-image-main-container-first-section-container{
    padding: 0 4vw; 
    margin:0 auto;
}
.laptop-image-main-container-first-section{
    background: url("../assets/Images/intro-sunnyside.jpg") top center/auto no-repeat;
    background-size: cover;
    width:500px;
    height:300px;
    border:30px 10px 10px 10px;
    border-style: solid;
    border-color:hsl(0, 0%, 100%);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
}
.laptop-image-main-container-second-section{
    background-color: hsl(0, 0%, 100%);
    height:20px;
    border-radius: 0 0 20px 20px;
}
@media screen and (max-width:1026px) and (min-width: 951px){
    .laptop-image-main-container-first-section{
        width:400px;
    }
}
@media screen and (max-width:950px)  {
    .laptop-image-main-container{
        width:100vw;
    }
}
@media screen and (max-width:585px) {
    .laptop-image-main-container-first-section{
        width:300px;
        height:200px;
    }
}
@media screen and (max-width:380px){
    .laptop-image-main-container-first-section{
        width:250px;
        height:200px;
    }
}
</style>
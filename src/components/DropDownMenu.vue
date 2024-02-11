<template>
    <div class="dropdown-main-container">
        <ul class="dropdown-main-container-nav-list">
            <RouterLink to="/" class="dropdown-main-container-nav-link"><li class="main-header-main-container-nav">Home</li></RouterLink>
            <RouterLink to="/projects" class="dropdown-main-container-nav-link"><li class="main-header-main-container-nav">Project</li></RouterLink>
            <RouterLink to="/stack" class="dropdown-main-container-nav-link"><li class="main-header-main-container-nav">Service</li></RouterLink>
            <RouterLink to="/contact" class="dropdown-main-container-nav-link-contact"><li class="main-header-main-container-nav">Contact</li></RouterLink>
        </ul>
    </div>
</template>

<style scoped>
.dropdown-main-container-nav-link-contact{
    text-decoration:none;
    padding:1vh 2vw;
    width:100%;
    font-size:20px;
    font-weight:700;
    background-color:hsl(0, 0%, 100%);
    color:hsl(0, 0%, 0%);
    border:2px solid hsl(0, 0%, 0%);
    list-style:none;
}
.dropdown-main-container-nav-link-contact:hover{
    background-color:hsl(0, 0%, 0%);
    color:hsl(0, 0%, 100%);
    border:2px solid hsl(0, 100%, 99%);
    transition: all .5s;
}

.dropdown-main-container-nav-list{
    background-color: hsl(0, 6%, 6%);
    padding:6vh 0;
    margin: 0;
    list-style: none;
    color:hsl(0, 0%, 100%);
    display:flex;
    flex-direction:column;
    text-align:center;
    padding:30px 100px;
    font-family: 'Josefin Sans', sans-serif;
    justify-content:space-between;
    gap:3vw;
    margin:auto 0;
    
}


.dropdown-main-container-nav-link{
    text-decoration:none;
    color:hsl(0, 0%, 100%);
}
.dropdown-main-container-nav{
    color: hsl(0, 0%, 0%);
    list-style:none;
}
.dropdown-main-container-nav:hover{
    cursor:pointer;
    color: hsl(0, 98%, 49%);
    transition: all '6s;'
}
@media screen and (max-width:350px) {
    .head-nav-list{
        padding:3vh 10vw;
        max-width:200px;
    }
}
</style>
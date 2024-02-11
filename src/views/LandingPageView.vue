<script setup>
import MainHeader from "../components/MainHeader.vue";
import SemiHeader from "../components/SemiHeader.vue";
import ProjectOverview from "../components/ProjectOverview.vue";
import AboutSection from "../components/AboutSection.vue";
import Contact from "../components/ContactSection.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <div class="landing-page-main-container">
        <div class="head-content">
            <MainHeader></MainHeader>
            <SemiHeader></SemiHeader>
        </div>
        <div class="main-section">
            <ProjectOverview></ProjectOverview>
            <Contact></Contact>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <div class="main-container">
        <NavBar />
        <div class="dashboard-wrapper">
            <h1>Hello</h1>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    width: 100%;
    height: 100%;
}

.dashboard-wrapper {
    display: flex;
    padding: 8px;
}
</style>
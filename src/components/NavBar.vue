<script setup></script>

<template>
    <header>
        <nav class="flex h-auto w-auto bg-white shadow-lg rounded-lg justify-between md:h-16">
            <div class="flex w-full justify-between mx-6">
                <div
                    class="flex font-semibold px-6 w-1/2 md:w-1/5 md:px-3 md:items-center md:justify-center transition ease-out duration-300">
                    Dashboard
                </div>
                <div class="transition ease-in-out duration-300 flex flex-col w-full h-auto md:hidden">
                    <div class="flex flex-col items-center justify-center gap-2">
                        <a href="">Home</a>
                        <a href="">Products</a>
                        <a href="">Contact</a>
                        <a href="">About Us</a>
                    </div>
                </div>
                <div class="hidden items-center justify-evenly font-semibold md:flex w-1/4 gap-2">
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">Contact</a>
                    <a href="">About Us</a>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    color: black;
}

a {
    color: black;
    font-weight: 600;
}
</style>
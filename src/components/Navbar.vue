<script setup>
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="absolute top-4 left-0 right-0 w-full flex z-10 text-white items-center gap-20  mx-6 py-4 bg-transparent border-b-2 border-neutral-400">
        <RouterLink to="/" class="flex text-3xl items-center font-bold gap-2">
            <Icon icon="mingcute:movie-line" width="40" />
            <span>MoVue</span>
        </RouterLink>
        <ul class="flex items-center gap-4 font-semibold">
            <li>MoVues</li>
            <li>Favourite MoVues</li>
        </ul>
    </nav>
</template>
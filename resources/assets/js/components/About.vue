<template>
    <div class="container">
        <navbar></navbar>

        <h3>{{ $t('about_page.description') }}</h3>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue';

    export default {
        name: 'about',

        components: { Navbar }
    }
</script>
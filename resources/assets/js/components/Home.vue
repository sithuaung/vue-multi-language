<template>
    <div class="container">
        <navbar></navbar>

        <h3>{{ $t('home_page.description') }}</h3>
        
        <hr>
        <div class="list-group" >
            <a href="#" class="list-group-item disabled">
                {{ $t('home_page.articles') }}
            </a>
            <a href="#" class="list-group-item" v-for="article in articles">
                <h3>{{ article.title }}</h3>
                <p>{{ article.body }}</p>
            </a>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import Navbar from './Navbar.vue';

    export default {
        name: 'home',

        components: { Navbar },

        data: function(){
            return {
                articles: null,
            }
        },

        watch: {
            getLocale: function(newVal){
                this.getArticles(newVal);
            }
        },

        mounted: function(){
            this.getArticles(this.getLocale);
        },

        computed: mapGetters([
            'getLocale'
        ]),

        methods: {
            ...mapActions([
              'set_locale', // map this.increment() to this.$store.dispatch('increment')
            ]),
            getArticles: function(locale){
                this.$http.get(`/api/${locale}/articles`).then(response => {
                    this.articles = response.data;
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>
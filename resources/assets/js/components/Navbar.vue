<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" to="/">{{ $t('nav.site_name') }}</router-link>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/">{{ $t('nav.home') }}</router-link></li>
                        <li><router-link to="/about">{{ $t('nav.about') }}</router-link></li>
                    </ul>

                    <div class="navbar-form navbar-right col-lg-2 col-md-2 col-sm-2 col-xs-2">
                        <a class="btn btn-success btn-xs" @click="updateLocale('mm')">mm</a>
                        <a class="btn btn-danger btn-xs" @click="updateLocale('en')">en</a>
                    </div>
                </div>
                <!--/.nav-collapse -->

            </div>
        </nav>    
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
              'set_locale',
            ]),

            updateLocale: function(lang){
                this.$locale.change(lang); // update ui locale
                this.set_locale(lang); // update store locale
            }
        }
    }
</script>


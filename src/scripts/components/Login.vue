<template>
    <div id="homepage">
        <section class="top" style="background-image:url(dist/images/banner.jpeg);">
            <md-toolbar class="md-transparent" style="box-shadow:none;">
                <router-link to="/">
                    <md-button class="md-icon-button">
                        <md-icon>home</md-icon>
                    </md-button>
                </router-link>
            </md-toolbar>

            <div class="logo" style="background-image:url(dist/images/logo.png)"></div>
            
            <div class="title-section">
                <h2>LAYANAN ONLINE</h2>
                <span>KABUPATEN LABUHANBATU UTARA</span>
            </div>
        </section>

        <div class="login-content">
            <form action="post" @submit="doLogin">
                <center><h2>Login</h2></center>
                <md-field :class="{'md-invalid':errors.username}">
                    <label>NIP / NIK</label>
                    <md-input v-model="username" type="number"></md-input>
                    <span class="md-error">{{errors.username}}</span>
                </md-field>

                <md-field :class="{'md-invalid':errors.password}">
                    <label>Password</label>
                    <md-input v-model="password" type="password"></md-input>
                    <span class="md-error">{{errors.password}}</span>
                </md-field>

                <md-button type="submit" class="md-raised md-primary" style="width:100%;margin:0;">Login</md-button>
            </form>
        </div>

        <div class="footer">
            <center>
                2021 &copy; ONLINE SERVICE<br>DISKOMINFO KABUPATEN LABUHANBATU UTARA
            </center>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2';
export default {
    data() {
        return {
            errors: {
                username:'',
                password:''
            },
            username:null,
            password:null
        }
    },
    methods:{
        doLogin: async function(e){
            e.preventDefault();
            this.errors = {
                username:'',
                password:''
            }
            if(this.username && this.password)
            {
                var formdata = new FormData;
                formdata.append('username',this.username)
                formdata.append('password',this.password)
                var login = await this.$store.dispatch('global/login',formdata)
                if(login.data.status == 'gagal')
                {
                    Swal.fire('Oops...', 'NIK / NIP atau Password tidak valid!', 'error')
                    return
                }

                window.localStorage.setItem('token',login.data.data.token)
                this.$router.push('/dashboard')
                return
            }

            if(!this.username || this.username == null)
                this.errors.username = 'NIP / NIK tidak boleh kosong'

            if(!this.password || this.password == null)
                this.errors.password = 'Password tidak boleh kosong'

            return false
        }
    }
}
</script>
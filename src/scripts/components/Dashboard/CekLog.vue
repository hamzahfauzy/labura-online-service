<template>
    <div id="homepage">
        <section class="top min" style="background-image:url(dist/images/banner.jpeg);">
            <md-toolbar class="md-transparent" style="box-shadow:none;">
                <md-button class="md-icon-button" @click="$router.go(-1)">
                    <md-icon>keyboard_backspace</md-icon>
                </md-button>

                <span class="md-title">Cek Log</span>
            </md-toolbar>
        </section>

        <div class="login-content min">
            <md-list class="md-triple-line">
                <div  v-for="(list,index) in lists" :key="index">
                    <md-list-item>
                        <md-avatar>
                            <img :src="list.gambar" :alt="list.nama">
                        </md-avatar>

                        <div class="md-list-item-text">
                            <span>{{list.nama}}</span>
                            <span>{{list.status}}</span>
                            <p>{{list.tanggal}}</p>
                        </div>

                        <md-button class="md-icon-button md-list-action">
                            <md-icon class="md-primary">star</md-icon>
                        </md-button>
                    </md-list-item>

                    <md-divider class="md-inset"></md-divider>
                </div>
            </md-list>
        </div>

        <div class="footer">
            <center>
                2021 &copy; ONLINE SERVICE<br>DISKOMINFO KABUPATEN LABUHANBATU UTARA
            </center>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lists:[
                {
                    gambar:'https://placeimg.com/40/40/people/1',
                    nama:'Employee 1',
                    tanggal:'1 Maret 20201, 08:00',
                    status:'Hadir'
                },
                {
                    gambar:'https://placeimg.com/40/40/people/2',
                    nama:'Employee 2',
                    tanggal:'1 Maret 20201, 08:00',
                    status:'Tidak Hadir'
                }
            ]
        }
    },
    methods: {
        doLogout: async function()
        {
            await this.$store.dispatch('global/logout')
            this.$router.push('/login')
        }
    }
}
</script>
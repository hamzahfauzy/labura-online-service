<template>
    <div id="homepage">
        <section class="top" style="background-image:url(dist/images/banner.jpeg);">
            <md-toolbar class="md-transparent" style="box-shadow:none;">
                <md-button class="md-icon-button" @click="$router.go(-1)">
                    <md-icon>keyboard_backspace</md-icon>
                </md-button>
            </md-toolbar>

            <div class="logo" style="background-image:url(dist/images/logo.png)"></div>
            
            <div class="title-section">
                <h2>LAYANAN ONLINE</h2>
                <span>KABUPATEN LABUHANBATU UTARA</span>
            </div>
        </section>

        <div class="homepage-content">
            <div class="service-item">
                <!-- 
                    click event to camera native
                    with javascript interface
                 -->
                <div>
                    <md-avatar class="md-large">
                        <img src="dist/images/presensi-pegawai.png" alt="" width="150px">
                    </md-avatar>
                    <h4>ABSEN PEGAWAI</h4>
                </div>
            </div>
            <div class="service-item">
                <router-link to="/cek-log">
                    <md-avatar class="md-large">
                        <img src="dist/images/cek-log.png" alt="" width="150px">
                    </md-avatar>
                    <h4>CEK LOG</h4>
                </router-link>
            </div>
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
    methods: {
        doLogout: async function()
        {
            await this.$store.dispatch('global/logout')
            this.$router.push('/login')
        }
    }
}
</script>
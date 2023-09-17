<template>
    <layout-div>
        <div class="container">
            <h2 class="text-center mt-5 mb-3">Admin Dashboard</h2>

            <h4>Welcome {{ decodedToken }}!</h4>

            <button :disabled="isLogin" @click="handleLogout" type="button" class="btn btn-danger btn-block mt-3">
                Log Out
            </button>
        </div>
    </layout-div>
</template>

<script>
import LayoutDiv from './LayoutDiv.vue';
import VueJwtDecode from 'vue-jwt-decode';



export default {
    name: 'DashboardPage',
    components: {
        LayoutDiv,
    },
    data() {
        return {
            decodedToken: '',
        }
    },
    created() {
        const token = localStorage.getItem('token');

        if (token == '' || token == null) {
            this.$router.push('/');
        } else {
            this.decodedToken = VueJwtDecode.decode(token).username.toUpperCase();
        }
    },
    methods: {
        handleLogout() {
            localStorage.clear();
            this.$router.push('/');
        }
    },
};
</script>
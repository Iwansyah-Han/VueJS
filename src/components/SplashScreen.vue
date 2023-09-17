<template>
    <layout-div>
        <div class="container">
            <div class="row justify-content-evenly">
                <div class="col-12 mb-5">
                    <h1 class="mt-5 fw-bold">Login Page</h1>
                    <p class="mt-3 font-family">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Provident repellendus fuga molestiae vitae ex dolore deleniti
                        assumenda fugiat ducimus incidunt!
                    </p>
                </div>
            </div>
            <div class="row justify-content-evenly">
                    <div class="d-grid gap-2 d-md-flex justify-content-center">
                        <button :disabled="isLogin" @click="handleLogin" type="button"
                            class="btn btn-danger btn-block col-sm-2">
                            Login
                        </button>
                        <button :disabled="Register" @click="handleRegister" type="button"
                            class="btn btn-primary btn-block col-sm-2">
                            Register
                        </button>
                </div>
            </div>
        </div>
    </layout-div>
</template>

<script>
import LayoutDiv from './LayoutDiv.vue';

export default {
    name: 'SplashScreen',
    components: {
        LayoutDiv,
    },
    data() {
        return {}
    },
    created() { },
    methods: {
        handleLogin() {
            this.$router.push('/login');
        },
        handleRegister() {
            this.$router.push('/register');
        }
    },
};
</script>
<style></style>
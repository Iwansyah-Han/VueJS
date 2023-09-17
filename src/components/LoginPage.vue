<template>
    <layout-div>
        <div class="container overflow-hidden">
            <div class="row justify-content-evenly ">
                <div class="col-md-6 mb-5">
                    <div class="card">
                        <div class="card-header bg-warning">
                            <h4 class="card-title text-center fw-bold">Login</h4>
                        </div>
                        <div class="card-body">
                            <form>
                            <div class="form-group row mb-3">
                                <label htmlFor="username" class="col-sm-5 col-form-label fw-bold">USERNAME</label>
                                <div class="col-sm-6">
                                    <input v-model="users.username" type="text" class="form-control fw-bold" id="username" name="username" required>
                                </div>
                            </div>
                            
                            <div class="form-group row mb-3">
                                <label htmlFor="password" class="col-sm-5 col-form-label fw-bold">PASSWORD</label>
                                <div class="col-sm-6">
                                    <input v-model="users.password" type="password" class="form-control fw-bold" id="password" name="password"
                                        required>
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-center">
                                <button @click="handleLogin()" :disabled="isLogin" type="button"
                                        class="btn btn-danger btn-block mt-3">
                                        Login
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </layout-div>
</template>

<script>
import axios from 'axios';
import LayoutDiv from './LayoutDiv.vue';
import Swal from 'sweetalert2';

export default {
    name: 'LoginPage',
    components: {
        LayoutDiv,
    },
    data() {
        this.isLogin = true
        return {
            users: {
                username: '',
                password: '',
            },
            vtoken: "",
            isLogin: false,
        };
    },
    created() {
        if (localStorage.getItem('token') != "" && localStorage.getItem('token') != null) {
            this.$router.push('/dashboard')
        }

    },
    methods: {
        handleLogin() {
            this.isLogin = true
            axios({
                method: 'POST',
                url: '/signin',
                data: this.users,
                headers: {
                    'Content-Type': 'application/json',
                    'accept': '*/*',
                },
            })
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.isLogin = false
                    this.users.username = ""
                    this.users.password = ""
                    localStorage.setItem('token', response.data.token)

                    // this.vtoken = VueJwtDecode.decode(response.data.token);
                    this.$router.push('/dashboard')
                    // console.log(this.vtoken.username);

                    return response
                })
                .catch(error => {
                    this.isLogin = false
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.$router.push('/')
                    return error
                });
        },
    },
};
</script>
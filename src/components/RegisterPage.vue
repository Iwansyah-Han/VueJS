<template>
    <layout-div>
        <div class="container overflow-hidden">
            <div class="row justify-content-evenly ">
                <div class="col-md-6 mb-5">
                    <div class="card">
                        <div class="card-header bg-warning">
                            <h4 class="card-title text-center fw-bold">Register</h4>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group row mb-3">
                                    <label htmlFor="username" class="col-sm-5 col-form-label fw-bold">USERNAME</label>
                                    <div class="col-sm-6">
                                        <input v-model="users.username" type="text" class="form-control fw-bold"
                                            id="username" name="username" required>
                                    </div>
                                </div>
                                <div class="form-group row mb-3">
                                    <label htmlFor="email" class="col-sm-5 col-form-label fw-bold">EMAIL</label>
                                    <div class="col-sm-6">
                                        <input v-model="users.email" type="email" class="form-control fw-bold" id="email"
                                            name="email" required>
                                    </div>
                                </div>
                                <!-- <div class="form-group row mb-3">
                                    <label htmlFor="role" class="col-sm-5 col-form-label fw-bold">ROLE</label>
                                    <div class="col-sm-5">
                                        <select id="role" class="form-select fw-bold" v-model="users.role">
                                            <option selected>user</option>
                                            <option>admin</option>
                                            <option>super</option>
                                        </select>
                                    </div>
                                </div> -->
                                <div class="form-group row mb-3">
                                    <label htmlFor="role" class="col-sm-5 col-form-label fw-bold">ROLE</label>
                                    <div class="col-sm-6">
                                        <input v-model="users.role" type="role" class="form-control fw-bold" id="role"
                                            name="role" required>
                                    </div>
                                </div>
                                <div class="form-group row mb-3">
                                    <label htmlFor="password" class="col-sm-5 col-form-label fw-bold">PASSWORD</label>
                                    <div class="col-sm-6">
                                        <input v-model="users.password" type="password" class="form-control fw-bold"
                                            id="password" name="password" required>
                                    </div>
                                </div>
                                <button @click="handleRegister()" :disabled="isRegister" type="button"
                                    class="btn btn-primary btn-block mt-3">
                                    Register
                                </button>
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
    name: 'RegisterPage',
    components: {
        LayoutDiv,
    },
    data() {
        this.isRegister = true
        return {
            users: {
                username: '',
                email: '',
                role: ['admin'],
                password: '',
            },
            vtoken: "",
            isRegister: false,
        };
    },
    methods: {
        handleRegister() {
            this.isRegister = true
            axios({
                method: 'POST',
                url: '/signup',
                data: this.users,
                headers: {
                    'Content-Type': 'application/json',
                    'accept': '*/*',
                },
            })
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Register successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.isRegister = false
                    this.users.username = ""
                    this.users.email = ""
                    this.users.role = ['admin']
                    this.users.password = ""
                    //localStorage.setItem('token', response.data.token)

                    // this.vtoken = VueJwtDecode.decode(response.data.token);
                    this.$router.push('/')
                    // console.log(this.vtoken.username);

                    return response
                })
                .catch(error => {
                    this.isRegister = false
                    Swal.fire({
                        icon: 'error',
                        title: 'Register Failed!',
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
<template>
    <div>
        <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="账号">
            <el-input v-model="account" placeholder="登陆账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="password" type="password" placeholder="登陆密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit" :loading="loginBtnLoading">登陆</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'login',
        data () {
            return {
                account: 'admin',
                password: '123456',
                loginBtnLoading: false
            }
        },
        methods: {
            ...mapActions(['Login', 'Logout']),
            onSubmit () {
                const { account, password, Login } = this
                this.loginBtnLoading = false
                Login({ account, password }).then((result) => {
                    console.log(result)
                    this.$Message.success(`${this.$i18n.t('LOGIN_SUCCESS')}`)
                    setTimeout(() => {
                        location.href = '/test/a'
                    }, 500)
                }).finally(() => {
                    this.loginBtnLoading = false
                })
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import {
        DEFAULT_MULTI_TAB,
        DEFAULT_THEME_TYPE,
        ACCESS_TOKEN
    } from '@/config/constants'
    import VueSocketIO from 'vue-socket.io'
    import store from './store'

    export default {
        created () {
            this.$store.dispatch('ToggleMultiTab', this.$ls.get(DEFAULT_MULTI_TAB))
            this.$store.dispatch('ToggleThemeType', this.$ls.get(DEFAULT_THEME_TYPE))
            // this.initWebSocket()
        },
        methods: {
            initWebSocket () {
                const token = this.$ls.get(ACCESS_TOKEN)
                if (token) {
                    this.$store.dispatch('socketIoInit', new VueSocketIO({
                        debug: false,
                        connection: process.env.NODE_ENV === 'production' ? '' : 'ws://192.168.3.3:9502',
                        vuex: {
                            store,
                            actionPrefix: 'SOCKET_',
                            mutationPrefix: 'SOCKET_'
                        },
                        options: {
                            // path: '/ws',
                            transports: ['websocket'],
                            query: {
                                token
                                // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJpYXQiOjE2MDYzODA1MjEsImV4cCI6MTYwNjQ2NjkyMSwiaWQiOjQwMDAwfQ.iweIs0pr9YXub8URSnWoUqy7DvPrSievzx4XUUZG2Vc'
                            }
                        }
                    }))
                }
            }
        }
    }
</script>

<style lang="less">
    input::-webkit-input-placeholder {
        font-size: 12px;
    }
    // 表格样式
    .table-body {
        // 表格左上角
        .table-left-top {
            width: 100%;
            float: left;
            margin-bottom: 15px;
        }
        // 表格右上角
        .table-right-top {
            float: right;
            margin-bottom: 15px;
        }
        // 表格分页
        .table-pagination {
            margin-bottom: 100px;
            float: right;
            margin-top: 15px
        }
    }
</style>

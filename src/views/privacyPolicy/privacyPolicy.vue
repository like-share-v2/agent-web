<template>
    <div>
        <quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption" />
        <el-button type="primary" @click="submit">{{ $i18n.t('SUBMIT') }}</el-button>
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor'
    import quillConfig from '@/config/quill-config'
    import { getPrivacyPolicy, editPrivacyPolicy } from '@/api/agreement'
    /* eslint-disable */
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    export default {
        name: 'usage_agreement',
        components: {
            quillEditor
        },
        data () {
            return {
                content: '',
                editorOption: quillConfig
            }
        },
        created () {
            getPrivacyPolicy().then((res) => {
                this.content = res.result
            })
        },
        methods: {
            submit () {
                editPrivacyPolicy({ content: this.content }).then(() => {
                    this.$Message.success(this.$i18n.t('HANDLE_SUCCESS'))
                }).catch((error) => {
                    // 手动处理错误
                    if (!error.errors) {
                        this.errorMessage = error.message
                    }
                }).finally(() => {
                    this.submitLogin = false
                })
            }
        }
    }
</script>

<style scoped>

</style>

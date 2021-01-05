<template>
    <div :style="{height:height,width:width}">
        <el-card class="box-card" shadow="never" v-loading="loading" style="height: 95%">
            <div slot="header" class="clearfix">
                <span style="color: #3888fa">{{ $i18n.t('SCAN_CODE_RECHARGE_DATA') }}</span>
            </div>
            <div class="text item">
                {{ $i18n.t('QUANTITY_TO_BE_AUDITED') }}: {{ manualRechargeData.manual_recharge_audit_count }}
            </div>
            <div class="text item">
                {{ $i18n.t('PASSED_QUANTITY') }}: {{ manualRechargeData.manual_recharge_pass_count }}
            </div>
            <div class="text item">
                {{ $i18n.t('FAILED_QUANTITY') }}: {{ manualRechargeData.manual_recharge_refuse_count }}
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'user_task_data_card',
        props: {
            loading: {
                type: Boolean,
                required: true
            },
            manualRechargeData: {
                type: Object,
                required: true
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '300px'
            }
        }
    }
</script>

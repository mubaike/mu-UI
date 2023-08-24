<template>
    <div class="case-card">
        <Title :level="3">{{ title }}</Title>
        <Text type="secondary">{{ note }}</Text>
        <div class="container">
            <slot></slot>
        </div>

        <div @click="clickShow">+</div>
        <div class="codes" ref="codes" v-show="showCode">
            <highlightjs autodetect :code="code" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: '标题'
    },
    note: {
        type: String,
        default: '这里是注释'
    },
    code: {
        type: String,
        default: ''
    }
})

// 代码开关
const showCode = ref(false);
const clickShow = ():void => {
    showCode.value = !showCode.value;
}
</script>

<style scoped lang="less">
.case-card {
    max-width: 800px;
    .container {
        margin: 12px 0 8px;
        border-radius: @radius-m;
        border: 1px solid @line-color-s;
        padding: 20px;
    }
    .codes {
        padding-top: @space-m;
    }
}
</style>
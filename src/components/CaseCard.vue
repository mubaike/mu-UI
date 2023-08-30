<template>
    <div class="case-card">
        <Title :level="3">{{ title }}</Title>
        <Text type="secondary">{{ note }}</Text>
        <div class="container">
            <slot></slot>
        </div>

        <div class="icons" @click="clickShow" :class="{ IconActive: showCode }">
                <Icon name="yk-daima"></Icon>
        </div>
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
const clickShow = (): void => {
    showCode.value = !showCode.value;
}
</script>

<style scoped lang="less">
.case-card {
    max-width: 800px;
    position: relative;
    margin-bottom: 50px;

    .container {
        margin: 12px 0 8px;
        border-radius: @radius-m;
        border: 1px solid @line-color-s;
        padding: 20px;
    }

    .icons {
        position: absolute;
        right: 0;
        cursor: pointer;
        display: inline-block;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        font-size: 1px;
        font-weight: bold;
        opacity: 0.9;
        background-color: @bg-color-ss;
        border-radius: @radius-m;
        .icon{
            font-size: @size-s;
        }
    }

    .IconActive {
        background-color: @font-color-l;
        // background-color: black;
        color: @bg-color-l;
    }


    .codes {
        // padding-top: @space-m;
        position: relative;
        margin-top: 40px;
        border-radius: @radius-l;
        overflow: hidden;

        &::after {
            content: '复制';
            font-size: @size-ss;
            position: absolute;
            top: @space-s;
            right: @space-s;
            border-radius: @radius-s;
            color: @font-color-l;
            background-color: @bg-color-ss;
            opacity: 0.8;
            cursor: pointer;
        }
    }


}
</style>
<template>
    <div class="container">
        <transition name="messageBox_animate">
            <div class="message" v-if="isShow" :class="[msgStatus(type)]">
                <div class="message-info">
                    <Icon :name="msgIcon(type)"></Icon>
                    <span class="text">{{ msgtext(type) }}</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@/mu-ui';

const props = defineProps({
    message: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        // warn 警告  error 错误  success 成功
        default: "default"
    }
})

//提示状态
const msgStatus = (status: string): string => {
    switch (status) {
        case 'warning':
            return 'warning';
        case 'error':
            return 'error';
        case 'success':
            return 'success';
        default:
            return 'default'
    }
}
//提示文字
const msgtext = (status: string): string => {
    if (props.message) {
        return props.message
    } else {
        switch (status) {
            case 'warning':
                return '警告哦，这是一条警告信息';
            case 'error':
                return '错了哦，这是一条错误信息';
            case 'success':
                return '恭喜你，这是一条成功信息';
            default:
                return '这是一条消息提示'
        }
    }
}
//提示图标
const msgIcon = (status: string): string => {
    switch (status) {
        case 'warning':
            return 'yike-jinggao';
        case 'error':
            return 'yike-cha';
        case 'success':
            return 'yike-gou';
        default:
            return 'yike-tixing'
    }
}

//控制弹窗的显示
let isShow = ref(false);

//计时器
let timer:any;

onMounted(() => {

    isShow.value = true;

    timer = setTimeout(() => {
        isShow.value = false;
    }, 3000)
})

onUnmounted(() => {
    clearTimeout(timer)
})
</script>

<style scoped lang="less">
.container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.message {
    padding: 14px 30px;
    position: fixed;
    top: 30px;
    z-index: 100;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: @radius-m;

    .message-info {
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
            margin-right: 10px;
        }

        .text {
            max-width: 300px;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            white-space: nowrap;
        }
    }

}

.default {
    border: 1px solid rgb(235, 238, 245);
    background-color: rgb(237, 242, 252);
    color: @font-color-s;
}

.warning {
    border: 1px solid rgb(250, 237, 218);
    background-color: rgb(253, 246, 236);
    color: @wcolor;
}

.error {
    border: 1px solid rgb(253, 226, 226);
    background-color: rgb(254, 240, 240);
    color: @ecolor;
}

.success {
    border: 1px solid rgb(225, 243, 216);
    background-color: rgb(240, 249, 235);
    color: @scolor;
}

//动画
.messageBox_animate-enter-active {
    animation: fadeInDown 0.5s;
}

.messageBox_animate-leave-active {
    animation: fadeOutUp 0.5s;
}</style>
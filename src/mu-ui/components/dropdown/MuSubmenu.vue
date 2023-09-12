<template>
    <div class="submenu" @mouseenter="mouse(0)" @mouseleave="mouse(1)" :class="{ disabled: disabled }">
        <div class="subm" ref="subm">
            <slot></slot>
            <Icon name="yk-xiangyou"></Icon>
        </div>
        <transition name="modal">
            <div class="item" v-show="hand"
                :style="{ marginLeft: submW + 'px', maxWidth: maxWidth + 'px', maxHeight: maxHeight + 'px' }">
                <div class="item-inner">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@/mu-ui';
import { onMounted, ref } from 'vue';

const props = defineProps({
    maxHeight: {  //最大高度
        type: Number,
        default: 320
    },
    maxWidth: {  //最大宽度
        type: Number,
        default: 200
    },
    disabled: {   //是否被激活
        type: Boolean,
        default: false
    },
})

//获取元素
const subm = ref(null)
//元素宽度
const submW = ref(0)
//判断下拉框开关
const hand = ref(false)

//鼠标移入事件
const mouse = (e: number): void => {
    if (!props.disabled) {
        if (e == 0) {
            hand.value = true
            const submV: any = subm.value
            submW.value = submV.offsetWidth
        } else if (e == 1) {
            hand.value = false
        }
    }
}

onMounted(() => {
})
</script>

<style scoped lang="less">
.modal {
    &-enter {
        &-form {
            transform: scale(1, 0);
            transform: translateY(-10px);
            opacity: 0;
        }

        &-active {
            transition: all 0.2s ease-out;
        }

        &-to {
            transform: scale(1);
            transform: translateY(0px);
            opacity: 1;
        }
    }

    &-leave {
        &-from {
            transform: scale(1);
            opacity: 1;
            transform: translateY(0px);
        }

        &-active {
            transition: all 0.2s;
        }

        &-to {
            transform: scale(0);
            opacity: 0;
            transform: translateY(-10px);
        }
    }
}

.subm {
    //文字不换行
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    font-size: @size-s;
    line-height: 32px;
    padding: 0 12px;
    border-radius: @radius-s;
    cursor: pointer;

    &:hover {
        background-color: @bg-color-s;
    }
}

.submenu {
    position: relative;

    &:hover {
        .item {
            height: auto;
        }
    }

    .item {
        position: absolute;
        margin-top: -32px;

        .item-inner {
            background-color: @bg-color-l;
            box-shadow: @shadow-m;
            padding: 4px;
            border-radius: @radius-m;
            margin-left: 8px;
            border: 1px solid @line-color-s;
        }
    }
}</style>
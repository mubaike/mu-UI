<template>
    <div class="dropdown" @mouseenter="mouse(0)" @mouseleave="mouse(1)" @click="msclick" :class="{ disabled: disabled }">
        <div class="drop" ref="drop">
            <slot></slot>
        </div>
        <transition name="modal">
            <div class="item"  v-show="hand" :class="[position]" 
            :style="{top: getPosition(position) == 0 ? dropH + 'px' : 'auto', bottom: getPosition(position) == 1 ? dropH + 'px' : 'auto', maxWidth: maxWidth + 'px', maxHeight: maxHeight + 'px'}">
                <div class="item-inner">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
    trigger: {  //触发形式
        type: String,
        default: "hover"
    },
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
    position: {    //弹窗位置
        type: String,
        default: "bottom"
    }
})

//获取外壳高度使用
//获取元素
const drop = ref(null)
//元素高度
const dropH = ref(0)
//判断下拉框开关
const hand = ref(false)

//鼠标移入事件
const mouse = (e: number):void => {
    if(props.trigger == "hover" && !props.disabled) {
        if(e == 0){
            hand.value = true
        }else if(e == 1){
            hand.value = false
        }
    }
}

//点击事件
const msclick = ():void => {
    if(!props.disabled) {
        if(props.trigger == "click" || hand.value){
            hand.value = !hand.value
        }
    }
}

//获取位置信息
const getPosition = (position: string) => {
    switch (position) {
        case "bottom":
            return 0;
        case "bl":
            return 0;
        case "br" :
            return 0;
        case "top":
            return 1;
        case "tl":
            return 1;
        case "tr":
            return 1;
        default: 
            return 0;
    }
}

onMounted (() => {
    //元素高度
    const dropV: any = drop.value;
    dropH.value = dropV.offsetHeight;
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
.dropdown {
    position: relative;
    display: inline-flex;
    justify-content: center;

    &:hover {
        .item {
            height: auto;
        }
    }

    .item {
        position: absolute;
        z-index: 1000;
        .item-inner {
            background-color: @bg-color-l;
            box-shadow: @shadow-m;
            padding: 4px;
            border-radius: @radius-m;
            border: 1px solid @line-color-s;
        }
    }
    .bottom {
        padding-top: 4px
    }

    .bl {
        left: 0;
        padding-top: 4px;
    }
    .br {
        right: 0;
        padding-top: 4px;
    }
    .tl {
        left: 0;
        padding-bottom: 4px;
    }
    .tr {
        right: 0;
        padding-bottom: 4px;
    }
    .top {
        padding-bottom: 4px;
    }
}
</style>
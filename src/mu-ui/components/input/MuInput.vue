<template>
    <div class="inputs" :class="{ readonly: readonly, disabled: disabled }">
        <div class="mu-input" :class="{ error: error, normal: !error }">
            <div class="mu-input-inner" :class="[size, { focus: isFocus }]">
                <input 
                    class="input" 
                    :class="[size]" 
                    :placeholder="placeholder" 
                    :value="modelValue" 
                    :type="type" 
                    :maxlength="maxLength"
                    :readonly="readonly"
                    @input="emitValue"
                    @focus="focus" 
                    @blur="blur" 
                    @keyup.enter="keyEnter"
                     />
                <div class="icon-div" v-show="modelValue && allowClear" :class="[size]" @click="clearValue()">
                    <MuIcon name="yk-cha" class="clear-icon"></MuIcon>
                </div>
                <p class="show-length" v-show="maxLength" :class="[size]">{{ valueLength }}/{{ maxLength }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import MuIcon from '../icon/MuIcon.vue';
//props
const props = defineProps({
    modelValue: {
        //input 内容
        type: [String, Number],
    },
    error: {
        //错误
        type: Boolean,
        default: false,
    },
    disabled: {
        //是否被激活
        type: Boolean,
        default: false,
    },
    size: {
        //大小
        type: String,
        default: 'l'
    },
    allowClear: {
        //显示清除
        type: Boolean,
        default: false,
    },
    placeholder: {
        //默认信息
        type: String,
        default: '',
    },
    maxLength: {
        //内容限制
        type: Number
    },
    showLimit: {
        //是否显示限制
        type: Boolean,
        default: false
    },
    readonly: {
        //是否只读
        type: Boolean,
        default: false
    },
    type: {
        //类型
        type: String,
        default: 'text'
    }

})

//emits
const emits = defineEmits([
    'update:modelValue',
    'clear',
    'focus',
    'blur',
    'pEnter'
])

//计算字符长度
const valueLength = ref(0)

//抛出数据
const emitValue = (e: any) => {
    emits("update:modelValue", e.target.value);
    if(props.maxLength){
        valueLength.value = e.target.value.length
    }
}

//清空内容
const clearValue = () => {
    emits('clear', props.modelValue)
    emits('update:modelValue', '')
}

//监听焦点变化
const isFocus = ref(false);
//聚焦
const focus = (e: any) => {
    isFocus.value = true;
    emits('focus', e.target.value);
}
//失焦
const blur = (e: any) => {
    isFocus.value = false;
    emits('blur', e.target.value)
}

//监听回车事件
const keyEnter = () => {
    emits('pEnter', props.modelValue);
}

onMounted(() => {
    if(props.modelValue){
        valueLength.value = props.modelValue.toString.length
    }
})
</script>

<style scoped lang="less">
.inputs {
    display: inline-flex;
    width: 200px;
}

.mu-input {
    width: 100%;
    height: 100%;
}

.mu-input-inner {
    box-sizing: border-box;
    border: 1px solid @bg-color-s;
    background: @bg-color-s;
    border-radius: @radius-m;
    padding: 0;
    color: @font-color-l;
    line-height: 36px;
    transition: @animatb;
    display: flex;
    align-items: center;
    width: 100%;
}

.input {
    box-sizing: border-box;
    border: 0;
    // background-color: pink;
    background-color: transparent;
    outline: none;
    padding: 0;
    color: @font-color-l;
    transition: @animatb;
    width: 100%;
}

.icon-div {
    display: none;
}
//默认样式
.normal {
    .focus {
        border-color: @pcolor;
        background: @bg-color-l;

        &:hover {
            background: @bg-color-l;
        }
    }

    &:hover {
        .icon-div {
            display: block;
        }

        .mu-input-inner {
            border-color: @pcolor;
            background: @bg-color-l;
        }
    }
}

//错误样式
.error {
    .mu-input-inner {
        border-color: transparent;
        background: @ecolor-2;
    }

    .focus {
        border-color: @ecolor;
        background: @bg-color-l;

        &:hover {
            background: @bg-color-l;
        }
    }

    &:hover {
        .icon-div {
            display: block;
        }

        .mu-input-inner {
            border-color: @ecolor;
            background: @ecolor-1;
        }
    }
}

.clear-icon {
    margin-bottom: -2px;
    padding: 4px;
    border-radius: 12px;
    font-size: 20px;
    transition: all @animatb;
    cursor: pointer;

    &:hover {
        background-color: @font-color-ss;
    }
}

//size 设置大小
.s {
    padding: 0 4px;
    line-height: 24px;
    height: 24px;
    font-size: @size-ss;
    border-radius: @radius-s;
}

.m {
    padding: 0 6px;
    line-height: 32px;
    height: 32px;
    border-radius: @radius-s;
}

.l {
    padding: 0 6px;
    line-height: 36px;
    height: 36px;
}

.xl {
    padding: 0 8px;
    line-height: 48px;
    height: 48px;
    font-size: @size-m;
}
.show-length {
    font-size: @size-ss;
    color: @font-color-s;
}
</style>
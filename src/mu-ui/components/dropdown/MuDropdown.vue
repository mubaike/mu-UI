<template>
    <div>
        下拉菜单
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    trigger: {  //触发形式
        type: String,
        default: "hover"
    },
    maxHeight: {  //最大高度
        type: Number,
        default: 320    
    },
    disabled: {   //是否被激活
        type: Boolean,
        default: false
    },
    type: {    //弹窗位置
        type: String,
        default: "bottom"
    }
})
</script>

<style scoped>

</style>
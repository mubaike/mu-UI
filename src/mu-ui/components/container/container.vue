<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    height: {
        type: String,
        default: 'auto',
    }
})
</script>

<style scoped lang="less">
@import '../../assets/style/mu-index.less';

.container {
    overflow: auto;
    &:hover {
        &::-webkit-scrollbar-thumb{
            background: rgba(0,0,0,0.2);
        }
    }
}

.container::-webkit-scrollbar {
    //滚动条整体样式
    width: 4px;
    //宽高分别对应横竖滚动条的尺寸
    height: 4px;
}

.container::-webkit-scrollbar-thumb {
    //滚动条面的小方块
    border-radius: 4px;
    background: rgba(0,0,0,0);
}

.container::-webkit-scrollbar-track {
    //滚动条里面的轨道
    border-radius: 4px;
    background: rgba(0,0,0,0);
}
</style>
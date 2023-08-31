<template>
    <div class="crumb" ref="crumb">
        <slot></slot>
        <CrumbItem v-if="routes" v-for="(item, index) in routes" :key="index" :path="(item as any).src">
            {{ (item as any).name }}
        </CrumbItem>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CrumbItem from './CrumbItem.vue';
const props = defineProps({
    routes: {
        type: Array
    }
})

//单独使用
const crumb = ref(null)

//获取dome元素添加特定样式
const addStyle = () => {
    //将获取的dome转为数组
    let crumbs: any = crumb.value;
    let arr:any[] = Array.from(crumbs.children)
    //给最后一个元素添加class
    arr[arr.length-1].classList.add('last-item')
};

onMounted(()=>{
    addStyle()
})
</script>

<style scoped lang="less">
</style>
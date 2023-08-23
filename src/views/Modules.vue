<template>
    <div>
        <SizeBar :sizebar="sizebar"/>
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import SizeBar from "../components/SizeBar.vue";

//目录
let sizebar = [
    {
        title: "通用",
        list: [
            {
                name: "Button 按钮",
                src: "button"
            },
            {
                name: "Icon 图标",
                src: "icon"
            }
        ]
    }
]
</script>

<style scoped>

</style>
<template>
    <div class="module">
        <SizeBar :sizebar="sizebar"/>
        <div class="main">
            <RouterView />
        </div>
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
    },
    {
        title: "排版",
        list: [
            {
                name: "Title 标题",
                src: "title"
            },
            {
                name: "Text 文本",
                src: "text"
            },
            {
                name: "Paragraph 段落",
                src: "paragraph"
            }
        ]
    }
]
</script>

<style scoped>
.module {
    min-width: 1200px;
}
.main {
    padding: 24px 56px 56px 324px;
  }
</style>
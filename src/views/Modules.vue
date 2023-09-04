<template>
    <div class="module">
        <transition name="sizeBar_animate">
            <SizeBar :sizebar="sizebar" class="Bar" v-show="show" @CloseSizeBar="CloseSizeBar" />
        </transition>
        <div @click="OpenSizeBar" v-show="!show" class="openBar">
            <Icon name="yk-xiangyou"></Icon>
        </div>
        <div class="main">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
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
                src: "icons"
            },{
                name: "Theme 主题切换",
                src: "theme"
            },
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
            },
            {
                name: "Table 表格",
                src: "table"
            }
        ]
    }, {
        title: "布局",
        list: [
            {
                name: "Space 间距",
                src: "space"
            }
        ]
    }, {
        title: "导航",
        list: [
            {
                name: "BreadCrumb 面包屑",
                src: "crumb"
            }
        ]
    }, {
        title: "提示",
        list: [
            {
                name: "Message 消息提示",
                src: "message"
            }
        ]
    },{
        title: "数据输入",
        list: [
            {
                name: "Input 输入框",
                src: "input"
            }
        ]
    }
]

//导航栏是否显示
let show = ref(false)

//打开导航栏
const OpenSizeBar = () => {
    show.value = true;
}

//关闭导航栏
const CloseSizeBar = () => {
    show.value = false;
}

const showbar = (e:any) => {
    if (e <= 770) {
        show.value = false
    } else {
        show.value = true
    }
}

//窗口宽度
const screenWidth: any = ref(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)


onMounted(() => {
    //监听窗口变化
    window.onresize = () => {
        return (() => {
            screenWidth.value = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            showbar(screenWidth.value)
        })()
    }
    showbar(screenWidth.value)
})
</script>

<style scoped lang="less">
.module {
    min-width: 800px;
}

.main {
    padding: 24px 56px 56px 324px;
}

.openBar {
    display: none;
}

.sizeBar_animate-enter-active {
    animation: slideInLeft 0.5s;
}

.sizeBar_animate-leave-active {
    animation: slideOutLeft 0.5s;
}

@media (max-width: 770px) {
    .Bar {
        z-index: 10;
        position: fixed;
    }

    .module {
        width: 100%;
        min-width: 0;
    }

    .main {
        padding: 24px 24px;
    }

    .openBar {
        display: block;
        position: fixed;
        top: 70px;
        width: 35px;
        height: 35px;
        font-size: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: @font-color-ss;
        opacity: 0.6;
        z-index: 10;
        transform: translateX(-18px);

        .icon {
            transform: translateX(7px);
        }
    }
}
</style>
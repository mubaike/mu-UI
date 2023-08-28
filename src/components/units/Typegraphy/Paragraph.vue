<template>
    <div class="paragraph">
        <Title :level="2">Paragraph 段落</Title>
        <CaseCard :title="datas[0].title" :note="datas[0].note" :code="datas[0].code">
            <Paragraph>段落 基础类型</Paragraph>
            <Paragraph b>段落 加粗</Paragraph>
            <Paragraph type="primary">段落 全局主色</Paragraph>
            <Paragraph type="secondary">段落 全局次色</Paragraph>
            <Paragraph type="third">段落 全局三色</Paragraph>
            <Paragraph type="disabled">段落 禁止色</Paragraph>
            <Paragraph type="success">段落 成功色</Paragraph>
            <Paragraph type="warning">段落 警告色</Paragraph>
            <Paragraph type="danger">段落 错误色</Paragraph>
        </CaseCard>
        <CaseCard :title="datas[1].title" :note="datas[1].note" :code="datas[1].code">
            <Paragraph>Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript
                构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。</Paragraph>
            <Paragraph :ellipsis="{ rows: 1, showMore: true }">Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准
                HTML、CSS
                和 JavaScript
                构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。</Paragraph>
            <Paragraph :ellipsis="{ rows: 1, showMore: true }" :copyable="true">Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的
                JavaScript 框架。它基于标准 HTML、CSS
                和 JavaScript
                构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。</Paragraph>
        </CaseCard>
        <div class="api">
            <Title :level="3">API</Title>
            <div unti-table>
                <Table :colums="colums" :data="data"></Table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

//说明
let datas = [
    {
        title: "Paragraph 段落 类型",
        note: "展示段落不同类型",
        code: `<Paragraph>段落 基础类型</Paragraph>
<Paragraph b>段落 加粗</Paragraph>
<Paragraph type="primary">段落 全局主色</Paragraph>
<Paragraph type="secondary">段落 全局次色</Paragraph>
<Paragraph type="third">段落 全局三色</Paragraph>
<Paragraph type="disabled">段落 禁止色</Paragraph>
<Paragraph type="success">段落 成功色</Paragraph>
<Paragraph type="warning">段落 警告色</Paragraph>
<Paragraph type="danger">段落 错误色</Paragraph>`
    },
    {
        title: "Paragraph 段落 多行隐藏与复制",
        note: "显示段落多行隐藏与显示、复制",
        code: `<Paragraph>
    Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。
</Paragraph>
<Paragraph :ellipsis="{rows:1,showMore:true}">
    Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。
</Paragraph>
<Paragraph :ellipsis="{rows:1,showMore:true}" :copyable="true">
    Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。
</Paragraph>`
    }
]

//api部分
const colums = [
    {
        title: "参数名",
        dataIndex: "name",
        light: false,
    },
    {
        title: "描述",
        dataIndex: "expl",
        light: false,
    },
    {
        title: "类型",
        dataIndex: "type",
        light: true,
    },
    {
        title: "默认值",
        dataIndex: "normal",
        light: false,
    },
]
const data = reactive([
    {
        key: "",
        name: "type",
        expl: "标题类型",
        type: `'default' ｜ 'primary' ｜ 'third' ｜ 'secondary' ｜ 'success' ｜ 'warning' ｜ 'danger' `,
        normal: "-",
    },
    {
        key: "2",
        name: "b",
        expl: "文字加粗",
        type: `false | true`,
        normal: "false",
    },
    {
        key: "3",
        name: "ellipsis",
        expl: "自动溢出省略，rows 显示行数，showMore 展开按钮",
        type: `object`,
        normal: `{rows:'',showMore:false}`,
    },
    {
        key: "4",
        name: "copyable",
        expl: "拷贝文案按钮",
        type: `false | true`,
        normal: "false",
    },
])
</script>

<style scoped lang="less">
.api {
    margin-top: 60px;
}
.unti-table{
    width: 100%;
    overflow-x: auto;
}
</style>
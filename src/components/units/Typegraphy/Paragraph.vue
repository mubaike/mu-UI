<template>
    <div class="paragraph">
        <Title>Paragraph 段落</Title>
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
            <Paragraph :ellipsis="{ rows: 1, showMore: true }">Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS
                和 JavaScript
                构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。</Paragraph>
            <Paragraph :ellipsis="{ rows: 1, showMore: true }" :copyable="true">Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS
                和 JavaScript
                构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。</Paragraph>
        </CaseCard>
    </div>
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>
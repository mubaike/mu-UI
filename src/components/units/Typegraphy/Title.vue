<template>
    <div>
        <Title :level="1">Title 标题</Title>
        <CaseCard :title="datas[0].title" :note="datas[0].note" :code="datas[0].code">
            <Title :level="1">H1 Hello World</Title>
            <Title :level="2">H2 Hello World</Title>
            <Title :level="3">H3 Hello World</Title>
            <Title :level="4">H4 Hello World</Title>
            <Title :level="5">H5 Hello World</Title>
        </CaseCard>
        <CaseCard :title="datas[1].title" :note="datas[1].note" :code="datas[1].code">
            <Title :level="3" type="primary">H3 全局主色</Title>
            <Title :level="3" type="secondary">H3 全局次色</Title>
            <Title :level="3" type="success">H3 成功</Title>
            <Title :level="3" type="warning">H3 警告</Title>
            <Title :level="3" type="danger">H3 错误</Title>
        </CaseCard>
    </div>
</template>

<script setup lang="ts">

//说明部分
let datas = [
    {
        title: "Title 级别 level",
        note: "展示不同级别的标题，一共五个级别",
        code: `<Title :level="1">H1 Hello World</Title>
<Title :level="2">H2 Hello World</Title>
<Title :level="3">H3 Hello World</Title>
<Title :level="4">H4 Hello World</Title>
<Title :level="5">H5 Hello World</Title>`
    },
    {
        title: "Title 类型 type",
        note: "展示不同类型的标题，一个五种类型",
        code: `<Title :level="3" type="primary">H3 全局主色</Title>
<Title :level="3" type="secondary">H3 全局次色</Title>
<Title :level="3" type="success">H3 成功</Title>
<Title :level="3" type="warning">H3 警告</Title>
<Title :level="3" type="danger">H3 错误</Title>`
    }
]
</script>

<style scoped></style>
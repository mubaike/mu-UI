<template>
    <div>
        <Title :level="2">Title 标题</Title>
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
        <div class="api">
            <Title :level="3">API</Title>
            <div class="unti-table">
                <Table :columns="columns" :data="data"></Table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


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

//api部分
const columns = [
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
    }
]

const data = reactive([
  {
    key: "1",
    name: "level",
    expl: "标题级别",
    type: `1 ｜ 2 ｜ 3 ｜ 4 ｜ 5 `,
    normal: "1",
  },
  {
    key: "2",
    name: "type",
    expl: "标题类型",
    type: `'default' ｜ 'primary' ｜ 'secondary' ｜ 'success' ｜ 'warning' ｜ 'danger' `,
    normal: "default",
  },
])
</script>

<style scoped lang="less">
.unti-table{
    width: 100%;
    overflow-x: auto;
}
</style>
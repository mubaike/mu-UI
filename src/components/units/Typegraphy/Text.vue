<template>
    <div>
        <Title :level="2">Text 文本</Title>
        <CaseCard :title="datas[0].title" :note="datas[0].note" :code="datas[0].code">
            <Space direction="vertical">
                <Text b>文本加粗 Hello World</Text>
                <Text :mark="true">文本标记 Hello World</Text>
                <Text :underline="true">文本下划线 Hello World</Text>
                <Text :del="true">文本删除线 Hello World</Text>
            </Space>
        </CaseCard>
        <CaseCard :title="datas[1].title" :note="datas[1].note" :code="datas[1].code">
            <Space direction="vertical">
                <Text type="primary">文本 全局主色</Text>
                <Text type="secondary">文本 全局次色</Text>
                <Text type="third">文本 全局三色</Text>
                <Text type="success">文本 成功</Text>
                <Text type="warning">文本 警告</Text>
                <Text type="danger">文本 错误</Text>
                <Text type="disabled">文本 禁止</Text>
            </Space>
        </CaseCard>
        <div class="api">
            <Title :level="3">API</Title>
            <div class="table">
                <Table :columns="columns" :data="data"></Table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

//说明
let datas = [
    {
        title: 'Text 文本 样式',
        note: '展示文本不同样式',
        code: `<Space direction="vertical">
    <Text b>文本加粗 Hello World</Text>
    <Text :mark="true">文本标记 Hello World</Text>
    <Text :underline="true">文本下划线 Hello World</Text>
    <Text :del="true">文本删除线 Hello World</Text>
</Space>`
    },
    {
        title: 'Text 文本 类型',
        note: '展示文本不同类型',
        code: `<Space direction="vertical">
    <Text type="primary">文本 全局主色</Text>
    <Text type="secondary">文本 全局次色</Text>
    <Text type="third">文本 全局三色</Text>
    <Text type="success">文本 成功</Text>
    <Text type="warning">文本 警告</Text>
    <Text type="danger">文本 错误</Text>
    <Text type="disabled">文本 禁止</Text>
</Space>`
    }
]

//api
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
        name: "mark",
        expl: "标记样式",
        type: `false | true`,
        normal: "false",
    },
    {
        key: "4",
        name: "underline",
        expl: "下划线",
        type: `false | true`,
        normal: "false",
    },
    {
        key: "5",
        name: "del",
        expl: "删除线",
        type: `false | true`,
        normal: "false",
    },
])

</script>

<style scoped lang="less">
.api{
    margin-top: 60px;
}

.table{
    width: 100%;
    overflow-x: auto;
}
</style>

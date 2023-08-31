<template>
    <main>
        <section class="top-title">
            <Title :level="2">Table 表格</Title>
        </section>
        <section class="content">
            <CaseCard :title="datas[0].title" :note="datas[0].note" :code="datas[0].code">
                <div class="table">
                    <Table :columns="columns" :data="data"></Table>
                </div>
            </CaseCard>
        </section>
        <section class="api">
            <Title :level="3">API</Title>
            <div class="table">
                <Table :columns="columns1" :data="data1"></Table>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
//

const columns = [
    {
        title: '属性名1',
        dataIndex: 'key1',
        light: false
    },{
        title: '属性名2',
        dataIndex: 'key2',
        light: false
    },{
        title: '属性名3',
        dataIndex: 'key3',
        light: true
    },{
        title: '属性名4',
        dataIndex: 'key4',
        light: true
    }
]

const data = [
    {
        key1: "value1",
        key2: "value2",
        key3: "value3",
        key4: "value4"
    }
]

//说明
let datas = [
    {
        title: "Table",
        note: "通过设置columns来展示表头，需要传递title，dataIndex，light(高亮)属性。通过设置data属性展示内容。",
        code: `<Table :columns="columns" :data="data"></Table>
const columns = [
    {
        title: '属性名1',
        dataIndex: 'key1',
        light: false
    },{
        title: '属性名2',
        dataIndex: 'key2',
        light: false
    },{
        title: '属性名3',
        dataIndex: 'key3',
        light: true
    },{
        title: '属性名4',
        dataIndex: 'key4',
        light: true
    }
]
const data = [
    {
        key1: "value1",
        key2: "value2",
        key3: "value3",
        key4: "value4"
    }
]`
    }
]

//api
const columns1 = [
    {
        title: "参数名",
        dataIndex: "name",
        light: false
    },{
        title: "描述",
        dataIndex: "expl",
        light: false
    },{
        title: "类型",
        dataIndex: "type",
        light: true
    },{
        title: "默认值",
        dataIndex: "normal",
        light: false
    }
]

const data1 = [
    {
        name: "columns",
        expl: "表头元素",
        type: "{ title | dataIndex | light }",
        normal: "-"
    },
    {
        name: "data",
        expl: "表内元素",
        type: "{ name | expl | type | normal }",
        normal: "-"
    }
]
</script>

<style scoped lang="less">
.table {
    width: 100%;
    overflow-x: auto;
}
</style>
<template>
    <main class="crumb">
        <section class="top-title">
            <Title :level="2">BreadCrumb 面包屑</Title>
            <Paragraph>用于识别页面在层次结构内的位置，并根据需要向上返回</Paragraph>
        </section>
        <section class="content">
            <CaseCard :title="datas[0].title" :note="datas[0].note" :code="datas[0].code">
                <Crumb>
                    <CrumbItem path="/home">Home</CrumbItem>
                    <CrumbItem path="/module">Module</CrumbItem>
                    <CrumbItem>Crumb</CrumbItem>
                </Crumb>
            </CaseCard>
            <CaseCard :title="datas[1].title" :note="datas[1].note" :code="datas[1].code">
                <Crumb>
                    <CrumbItem path="/home">
                        <Icon name="yk-zhuye"></Icon>
                    </CrumbItem>
                    <CrumbItem path="/module">
                        <Icon name="yk-yingyong"></Icon>
                    </CrumbItem>
                    <CrumbItem>Crumb</CrumbItem>
                </Crumb>
            </CaseCard>
            <CaseCard :title="datas[2].title" :note="datas[2].note" :code="datas[2].code">
                <Crumb :routes="routes"></Crumb>
            </CaseCard>
        </section>
        <section class="api">
            <Title :level='3'>API</Title>
            <Title :level="4">Crumb</Title>
            <div class="table">
                <Table :columns="columns" :data="data"></Table>
            </div>
            <Title :level="4">CrumbItem</Title>
            <div class="table">
                <Table :columns="columns" :data="data1"></Table>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
//
const routes = [
    {
        name: "Home",
        src: "/home",
    }, {
        name: "Module",
        src: "/module",
    }, {
        name: "Crumb",
        src: "crumb"
    }
]

//说明
const datas = [
    {
        title: "基本用法",
        note: "基本简单用法",
        code: `<Crumb>
    <CrumbItem path="/home">Home</CrumbItem>
    <CrumbItem path="/module">Module</CrumbItem>
    <CrumbItem>Crumb</CrumbItem>
</Crumb>`
    }, {
        title: "自定义图标",
        note: "若字段需要用图标展示，可以直接插入Icon图标。",
        code: `<Crumb>
    <CrumbItem path="/home"><Icon name="yk-zhuye"></Icon></CrumbItem>
    <CrumbItem path="/module"><Icon name="yk-yingyong"></Icon></CrumbItem>
    <CrumbItem>Crumb</CrumbItem>
</Crumb>`
    }, {
        title: "参数化配置 routes",
        note: "可以利用 routes 直接将面包屑json数据直接导入。",
        code: `const routes = [
    {
        name: "Home",
        src: "/home",
    },{
        name: "Module",
        src: "/module",
    },{
        name: "Crumb",
        src: "crumb"
    }
]

<Crumb :routes="routes"></Crumb>`
    }
]

//API
const columns = [
    {
        title: "参数名",
        dataIndex: "name"
    }, {
        title: "描述",
        dataIndex: "expl"
    }, {
        title: "类型",
        dataIndex: "type",
        light: true
    }, {
        title: "默认值",
        dataIndex: "normal"
    }
]
const data = [
    {
        name: "routes",
        expl: "传入面包屑内容",
        type: "[{name,path}]",
        normal: "-"
    }
]

const data1 = [
    {
        name: "path",
        expl: "节点跳转连接地址",
        type: "string",
        normal: "-"
    }
]
</script>

<style scoped lang="less">
.table {
    width: 100%;
    overflow-x: auto;
}</style>
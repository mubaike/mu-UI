<template>
    <main>
        <div class="top-title">
            <Title :level="2">Button 按钮</Title>
        </div>
        <CaseCard :title="datas[0].title" :note="datas[0].note" :code="datas[0].code">
            <Space>
                <Button>主要按钮</Button>
                <Button type="sceondary">次要按钮</Button>
                <Button type="outline">线框按钮</Button>
            </Space>
        </CaseCard>
        <CaseCard :title="datas[1].title" :note="datas[1].note" :code="datas[1].code">
            <Space aline="center">
                <Button size="s">按钮</Button>
                <Button size="m">按钮</Button>
                <Button size="l">按钮</Button>
                <Button size="xl">按钮</Button>
            </Space>
        </CaseCard>
        <CaseCard :title="datas[2].title" :note="datas[2].note" :code="datas[2].code">
            <Space>
                <Button>默认样式</Button>
                <Button shape="round">圆角样式</Button>
                <Button shape="circle"><Icon name="yk-jiahao"></Icon></Button>
                <Button shape="square"><Icon name="yk-jiahao"></Icon></Button>
            </Space>
        </CaseCard>
        <CaseCard :title="datas[3].title" :note="datas[3].note" :code="datas[3].code">
            <Space direction="vertical">
                <Space>
                    <Button>主要按钮</Button>
                    <Button type="sceondary">次要按钮</Button>
                    <Button type="outline">线框按钮</Button>
                </Space>
                <Space>
                    <Button status="primary">主要按钮</Button>
                    <Button status="primary" type="sceondary">次要按钮</Button>
                    <Button status="primary" type="outline">线框按钮</Button>
                </Space>
                <Space>
                    <Button status="success">主要按钮</Button>
                    <Button status="success" type="sceondary">次要按钮</Button>
                    <Button status="success" type="outline">线框按钮</Button>
                </Space>
                <Space>
                    <Button status="warning">主要按钮</Button>
                    <Button status="warning" type="sceondary">次要按钮</Button>
                    <Button status="warning" type="outline">线框按钮</Button>
                </Space>
                <Space>
                    <Button status="danger">主要按钮</Button>
                    <Button status="danger" type="sceondary">次要按钮</Button>
                    <Button status="danger" type="outline">线框按钮</Button>
                </Space>
            </Space>
        </CaseCard>
        <CaseCard :title="datas[4].title" :note="datas[4].note" :code="datas[4].code">
            <Space>
                <Button disabled>主要按钮</Button>
                <Button disabled type="sceondary">次要按钮</Button>
                <Button disabled type="outline">线框按钮</Button>
            </Space>
        </CaseCard>
        <CaseCard :title="datas[5].title" :note="datas[5].note" :code="datas[5].code">
            <Button loading>加载中</Button>
        </CaseCard>
        <CaseCard :title="datas[6].title" :note="datas[6].note" :code="datas[6].code">
            <Space direction="vertical" style="width: 100%;">
                <Button long>主要按钮</Button>
                <Button long type="sceondary">次要按钮</Button>
                <Button long type="outline">线框按钮</Button>
            </Space>
        </CaseCard>
        <div class="api">
            <Title :level="3">API</Title>
            <Text type="secondary">通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> size -> shape -> status -> disabled。</Text>
            <div class="table">
                <Table :columns="columns" :data="data"></Table>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

//说明
let datas = [
    {
        title: "按钮类型 type",
        note: "按钮有三种类型：主要按钮、次要按钮、线框按钮。主按钮在同一个操作区域建议最多出现一次。",
        code: `<Button>主要按钮</Button>
<Button type="sceondary">次要按钮</Button>
<Button type="outline">线框按钮</Button>`
    },
    {
        title: "按钮尺寸 size",
        note: "按钮分为：s、m、l、xl 四种尺寸。高度分别为：24px、32px、36px、48px。默认尺寸为 l。",
        code: `<Button size="s">按钮</Button>
<Button size="m">按钮</Button>
<Button size="l">按钮</Button>
<Button size="xl">按钮</Button>`
    },
    {
        title: "按钮形状 shape",
        note: "按钮分为默认形状、circle 圆形、round 全圆角、square 正方形四种形状。",
        code: `<Button>默认样式</Button>
<Button shape="round">圆角样式</Button>
<Button shape="circle">┼</Button>
<Button shape="square">┼</Button>`
    },
    {
        title: "按钮状态 status",
        note: "按钮的状态分为 默认、primary 主要、success 成功、warning 警告、danger 危险五种，可以与按钮类型同时使用。",
        code: `<Space direction="vertical">
    <Space>
        <Button>主要按钮</Button>
        <Button type="sceondary">次要按钮</Button>
        <Button type="outline">线框按钮</Button>
    </Space>
    <Space>
        <Button status="primary">主要按钮</Button>
        <Button status="primary" type="sceondary">次要按钮</Button>
        <Button status="primary" type="outline">线框按钮</Button>
    </Space>
    <Space>
        <Button status="success">主要按钮</Button>
        <Button status="success" type="sceondary">次要按钮</Button>
        <Button status="success" type="outline">线框按钮</Button>
    </Space>
    <Space>
        <Button status="warning">主要按钮</Button>
        <Button status="warning" type="sceondary">次要按钮</Button>
        <Button status="warning" type="outline">线框按钮</Button>
    </Space>
    <Space>
        <Button status="danger">主要按钮</Button>
        <Button status="danger" type="sceondary">次要按钮</Button>
        <Button status="danger" type="outline">线框按钮</Button>
    </Space>
</Space>`
    },
    {
        title: "禁止状态 disabled",
        note: "按钮不可点击",
        code: `<Button disabled>主要按钮</Button>
<Button disabled type="sceondary">次要按钮</Button>
<Button disabled type="outline">线框按钮</Button>`
    },
    {
        title: "加载中按钮 loading",
        note: "通过设置 loading 可以让按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件。",
        code: `<Button loading>加载中</Button>`
    },
    {
        title: "长按钮 long",
        note: "通过设置 long 属性，使按钮的宽度跟随容器的宽度。",
        code: `<Space direction="vertical" style="width: 100%;">
    <Button long>主要按钮</Button>
    <Button long type="sceondary">次要按钮</Button>
    <Button long type="outline">线框按钮</Button>
</Space>`
    }
]

//API 
const columns = [
    {
        title: '参数名',
        dataIndex: 'name',
        light: false
    },
    {
        title: '描述',
        dataIndex: 'expl',
        light: false
    },
    {
        title: '类型',
        dataIndex: 'type',
        light: true
    },
    {
        title: '默认值',
        dataIndex: 'normal',
        light: false
    },
]
const data = reactive([{
    key: '1',
    name: 'type',
    expl: '按钮的类型',
    type: `'primary' | 'secondary' | 'outline'`,
    normal: 'primary'
}, {
    key: '2',
    name: 'size',
    expl: '按钮的尺寸',
    type: `'s' | 'm' | 'l' | 'xl'`,
    normal: 'l'
}, {
    key: '3',
    name: 'shape',
    expl: '按钮的形状',
    type: `'round' | 'circle' | 'square'`,
    normal: '-'
}, {
    key: '4',
    name: 'stauts',
    expl: '按钮的状态',
    type: `'primary' | 'success' | 'warning' | 'danger'`,
    normal: '-'
}, {
    key: '5',
    name: 'disabled',
    expl: '按钮是否被禁用',
    type: `false | true `,
    normal: 'false'
}, {
    key: '6',
    name: 'loading',
    expl: '按钮是否加载中',
    type: `false | true `,
    normal: 'false'
}, {
    key: '7',
    name: 'long',
    expl: '按钮是否通栏',
    type: `false | true `,
    normal: 'false'
}]);
</script>

<style scoped lang="less">
.table{
    width:100%;
    // overflow: hidden;
    overflow-x: auto;
  }
</style>
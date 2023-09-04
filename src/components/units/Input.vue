<template>
    <main>
        <section class="top-title">
            <Title :level="2">Input 输入框</Title>
            <Paragraph>基本表单组件,用于文本内容输入。</Paragraph>
        </section>
        <section class="content">
            <CaseCard :title="datas[0].title" :note="datas[0].note" :code="datas[0].code">
                <Input v-model="value" placeholder="请输入" allowClear />
            </CaseCard>
            <CaseCard :title="datas[1].title" :note="datas[1].note" :code="datas[1].code">
                <Space direction='vertical'>
                    <Input disabled placeholder="不可操作" allowClear />
                    <Input v-model="value2" readonly />
                    <Input v-model="value3" error placeholder="错误输入框" allowClear />
                </Space>
            </CaseCard>
            <CaseCard :title="datas[2].title" :note="datas[2].note" :code="datas[2].code">
                <Space direction='vertical'>
                    <Input size="s" v-model="value4" placeholder="请输入" allowClear />
                    <Input size="m" v-model="value4" placeholder="请输入" allowClear />
                    <Input size="l" v-model="value4" placeholder="请输入" allowClear />
                    <Input size="xl" v-model="value4" placeholder="请输入" allowClear />
                </Space>
            </CaseCard>
            <CaseCard :title="datas[3].title" :note="datas[3].note" :code="datas[3].code">
                <Input v-model="value5" placeholder="请输入" :maxLength="12" showLimit />
            </CaseCard>
        </section>
        <section class="footer">
            <Title :level="3">API</Title>
            <Title :level="4">Input . Props</Title>
            <div class="table">
                <Table :columns="columns" :data="data"></Table>
            </div>
            <Title :level="4">Input . Events</Title>
            <div class="table">
                <Table :columns="columns2" :data="data1"></Table>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('')
const value2 = ref('只读')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')

//说明
const datas = [
    {
        title: "基础用法",
        note: "最基础的用法，v-model进行双向绑定，placeholder 占位文本，allowClear 清除按钮。",
        code: `<Input v-model="value" placeholder="请输入" allowClear />`
    },{
        title: "输入框状态",
        note: "输入框有4种状态，默认，disabled 未激活，readonly 只读，error 错误。",
        code: `<Space direction='vertical'>
    <Input disabled placeholder="不可操作" allowClear />
    <Input v-model="value2" readonly />
    <Input v-model="value3" error placeholder="错误输入框" allowClear />
</Space>`
    },{
        title: "输入框尺寸 size",
        note: "输入框有4种尺寸，s 、 m 、 l 、 xl，默认为 l。",
        code: `<Space direction='vertical'>
    <Input size="s" v-model="value" placeholder="请输入" allowClear />
    <Input size="m" v-model="value" placeholder="请输入" allowClear />
    <Input size="l" v-model="value" placeholder="请输入" allowClear />
    <Input size="xl" v-model="value" placeholder="请输入" allowClear />
</Space>`
    },{
        title: "数字统计 maxLength",
        note: "设置 maxLength 可以限制最大字数，配合 showLimit 可以显示字数统计。",
        code: `<Input v-model="value4" placeholder="请输入" :maxLength="12" showLimit />`
    }
]


//api
const columns = [
    {
        title: "参数名",
        dataIndex: "name",
        light: false
    }, {
        title: "描述",
        dataIndex: "expl",
        light: false
    }, {
        title: "类型",
        dataIndex: "type",
        light: true
    }, {
        title: "默认值",
        dataIndex: "normal",
        light: false
    }
]

const data = [
    {
        name: "v-model",
        expl: "绑定值",
        type: "string",
        normal: "-"
    },{
        name: "allowClear",
        expl: "是否允许清空输入框",
        type: "boolean",
        normal: "false"
    },{
        name: "disabled",
        expl: "是否禁用",
        type: "boolean",
        normal: "false"
    },{
        name: "readonly",
        expl: "是否为只读状态",
        type: "boolean",
        normal: "false"
    },{
        name: "error",
        expl: "是否为错误状态",
        type: "boolean",
        normal: "false"
    },{
        name: "placeholder",
        expl: "提示文字",
        type: "string",
        normal: "-"
    },{
        name: "size",
        expl: "输入框大小",
        type: "'s' | 'm' | 'l' | 'xl'",
        normal: "l"
    },{
        name: "maxLength",
        expl: "输入框的最大长度",
        type: "number",
        normal: "-"
    },{
        name: "showLimit",
        expl: "是否显示字数统计",
        type: "boolean",
        normal: "false"
    }
]

const columns2 = [
    {
        title: "参数名",
        dataIndex: "name",
        light: false
    }, {
        title: "描述",
        dataIndex: "expl",
        light: false
    }, {
        title: "参数",
        dataIndex: "type",
        light: true
    }
]
const data1 = [
    {
        name: "focus",
        expl: "输入框获取焦点时触发",
        type: 'value'
    }, {
        name: "blur",
        expl: "输入框失去焦点时触发",
        type: 'value'
    }, {
        name: "clear",
        expl: "用户点击清除按钮时触发",
        type: '-'
    },{
        name: "pEnter",
        expl: "用户按下回车时触发",
        type: '-'
    }
]
</script>

<style scoped :lang="less">
.table{
    width: 100%;
    overflow-x: auto;
}
</style>
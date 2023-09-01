<template>
    <main>
        <section class="top-title">
            <Title :level="2">Message 消息弹窗</Title>
            <Paragraph>常用于主动操作后的反馈提示，用于系统级通知的被动提醒。</Paragraph>
        </section>
        <section class="wrap-1">
            <CaseCard :title="datas[0].title" :note="datas[0].note" :code="datas[0].code">
                <Button @click="() => proxy.$message({message: sayHello})">打开消息提示</Button>
            </CaseCard>
            <CaseCard :title="datas[1].title" :note="datas[1].note" :code="datas[1].code">
                <Space>
                    <Button @click="() => proxy.$message({})">消息</Button>
                    <Button status="success" @click="() => proxy.$message({type: 'success'})">成功</Button>
                    <Button status="warning" @click="() => proxy.$message({type: 'warning'})">警告</Button>
                    <Button status="danger" @click="() => proxy.$message({type: 'error'})">错误</Button>
                </Space>
            </CaseCard>
        </section>
        <section class="wrap-2">
            <Title :level="3">API</Title>
            <div class="table">
                <Table :columns="columns" :data="data"></Table>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import {getCurrentInstance,computed}  from 'vue'
const { proxy }:any = getCurrentInstance()

//获取当前时间
const myData = new Date();
const nowHours = myData.getHours();
const sayHello = computed(() => {
    if( nowHours >= 4  &&  nowHours <= 10){
        return "早上好！"
    }else if ( nowHours > 10 && nowHours < 14 ){
        return "中午好！"
    }else if ( nowHours >= 14 && nowHours <=18 ){
        return "下午好！"
    }else {
        return "晚上好！"
    }
})

//说明
const datas = [
    {
        title: "基础用法",
        note: "从顶部出现，3秒后消失。",
        code: `//在 Vue3 中使用，需先引入下列代码
import {getCurrentInstance}  from 'vue'
const { proxy }:any = getCurrentInstance()

//html
<Button @click="() => proxy.$message({message:"提示文本"})">打开消息提示</Button>`
    },{
        title: "不同状态",
        note: "消息提示的状态分为 default 默认、success 成功、warning 警告、error 错误四种",
        code: `<Space>
    <Button @click="() => proxy.$message({})">消息</Button>
    <Button status="success" @click="() => proxy.$message({type: 'success'})">成功</Button>
    <Button status="warning" @click="() => proxy.$message({type: 'warning'})">警告</Button>
    <Button status="danger" @click="() => proxy.$message({type: 'error'})">错误</Button>
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

const data = [
    {
        name: 'message',
        expl: '提示文本',
        type: 'String',
        normal: '-'
    },{
        name: 'type',
        expl: '提示类型',
        type: 'default | success | warning | error',
        normal: 'default'
    }
]
</script>

<style scoped lang="less">
.table {
    width: 100%;
    overflow-x: auto;
}
</style>
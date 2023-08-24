<template>
    <div>
        <Title>Text 文本</Title>
        <CaseCard
            :title="datas[0].title"
            :note="datas[0].note"
            :code="datas[0].code">
            <Space direction="vertical">
                <Text b>文本加粗 Hello World</Text>
                <Text :mark="true">文本标记 Hello World</Text>
                <Text :underline="true">文本下划线 Hello World</Text>
                <Text :del="true">文本删除线 Hello World</Text>
            </Space>
        </CaseCard>
        <CaseCard
            :title="datas[1].title"
            :note="datas[1].note"
            :code="datas[1].code">
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
    </div>
</template>

<script setup lang="ts">
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
</script>

<style scoped lang="less"></style>
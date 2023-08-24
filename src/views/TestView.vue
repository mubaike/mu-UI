<template>
    <div>
        <Title :level=1>标题</Title>
        <Title :level=2 type="primary">标题</Title>
        <Title :level=3 type="secondary">标题</Title>
        <Title :level=4 type="success">标题</Title>
        <Title :level=5 type="warning">标题</Title>
        <Title :level=6 type="danger">标题</Title>
    </div>
    <div>
        <Text type="primary">文本</Text>
        <Text b type="secondary">文本</Text>
        <Text b :mark=true type="third">文本</Text>
        <Text :del=true type="disabled">文本</Text>
        <Text :underline=true type="success">文本</Text>
        <Text b type="warning">文本</Text>
        <Text b type="danger">文本</Text>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
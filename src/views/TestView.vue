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
    <div style="width: 200px;">
        <Paragraph :ellipsis="{rows:1,showMore: true}" :copyable="true">按附件爱爱减肥</Paragraph>
        <Paragraph :ellipsis="{rows:2,showMore: true}" :copyable="true">按附件爱发aaaaawdwdwd发而dvvdvfafsdv佛尔阿风啊和非法佛二分哦i范加尔松丰foes附件二哦i发厄缶额u菲菲视频foes分配法 哦UFO色富婆而是纷纷爱减肥</Paragraph>
    </div>
    <div>
        <Button>默认按钮</Button>
        <Button type="sceondary">次要按钮</Button>
        <Button type="outline">线性按钮</Button>
        <Button shape="circle">参数</Button>
        <Button shape="square"></Button>
    </div>
    
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
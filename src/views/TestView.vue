<template>
    <div class="d1">
        <Dropdown trigger="click">
            <Button type="sceondary">hover</Button>
            <template #content class="d2">
                <DropdownItem><a href="https://baidu.com">下拉菜单1</a></DropdownItem>
                <DropdownItem>下拉菜单2</DropdownItem>
                <Submenu>
                    二级菜单
                    <template #content>
                        <DropdownItem>二级菜单</DropdownItem>
                        <DropdownItem>二级菜单</DropdownItem>
                        <DropdownItem>二级菜单</DropdownItem>
                        <DropdownItem>二级菜单</DropdownItem>
                        <Submenu>
                            二级菜单
                            <template #content>
                                <DropdownItem>二级菜单</DropdownItem>
                                <DropdownItem>二级菜单</DropdownItem>
                                <DropdownItem>二级菜单</DropdownItem>
                                <DropdownItem>二级菜单</DropdownItem>
                            </template>
                        </Submenu>
                    </template>
                </Submenu>
            </template>
        </Dropdown>
    </div>
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
        <Paragraph :ellipsis="{ rows: 1, showMore: true }" :copyable="true">按附件爱爱减肥</Paragraph>
        <Paragraph :ellipsis="{ rows: 2, showMore: true }" :copyable="true">
            按附件爱发aaaaawdwdwd发而dvvdvfafsdv佛尔阿风啊和非法佛二分哦i范加尔松丰foes附件二哦i发厄缶额u菲菲视频foes分配法 哦UFO色富婆而是纷纷爱减肥</Paragraph>
    </div>
    <div>
        <Button>默认按钮</Button>
        <Button type="sceondary">次要按钮</Button>
        <Button type="outline">线性按钮</Button>
        <Button shape="circle">参数</Button>
        <Button shape="square"></Button>
    </div>
    <div>
        <Icon style="font-size: 30px;"></Icon>
    </div>
    <div>
        <Crumb trigger="click">
            <CrumbItem>1</CrumbItem>
            <CrumbItem>2</CrumbItem>
            <CrumbItem>3</CrumbItem>
            <CrumbItem>4</CrumbItem>
        </Crumb>
        <Crumb :routes="routes"></Crumb>
    </div>
    <div>
        <Dropdown></Dropdown>
    </div>
    <button @click="handleClickMessage">按钮</button>
    <Icon name="yk-jinggao"></Icon>
    <!-- <Theme></Theme> -->
    <div class="t1">
        <Input v-model="inputValue" :maxLength="4" placeholder="请输入" allowClear @clear="() => inputValue = ''">{{ inputValue
        }}</Input>
        <Input error size="xl" v-model="inputValue" placeholder="请输入" allowClear @clear="() => inputValue = ''">{{
            inputValue }}</Input>
    </div>
</template>

<script setup lang="ts">
import { Dropdown } from '@/mu-ui';
import { getCurrentInstance, ref } from 'vue'
const routes = [
    {
        name: "首页",
        src: "javascript:;"
    }, {
        name: "菜单",
        src: "javascript:;"
    }, {
        name: "商店",
        src: "javascript:;"
    }
]

const { proxy }: any = getCurrentInstance()
const handleClickMessage = () => {
    // const message = {
    //     message: "你好"
    // }
    proxy.$message({ message: "edddddddddddddddddddddddddddddddddddddddd我顶我顶ddddffefe", type: "error" });
}

//input
const inputValue = ref('')

</script>

<style scoped lang="less">
.t1 {
    padding-bottom: 20px;
}

.d1 {
    margin-left: 100px;
    width: 50px;
}

.d2 {
    width: 50px;
}
</style>
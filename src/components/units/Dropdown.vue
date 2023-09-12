<template>
    <main>
        <section class="top-title">
            <Title :level="2">Dropdown 下拉菜单</Title>
            <Paragraph>页面上的命令过多时，可将备选命令收纳到向下展开的浮层容器中。通常用于菜单下拉。</Paragraph>
        </section>
        <section class="content">
            <CaseCard :title="datas[0].title" :note="datas[0].note" :code="datas[0].code">
                <Space>
                    <Dropdown>
                        <Button type="sceondary">hover</Button>
                        <template #content>
                            <DropdownItem>
                                <Icon name="yk-biaoqing" style="margin-right: 10px;" />菜单1
                            </DropdownItem>
                            <DropdownItem>
                                <Icon name="yk-taiyang" style="margin-right: 10px;" />菜单2
                            </DropdownItem>
                            <DropdownItem>
                                <Icon name="yike-touxiang" style="margin-right: 10px;" />菜单3
                            </DropdownItem>
                        </template>
                    </Dropdown>
                    <Dropdown disabled>
                        <Button type="sceondary">disabled</Button>
                        <template #content>
                            <DropdownItem>菜单1</DropdownItem>
                            <DropdownItem>菜单2</DropdownItem>
                            <DropdownItem>菜单3</DropdownItem>
                        </template>
                    </Dropdown>
                </Space>
            </CaseCard>
            <CaseCard :title="datas[1].title" :note="datas[1].note" :code="datas[1].code">
                <Space>
                    <Dropdown>
                        <Button type="sceondary">hover</Button>
                        <template #content>
                            <DropdownItem>菜单1</DropdownItem>
                            <DropdownItem>菜单2</DropdownItem>
                            <DropdownItem>菜单3</DropdownItem>
                        </template>
                    </Dropdown>
                    <Dropdown trigger="click">
                        <Button type="sceondary">点击触发</Button>
                        <template #content>
                            <DropdownItem>菜单1</DropdownItem>
                            <DropdownItem>菜单2</DropdownItem>
                            <DropdownItem>菜单3</DropdownItem>
                        </template>
                    </Dropdown>
                </Space>
            </CaseCard>
            <CaseCard :title="datas[2].title" :note="datas[2].note" :code="datas[2].code">
                <Space wrap>
                    <Dropdown position="bl">
                        <Button type="sceondary">左下角的位置</Button>
                        <template #content>
                            <DropdownItem>菜单1</DropdownItem>
                            <DropdownItem>菜单2</DropdownItem>
                            <DropdownItem>菜单3</DropdownItem>
                        </template>
                    </Dropdown>
                    <Dropdown>
                        <Button type="sceondary">正下方的位置</Button>
                        <template #content>
                            <DropdownItem>菜单1</DropdownItem>
                            <DropdownItem>菜单2</DropdownItem>
                            <DropdownItem>菜单3</DropdownItem>
                        </template>
                    </Dropdown>
                    <Dropdown position="br">
                        <Button type="sceondary">右下角的位置</Button>
                        <template #content>
                            <DropdownItem>菜单1</DropdownItem>
                            <DropdownItem>菜单2</DropdownItem>
                            <DropdownItem>菜单3</DropdownItem>
                        </template>
                    </Dropdown>
                    <Dropdown position="tl">
                        <Button type="sceondary">左上角的位置</Button>
                        <template #content>
                            <DropdownItem>菜单1</DropdownItem>
                            <DropdownItem>菜单2</DropdownItem>
                            <DropdownItem>菜单3</DropdownItem>
                        </template>
                    </Dropdown>
                    <Dropdown position="top">
                        <Button type="sceondary">正上方的位置</Button>
                        <template #content>
                            <DropdownItem>菜单1</DropdownItem>
                            <DropdownItem>菜单2</DropdownItem>
                            <DropdownItem>菜单3</DropdownItem>
                        </template>
                    </Dropdown>
                    <Dropdown position="tr">
                        <Button type="sceondary">右上方的位置</Button>
                        <template #content>
                            <DropdownItem>菜单1</DropdownItem>
                            <DropdownItem>菜单2</DropdownItem>
                            <DropdownItem>菜单3</DropdownItem>
                        </template>
                    </Dropdown>
                </Space>
            </CaseCard>
            <CaseCard :title="datas[3].title" :note="datas[3].note" :code="datas[3].code">
                <Dropdown>
                    <Button type="sceondary">hover</Button>
                    <template #content>
                        <DropdownItem>菜单1</DropdownItem>
                        <DropdownItem>菜单2</DropdownItem>
                        <Submenu>二级菜单
                            <template #content>
                                <DropdownItem>菜单1</DropdownItem>
                                <DropdownItem>菜单2</DropdownItem>
                                <Submenu>三级菜单
                                    <template #content>
                                        <DropdownItem>菜单1</DropdownItem>
                                        <DropdownItem>菜单2</DropdownItem>
                                        <DropdownItem>菜单3</DropdownItem>
                                    </template>
                                </Submenu>
                            </template>
                        </Submenu>
                    </template>
                </Dropdown>
            </CaseCard>
        </section>
        <section class="footer">
            <Title :level="3">API</Title>
            <Title :level="4">Dropdown . Props</Title>
            <div class="table">
                <Table :columns="columns" :data="data"></Table>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
const datas = [
    {
        title: "基础用法",
        note: "下拉菜单的基本用法，默认采用hover触发，传递disabled参数取消激活",
        code: `<Space>
    <Dropdown>
        <Button type="sceondary">hover</Button>
        <template #content>
            <DropdownItem><Icon name="yk-biaoqing" style="margin-right: 10px;"/>菜单1</DropdownItem>
            <DropdownItem><Icon name="yk-taiyang" style="margin-right: 10px;"/>菜单2</DropdownItem>
            <DropdownItem><Icon name="yike-touxiang" style="margin-right: 10px;"/>菜单3</DropdownItem>
        </template>
    </Dropdown>
    <Dropdown disabled>
        <Button type="sceondary">disabled</Button>
        <template #content>
            <DropdownItem>菜单1</DropdownItem>
            <DropdownItem>菜单2</DropdownItem>
            <DropdownItem>菜单3</DropdownItem>
        </template>
    </Dropdown>
</Space>`
    }, {
        title: '触发方式 trigger',
        note: "通过设置 trigger 指定触发方式。支持hover(默认) 鼠标，click 点击",
        code: `<Space>
    <Dropdown>
        <Button type="sceondary">hover</Button>
        <template #content>
            <DropdownItem>菜单1</DropdownItem>
            <DropdownItem>菜单2</DropdownItem>
            <DropdownItem>菜单3</DropdownItem>
        </template>
    </Dropdown>
    <Dropdown trigger="click">
        <Button type="sceondary">点击触发</Button>
        <template #content>
            <DropdownItem>菜单1</DropdownItem>
            <DropdownItem>菜单2</DropdownItem>
            <DropdownItem>菜单3</DropdownItem>
        </template>
    </Dropdown>
</Space>`
    }, {
        title: "弹窗的位置 position",
        note: "通过 position 支持指定 6 种弹出方位，分别是：top: 向上, tl: 左上, tr: 右上, bottom: 下方(默认), bl: 左下, br: 右下。",
        code: `<Space>
    <Dropdown position="bl">
        <Button type="sceondary">左下角的位置</Button>
        <template #content>
            <DropdownItem>菜单1</DropdownItem>
            <DropdownItem>菜单2</DropdownItem>
            <DropdownItem>菜单3</DropdownItem>
        </template>
    </Dropdown>
    <Dropdown>
        <Button type="sceondary">正下方的位置</Button>
        <template #content>
            <DropdownItem>菜单1</DropdownItem>
            <DropdownItem>菜单2</DropdownItem>
            <DropdownItem>菜单3</DropdownItem>
        </template>
    </Dropdown>
    <Dropdown position="br">
        <Button type="sceondary">右下角的位置</Button>
        <template #content>
            <DropdownItem>菜单1</DropdownItem>
            <DropdownItem>菜单2</DropdownItem>
            <DropdownItem>菜单3</DropdownItem>
        </template>
    </Dropdown>
    <Dropdown position="tl">
        <Button type="sceondary">左上角的位置</Button>
        <template #content>
            <DropdownItem>菜单1</DropdownItem>
            <DropdownItem>菜单2</DropdownItem>
            <DropdownItem>菜单3</DropdownItem>
        </template>
    </Dropdown>
    <Dropdown position="top">
        <Button type="sceondary">正上方的位置</Button>
        <template #content>
            <DropdownItem>菜单1</DropdownItem>
            <DropdownItem>菜单2</DropdownItem>
            <DropdownItem>菜单3</DropdownItem>
        </template>
    </Dropdown>
    <Dropdown position="tr">
        <Button type="sceondary">右上方的位置</Button>
        <template #content>
            <DropdownItem>菜单1</DropdownItem>
            <DropdownItem>菜单2</DropdownItem>
            <DropdownItem>菜单3</DropdownItem>
        </template>
    </Dropdown>
</Space>`
    }, {
        title: "多级菜单",
        note: "带有多级菜单的下拉框。",
        code: `<Dropdown>
    <Button type="sceondary">hover</Button>
    <template #content>
        <DropdownItem>菜单1</DropdownItem>
        <DropdownItem>菜单2</DropdownItem>
        <Submenu>二级菜单
            <template #content>
                <DropdownItem>菜单1</DropdownItem>
                <DropdownItem>菜单2</DropdownItem>
                <Submenu>三级菜单
                    <template #content>
                        <DropdownItem>菜单1</DropdownItem>
                        <DropdownItem>菜单2</DropdownItem>
                        <DropdownItem>菜单3</DropdownItem>
                    </template>
                </Submenu>
            </template>
        </Submenu>
    </template>
</Dropdown>`
    }
]

//API
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
        name: "trigger",
        expl: "触发方式",
        type: "'hover' | 'click",
        normal: "hover"
    },{
        name: "position",
        expl: "弹出位置",
        type: "'bottom' | 'bl' | 'br' | 'top' | 'tl' | 'tr'",
        normal: "bottom"
    }, {
        name: "disabled",
        expl: "是否禁用",
        type: "boolean",
        normal: "false"
    }, {
        name: "maxWidth",
        expl: "最大宽度",
        type: "Number",
        normal: "200"
    }, {
        name: "maxHeight",
        expl: "最大高度",
        type: "Number",
        normal: "320"
    }
]

</script>

<style scoped lang="less">
.table {
    width: 100%;
    overflow-x: auto;
}
</style>
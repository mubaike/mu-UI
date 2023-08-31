import Container from './components/container/container.vue'
import Title from './components/typography/MuTitle.vue'
import Text from './components/typography/MuText.vue'
import Space from './components/Space/MuSpace.vue'
import Paragraph from './components/typography/MuParagraph.vue'
import Table from './components/table/MuTable.vue'
import Button from './components/button/MuButton.vue'
import Icon from './components/icon/MuIcon.vue'
import Crumb from './components/crumb/MuCrumb.vue'
import CrumbItem from './components/crumb/CrumbItem.vue'
import type { Component } from 'vue'

const components: {
    [propName: string]: Component  
} = {
    Container,
    Title,
    Text,
    Space,
    Paragraph,
    Table,
    Button,
    Icon,
    Crumb,
    CrumbItem,
}
const install = (app: any) =>  {
    //全局挂载
    for(const componentItem in components) {
        app.component(componentItem,components[componentItem])
    }
}

export {
    install,
    Container, //区域块
    Title,     //标题
    Text,      //文本
    Space,     //间距
    Paragraph, //段落
    Table,     //表格
    Button,    //按钮
    Icon,      //图标
    Crumb,     //面包屑
    CrumbItem, //面包屑节点
}
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
import Dropdown from './components/dropdown/MuDropdown.vue'
import Message from './components/message/Message'
import Theme from './components/theme/MuTheme.vue'
import Input from './components/input/MuInput.vue'
import type { Component } from 'vue'

//引入动画库
import 'animate.css/animate.min.css';
//引入全局样式
import './assets/style/mu-index.less';

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
    Dropdown,
    Theme,
    Input,
}
const install = (app: any) =>  {
    //全局挂载
    for(const componentItem in components) {
        app.component(componentItem,components[componentItem])
    }

    app.config.globalProperties.$message = Message
}

export {
    install,   //全局
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
    Dropdown,  //下拉菜单
    Message,   //消息弹窗(全局信息)
    Theme,     //主题切换
    Input,     //输入框
}
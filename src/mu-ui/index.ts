import Container from './components/container/container.vue'
import Title from './components/typography/MuTitle.vue'
import Text from './components/typography/MuText.vue'
import Space from './components/Space/MuSpace.vue'
import type { Component } from 'vue'

const components: {
    [propName: string]: Component  
} = {
    Container,
    Title,
    Text,
    Space
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
}
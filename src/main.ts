import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//引入全局样式
import './assets/main.less'
//全局加载组件
import {install} from '@/mu-ui'
import CaseCard from '@/components/CaseCard.vue'

//highligt 的样式，依赖包，组件
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import 'animate.css/animate.min.css';

hljs.registerLanguage('javascript', javascript)

const app = createApp(App)

//全局引入卡片组件
app.component('CaseCard',CaseCard)
//全局注册ui组件
app.use(install)
app.use(router)
app.use(hljsVuePlugin)
app.mount('#app')

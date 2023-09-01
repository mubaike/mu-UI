import { createVNode, render } from 'vue'
import MuMessage from './MuMessage.vue'



const divVNode = createVNode('div', {class: 'xtx-message-container'})
render(divVNode, document.body)

const div:any = divVNode.el
let timer:any;

const Message = ({message, type}: any) => {
    if(timer) {
        render(null, div)
        clearTimeout(timer)
    }
    const comVNode = createVNode(MuMessage, {message, type})

    render(comVNode, div)

    timer = setTimeout(() => {
        render(null, div)
    },3500)
}

export default Message
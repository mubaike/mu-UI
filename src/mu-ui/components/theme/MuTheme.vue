<template>
  <div class="theme" @click="onChange()">
    <muIcon name="yike-taiyang" v-show="dark" class="son" />
    <muIcon name="yike-yueliang" v-show="!dark" class="moon" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {menusModel} from "./model"
import muIcon from "../icon/MuIcon.vue";

const dark = ref(false);
const obj = ref({})

//主题切换
const theme = (obj: any): void => {
  for (let key in obj) {
    document
      .getElementsByTagName('body')[0]
      .style.setProperty(`--${key}`, obj[key])
  }
}

//点击事件，切换主题
const onChange = () => {
    dark.value = !dark.value;
    if(dark.value){
        obj.value = menusModel.themeB
    }else{
        obj.value = menusModel.themeA
    }
    theme(obj.value)
}
</script>

<style scoped lang="less">
.theme {
    text-align: center;
    cursor: pointer;
    .son {
        font-size: 16px;
        color: #ff9b00;
    }
    .moon {
        font-size: 16px;
        color: #ffd500;
    }
}
</style>
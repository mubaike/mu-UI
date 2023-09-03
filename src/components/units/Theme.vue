<template>
  <main class="mu-theme">
    <section class="tap-title">
      <Title :level="2">Theme 主题切换</Title>
      <paragraph>目前支持夜间模式切换。</paragraph>
    </section>
    <section class="wrap-1">
      <CaseCard
        :title="datas[0].title"
        :note="datas[0].note"
        :code="datas[0].code"
      >
        <Theme></Theme>
      </CaseCard>
      <CaseCard
        :title="datas[1].title"
        :note="datas[1].note"
        :code="datas[1].code"
      >
        <Theme></Theme>
      </CaseCard>
    </section>
  </main>
</template>

<script setup lang="ts">
const datas = [
  {
    title: "基础使用",
    note: "点击切换黑暗模式。可以根据系统模式自动切换。",
    code: `<Theme></Theme>`,
  },
  {
    title: "自定义主题",
    note: "可以在 mu-ui -> components -> theme -> model.ts 文件中自定义主题颜色。",
    code: `export const menusModel = {
    themeA: {
        fontcolorl: 'rgba(30,32,37,1)',
        fontcolorm: 'rgba(30,32,37,0.8)',
        fontcolors: 'rgba(30,32,37,0.5)',
        fontcolorss: 'rgba(30,32,37,0.3)',
        bgcolorl: '#fff',
        bgcolorm: '#F6F6F8',
        bgcolors: '#F3F3F4',
        bgcolorss: '#E8E8E8',
        linecolorm: '#E8E8E8',
        linecolors: '#D1D1D2',
    }
}`,
  },
];
</script>

<style scoped>
</style>
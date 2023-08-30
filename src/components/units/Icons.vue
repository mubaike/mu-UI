<template>
    <main>
        <div class="top-title">
            <Title :level="2">Icon 图标</Title>
        </div>
        <section class="exhibition">
            <Title :level="3">线性图标</Title>
            <Paragraph>复制对应图标下的名称获取该图标。</Paragraph>
            <div class="exhibition_list">
                <div class="exhibition_list_item" v-for="(item, index) in icon_list1" :key="index">
                    <div class="icon-box">
                        <Icon :name="item.name"></Icon>
                    </div>
                    <p>{{ item.name }}</p>
                </div>
            </div>
            <Title :level="3">面性图标</Title>
            <Paragraph>复制对应图标下的名称获取该图标。</Paragraph>
            <div class="exhibition_list">
                <div class="exhibition_list_item" v-for="(item, index) in icon_list2" :key="index">
                    <div class="icon-box">
                        <Icon :name="item.name"></Icon>
                    </div>
                    <p>{{ item.name }}</p>
                </div>
            </div>
        </section>
        <CaseCard :title="datas[0].title" :note="datas[0].note" :code="datas[0].code">
            <Space aline="center" :size="40">
                <Icon></Icon>
                <Icon name="yk-xin"></Icon>
                <Icon name="yike-xin" style="color: red;"></Icon>
                <Button shape="circle">
                    <Icon name="yk-jiahao"></Icon>
                </Button>
            </Space>
        </CaseCard>
        <div class="api">
            <Title :level="3">API</Title>
            <Paragraph>只有一个name</Paragraph>
            <Table :columns="columns" :data="data"></Table>
        </div>
    </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

//线性图标
const icon_list1 = [{
    name: 'yk-jingbao'
}, {
    name: 'yk-yifu'
}, {
    name: 'yk-jiangbei'
}, {
    name: 'yk-shuju'
}, {
    name: 'yk-paihang'
}, {
    name: 'yk-huangguan'
}, {
    name: 'yk-vip'
}, {
    name: 'yk-geshishua'
}, {
    name: 'yk-dengpao'
}, {
    name: 'yk-yuedu'
}, {
    name: 'yk-anquan'
}, {
    name: 'yk-daiban'
}, {
    name: 'yk-biaoqian'
}, {
    name: 'yk-guangbo'
}, {
    name: 'yk-kapian'
}, {
    name: 'yk-gouwudai'
}, {
    name: 'yk-gouwuche'
}, {
    name: 'yk-qianbao'
}, {
    name: 'yk-shuqian'
}, {
    name: 'yk-nv'
}, {
    name: 'yk-riqi'
}, {
    name: 'yk-renyuanxinxi'
}, {
    name: 'yk-zuoxuanzhuan'
}, {
    name: 'yk-caidan'
}, {
    name: 'yk-zhankai'
}, {
    name: 'yk-shouqi'
}, {
    name: 'yk-xiexian'
}, {
    name: 'yk-daima'
}, {
    name: 'yk-kaobei'
}, {
    name: 'yk-biaoqing'
}, {
    name: 'yk-fanhui'
}, {
    name: 'yk-dingwei'
}, {
    name: 'yk-cha'
}, {
    name: 'yk-gengduo'
}, {
    name: 'yk-bofang'
}, {
    name: 'yk-fenxiang'
}, {
    name: 'yk-gou1'
}, {
    name: 'yk-jiahao'
}, {
    name: 'yk-jianhao'
}, {
    name: 'yk-gou2'
}, {
    name: 'yk-jiantouxiangxia'
}, {
    name: 'yk-guanji'
}, {
    name: 'yk-biyan'
}, {
    name: 'yk-jiazai'
}, {
    name: 'yk-lingdang'
}, {
    name: 'yk-mubiao'
}, {
    name: 'yk-jinggao'
}, {
    name: 'yk-quanjia'
}, {
    name: 'yk-quancha'
}, {
    name: 'yk-quanxiangyou'
}, {
    name: 'yk-quanxiangzuo'
}, {
    name: 'yk-quangou'
}, {
    name: 'yk-pinglun'
}, {
    name: 'yk-saoma'
}, {
    name: 'yk-qian'
}, {
    name: 'yk-shanchu'
}, {
    name: 'yk-qun'
}, {
    name: 'yk-shezhi'
}, {
    name: 'yk-shijian'
}, {
    name: 'yk-sousuo'
}, {
    name: 'yk-shangchuan'
}, {
    name: 'yk-shangchuan1'
}, {
    name: 'yk-taiyang'
}, {
    name: 'yk-tupian'
}, {
    name: 'yk-tishi'
}, {
    name: 'yk-tianxie'
}, {
    name: 'yk-touxiang1'
}, {
    name: 'yk-shuaxin1'
}, {
    name: 'yk-touxiang2'
}, {
    name: 'yk-tongji'
}, {
    name: 'yk-wenjianjiajia'
}, {
    name: 'yk-wenjianjiaguan'
}, {
    name: 'yk-wenjian'
}, {
    name: 'yk-fangda1'
}, {
    name: 'yk-suoxiao1'
}, {
    name: 'yk-fangda'
}, {
    name: 'yk-suoxiao'
}, {
    name: 'yk-xiangshang'
}, {
    name: 'yk-wenjianjiakai'
}, {
    name: 'yk-shuaxin'
}, {
    name: 'yk-xiangzuo'
}, {
    name: 'yk-xiangxia'
}, {
    name: 'yk-xiazai1'
}, {
    name: 'yk-suo'
}, {
    name: 'yk-xiazai'
}, {
    name: 'yk-a-xiangxia2'
}, {
    name: 'yk-wujiaoxing'
}, {
    name: 'yk-xin'
}, {
    name: 'yk-a-xiangshang2'
}, {
    name: 'yk-xinxi'
}, {
    name: 'yk-xiangyou'
}, {
    name: 'yk-tuichu'
}, {
    name: 'yk-yanjing'
}, {
    name: 'yk-yingyong'
}, {
    name: 'yk-xiangji'
}, {
    name: 'yk-xiugai'
}, {
    name: 'yk-youxuanzhuan'
}, {
    name: 'yk-zan'
}, {
    name: 'yk-youjian'
}, {
    name: 'yk-zhuce'
}, {
    name: 'yk-yueliang'
}, {
    name: 'yk-zhuce2'
}, {
    name: 'yk-zanting'
}, {
    name: 'yk-yiwen'
}, {
    name: 'yk-zhuye'
}
]

//面性图标
const icon_list2 = [{
    name: 'yike-paihang'
}, {
    name: 'yike-geshishua'
}, {
    name: 'yike-jingbao'
}, {
    name: 'yike-huangguan'
}, {
    name: 'yike-vip'
}, {
    name: 'yike-renzheng'
}, {
    name: 'yike-jiangbei'
}, {
    name: 'yike-yuedu'
}, {
    name: 'yike-anquan'
}, {
    name: 'yike-anquan1'
}, {
    name: 'yike-daiban'
}, {
    name: 'yike-biaoqian'
}, {
    name: 'yike-dengpao'
}, {
    name: 'yike-gouwudai'
}, {
    name: 'yike-guangbo'
}, {
    name: 'yike-kapian'
}, {
    name: 'yike-gouwuche'
}, {
    name: 'yike-qianbao'
}, {
    name: 'yike-renyuanxinxi'
}, {
    name: 'yike-liwu'
}, {
    name: 'yike-shuqian'
}, {
    name: 'yike-riqi'
}, {
    name: 'yike-github'
}, {
    name: 'yike-gou'
}, {
    name: 'yike-shangchuan'
}, {
    name: 'yike-bofang'
}, {
    name: 'yike-quanjia'
}, {
    name: 'yike-cha'
}, {
    name: 'yike-zanting'
}, {
    name: 'yike-jinggao'
}, {
    name: 'yike-tixing'
}, {
    name: 'yike-biaoqing'
}, {
    name: 'yike-biyan'
}, {
    name: 'yike-dianzan'
}, {
    name: 'yike-dingwei'
}, {
    name: 'yike-fanhui1'
}, {
    name: 'yike-gengduo'
}, {
    name: 'yike-fenxiang'
}, {
    name: 'yike-jiantouxiangxia'
}, {
    name: 'yike-lingdang'
}, {
    name: 'yike-fanhui'
}, {
    name: 'yike-shijian'
}, {
    name: 'yike-qian'
}, {
    name: 'yike-suo'
}, {
    name: 'yike-saoma'
}, {
    name: 'yike-shezhi'
}, {
    name: 'yike-qun'
}, {
    name: 'yike-taiyang'
}, {
    name: 'yike-wenjian'
}, {
    name: 'yike-touxiang'
}, {
    name: 'yike-tongji'
}, {
    name: 'yike-xiazai'
}, {
    name: 'yike-xiangyou'
}, {
    name: 'yike-mubiao'
}, {
    name: 'yike-xiangxia'
}, {
    name: 'yike-xiangji'
}, {
    name: 'yike-youjian'
}, {
    name: 'yike-yanjing'
}, {
    name: 'yike-tianxie'
}, {
    name: 'yike-tuichu'
}, {
    name: 'yike-wenjianjiakai'
}, {
    name: 'yike-wenjianjiaguan'
}, {
    name: 'yike-wenjianjiajia'
}, {
    name: 'yike-xiangzuo'
}, {
    name: 'yike-yiwen'
}, {
    name: 'yike-huohuo'
}, {
    name: 'yike-wujiaoxing'
}, {
    name: 'yike-wujiaoxing'
}, {
    name: 'yike-yingyong'
}, {
    name: 'yike-xiangshang'
}, {
    name: 'yike-xiugai'
}, {
    name: 'yike-zhuye'
}, {
    name: 'yike-tupian'
}, {
    name: 'yike-zhuce'
}
]

//说明
const datas = [
    {
        title: '基本用法 name',
        note: '通过<Icon name="XX-XXX"/>的形式即可使用icon。直接使用字体样式设置图标，例如使用font-size控制大小,color设置颜色。',
        code: `<Icon></Icon>
<Icon name="yk-xin"></Icon>
<Icon name="yike-xin" style="color: red;"></Icon>
<Button shape="circle"><Icon name="yk-jiahao"></Icon></Button>`
    }
]

//api部分
const columns = [
    {
        title: "参数名",
        dataIndex: "name",
        light: false,
    },
    {
        title: "描述",
        dataIndex: "expl",
        light: false,
    },
    {
        title: "类型",
        dataIndex: "type",
        light: true,
    },
    {
        title: "默认值",
        dataIndex: "normal",
        light: false,
    },
];
const data = reactive([
    {
        key: "1",
        name: "name",
        expl: "图标名称",
        type: `string`,
        normal: "-",
    },
]);
</script>

<style scoped lang="less">
.exhibition_list {
    width: auto;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 40px;

    .exhibition_list_item {
        box-sizing: border-box;
        width: 160px;
        height: 125px;
        border: 1px solid @font-color-ss;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon-box {
            font-size: 30px;
            height: 50px;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            :hover {
                transition: all @animatb;
                font-size: 40px;
            }
        }

        p {
            font-size: 14px;
            margin-top: 10px;
        }
    }
}</style>
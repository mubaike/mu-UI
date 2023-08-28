<template>
    <div class="mu-table">
        <table cellspacing="0">
            <tr>
                <th v-for="(item, index) in colums" :key="index">{{ (item as any).title }}</th>
            </tr>
            <tr v-for="(item, index) in data" :key="index">
                <td v-for="(item1, index1) in colums" :key="index1" :class="{ light: (item1 as any).light }">
                    {{ (item as any)[(item1 as any).dataIndex] }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    colums: {
        type: Array,
        default: () => []
    },
    data: {
        type: Array,
        default: () => []
    }
})
</script>

<style scoped lang="less">
.mu-table{
    table{
        border: 1px solid @line-color-s;
        min-width: 800px;
        width: 100%;
        border-radius: @radius-m;
        overflow: hidden;
        margin-top: @space-s;

        tr {
            &:hover {
                background-color: @bg-color-m;
            }
        }

        th {
            line-height: 44px;
            background-color: @bg-color-m;
            font-size: @size-s;
            font-weight: 600;
            padding-left: @space-m;
            text-align: left;
        }

        td {
            border-top: 1px solid @line-color-s;
            padding: 10px @space-m;
            text-align: left;
            max-width: 240px;
        }

        .light {
            color: @scolor;
        }
    }
}
</style>
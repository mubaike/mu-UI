<template>
    <div class="space" :style="{
        rowGap: getMargin(rsize) + 'px',
        columnGap: getMargin(size) + 'px',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        flexDirection: flexDirection(),
        width: fill ? '100%' : '',
        alignItems: getAlign(aline)
    }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    aline: {
        type: String,
        default: ''
    },
    direction: {
        type: String,
        default: "horizontal"
    },
    size: {
        type: [Number, String],
        default: 'l'
    },
    wrap: {
        type: Boolean,
        defalut: false
    },
    rsize: {
        type: [Number, String],
        default: "l"
    },
    fill: {
        type: Boolean,
        default: false
    }
})

//间距大小
const getMargin = (size: number | string): number => {
    if (typeof size === "number") {
        return size;
    }
    switch (size) {
        case "s":
            return 4;
        case "m":
            return 8;
        case "l":
            return 16;
        case "xl":
            return 24;
        default:
            return 16;
    }
}

//排列方式
const flexDirection = () => {
    if (props.direction == "vertical") {
        return 'column'
    } else {
        return 'row'
    }
}

//对齐方式
const getAlign = (align: string): string => {
    switch (align) {
        case "satrt":
            return 'flex-start';
        case "end":
            return 'flex-end';
        case "center":
            return 'center';
        case "baseline":
            return 'baseline';
        default:
            return 'flex-start'
    }
}
</script>

<style scoped lang="less">
.space {
    display: inline-flex;
}
</style>
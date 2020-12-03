<template>
    <div>
        <h1>filters</h1>
        <strong
            >在 3.x
            中，过滤器已删除，不再支持。相反地，我们建议用方法调用或计算属性替换它们。</strong
        >
        <hr />
        <div>
            <h2>源数据</h2>
            <a-table :columns="columns" :data-source="data" :row-key="record => record.key">
                <template #sex="{ record }">
                    <span> {{ record.sex }} </span>
                </template>
                <template #isadult="{ text: isadult }">
                    <span style="color: #c9483c"> {{ isadult }} </span>
                </template>
            </a-table>
        </div>
        <div>
            <h2>计算属性处理过的</h2>
            <a-table :columns="columns" :data-source="dataComputed" :row-key="record => record.key">
                <template #sex="{ record }">
                    <span> {{ record.sex }} </span>
                </template>
                <template #isadult="{ text: isadult }">
                    <span style="color: #c9483c"> {{ isadult }} </span>
                </template>
            </a-table>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
export default {
    name: "Filters",
    setup() {
        const columns = [
            {
                dataIndex: "name",
                key: "name",
                title: "姓名",
                slots: { title: "customTitle", customRender: "name" },
            },
            {
                title: "年龄",
                dataIndex: "age",
                key: "age",
            },
            {
                title: "性别",
                dataIndex: "sex",
                key: "sex",
                slots: { customRender: "sex" },
            },
            {
                title: "是否成年",
                key: "isadult",
                dataIndex: "isadult",
                slots: { customRender: "isadult" },
            },
        ];
        let data = [
            {
                key: "1",
                name: "张三",
                age: 18,
                sex: 1,
                isadult: 1,
            },
            {
                key: "2",
                name: "李四",
                age: 16,
                sex: 1,
                isadult: 0,
            },
            {
                key: "3",
                name: "小工",
                age: 19,
                sex: 0,
                isadult: 1,
            },
            {
                key: "4",
                name: "哈哈",
                age: 14,
                sex: 0,
                isadult: 0,
            },
        ];
        const datas = JSON.parse(JSON.stringify(data));
        console.log(datas);

        let dataComputed = computed(() => {
            datas.map((item) => {
                console.log(item);
                if (item.sex == 1) {
                    item.sex = "男";
                }
                if (item.sex == 0) {
                    item.sex = "女";
                }
                if (item.isadult == 0) {
                    item.isadult = "未成年";
                }
                if (item.isadult == 1) {
                    item.isadult = "成年";
                }
                return item;
            });
            return datas;
        });
        console.log(data);
        return { data, columns, dataComputed };
    },
    filters: {
        sex_filter(val) {
            if (val == "1") {
                val = "男";
            }
            if (val == "0") {
                val = "女";
            }
            return val;
        },
    },
};
</script>
<style lang="scss" scoped>
strong {
    font-size: 20px;
    font-family: "楷体";
}
</style>
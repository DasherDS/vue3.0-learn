<template>
    <div>
        <h2>todolist</h2>
        <hr />
        <input type="text" v-model="addVal" />
        <button @click="add">添加</button>
        <ul>
            <li v-for="(item, i) in state" :key="i">
                <span :class="item.done ? 'done' : ''"
                    >{{ item.name }} - {{ item.age }}</span
                >
                <button @click="done(item.id)">完成</button>
                <button @click="remove(i)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
    name: "Todolist",
    setup() {
        const todos = [
            {
                id: 1,
                name: "张三",
                age: 25,
                done: false,
            },
            {
                id: 2,
                name: "李四",
                age: 18,
                done: true,
            },
            {
                id: 3,
                name: "王五",
                age: 60,
                done: false,
            },
        ];

        const addVal = ref("");
        let state = reactive(todos);

        function add() {
            let nowId = state[state.length - 1].id || 0;
            let obj = {
                id: nowId++,
                age: 20,
                done: false,
                name: addVal.value,
            };
            state.push(obj);
        }
        function done(id) {
            state.forEach((item) => {
                id == item.id && (item.done = true);
            });
        }

        function remove(index) {
            state.splice(index, 1);
        }
        return { state, done, add, remove, addVal };
    },
};
</script>
<style lang="scss" scoped>
ul {
    width: 300px;
    li {
        line-height: 30px;
    }
}
.done {
    color: #ccc;
    text-decoration: line-through;
}
</style>
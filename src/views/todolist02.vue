<template>
    <div>
        <h1>Todolist02</h1>
        <input type="text" v-model="str" />
        <button @click="add">添加</button>
        <ul>
            <li v-for="(item, i) in state" :key="i">
                <span :class="item.done ? 'done' : ''"> {{ item.name }} </span>
                <button @click="done(item.id)">完成</button>
                <button @click="remove(i)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
    name: "Todolist02",
    setup() {
        let todos = [
            {
                id: 1,
                name: "张三",
                done: false,
            },
            {
                id: 2,
                name: "李四",
                done: false,
            },
            {
                id: 3,
                name: "王五",
                done: true,
            },
        ];
        let state = reactive(todos);
        const { add, str } = addData(state);
        const { done } = doSome(state);
        const { remove } = removeSome(state);
        return { state, add, str, done, remove };
    },
};
function addData(state) {
    let str = ref("");
    let newID = state[state.length - 1].id || 0;
    function add() {
        let obj = {
            id: ++newID,
            name: str.value,
            done: false,
        };
        state.push(obj);
    }
    return { add, str };
}

function doSome(state) {
    function done(id) {
        state.forEach((item) => {
            id == item.id && (item.done = true);
        });
    }
    return { done };
}

function removeSome(state) {
    function remove(index) {
        // state = state.filter((item, i) => i !== index);
        state.splice(index, 1);
    }

    return { remove };
}
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
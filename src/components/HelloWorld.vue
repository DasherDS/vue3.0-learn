<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>vue3 资源</h3>
        <ul>
            <li>
                <a href="https://vue3js.cn/" target="_blank" rel="noopener"
                    >vue3 中文</a
                >
            </li>
            <li>
                <a
                    href="https://2x.antdv.com/components/tooltip-cn/"
                    target="_blank"
                    rel="noopener"
                    >AntDesign-vue2.x</a
                >
            </li>
            <li>
                <a
                    href="https://element-plus.org/#/zh-CN/component/installation"
                    target="_blank"
                    rel="noopener"
                    >element-plus</a
                >
            </li>
        </ul>
        <hr />
        <div>
            <h4>使用子组件控制父组件的dialog</h4>
            <a-button type="danger" @click="dialogs"
                >弹出(子组件的按钮)</a-button
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    setup(props, ctx) {
        let ziobj = {
            str: "子组件调用打开,子组件调用打开子组件调用打开,子组件调用打开子组件，",
            visible: true,
        };
        function dialogs() {
            ctx.emit("opendialog", ziobj);
        }
        return { dialogs };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>

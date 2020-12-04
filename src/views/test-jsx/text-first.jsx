import { ref } from "vue";

const FirstJsx = {
  name: "FirstJsx",
  setup() {
    const isShow = ref("");
    const str = ref("");
    const handleClick = () => {
      str.value = "文本";
      isShow.value = "安闹闹啊";
      console.log("点击量按钮");
    };
    const handleInput = () => {};
    const styles = {
        jiacu:{
            width:"500px",
            display:"block",
            margin:"0 auto"
        }
    }
    return { handleClick, isShow, str, handleInput,styles };
  },
  render() {
    return (
      <>
        <div>
          <h3>这是jsx页面</h3>
          <hr />
          <p>
            <strong style={this.styles.jiacu}>
              注意：新版 vue-cli4 中，已经默认集成了 JSX 语法对 v-model
              的支持，可以直接使用{`<input v-model={this.value}>`}
              如果你的项目比较老，也可以安装插件 babel-plugin-jsx-v-model
              来进行支持
            </strong>
          </p>
          <button onClick={this.handleClick}>点击弹框</button>
          <input type="text" v-model={this.str} onInput={this.handleInput} />
          <br />
          <span> {this.str} </span>
          <hr/>
          {
            this.isShow != '' ? <div> 点击了按钮 </div> : <div> 未点击按钮 </div>
          }
        </div>
      </>
    );
  },
};
export default FirstJsx;

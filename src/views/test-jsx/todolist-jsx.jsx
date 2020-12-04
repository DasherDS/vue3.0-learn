import { ref } from "vue";
import "./todolist-jsx.scss";
const TolistJsx = {
  setup() {
    const iptVal = ref("");
    let data = [
      {
        id: 1,
        name: "掌声",
        done: false,
      },
      {
        id: 2,
        name: "123",
        done: true,
      },
    ];
    const list = ref(data);
    let newID = list.value[list.value.length-1].id || 0
    const handleAdd = () => {
        console.log(newID);
        let obj = {
            id:++newID,
            name:iptVal.value,
            done:false
        }
        list.value.push(obj)
    };
    const handleFinish = (even) => {
        console.log(even);
        let itemID = even.target.dataset.info
        list.value.forEach(v=>{
            itemID == v.id && ( v.done = true )
        })
    };
    const handleRemove = (even) => {
        let index = even.target.dataset.index
        // list.value = list.value.filter((item, i) => i !== index);
        list.value.splice(index,1)
    };
    return { iptVal, list, handleAdd, handleFinish, handleRemove};
  },
  render() {
    return (
      <>
        <div className="jsx-main">
          <h1>TODOLISTJSX</h1>
          <div className="jsx-main-input">
            <input type="text" v-model={this.iptVal} placeholder="输入点什么吧" />
          </div>
          <a-button type="primary" onClick={this.handleAdd}>
            点击增加
          </a-button>
          <ul className="jsx-main-ul">
            {this.list.map((item,index) => {
              return (
                <li>
                  <p>
                    <span className={item.done?"jsx-done":''}>
                      {item.id} --- {item.name}
                    </span>
                    <span className="jsx-main-ul-btn">
                      <a-button type="primary" data-info={item.id}  onClick={this.handleFinish}>
                        点击完成
                      </a-button>
                    </span>
                    <span className="jsx-main-ul-btn">
                      <a-button type="primary"  data-index={index} onClick={this.handleRemove}>
                        点击删除
                      </a-button>
                    </span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  },
};
export default TolistJsx;

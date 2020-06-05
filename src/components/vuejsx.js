export default {
  components: {},
  data() {
    return {
      items: ['aklsjdh', 'asdiou', 2, 3, 3, 4, 5],
      isshow: true
    }
  },
  render() {
    return (<div class="good">
      {this.isshow ? <p> 为真显示 </p>:null}
      <p>123123</p>
      <ol>
        {this.items.map(item => {
          return <li>{item}</li>
        })}
      </ol>
    </div>)
    }
  }
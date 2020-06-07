<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div style="display:flex;justify-content: space-between;">
      123123
      <HelloWorld
        v-for="(blogPost,index) in list"
        :post="blogPost"
        :key="blogPost.title"
        :user="user[index]"
      />
    </div>
    <vuejsx />
  </div>
</template>

<script lang="ts">
import {Component, Vue } from "vue-property-decorator";
import  HelloWorld from "./../components/HelloWorld.vue"; // @ is an alias to /src
import vuejsx from "./../components/vuejsx.js"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    vuejsx
  }
})
export default class Home extends Vue {
  user: Array<Object> = [{}];
  // name: String = '123'
  // 显示的list
  list: Array<object> = [{}];
  // 生成10条数据方法
  public getDataList(): void {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        title: `第${i}`,
        body: `no${i}`,
        author: `Elke${i}`,
        datePosted: new Date(2019, 1, i+1)
      });
      this.user.push({
        name: `张三${i}号`,
        info: `今天${i}号`
      });
    }
  }
  private created(): void {
    this.getDataList()
  }
 private render (): void{

 }
}
</script>

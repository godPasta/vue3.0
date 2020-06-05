<template>
  <div class="blogpost">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <p class="meta">{{ post.author }}</p>
    <p style="border:1px solid red;">{{ sortName }}</p>
    <p style="border-bottom:1px solid gray">
      <b>{{ user.name }}</b>说“{{ user.info }}”
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

// 在这里对数据进行类型约束
export interface Post {
  title: string;
  body: string;
  author: string;
  datePosted: Date;
}
export interface User {
  name: string;
  info: string;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() post!: Post;
  @Prop() user!: User;
  get date() {
    return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getFullYear()}`;
  }
  sortName = "";
  public getName(): void {
    enum NameArr {
      "零" = 0,
      "张三" = 1,
      "李四" = 2,
      "王五" = 3,
      "四" = 4,
      "五" = 5,
      "六" = 6,
      "七" = 7,
      "八" = 8,
      "九" = 9
    }
    let tName: string = NameArr[Math.random() * 10] || name;
    // this.sortName =`${Math.floor(Math.random()*10)}`
    this.sortName = NameArr[Math.floor(Math.random() * 10)];
  }

  private created(): void {
    this.getName();
  }
  private mounted(): void {}
  private updated(): void {}
  private destroyed(): void {}
}
</script>
<style scoped>
h2 {
  text-decoration: underline;
}
p.meta {
  font-style: italic;
}
</style>

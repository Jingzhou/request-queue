<template>
  <div style="text-align: center">
    <div>Fn1: {{ FnStatus.f1 }}</div>
    <div>Fn2: {{ FnStatus.f2 }}</div>
    <div>Fn3: {{ FnStatus.f3 }}</div>
    <div>Fn4: {{ FnStatus.f4 }}</div>
    <div>Fn5: {{ FnStatus.f5 }}</div>
    <div>Fn6: {{ FnStatus.f6 }}</div>
    <div>Fn7: {{ FnStatus.f7 }}</div>
    <div>Fn8: {{ FnStatus.f8 }}</div>
    <div>Fn9: {{ FnStatus.f9 }}</div>
    <div>Fn10: {{ FnStatus.f10 }}</div>
    <div>Fn11: {{ FnStatus.f11 }}</div>
    <div>Fn12: {{ FnStatus.f12 }}</div>
    <div>Fn13: {{ FnStatus.f13 }}</div>
    <button @click="test">点击</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import RequestQueue from "../dist";
export default {
  name: "App",
  components: {},
  setup() {
    const FnStatus: any = ref({
      f1: "pending",
      f2: "pending",
      f3: "pending",
      f4: "pending",
      f5: "pending",
      f6: "pending",
      f7: "pending",
      f8: "pending",
      f9: "pending",
      f10: "pending",
      f11: "pending",
      f12: "pending",
      f13: "pending",
    });
    const rq = new RequestQueue({ max: 6 });
    const promiseFn = (name: string) => {
      const start: any = new Date();
      FnStatus.value[name] = "In Progress";
      const timeout = Math.floor(Math.random() * (20000 - 10000 + 1) + 10000); // 随机生成异步时间
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const end: any = new Date();
          resolve(
            `finish startTime：${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}, endTime：${end.getHours()}:${end.getMinutes()}:${end.getSeconds()}`
          );
        }, timeout);
      });
    };

    // 生成模拟的异步请求
    const fnList: any[] = [];
    Object.keys(FnStatus.value).forEach((key) => {
      const fn: () => Promise<any> = () => {
        return promiseFn(key).then((res) => {
          FnStatus.value[key] = res;
        });
      };
      fnList.push(fn);
    });

    const test = () => {
      rq.pushReqList(fnList, true);
    };
    return {
      test,
      FnStatus,
    };
  },
};
</script>

<style lang="scss">
html {
  margin: 0;
  border: 0;
  padding: 0;
  font-family: "PingFang SC", miui, system-ui, -apple-system, BlinkMacSystemFont,
    Helvetica Neue, Helvetica, sans-serif;
  height: 100%;
  overflow: hidden;
}

body {
  margin: 0;
  border: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  width: 100%;
}

#app {
  height: 100%;
  color: #323233;
  overflow-y: auto;
}
</style>

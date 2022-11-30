<template>
    <h1>List Page</h1>
    <el-button @click="handleClick">增加</el-button>
    <div>
        {{ counter }}
    </div>
</template>
  
<script lang='ts' setup>
import { reactive } from 'vue';
import { getUserList } from '../api/user';
import { mainStore } from '../store/index';
import { storeToRefs } from 'pinia';

// 创建一个该组件的状态对象
const state = reactive({
    userName: '123'
})
// 实例化一个状态对象
const store = mainStore();
// 解构并使数据具有响应式
const { counter } = storeToRefs(store);

getUser()

function getUser() {
    getUserList({ name: 'user1' }).then((resp: any) => {
        console.log('请求完成')
        console.log(resp.data.data)
    })
}
function handleClick() {
    counter.value++;
    // store.updateCounter(counter.value)
}
</script>
  
<style scoped>

</style>
  
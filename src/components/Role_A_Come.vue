<template>
    <!-- 创建者页面 -->
    <!-- 创建回答页面 -->
    <div
        v-for="(element, index) in pList"
        :key="element.Pid"    
    >

        <input 
            type="text"
            placeholder="填入问题"
        >

        <!-- 多选题页面 -->
        <div
            v-if="element.MultipleBool"
            v-for="value in source"
        >
            <input type="text">
            <!-- 多选题增加多个回答选项 -->
            <div
                v-for="value in source"
            >
                <input type="text">
            </div>
            <button @click="">⊕</button>
        </div>

        <!-- 单选题页面 -->
        <div
            v-if="element.SingleBool"
            v-for="value in source"
        >

            <input type="text">
            <!--单选题增加多个回答选项-->
            <div
                v-for="value in source"
            >
                <input type="text">
            </div>
            <button @click="">⊕</button>
        </div>

        <!-- 主观题页面 -->
        <div
            v-if="element.SubjectiveBool"
        >
            <input type="text" placeholder="占位格">
        </div>

        <!-- 选项组，点击一个选项之后，选项组消失 -->
        <div v-if="element.showTypeButtons">
            <button @click="AddMultiple(index)">多选题</button>
            <button @click="AddSingle(index)">单选题</button>
            <button @click="AddSubjectiveBool(index)">主观题</button>
        </div>
    </div>
    <!-- 点击添加一个创建一个回答页面 -->
    <button @click="AddNewP">⊕</button>
</template>

<script setup>
import { ref } from 'vue';

const pList = ref([]);

const AddNewP = () => {
  const Pid = Date.now();
  
  pList.value.push({
    Pid: Pid,
    showTypeButtons: true,
    type: undefined,
    MultipleBool: false,
    SingleBool: false,
    SubjectiveBool: false,
  })
};

const AddMultiple = (index) => {
    pList.value[index].MultipleBool = true;
    pList.value[index].showTypeButtons = false;
};
const AddMultipleOption = () => {
    const Mid = Date.now();
    MultipleList.value.push(Mid);
}

const AddSingle = (index) => {
    pList.value[index].SingleBool = true;
    pList.value[index].showTypeButtons = false;
};

const AddSubjectiveBool = (index) => {
    pList.value[index].SubjectiveBool = true;
    pList.value[index].showTypeButtons = false;
};
</script>

<style scoped>

</style>
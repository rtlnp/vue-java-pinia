<template>
    <!-- 创建者页面 -->
    <!-- 创建回答页面 -->
    <div
        v-for="(element, index) in pList"
        :key="element.Pid"
    >

        <input 
            type="text"
            v-model="element.text"
            placeholder="填入问题"
        >

        <!-- 多选题页面 -->
        <div
            v-if="element.MultipleBool"
        >
            <!-- 多选题回答选项 -->
            <div
                v-for="(item, i) in element.MultipleOption"
                :key="i"
            >
                <input type="text" v-model="element.MultipleOption[i]">
            </div>
            <!-- 多选题增加一个回答选项 -->
            <button @click="AddMultipleOption(element)">⊕</button>
        </div>

        <!-- 单选题页面 -->
        <div
            v-if="element.SingleBool"
        >
            <!--单选题回答选项-->
            <div
                v-for="(item, i) in element.SingleOption"
                :key="i"
            >
                <input type="text" v-model="element.SingleOption[i]">
            </div>
            <!-- 单选题增加一个回答选项 -->
            <button @click="AddSingleOption(element)">⊕</button>
        </div>

        <!-- 主观题页面 -->
        <div
            v-if="element.SubjectiveBool"
        >
            <input type="text" placeholder="占位格">
        </div>

        <!-- 选项组，点击一个选项之后，选项组消失 -->
        <div v-if="element.showTypeButtons">
            <button @click="AddMultiple(element)">多选题</button>
            <button @click="AddSingle(element)">单选题</button>
            <button @click="AddSubjectiveBool(element)">主观题</button>
        </div>
    </div>
    <!-- 点击添加一个创建一个回答页面 -->
    <button @click="AddNewP">⊕</button>

    <!-- 删除最后一个问答 -->
    <div v-show="pList.length != 0">
        <button @click="pListClose">⊗</button>
    </div>

    <button @click="FormSubmit">提交</button>
</template>

<script setup>
import { ref } from 'vue';

const pList = ref([]);

const AddNewP = () => {
  const Pid = Date.now();

  pList.value.push({
    Pid: Pid,
    type: '',
    text: '',
    showTypeButtons: true,
    MultipleBool: false,
    SingleBool: false,
    SubjectiveBool: false,
    MultipleOption: [],
    SingleOption: [],
  })
};

const pListClose = () => {
    pList.value.length = pList.value.length - 1;
};

const AddMultiple = (element) => {
    element.MultipleOption.push('');

    element.MultipleBool = true;
    element.showTypeButtons = false;

    element.type = 'Multiple';
};
const AddMultipleOption = (element) => {
    element.MultipleOption.push('');
}

const AddSingle = (element) => {
    element.SingleOption.push('');

    element.SingleBool = true;
    element.showTypeButtons = false;

    element.type = 'Single';
};
const AddSingleOption = (element) => {
    element.SingleOption.push('');
}

const AddSubjectiveBool = (element) => {
    element.SubjectiveBool = true;
    element.showTypeButtons = false;
    element.type = 'Subjective';
};

const FormSubmit = () => {
    console.log("已提交到后端");
}
</script>

<style scoped>

</style>
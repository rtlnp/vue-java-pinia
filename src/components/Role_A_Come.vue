<template>
    <!-- 创建者页面 -->
    <!-- 创建回答页面 -->
    <div class="question-container">
        <div
            v-for="(element, index) in pList"
            :key="element.Pid"
            class="question-item"
        >

            <input 
                type="text"
                v-model="element.text"
                placeholder="填入问题"
                class="question-input"
            >

            <!-- 多选题页面 -->
            <div
                v-if="element.MultipleBool"
                class="option-section"
            >
                <p class="section-label">多选题回答选项</p>
                <div
                    v-for="(item, i) in element.MultipleOption"
                    :key="i"
                    class="option-item"
                >
                    <input type="text" v-model="element.MultipleOption[i]" class="option-input">
                </div>
                <!-- 多选题增加一个回答选项 -->
                <button @click="AddMultipleOption(element)" class="add-option-btn">⊕</button>
            </div>

            <!-- 单选题页面 -->
            <div
                v-if="element.SingleBool"
                class="option-section"
            >
                <p class="section-label">单选题回答选项</p>
                <div
                    v-for="(item, i) in element.SingleOption"
                    :key="i"
                    class="option-item"
                >
                    <input type="text" v-model="element.SingleOption[i]" class="option-input">
                </div>
                <!-- 单选题增加一个回答选项 -->
                <button @click="AddSingleOption(element)" class="add-option-btn">⊕</button>
            </div>

            <!-- 主观题页面 -->
            <div
                v-if="element.SubjectiveBool"
                class="option-section"
            >
                <input type="text" placeholder="占位格" class="subjective-input">
            </div>

            <!-- 选项组，点击一个选项之后，选项组消失 -->
            <div v-if="element.showTypeButtons" class="type-buttons">
                <button @click="AddMultiple(element)" class="type-btn type-multiple">多选题</button>
                <button @click="AddSingle(element)" class="type-btn type-single">单选题</button>
                <button @click="AddSubjectiveBool(element)" class="type-btn type-subjective">主观题</button>
            </div>
        </div>
        <!-- 点击添加一个创建一个回答页面 -->
        <button @click="AddNewP" class="operate-btn add-question-btn">⊕ 添加题目</button>

        <!-- 删除最后一个问答 -->
        <div v-show="pList.length != 0" class="operate-group">
            <button @click="pListClose" class="operate-btn delete-question-btn">⊗ 删除最后一题</button>
        </div>

        <button @click="FormSubmit" class="submit-btn">提交</button>
    </div>
    <!-- 创建者页面 -->
    <!-- 创建回答页面 -->
    <!-- <div
        v-for="(element, index) in pList"
        :key="element.Pid"
    >

        <input 
            type="text"
            v-model="element.text"
            placeholder="填入问题"
        >

        多选题页面
        <div
            v-if="element.MultipleBool"
        >
            多选题回答选项
            <div
                v-for="(item, i) in element.MultipleOption"
                :key="i"
            >
                <input type="text" v-model="element.MultipleOption[i]">
            </div>
            多选题增加一个回答选项
            <button @click="AddMultipleOption(element)">⊕</button>
        </div>

        单选题页面
        <div
            v-if="element.SingleBool"
        >
            单选题回答选项
            <div
                v-for="(item, i) in element.SingleOption"
                :key="i"
            >
                <input type="text" v-model="element.SingleOption[i]">
            </div>
            单选题增加一个回答选项
            <button @click="AddSingleOption(element)">⊕</button>
        </div>

        主观题页面
        <div
            v-if="element.SubjectiveBool"
        >
            <input type="text" placeholder="占位格">
        </div>

        选项组，点击一个选项之后，选项组消失
        <div v-if="element.showTypeButtons">
            <button @click="AddMultiple(element)">多选题</button>
            <button @click="AddSingle(element)">单选题</button>
            <button @click="AddSubjectiveBool(element)">主观题</button>
        </div>
    </div>
    点击添加一个创建一个回答页面
    <button @click="AddNewP">⊕</button>

    删除最后一个问答
    <div v-show="pList.length != 0">
        <button @click="pListClose">⊗</button>
    </div>

    <button @click="FormSubmit">提交</button> -->
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
/* 全局容器：居中+留白 */
.question-container {
    min-height: 90vh;
    background-color: #F8F9FA;
    padding: 40px 20px;
    box-sizing: border-box;
    max-width: 700px;
    margin: 0 auto;
}

/* 单个题目卡片：独立模块 */
.question-item {
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* 问题输入框：统一样式 */
.question-input {
    width: 100%;
    height: 44px;
    padding: 0 16px;
    border: 1px solid #E5E6EB;
    border-radius: 6px;
    font-size: 14px;
    color: #333333;
    box-sizing: border-box;
    transition: border-color 0.3s;
    margin-bottom: 20px;
}
.question-input:focus {
    outline: none;
    border-color: #4096FF;
}

/* 选项区域：标题+选项容器 */
.option-section {
    margin-top: 12px;
}
.section-label {
    font-size: 14px;
    color: #666666;
    margin-bottom: 12px;
    font-weight: 500;
}

/* 单个选项输入框 */
.option-item {
    margin-bottom: 10px;
}
.option-input {
    width: 100%;
    height: 40px;
    padding: 0 14px;
    border: 1px solid #E5E6EB;
    border-radius: 6px;
    font-size: 14px;
    color: #333333;
    box-sizing: border-box;
    transition: border-color 0.3s;
}
.option-input:focus {
    outline: none;
    border-color: #4096FF;
}

/* 主观题输入框 */
.subjective-input {
    width: 100%;
    height: 40px;
    padding: 0 14px;
    border: 1px solid #E5E6EB;
    border-radius: 6px;
    font-size: 14px;
    color: #333333;
    box-sizing: border-box;
    transition: border-color 0.3s;
}
.subjective-input:focus {
    outline: none;
    border-color: #4096FF;
}

/* 添加选项按钮：次要操作 */
.add-option-btn {
    padding: 6px 12px;
    border: 1px dashed #C9CDD4;
    border-radius: 6px;
    font-size: 14px;
    color: #4096FF;
    background-color: #FFFFFF;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 8px;
}
.add-option-btn:hover {
    border-style: solid;
    background-color: #F0F7FF;
}

/* 题型选择按钮组：横向排列 */
.type-buttons {
    display: flex;
    gap: 12px;
    margin-top: 16px;
}
.type-btn {
    padding: 8px 18px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    border: 1px solid;
    background-color: #FFFFFF;
}
/* 不同题型按钮轻微区分 */
.type-multiple {
    border-color: #4096FF;
    color: #4096FF;
}
.type-multiple:hover {
    background-color: #F0F7FF;
}
.type-single {
    border-color: #52C41A;
    color: #52C41A;
}
.type-single:hover {
    background-color: #F6FFED;
}
.type-subjective {
    border-color: #FAAD14;
    color: #FAAD14;
}
.type-subjective:hover {
    background-color: #FFFBE6;
}

/* 操作按钮：添加/删除题目 */
.operate-group {
    margin: 12px 0;
}
.operate-btn {
    padding: 8px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    border: 1px solid;
    background-color: #FFFFFF;
}
.add-question-btn {
    border-color: #4096FF;
    color: #4096FF;
    margin-bottom: 16px;
}
.add-question-btn:hover {
    background-color: #F0F7FF;
}
.delete-question-btn {
    border-color: #FF4D4F;
    color: #FF4D4F;
}
.delete-question-btn:hover {
    background-color: #FFF2F0;
}

/* 提交按钮：主操作强调 */
.submit-btn {
    width: 100%;
    height: 48px;
    background-color: #4096FF;
    color: #FFFFFF;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 20px;
}
.submit-btn:hover {
    background-color: #1890FF;
    box-shadow: 0 4px 12px rgba(64, 150, 255, 0.15);
}

/* 响应式适配：小屏幕优化 */
@media (max-width: 576px) {
    .type-buttons {
        flex-wrap: wrap;
    }
    .type-btn {
        flex: 1;
        min-width: 100px;
        text-align: center;
    }
    .question-item {
        padding: 18px;
    }
}
</style>
<template>
<!-- <div
    v-for="(item, index) in list" 
    :key="index"
>
    <p>{{ item.question }}</p>
    <div v-if="item.type === 'Single'">
      <div 
        v-for="(opt, optid) in item.Single"
        :key="optid"
      >

        <input
          type="radio" 
          :id="`single-${index}-${optid}`"
          :name="`single-question-${index}`"
          :value="opt"
        >

        <label 
          :for="`single-${index}-${optid}`" 
        >
          {{ opt }}
        </label>
      </div>
    </div>

    <div v-if="item.type === 'Multiple'">
        <div 
            v-for="(mpt, mptid) in item.Multiple"
            :key="mptid"
        >
            <input 
                type="checkbox"
                :id="`multiple-${index}-${mptid}`"
                :value="mpt"
            >
            <label :for="`multiple-${index}-${mptid}`">{{ mpt }}</label>
        </div>
    </div>

    <div v-if="item.type === 'Subjective'">
        <input type="text">
    </div>
</div>
<button @click="Submit">提交</button> -->

<div class="question-container"> <!-- 新增外层容器类，用于整体布局 -->
    <div
        v-for="(item, index) in list" 
        :key="index"
        class="question-item"
    >
        <p class="question-text">{{ item.question }}</p> <!-- 新增题干类，优化题干样式 -->
        
        <!-- 单选题区域 -->
        <div v-if="item.type === 'Single'" class="option-group single-options"> <!-- 新增选项组类，统一选项区域样式 -->
            <div 
                v-for="(opt, optid) in item.single"
                :key="optid"
                class="option-item single-option"
            >
                <input
                    type="radio" 
                    :id="`single-${index}-${optid}`"
                    :name="`single-question-${index}`"
                    :value="opt"
                    class="form-radio"
                >
                <label 
                    :for="`single-${index}-${optid}`" 
                    class="option-label"
                >
                    {{ opt }}
                </label>
            </div>
        </div>

        <!-- 多选题区域 -->
        <div v-if="item.type === 'Multiple'" class="option-group multiple-options"> <!-- 复用选项组类 -->
            <div 
                v-for="(mpt, mptid) in item.multiple"
                :key="mptid"
                class="option-item multiple-option"
            >
                <input 
                    type="checkbox"
                    :id="`multiple-${index}-${mptid}`"
                    :value="mpt"
                    class="form-checkbox"
                >
                <label :for="`multiple-${index}-${mptid}`" class="option-label">
                    {{ mpt }}
                </label>
            </div>
        </div>

        <!-- 主观题区域 -->
        <div v-if="item.type === 'Subjective'" class="subjective-group">
            <input 
                type="text"
                class="form-input subjective-input"
                placeholder="请输入您的答案"
            >
        </div>
    </div>

    <!-- 提交按钮 -->
    <button @click="Submit" class="operate-btn submit-btn">提交</button>
</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import request from '@/utils/request';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const list = ref([]);

const router = useRouter();

const myFunction = async () => {
    alert('触发了');
    try {
        const stores = useCounterStore();

        const res = await request.post('/question/out', stores.count);
        list.value = res.data;
        console.log('后端返回的问卷数据：', list.value);
    } catch (error) {
        alert('服务器没了喵');
    }
}

onMounted(() => {
    myFunction();
})

const Submit = () => {
    alert('已提交,感谢回答问卷');
    router.push('/roleb');
}
</script>

<style scoped>
/* 1. 整体容器样式：居中+留白，控制最大宽度 */
.question-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 40px 20px;
    box-sizing: border-box;
    min-height: calc(100vh - 80px);
}

/* 2. 单个题目卡片样式：独立模块+轻微阴影 */
.question-item {
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s;
}
.question-item:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* 3. 题干样式：突出标题感，与选项区分 */
.question-text {
    margin: 0 0 16px;
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    line-height: 1.5;
}

/* 4. 选项组通用样式：统一内边距 */
.option-group {
    padding-left: 4px;
}

/* 5. 单个选项通用样式：控制间距+hover交互 */
.option-item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 14px;
    color: #666666;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 6px 8px;
    border-radius: 4px;
}
.option-item:hover {
    background-color: #F8F9FA;
}

/* 6. 单选框/复选框统一样式：对齐+大小调整 */
.form-radio, .form-checkbox {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    vertical-align: middle;
    cursor: pointer;
}

/* 7. 选项标签样式：优化点击体验 */
.option-label {
    cursor: pointer;
    vertical-align: middle;
    line-height: 1.5;
}

/* 8. 主观题输入框样式：宽屏+统一边框 */
.subjective-group {
    margin-top: 4px;
}
.form-input {
    width: 100%;
    height: 44px;
    padding: 0 16px;
    border: 1px solid #E5E6EB;
    border-radius: 6px;
    font-size: 14px;
    color: #333333;
    box-sizing: border-box;
    transition: border-color 0.3s;
}
.form-input:focus {
    outline: none;
    border-color: #4096FF;
    box-shadow: 0 0 0 2px rgba(64, 150, 255, 0.1);
}
.subjective-input::placeholder {
    color: #C9CDD4;
}

/* 9. 提交按钮样式：突出主操作+hover效果 */
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
    margin-top: 10px;
}
.submit-btn:hover {
    background-color: #1890FF;
    box-shadow: 0 4px 12px rgba(64, 150, 255, 0.15);
}
.submit-btn:active {
    background-color: #096DD9;
}

/* 10. 响应式适配：小屏幕优化 */
@media (max-width: 576px) {
    .question-container {
        padding: 20px 15px;
    }
    .question-item {
        padding: 18px;
    }
    .question-text {
        font-size: 15px;
    }
    .option-item {
        margin-bottom: 10px;
        font-size: 13px;
    }
    .submit-btn {
        height: 44px;
        font-size: 15px;
    }
}
</style>
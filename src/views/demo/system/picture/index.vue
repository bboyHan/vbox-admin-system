<template>
  <PageWrapper
    title="图片处理"
    contentBackground
    content=" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"
    contentClass="p-4"
  >
    <div class="step-form-form">
      <a-steps :current="current">
        <a-step title="添加图片信息" />
        <a-step title="图片处理" />
        <a-step title="完成" />
      </a-steps>
    </div>
    <div class="mt-5">
      <Step1 @next="handleStep1Next" v-show="current === 0" />
      <Step2
        @prev="handleStepPrev"
        @next="handleStep2Next"
        v-show="current === 1"
        v-if="initStep2"
      />
      <Step3 v-show="current === 2" @redo="handleRedo" v-if="initStep3" />
    </div>
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, toRefs } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Steps } from 'ant-design-vue';
  import Step1 from './Step1.vue';
  import Step2 from './Step2.vue';
  import Step3 from './Step3.vue';

  export default defineComponent({
    name: 'Picture',
    components: {
      PageWrapper,
      Step1,
      Step2,
      Step3,
      ASteps: Steps,
      AStep: Steps.Step,
    },
    setup() {
      const current = ref(0);

      const state = reactive({
        initStep2: false,
        initStep3: false,
      });

      function handleStep1Next(step1Values: any) {
        current.value++;
        state.initStep2 = true;
        console.log(step1Values);
      }

      function handleStepPrev() {
        current.value--;
      }

      function handleStep2Next(step2Values: any) {
        current.value++;
        state.initStep3 = true;
        console.log(step2Values);
      }

      function handleRedo() {
        current.value = 0;
        state.initStep2 = false;
        state.initStep3 = false;
      }

      return {
        current,
        handleStep1Next,
        handleStep2Next,
        handleRedo,
        handleStepPrev,
        ...toRefs(state),
      };
    },
  });
</script>

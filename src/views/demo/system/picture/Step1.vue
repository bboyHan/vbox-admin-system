<template>
  <div class="step1">
    <div class="step1-form">
      <BasicForm @register="register" />
      <a-upload-dragger name="file" :multiple="true" :action="uploadApi" @change="handleChange">
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text"> Click or drag file to this area to upload </p>
        <p class="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or
          other other other band files
        </p>
      </a-upload-dragger>
    </div>
    <a-divider />
    <h3>说明</h3>
    <h4>图片缩放、裁剪、旋转</h4>
    <p> 图片添加图片、文字、图文混合水印、盲水印等。 </p>

    <h4>计算图片的平均色调</h4>
    <p> 图片高级压缩，支持 avif/heif 高压缩比格式。 </p>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { step1Schemas } from './picture.data';
  import { uploadApi } from '/@/api/sys/upload';
  import { Select, Input, Divider, Upload } from 'ant-design-vue';

  export default defineComponent({
    components: {
      BasicForm,
      AUploadDragger: Upload.Dragger,
      [Select.name]: Select,
      [Input.name]: Input,
      [Input.Group.name]: Input.Group,
      [Divider.name]: Divider,
    },
    emits: ['next'],
    setup(_, { emit }) {
      const [register, { validate }] = useForm({
        labelWidth: 100,
        schemas: step1Schemas,
        actionColOptions: {
          span: 14,
        },
        showResetButton: false,
        submitButtonOptions: {
          text: '下一步',
        },
        submitFunc: customSubmitFunc,
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          emit('next', values);
        } catch (error) {}
      }

      function handleChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          console.log(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          console.log(`${info.file.name} file upload failed.`);
        }
      }
      return { register, handleChange, uploadApi };
    },
  });
</script>
<style lang="less" scoped>
  .step1 {
    &-form {
      width: 450px;
      margin: 0 auto;
    }

    h3 {
      margin: 0 0 12px;
      font-size: 16px;
      line-height: 32px;
      color: @text-color;
    }

    h4 {
      margin: 0 0 4px;
      font-size: 14px;
      line-height: 22px;
      color: @text-color;
    }

    p {
      color: @text-color;
    }
  }
</style>

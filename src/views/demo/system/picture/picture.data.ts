import { FormSchema } from '/@/components/Form';
import { uploadApi } from '/@/api/sys/upload';

export const step1Schemas: FormSchema[] = [
  {
    field: 'imgUpload',
    component: 'Upload',
    label: '上传图片',
    colProps: {
      span: 24,
    },
    rules: [{ required: true, message: '请选择上传文件' }],
    componentProps: {
      api: uploadApi,
    },
  },
];

export const step2Schemas: FormSchema[] = [
  {
    field: 'pwd',
    component: 'InputPassword',
    label: '支付密码',
    required: true,
    defaultValue: '123456',
    colProps: {
      span: 24,
    },
  },
];

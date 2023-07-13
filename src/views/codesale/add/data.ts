import { FormSchema } from '/@/components/Form';

export const formSchema: FormSchema[] = [
  {
    field: 'account',
    label: '创建码商',
    component: 'Input',
    componentProps: {
      placeholder: '用户名',
    },
    rules: [
      {
        required: true,
        message: '请输入账户名',
      },
    ],
  },
  {
    field: 'password',
    label: '账户密码',
    component: 'StrengthMeter',
    componentProps: {
      placeholder: '新密码',
    },
    rules: [
      {
        required: true,
        message: '请输入新密码',
      },
    ],
  },
  {
    field: 'confirmPassword',
    label: '确认密码',
    component: 'InputPassword',
    componentProps: {
      placeholder: '确认密码',
    },
    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!value) {
              return Promise.reject('密码不能为空');
            }
            if (value !== values.password) {
              return Promise.reject('两次输入的密码不一致!');
            }
            return Promise.resolve();
          },
        },
      ];
    },
  },
  // {
  //   field: 'charge',
  //   label: '配置余额',
  //   component: 'InputNumber',
  //   componentProps: {
  //     placeholder: '分配余额，不允许超过本账户所剩余额',
  //   },
  //   rules: [
  //     {
  //       required: true,
  //       message: '请输入需要分配的码商余额',
  //     },
  //   ],
  // },
  {
    field: 'min',
    label: '最小进单额',
    component: 'InputNumber',
    componentProps: {
      placeholder: '最小进单额',
    },
    rules: [
      {
        required: true,
        message: '请输入最小进单额',
      },
    ],
    defaultValue: 0,
  },
  {
    field: 'max',
    label: '最大进单额',
    component: 'InputNumber',
    componentProps: {
      placeholder: '最大进单额',
    },
    rules: [
      {
        required: true,
        message: '请输入最大进单额',
      },
    ],
    defaultValue: 99999,
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '1' },
        { label: '禁用', value: '0' },
      ],
    },
    required: true,
  },
  // {
  //   label: '角色',
  //   field: 'roleId',
  //   component: 'ApiSelect',
  //   componentProps: {
  //     api: getAllRoleList,
  //     labelField: 'roleName',
  //     valueField: 'id',
  //   },
  // },
  // {
  //   field: 'deptId',
  //   component: 'ApiTreeSelect',
  //   label: '所属部门',
  //   required: true,
  //   componentProps: {
  //     api: getDeptList,
  //     fieldNames: {
  //       label: 'deptName',
  //       key: 'id',
  //       value: 'id',
  //     },
  //     resultField: 'items',
  //   },
  // },
];

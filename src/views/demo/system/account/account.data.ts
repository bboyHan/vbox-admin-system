// import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
import { getAllRoleList } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'account',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    width: 120,
  },
  {
    title: '角色',
    dataIndex: 'roles',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

const isUpd = (id: string) => id === null || id === '';

export const accountFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '输入用户名，系统存在则报错',
      },
      // {
      //   validator(_, value) {
      //     return new Promise((resolve, reject) => {
      //       isAccountExist(value)
      //         .then(() => resolve())
      //         .catch((err) => {
      //           reject(err.message || '验证失败');
      //         });
      //     });
      //   },
      // },
    ],
    show: ({ values }) => !isUpd(values.id),
  },
  {
    label: '密码',
    field: 'pass',
    component: 'Input',
    helpMessage: ['不设置则初始默认密码123456'],
    rules: [
      {
        required: false,
        message: '可不填',
      },
    ],
  },
  {
    field: 'gender',
    component: 'RadioButtonGroup',
    label: '性别',
    componentProps: {
      options: [
        {
          label: '男',
          value: '0',
        },
        {
          label: '女',
          value: '1',
        },
        {
          label: '不设置',
          value: '-1',
        },
      ],
    },
    defaultValue: '-1',
    rules: [
      {
        required: false,
        message: '可不填',
      },
    ],
  },
  {
    label: '角色',
    field: 'roleId',
    component: 'ApiSelect',
    componentProps: {
      api: getAllRoleList,
      labelField: 'roleName',
      valueField: 'id',
    },
  },
  {
    field: 'deptId',
    label: '所属部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    rules: [
      {
        required: false,
        message: '可不填',
      },
    ],
  },
];

export const userInfoColumn: DescItem[] = [
  {
    field: 'username',
    label: '用户姓名',
  },
  {
    field: 'realName',
    label: '联系电话',
  },
  {
    field: 'avatar',
    label: '常用快递',
  },
  {
    field: 'desc',
    label: '取货地址',
  },
  {
    field: 'userId',
    label: '备注',
  },
];
export const userInfoSchema: BasicColumn[] = [
  {
    title: '用户姓名',
    dataIndex: 'username',
    width: 160,
    align: 'left',
  },
  {
    title: '联系电话',
    dataIndex: 'realName',
    width: 160,
    align: 'left',
  },
  {
    title: '常用快递',
    dataIndex: 'avatar',
  },
  {
    title: '取货地址',
    dataIndex: 'desc',
  },
  {
    title: '用户id',
    dataIndex: 'userId',
  },
];

export const userInfo1Schema: FormSchema[] = [
  {
    field: 'username',
    label: '用户姓名',
    component: 'Input',
    required: false,
  },
  {
    field: 'realName',
    label: '联系电话',
    component: 'Input',
    required: false,
  },
  {
    field: 'avatar',
    label: '常用快递',
    component: 'Input',
    required: false,
  },
  {
    field: 'desc',
    label: '取货地址',
    component: 'Input',
    required: false,
  },
  {
    field: 'userId',
    label: '用户id',
    component: 'Input',
    required: false,
  },
];

export const userInfoData = {
  b1: '付小小',
  b2: '18100000000',
  b3: '菜鸟仓储',
  b4: '浙江省杭州市西湖区万塘路18号',
  b5: '无',
};

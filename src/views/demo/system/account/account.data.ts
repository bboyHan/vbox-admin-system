import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
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
    title: '性别',
    dataIndex: 'gender',
    width: 80,
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '角色',
    dataIndex: 'roles',
    // width: 120,
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

export const accountFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            isAccountExist(value)
              .then(() => resolve())
              .catch((err) => {
                reject(err.message || '验证失败');
              });
          });
        },
      },
    ],
  },
  {
    field: 'pass',
    label: '密码',
    component: 'InputPassword',
    required: true,
    ifShow: false,
  },
  {
    field: 'avatar',
    label: '头像',
    component: 'Input',
    required: true,
  },
  {
    label: '角色',
    field: 'roles',
    component: 'ApiSelect',
    componentProps: {
      api: getAllRoleList,
      labelField: 'roleName',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'dept',
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
    required: true,
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    required: true,
  },
  {
    label: '性别',
    field: 'gender',
    component: 'Input',
    required: true,
  },

  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
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

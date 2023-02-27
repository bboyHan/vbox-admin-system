import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
  DeptParams,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  AccountList = '/system/getAccountList',
  IsAccountExist = '/system/accountExist',
  OperateAccount = '/system/user',
  DeptList = '/system/getDeptList',
  DeptListMock = '/system/getDeptList/Mock',
  OperateDept = '/system/dept',
  setRoleStatus = '/system/setRoleStatus',
  MenuList = '/system/getMenuList',
  OperateMenu = '/system/menu',
  RolePageList = '/system/getRoleListByPage',
  OperateRole = '/system/role',
  GetAllRoleList = '/system/getAllRoleList',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const createAccount = (params?: AccountParams) =>
  defHttp.post({ url: Api.OperateAccount, params });

export const deleteAccount = (id: number) =>
  defHttp.delete({ url: Api.OperateAccount, params: id });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const createDept = (params?: DeptParams) => defHttp.post({ url: Api.OperateDept, params });

export const deleteDept = (id: number) => defHttp.delete({ url: Api.OperateDept, params: id });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const createMenu = (params?: MenuParams) => defHttp.post({ url: Api.OperateMenu, params });

export const deleteMenu = (id: number) => defHttp.delete({ url: Api.OperateMenu, params: id });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const createRole = (params?: RoleParams) => defHttp.post({ url: Api.OperateRole, params });

export const deleteRole = (id: number) => defHttp.delete({ url: Api.OperateRole, params: id });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });

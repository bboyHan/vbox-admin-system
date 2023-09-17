<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title=""
    @visible-change="handleVisibleChange"
    width="700px"
  >
    <div class="pt-3px pr-3px">
      <div v-if="isUrl">
        <iframe :src="htmlStr" border="0" width="100%" height="600px"></iframe>
      </div>
      <div v-if="!isUrl">
<!--        <iframe :srcdoc="htmlStr" border="0" width="100%" height="600px"></iframe>-->
        <BasicTable title="充值记录" :columns="columns" :dataSource="dataSource"> </BasicTable>
      </div>
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { FormSchema, useForm } from '/@/components/Form';
  import { BasicColumn, BasicTable } from '/@/components/Table';

  let dataSource = ref();

  const schemas: FormSchema[] = [
    {
      field: 'content',
      component: 'Input',
      label: '支付链接',
      colProps: {
        span: 24,
      },
    },
  ];
  export default defineComponent({
    components: { BasicTable, BasicModal },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const htmlStr = ref('');
      const isUrl = ref(false);
      let columns = ref([]);
      const [
        registerForm,
        {
          // setFieldsValue,
          // setProps
          validate,
        },
      ] = useForm({
        labelWidth: 120,
        schemas,
      });
      async function handleCopyLink() {
        try {
          const values = await validate();
          console.log(values);
          htmlStr.value = values.content;
        } catch (error) {}
      }
      const [register] = useModalInner((data) => {
        data && onDataReceive(data);
      });
      function onDataReceive(data) {
        // 设置时区为东八区
        let formattedDate;
        // 将UTC时间戳转换为毫秒级
        let options;
        let date;
        console.log('Data Received', data);
        // 方式1;
        // setFieldsValue({
        //   field2: data.data,
        //   field1: data.info,
        // });
        // // 方式2
        htmlStr.value = data.content;
        isUrl.value = data.isUrl;
        console.log(isUrl.value);
        if (isUrl.value != true) {
          htmlStr.value = JSON.stringify(data.content);
          // dataSource.value = data.content;
          if (data.content.includes('provideID')) {
            columns.value = [
              {
                title: '上游ID',
                dataIndex: 'serialNo',
                width: 120,
              },
              {
                title: '充值账号',
                dataIndex: 'provideID',
                width: 80,
              },
              {
                title: '金额',
                dataIndex: 'payAmt',
                width: 80,
              },
              {
                title: '支付时间',
                dataIndex: 'payTime',
                width: 120,
              },
            ];
            console.log(typeof data.content);
            dataSource.value = JSON.parse(data.content);
            // const arr: any[] = [];
            for (let index = 0; index < dataSource.value.length; index++) {
              console.log(dataSource.value[index]);
              date = new Date(dataSource.value[index].payTime * 1000);

              options = { timeZone: 'Asia/Shanghai' };

              formattedDate = date.toLocaleString('zh-CN', options);
              console.log(formattedDate);
              dataSource.value[index].payAmt = dataSource.value[index].payAmt / 100;
              dataSource.value[index].payTime = formattedDate;
            }
          }
          if (data.content.includes('leftCoins')) {
            columns.value = [
              {
                title: '游戏',
                dataIndex: 'gameName',
                width: 120,
              },
              {
                title: '账户',
                dataIndex: 'account',
                width: 80,
              },
              {
                title: '大区',
                dataIndex: 'zoneName',
                width: 120,
              },
              {
                title: '余额',
                dataIndex: 'leftCoins',
                width: 80,
              },
            ];
            let bj = JSON.parse(data.content);
            console.log(bj);
            let arr: any[] = [];
            arr.push(bj);
            console.log(arr);
            dataSource.value = arr;
          }
          // dataSource.value = arr.map((item) => {
          //   return Object.keys(item).map((key) => item[key]);
          // });
        } else {
          htmlStr.value = JSON.parse(data.content);
          console.log(htmlStr.value);
        }
        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData));
      }

      return {
        handleCopyLink,
        register,
        columns,
        dataSource,
        schemas,
        registerForm,
        htmlStr,
        isUrl,
        handleVisibleChange,
      };
    },
  });
</script>

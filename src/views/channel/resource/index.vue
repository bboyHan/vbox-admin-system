<template>
  <PageWrapper title="modal组件使用示例">
    <Alert
      message="使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable
    参数进行控制是否可以拖动/全屏，并演示了在Modal内动态加载内容并自动调整高度"
      show-icon
    />
    <Card title="通道列表" v-bind="$attrs">
      <template #extra>
        <a-button type="link" size="small">更多</a-button>
      </template>

      <!--<CardGrid v-for="item in items" :key="item" class="!md:w-1/3 !w-full">-->
      <CardGrid v-for="item in items" :key="item" class="">
        <a-space class="text-lg ml-4">{{ item.title }}</a-space>
        <div>
          <span class="flex">
            <img :src="item.icon" alt="" style="width: 100%; height: 150px" />
          </span>
        </div>
        <div class="flex justify-between text-secondary">
          <a-button type="text" @click="send(item.title)"> 添加帐号 </a-button>
          <a-button type="text" @click="send(item.title)"> 帐号管理 </a-button>
          <a-button type="text" @click="send(item.title)"> 设置倍率 </a-button>
        </div>
      </CardGrid>
    </Card>

    <CreateU @register="register" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert, Card, Space } from 'ant-design-vue';
  import { channelItems } from './data';
  import { useModal } from '/@/components/Modal';
  import CreateU from '/@/views/channel/resource/components/CreateU.vue';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { Alert, CreateU, Card, CardGrid: Card.Grid, PageWrapper, ASpace: Space },
    setup() {
      const [register, { openModal: openM }] = useModal();

      function send(regionTitle) {
        openM(true, {
          title: regionTitle,
          info: 'Info',
        });
      }

      return { items: channelItems, send, register };
    },
  });
</script>

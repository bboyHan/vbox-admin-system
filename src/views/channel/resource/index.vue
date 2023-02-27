<template>
  <PageWrapper title="通道管理">
    <Alert message="通道列表内容管理，可在此添加通道帐号，目前只支持剑网情缘3" show-icon />
    <Card title="通道列表" v-bind="$attrs">
      <template #extra>
        <a-button type="text" size="middle">更多</a-button>
      </template>

      <!--<CardGrid v-for="item in items" :key="item" class="!md:w-1/3 !w-full">-->
      <CardGrid v-for="item in items" :key="item" class="">
        <a-space class="text-lg ml-4">{{ item.title }}</a-space>
        <div>
          <span class="flex">
            <img :src="item.icon" alt="" style="height: 150px" />
          </span>
        </div>
        <div class="flex justify-between text-secondary">
          <a-button type="text" @click="send(item.title, item.channel_id)"> 添加帐号 </a-button>
          <a-button type="text">
            <router-link to="/channel/channelAccount"> 帐号管理 </router-link>
          </a-button>
          <!--<a-button type="text" @click="send(item.title)"> 设置倍率 </a-button>-->
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

  // const go = useGo();
  export default defineComponent({
    components: { Alert, CreateU, Card, CardGrid: Card.Grid, PageWrapper, ASpace: Space },
    setup() {
      const [register, { openModal: openM }] = useModal();

      function send(title, channel_id) {
        openM(true, {
          title: title,
          channel_id: channel_id,
        });
      }

      return { items: channelItems, send, register };
    },
  });
</script>

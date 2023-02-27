<template>
  <Card title="常用项目" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>

    <!--<CardGrid v-for="item in items" :key="item" class="!md:w-1/3 !w-full">-->
    <CardGrid v-for="item in items" :key="item" class="!md:w-1/3 !w-full">
      <router-link to="" @click="jumpTo(item.link)">
        <span class="flex">
          <Icon :icon="item.icon" :color="item.color" size="30" />
          <span class="text-lg ml-4">{{ item.title }}</span>
        </span>
        <div class="flex mt-2 h-10 text-secondary">{{ item.desc }}</div>
        <div class="flex justify-between text-secondary">
          <span>{{ item.group }}</span>
          <span>{{ item.date }}</span>
        </div>
      </router-link>
    </CardGrid>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Card } from 'ant-design-vue';
  import { Icon } from '/@/components/Icon';
  import { groupItems } from './data';

  export default defineComponent({
    components: { Card, CardGrid: Card.Grid, Icon },
    setup() {
      function jumpTo(url) {
        window.open(url, '_blank');
      }

      return { items: groupItems, jumpTo };
    },
  });
</script>

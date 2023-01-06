<template>
  <Card title="快捷导航" v-bind="$attrs">
    <CardGrid v-for="item in navItems" :key="item">
      <router-link :to="item.link">
        <span class="flex flex-col items-center">
          <Icon :icon="item.icon" :color="item.color" size="20" />
          <span class="text-md mt-2">{{ item.title }}</span>
        </span>
      </router-link>
    </CardGrid>
  </Card>
</template>
<script lang="ts" setup>
  import { Card } from 'ant-design-vue';
  import { navItems } from './data';
  import { Icon } from '/@/components/Icon';

  const CardGrid = Card.Grid;
</script>
<style>
  .router-link-active {
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: grey;
  }
</style>

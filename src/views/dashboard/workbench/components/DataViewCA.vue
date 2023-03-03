<template>
  <div>
    <PageHeader
      class="demo-page-header"
      style="border: 1px solid rgb(235, 237, 240)"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => $router.go(-1)"
      v-bind="$attrs"
    >
      <template #tags>
        <Tag color="blue">Running</Tag>
      </template>
      <template #extra>
        <Button @click="testPayCode">建单测试</Button>
        <Button key="2">Operation</Button>
        <Button key="1" type="primary">Primary</Button>
      </template>
      <Row type="flex">
        <Statistic title="Status" value="Pending" />
        <Statistic
          title="Price"
          prefix="$"
          :value="568.08"
          :style="{
            margin: '0 32px',
          }"
        />
        <Statistic title="Balance" prefix="$" :value="3345.08" />
      </Row>
    </PageHeader>
  </div>
</template>
<script lang="ts" setup>
  import { PageHeader, Row, Statistic, Tag } from 'ant-design-vue';

  function testPayCode() {
    console.log('111');
  }
</script>
<style scoped>
  .demo-page-header :deep(tr:last-child td) {
    padding-bottom: 0;
  }
</style>

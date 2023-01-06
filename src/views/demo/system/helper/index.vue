<template>
  <ScrollContainer>
    <div ref="wrapperRef" :class="prefixCls">
      <Tabs tab-position="left" :tabBarStyle="tabBarStyle">
        <template v-for="item in editList" :key="item.key">
          <TabPane :tab="item.name">
            <component :is="item.component" />
          </TabPane>
        </template>
      </Tabs>
    </div>
  </ScrollContainer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Tabs } from 'ant-design-vue';

  import { ScrollContainer } from '/@/components/Container/index';
  import { editList } from './helper.data';

  import HelpEdit from './HelpEdit.vue';
  import HelpList from './HelpList.vue';
  import PromotionEdit from './PromotionEdit.vue';
  import NoticeEdit from './NoticeEdit.vue';

  export default defineComponent({
    components: {
      ScrollContainer,
      Tabs,
      TabPane: Tabs.TabPane,
      HelpEdit,
      HelpList,
      PromotionEdit,
      NoticeEdit,
    },
    setup() {
      return {
        prefixCls: 'account-setting',
        editList,
        tabBarStyle: {
          width: '220px',
        },
      };
    },
  });
</script>
<style lang="less">
  .account-setting {
    margin: 12px;
    background-color: @component-background;

    .base-title {
      padding-left: 0;
    }

    .ant-tabs-tab-active {
      background-color: @item-active-bg;
    }
  }
</style>

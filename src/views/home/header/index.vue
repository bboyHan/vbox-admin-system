<template>
  <Header :class="getHeaderClass">
    <!-- left start -->
    <div :class="`${prefixCls}-left`">
      <!-- logo -->
      <AppLogo
        v-if="getShowHeaderLogo || getIsMobile"
        :class="`${prefixCls}-logo`"
        :theme="getHeaderTheme"
        :style="getLogoWidth"
      />
    </div>
    <!-- left end -->
    <a-space :size="20">
      <!--  首页  -->
      <a-popover placement="topLeft">
        <a-button type="text">
          <router-link to="/home">首页</router-link>
        </a-button>
      </a-popover>
      <!--  产品  -->
      <a-popover placement="topLeft">
        <template #content>
          <a-row>
            <a-col :span="12">
              <a-card title="图片处理" style="width: 300px">
                <p>Content</p>
                <p>Content</p>
              </a-card>
              <a-card title="媒体处理" style="width: 300px">
                <p>Content</p>
                <p>Content</p>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card title="文档处理" style="width: 300px">
                <p>Content</p>
                <p>Content</p>
              </a-card>
            </a-col>
          </a-row>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button type="text">
          <router-link to="/home">产品</router-link>
        </a-button>
      </a-popover>
      <!--  解决方案  -->
      <a-popover placement="topLeft">
        <template #content>
          <a-card title="行业解决方案" style="width: 300px">
            <p>Content</p>
            <p>Content</p>
          </a-card>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button type="text">
          <router-link to="/home">解决方案</router-link>
        </a-button>
      </a-popover>
      <!--  服务与支持  -->
      <a-popover placement="topLeft">
        <template #content>
          <a-card title="文档帮助" style="width: 300px">
            <p>文档中心</p>
            <p>sdk</p>
          </a-card>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button type="text">
          <router-link to="/home">服务与支持</router-link>
        </a-button>
      </a-popover>
      <!--  服务与支持  -->
      <a-popover placement="topLeft">
        <template #content>
          <a-card title="定价" style="width: 300px">
            <p>购买</p>
          </a-card>
          <a-card title="Demo体验" style="width: 300px">
            <router-link to="/dashboard"><p>测试申请</p></router-link>
          </a-card>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <a-button type="text">
          <router-link to="/home">购买与试用</router-link>
        </a-button>
      </a-popover>
      <!--  案例作品  -->
      <a-button type="text">
        <router-link to="/home">案例作品</router-link>
      </a-button>
      <!--  案例作品  -->
      <a-button type="text">
        <router-link to="/home">关于我们</router-link>
      </a-button>
    </a-space>
  </Header>
</template>

<script lang="ts">
  import { openWindow } from '/@/utils';
  import { computed, defineComponent, ref, unref } from 'vue';
  import { Layout, Popover, Button, Space, Card, Row, Col } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useAppInject } from '/@/hooks/web/useAppInject';
  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { propTypes } from '/@/utils/propTypes';

  import { AppLogo } from '/@/components/Application';

  export default defineComponent({
    name: 'HomeHeader',
    components: {
      Header: Layout.Header,
      APopover: Popover,
      AButton: Button,
      ACard: Card,
      ASpace: Space,
      ARow: Row,
      ACol: Col,
      AppLogo,
    },
    props: {
      fixed: propTypes.bool,
    },
    setup(props) {
      const { t } = useI18n();
      const { prefixCls } = useDesign('layout-header');
      const { getIsMobile } = useAppInject();
      const getLogoWidth = computed(() => {
        return { width: `100px` };
      });
      const { getHeaderTheme, getShowHeaderLogo } = useHeaderSetting();
      const getHeaderClass = computed(() => {
        const theme = unref(getHeaderTheme);
        return [
          prefixCls,
          {
            [`${prefixCls}--fixed`]: props.fixed,
            [`${prefixCls}--mobile`]: unref(getIsMobile),
            [`${prefixCls}--${theme}`]: theme,
          },
        ];
      });

      return {
        t,
        openWindow,
        activeKey: ref('1'),
        prefixCls,
        getHeaderClass,
        getShowHeaderLogo,
        getHeaderTheme,
        getLogoWidth,
        getIsMobile,
      };
    },
  });
</script>

<style lang="less" scoped>
  //#components-layout-demo-basic .code-box-demo {
  //  text-align: center;
  //}
  //#components-layout-demo-basic .ant-layout-header {
  //  color: #fff;
  //  background: #7dbcea;
  //}
  //[data-theme='dark'] #components-layout-demo-basic .ant-layout-header {
  //  background: #6aa0c7;
  //}
  @import './index.less';
</style>

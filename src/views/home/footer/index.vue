<template>
  <Footer :class="prefixCls" v-if="getShowLayoutFooter" ref="footerRef">
    <div :class="`${prefixCls}__links`">
      <Row justify="center">
        <Col :span="3">
          <div>
            <h3>热门推荐</h3>
          </div>
          <div>
            <router-link class="footer-router-link" to="/home"> 首页 </router-link>
          </div>
          <div>
            <router-link to="/home">
              <span>解决方案</span>
            </router-link>
          </div>
          <div>
            <router-link to="/home">
              <span>案例作品</span>
            </router-link>
          </div>
        </Col>
        <Col :span="3">
          <h3>资源与社区</h3>
          <div>
            <router-link to="/home">
              <span>产品文档</span>
            </router-link>
          </div>
          <div>
            <router-link to="/home">
              <span>API 中心</span>
            </router-link>
          </div>
          <div>
            <router-link to="/home">
              <span>开发者社区</span>
            </router-link>
          </div>
        </Col>
        <Col :span="3">
          <h3>关于我们</h3>
          <div>
            <router-link to="/home">
              <span>VBox公司</span>
            </router-link>
          </div>
          <div>
            <router-link to="/home">
              <span>联系我们</span>
            </router-link>
          </div>
        </Col>
        <Col :span="3">
          <h3>联系我们</h3>
          <div>
            <span>联系热线</span>
          </div>
          <div>
            <p style="font-size: 20px; color: #000c17">182xxxxXXXX</p>
          </div>
          <div>
            <span>联系邮箱</span>
          </div>
          <div>
            <p style="font-size: 20px; color: #000c17">bboyhan@yeah.net</p>
          </div>
        </Col>
        <Col :span="6">
          <h3 style="text-align: left; padding-left: 20px">关注或联系我们</h3>
          <div>
            <Row justify="space-around">
              <Col :span="11" :offset="1">
                <div>技术公众号</div>
                <img
                  alt="example"
                  src="../../../assets/images/qrcode_23.jpg"
                  style="width: 200px; height: 200px"
                />
              </Col>
              <Col :span="11" :offset="1">
                <div>个人微信号</div>
                <img
                  alt="example"
                  src="../../../assets/images/qrcode_u.jpg"
                  style="width: 200px; height: 200px"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <a @click="openWindow(SITE_URL)">{{ t('layout.footer.onlinePreview') }}</a>

      <GithubFilled @click="openWindow(GITHUB_URL)" :class="`${prefixCls}__github`" />

      <a @click="openWindow(DOC_URL)">{{ t('layout.footer.onlineDocument') }}</a>
    </div>
    <div>Copyright &copy;2023 Vbox</div>
  </Footer>
</template>

<script lang="ts">
  import { computed, defineComponent, unref, ref } from 'vue';
  import { Layout, Row, Col } from 'ant-design-vue';

  import { GithubFilled } from '@ant-design/icons-vue';

  import { DOC_URL, GITHUB_URL, SITE_URL } from '/@/settings/siteSetting';
  import { openWindow } from '/@/utils';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { useRootSetting } from '/@/hooks/setting/useRootSetting';
  import { useRouter } from 'vue-router';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useLayoutHeight } from '/@/layouts/default/content/useContentViewHeight';

  export default defineComponent({
    name: 'HomeFooter',
    components: { Footer: Layout.Footer, GithubFilled, Row, Col },
    setup() {
      const { t } = useI18n();
      const { getShowFooter } = useRootSetting();
      const { currentRoute } = useRouter();
      const { prefixCls } = useDesign('layout-footer');

      const footerRef = ref<ComponentRef>(null);
      const { setFooterHeight } = useLayoutHeight();

      const getShowLayoutFooter = computed(() => {
        if (unref(getShowFooter)) {
          const footerEl = unref(footerRef)?.$el;
          setFooterHeight(footerEl?.offsetHeight || 0);
        } else {
          setFooterHeight(0);
        }
        return unref(getShowFooter) && !unref(currentRoute).meta?.hiddenFooter;
      });

      return {
        getShowLayoutFooter,
        prefixCls,
        t,
        DOC_URL,
        GITHUB_URL,
        SITE_URL,
        openWindow,
        footerRef,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-footer';

  //@normal-color: rgba(0, 0, 0, 0.45);
  @normal-color: yellow;

  //@hover-color: rgba(0, 0, 0, 0.85);
  @hover-color: rgba(17, 51, 224, 0.87);

  .@{prefix-cls} {
    color: @normal-color;
    text-align: center;

    &__links {
      margin-bottom: 8px;

      div {
        margin-bottom: 15px;
        text-align: left;
      }

      h3 {
        margin-bottom: 25px;
      }

      .router-link-active {
        text-decoration: none;
        color: @normal-color;
      }

      a {
        text-decoration: none;
        color: @normal-color;

        &:hover {
          color: @hover-color;
        }
      }
    }

    &__github {
      margin: 0 30px;

      &:hover {
        color: @hover-color;
      }
    }
  }
</style>

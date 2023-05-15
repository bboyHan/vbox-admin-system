<template>
  <PageWrapper title="付方看板" contentBackground>
    <div class="mt-2">
      <Row :gutter="[24, 24]">
        <template v-for="item in itemList" :key="item">
          <Col :span="12">
            <Card hoverable>
              <Row :gutter="16">
                <Col :span="12">
                  <Statistic title="商户备注" :value="item.premark" style="margin: 5px" />
                </Col>
                <Col :span="12">
                  <Row>
                    <Col :span="12">
                      <Statistic
                        title="总成单情况"
                        :value="item.countPayed + ' / '"
                        :suffix="item.countOrder"
                        style="margin: 5px"
                      />
                    </Col>
                    <Col :span="12">
                      <Statistic
                        title="总成单金额(元)"
                        :value="item.sumPayed"
                        style="margin: 5px"
                        :value-style="{ color: '#cf1322' }"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row :gutter="16">
                <Col :span="12">
                  <Row :gutter="16">
                    <Col :span="12">
                      <Statistic
                        title="昨日成单情况"
                        :value="item.countPayedYesterday + ' / '"
                        :suffix="item.countOrderYesterday"
                        style="margin: 5px"
                      />
                    </Col>
                    <Col :span="12">
                      <Statistic
                        title="昨日成单金额(元)"
                        :value="item.sumPayedYesterday"
                        style="margin: 5px"
                        :value-style="{ color: '#cf1322' }"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col :span="12">
                  <Row :gutter="16">
                    <Col :span="12">
                      <Statistic
                        title="今日成单情况"
                        :value="item.countPayedToday + ' / '"
                        :suffix="item.countOrderToday"
                        style="margin: 5px"
                      />
                    </Col>
                    <Col :span="12">
                      <Statistic
                        title="今日成单金额(元)"
                        :value="item.sumPayedToday"
                        style="margin: 5px"
                        :value-style="{ color: '#cf1322' }"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </template>
      </Row>
      <Pagination
        showLessItems
        :current="currentPage"
        :pageSize="pageSize"
        :total="total"
        @change="handlePageChange"
      />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Pagination, Card, Row, Col, Statistic } from 'ant-design-vue';
  import { listPAccountOverview } from '/@/api/channel/payer';
  export default defineComponent({
    components: { Pagination, PageWrapper, Card, Row, Col, Statistic },
    setup() {
      let itemList = ref([]);
      // function listPAOverview() {
      //   listPAccountOverview()
      //     .then((res) => {
      //       console.log(res);
      //     })
      //     .catch((e) => {
      //       console.log(e);
      //     });
      // }
      const total = ref(0);
      const pageSize = ref(10);
      const currentPage = ref(1);
      function handlePageChange(page: number) {
        setCurrentPage(page);
      }
      function setCurrentPage(page: number) {
        currentPage.value = page;
        console.log(currentPage.value);
        let param = {
          page: currentPage.value,
          pageSize: pageSize.value,
        };
        listPAccountOverview(param).then((res) => {
          console.log(res);
          total.value = res.total;
          itemList.value = res.items;
        });
      }
      onMounted(() => {
        let param = {
          page: currentPage.value,
          pageSize: pageSize.value,
        };
        listPAccountOverview(param).then((res) => {
          console.log(res);
          total.value = res.total;
          itemList.value = res.items;
        });
      });

      return {
        itemList,
        total,
        currentPage,
        pageSize,
        handlePageChange,
      };
    },
  });
</script>

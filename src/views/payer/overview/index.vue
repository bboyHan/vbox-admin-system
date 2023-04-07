<template>
  <PageWrapper title="付方看板">
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
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Row, Col, Statistic } from 'ant-design-vue';
  import { listPAccountOverview } from '/@/api/channel/payer';
  import { PAOverviewItem } from '/@/api/channel/model/payerModel';
  export default defineComponent({
    components: { PageWrapper, Card, Row, Col, Statistic },
    setup() {
      let itemList: PAOverviewItem[] = reactive([]);
      // function listPAOverview() {
      //   listPAccountOverview()
      //     .then((res) => {
      //       console.log(res);
      //     })
      //     .catch((e) => {
      //       console.log(e);
      //     });
      // }

      onMounted(async () => {
        let res = await listPAccountOverview();
        console.log(res);
        itemList.push(...res.items);
      });

      /*const itemList = ref([
        {
          pAccount: 'a',
          pRemark: '备注1',
          orderNum: 5,
          orderProdNum: 10,
          orderSum: 100,
        },
        {
          pAccount: 'b',
          pRemark: '备注2',
          orderNum: 7,
          orderProdNum: 14,
          orderSum: 200,
        },
        {
          pAccount: 'b',
          pRemark: '备注2',
          orderNum: 7,
          orderProdNum: 14,
          orderSum: 200,
        },
        {
          pAccount: 'b',
          pRemark: '备注2',
          orderNum: 7,
          orderProdNum: 14,
          orderSum: 200,
        },
        {
          pAccount: 'b',
          pRemark: '备注2',
          orderNum: 7,
          orderProdNum: 14,
          orderSum: 200,
        },
        {
          pAccount: 'b',
          pRemark: '备注2',
          orderNum: 7,
          orderProdNum: 14,
          orderSum: 200,
        },
      ]);*/
      // let itemList.value = ;
      // console.log(itemList.value);
      return {
        itemList,
      };
    },
  });
</script>

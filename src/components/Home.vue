<script setup lang="ts">
import { ref } from 'vue'
import * as dataTypes from '../electron/lib/types/interfaces.ts'

const addressList = ref<dataTypes.cAllAddress[]>([]);
let addressViewList: dataTypes.cAllAddress[] = [];
let customerListWithoutDemo: dataTypes.cAllAddress[] = [];
const addressListCount = ref<number>(0);
const customerWithoutDemoCount = ref<number>(0);
const demoFlg = ref<boolean>(true);
const pageRefresh: number = 1000;


/**
 * ライフサイクルフック:onMounted
 * @note マウントされた後。子コンポーネント含め、ビュー全体がレンダリングされるまで待ちたい場合、$nextTickを使う
 * @note https://tedate.jp/vue-js/to-use-lifecycle-hooks-in-vue3/2
 */
//onBeforeMount(() => {
//  getList();
//})

const getList = async () => {
//  fetchUtil.fetchRequest(fetchUrl, {}, fetchOk, fetchNg);
  let data: any = await window.electronAPI.getList(1);
  console.log(data);
} 

const fetchOk = async (datas: dataTypes.cAllAddress[]) => {
  // console.log(datas);
  // customerListWithDemo = Object.assign({}, datas);  // Object.assignで入れるとArrayにならないためforEachで対応
  datas.forEach(row => {
    let tempAddressList: dataTypes.cAllAddress = new dataTypes.cAllAddress();
    tempAddressList.code = row.code;
    tempAddressList.Address = row.Address;
    tempAddressList.Prefecture = row.Prefecture;
    tempAddressList.Municipalities = row.Municipalities;
    tempAddressList.Town = row.Town;
    addressList.push(tempAddressList);
  });
  addressListCount.value = addressList.length;
  // 大量の配列を描画する際に順次リアクティブ変数(ref)に入れる
  // https://speakerdeck.com/tbashiyy/shi-shu-mo-rekodoninai-euruvue-dot-jspuroziekutowoshi-xian-surutamenopahuomansutiyuningu?slide=51
  let count:number = 0;
  do{
    addressViewList.value = Object.freeze([...addressViewList.value, ...addressList.slice(count, count+pageRefresh)]);
    count += pageRefresh;
    await new Promise((resolve) => setTimeout(resolve, 0)); // セットが終わったら描画を走らせる処理
  }while(count<addressList.length);
}

const fetchNg = (err:unknown):void => {
  console.log(err);
}

</script>

<template>
  <div class="addressList-count">警備先件数： {{ customerWithDemoCount }}</div>
  <button type="button" @click="getList()">getListSample</button>
  <div class="address-list">
    <table border="1px" class="address-list-table">
      <thead>
        <th>No.</th>
        <th>コード</th>
        <th>郵便番号</th>
        <th>都道府県</th>
        <th>市区町村</th>
        <th>町域名</th>
      </thead>
      <tbody>
        <template v-for="data, index in addressViewList" :key="index">
          <tr>
            <td>{{ index }}</td>
            <td>{{ data.code }}</td>
            <td>{{ data.Address }}</td>
            <td>{{ data.Prefecture }}</td>
            <td>{{ data.Municipalities }}</td>
            <td>{{ data.Town }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>

</template>

<style>
.address-list {
  max-width: 100%;                /* 横幅を画面の最大幅と同じにする。（いろんなディスプレイで自動で合わせられる） */
  height: 600px;
  /*border: 1px solid #000;      /* わかりやすくボーダーを引く */
  overflow: scroll;            /* スクロール可能にする */
}
.address-list-table {
  width: 1000px;
}
.address-list thead th {
  white-space: nowrap;              /* 高さが変わらないよう改行させない */
  position: sticky;                 /** 位置固定 */
  background-color: #eee;
  top: 0;                           /** positionで決めた場所から相対的にどこにおくか（これないときかない） */
  z-index: 10;                      /** 表示の優先度(高いほうが前に出る) */
}
.address-list tbody td {
  z-index: 5;
}
.addressList-count {
  text-align: left;
}
</style>

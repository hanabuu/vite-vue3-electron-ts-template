<script setup lang="ts">
//import HelloWorld from "./components/HelloWorld.vue";
import { ref, onBeforeMount } from 'vue'
import * as dataTypes from './electron/lib/types/interfaces.ts'

const customerList = ref<dataTypes.cCustomerList[]>([]);
let customerListWithDemo: dataTypes.cCustomerList[] = [];
let customerListWithoutDemo: dataTypes.cCustomerList[] = [];
const customerWithDemoCount = ref<number>(0);
const customerWithoutDemoCount = ref<number>(0);
const demoFlg = ref<boolean>(true);
const pageRefresh: number = 1000;

// filePath.value = await window.electronAPI.openFile();

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

const fetchOk = async (datas: dataTypes.cCustomerList[]) => {
  // console.log(datas);
  // customerListWithDemo = Object.assign({}, datas);  // Object.assignで入れるとArrayにならないためforEachで対応
  datas.forEach(row => {
    let tempListwithdemo: dataTypes.cCustomerList = new dataTypes.cCustomerList();
    tempListwithdemo.ContractTemplate = row.ContractTemplate;
    tempListwithdemo.UnitNum = row.UnitNum;
    tempListwithdemo.OrderContractNum = row.OrderContractNum;
    tempListwithdemo.SecPlaceName = row.SecPlaceName;
    tempListwithdemo.OrderOffice = row.OrderOffice;
    tempListwithdemo.OperationOffice = row.OperationOffice;
    tempListwithdemo.PostCode = row.PostCode;
    customerListWithDemo.push(tempListwithdemo);

    let tempListwithoutdemo: dataTypes.cCustomerList = new dataTypes.cCustomerList();
    if(
      row.OperationOffice.indexOf("本社") == -1 && 
      row.SecPlaceName.indexOf("デモ") == -1 &&
      row.ContractTemplate.indexOf("09765") == -1
      ){
      tempListwithoutdemo.ContractTemplate = row.ContractTemplate;
      tempListwithoutdemo.UnitNum = row.UnitNum;
      tempListwithoutdemo.OrderContractNum = row.OrderContractNum;
      tempListwithoutdemo.SecPlaceName = row.SecPlaceName;
      tempListwithoutdemo.OrderOffice = row.OrderOffice;
      tempListwithoutdemo.OperationOffice = row.OperationOffice;
      tempListwithoutdemo.PostCode = row.PostCode;
      customerListWithoutDemo.push(tempListwithoutdemo);
    }
  });
  customerWithDemoCount.value = customerListWithDemo.length;
  customerWithoutDemoCount.value = customerListWithoutDemo.length;
  // 大量の配列を描画する際に順次リアクティブ変数(ref)に入れる
  // https://speakerdeck.com/tbashiyy/shi-shu-mo-rekodoninai-euruvue-dot-jspuroziekutowoshi-xian-surutamenopahuomansutiyuningu?slide=51
  let count:number = 0;
  do{
    customerList.value = Object.freeze([...customerList.value, ...customerListWithDemo.slice(count, count+pageRefresh)]);
    count += pageRefresh;
    await new Promise((resolve) => setTimeout(resolve, 0)); // セットが終わったら描画を走らせる処理
  }while(count<customerListWithDemo.length);
}

const fetchNg = (err:unknown):void => {
  console.log(err);
}

const changeDemoFlg = async (): void => {
  let count:number = 0;
  customerList.value = [];
  if(demoFlg.value == true){
    do{
      customerList.value = Object.freeze([...customerList.value, ...customerListWithDemo.slice(count, count+pageRefresh)]);
      count += pageRefresh;
      await new Promise((resolve) => setTimeout(resolve, 0)); // セットが終わったら描画を走らせる処理
      if(demoFlg.value == false) break;
    }while(count < customerListWithDemo.length);
  } else {
    do{
      customerList.value = Object.freeze([...customerList.value, ...customerListWithoutDemo.slice(count, count+pageRefresh)]);
      count += pageRefresh;
      await new Promise((resolve) => setTimeout(resolve, 0)); // セットが終わったら描画を走らせる処理
      if(demoFlg.value == true) break;
    }while(count < customerListWithoutDemo.length);
  }
  
} 

</script>

<template>
  <div class="customer-count" v-if="demoFlg">警備先件数： {{ customerWithDemoCount }}</div>
  <div class="customer-count" v-if="!demoFlg">警備先件数： {{ customerWithoutDemoCount }}</div>
  <div class="demo-Flg">
    <input type="checkbox" id="demoFlg" v-model="demoFlg" @change="changeDemoFlg">
    <label for="demoFlg">デモ機表示</label>
  </div>
  <button type="button" @click="getList()">getListSample</button>
  <div class="customer-list">
    <table border="1px" class="customer-list-table">
      <thead>
        <th>No.</th>
        <th class="OrderContractNum">受注契約番号<br>(電計番号)</th>
        <th class="UnitNum">号機番号</th>
        <th class="SecPlaceName">警備先名称</th>
        <th class="OrderOffice">受注事業所</th>
        <th class="OperationOffice">実施事業所</th>
        <!-- <th>郵便番号</th> -->
        <th class="sdLink">ＳＤ</th>
        <th class="historyLink">履歴</th>
        <th class="rakuLink">落着</th>
      </thead>
      <tbody>
        <template v-for="data, index in customerList" :key="index">
          <tr>
            <td>{{ index }}</td>
            <td>{{ data.OrderContractNum }}</td>
            <td>{{ data.UnitNum }}</td>
            <td>{{ data.SecPlaceName }}</td>
            <td>{{ data.OrderOffice }}</td>
            <td>{{ data.OperationOffice }}</td>
            <!-- <td>{{ data.PostCode }}</td> -->
            <td><router-link :to="{ name: 'sdview', params: { gouki: data.UnitNum }}">ＳＤ</router-link></td>
            <td><router-link :to="{ name: 'historyview', params: { unitNum: data.UnitNum }}">履歴</router-link></td>
            <td><router-link :to="{ name: 'rakutyakuview', params: { unitNum: data.UnitNum }}">落着</router-link></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>

</template>

<style>
.customer-list {
  max-width: 100%;                /* 横幅を画面の最大幅と同じにする。（いろんなディスプレイで自動で合わせられる） */
  height: 600px;
  /*border: 1px solid #000;      /* わかりやすくボーダーを引く */
  overflow: scroll;            /* スクロール可能にする */
}
.customer-list-table {
  width: 1000px;
}
.customer-list thead th {
  white-space: nowrap;              /* 高さが変わらないよう改行させない */
  position: sticky;                 /** 位置固定 */
  background-color: #eee;
  top: 0;                           /** positionで決めた場所から相対的にどこにおくか（これないときかない） */
  z-index: 10;                      /** 表示の優先度(高いほうが前に出る) */
}
.customer-list tbody td {
  z-index: 5;
}
.OrderContractNum {
  width: 100px;
}
.UnitNum {
  width: 70px;
}
.SecPlaceName {
  width: 200px;
}
.OrderOffice{
  width: 200px;
}
.OperationOffice {
  width: 200px;
}
.sdLink .historyLink .rakuLink {
  width: 50px;
}
.demo-Flg {
  text-align: right;
}
.customer-count {
  text-align: left;
}
</style>

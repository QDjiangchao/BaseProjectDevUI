<template>
  <div>
    <div>
      <a-button type="primary" @click="setStoreConent">按钮</a-button>
    </div>

    <div class="example" v-if="loadingDiv">
      <a-spin tip="Loading..." size="large"/>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import {getIndexCompanyLists, getProductLists, getAllProductCategory} from '@/api/homePage'

  export default {
    name: "index",
    data() {
      return {
        loadingDiv: false,
        searchKey: '产品',
        keyword: '',
        companyList: [],
        productList1: [],
        productList2: [],
        newsList: [],
        demandList: []
      }
    },
    computed: {
      ...mapGetters(["userInfo"]),
    },
    created() {
      this.getIndexCompanyList();
    },
    methods: {
      setStoreConent(){
        // this.$store.dispatch('testSet');
      },
      toNewsDetail(id) {
        this.$router.push({
          path: '/newsDetail',
          query: {
            id: id
          }
        });
      },
      toDemandDetail(op) {
        this.$router.push({
          path: '/demandDetail',
          query: {
            id: op.id,
            enquiryStatus: op.enquiryStatus
          }
        });
      },
      toManuFile(id) {
        this.$router.push({
          path: '/manufactorProductList', query: {
            id: id
          }
        });
      },
      toSearchFile() {
        if (this.searchKey == '产品') {
          this.$router.push({
            path: '/productList', query: {
              keyword: this.keyword
            }
          });
        } else {
          this.$router.push({
            path: '/manufactor', query: {
              keyword: this.keyword
            }
          });
        }
      },
      toFile(id) {
        this.$router.push({
          path: '/productDetail', query: {
            id: id
          }
        });
      },
      getIndexCompanyList() {
        this.loadingDiv = true;
        getIndexCompanyLists().then(res => {
          this.loadingDiv = false;
          if (res.status === 200) {
            if (res.data.success) {
              let info = res.data.result.records;
              this.companyList = info;
            }
          }
        }, error => {
          this.loadingDiv = false;
          this.$message({message: '网络错误，请重试', type: 'error', center: true});
        })
      },
      getIndexProduct(id, list) {
        let formData = new FormData();
        formData.append('productCategoryId', id);
        formData.append('tag', 'list');
        formData.append('currentPage', 1);
        formData.append('pageSize', 10);
        getProductLists(formData).then(res => {
          if (res.status === 200) {
            if (res.data.success) {
              let info = res.data.result.records;
              this['productList' + list] = info;
            }
          }
        }, error => {
          this.$message({message: '网络错误，请重试', type: 'error', center: true});
        })
      },
      getAllProductCategorys() {
        let formData = new FormData();
        formData.append('productCategoryId', '');
        getAllProductCategory(formData).then(res => {
          if (res.status === 200) {
            if (res.data.success) {
            }
          }
        }, error => {
          this.$message({message: '网络错误，请重试', type: 'error', center: true});
        })
      }
    },
  }
</script>

<style scoped lang="scss">
</style>

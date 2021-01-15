<template>
  <div>
    <div>
      <a-table :columns="columns" :data-source="data"/>
    </div>

    <div class="example" v-if="loadingDiv">
      <a-spin tip="Loading..." size="large"/>
    </div>
  </div>
</template>

<script>
  import {getIndexCompanyLists, getProductLists, getAllProductCategory} from '@/api/homePage'

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 80,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address 1',
      ellipsis: true,
    },
    {
      title: 'Long Column Long Column Long Column',
      dataIndex: 'address',
      key: 'address 2',
      ellipsis: true,
    },
    {
      title: 'Long Column Long Column',
      dataIndex: 'address',
      key: 'address 3',
      ellipsis: true,
    },
    {
      title: 'Long Column',
      dataIndex: 'address',
      key: 'address 4',
      ellipsis: true,
    },
  ];


  export default {
    name: "list",
    data() {
      return {
        loadingDiv: false,
        data: [],
        columns,
      }
    },
    created() {
      // this.getIndexCompanyList();
      this.data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park, London No. 2 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '4',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '5',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '6',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '7',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '8',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '9',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '10',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '11',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
    },
    methods: {
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

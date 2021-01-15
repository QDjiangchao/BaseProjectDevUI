<template>
  <div>
    <div>
      <a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item ref="name" label="Activity name" prop="name">
          <a-input v-model="form.name" @blur="() => {$refs.name.onFieldBlur()}"/>
        </a-form-model-item>
        <a-form-model-item label="Activity zone" prop="region">
          <a-select v-model="form.region" placeholder="please select your zone">
            <a-select-option value="shanghai">Zone one</a-select-option>
            <a-select-option value="beijing">Zone two</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="Activity time" required prop="date1">
          <a-date-picker v-model="form.date1" show-time type="date" placeholder="Pick a date" style="width: 100%;"/>
        </a-form-model-item>
        <a-form-model-item label="Instant delivery" prop="delivery">
          <a-switch v-model="form.delivery"/>
        </a-form-model-item>
        <a-form-model-item label="Activity type" prop="type">
          <a-checkbox-group v-model="form.type">
            <a-checkbox value="1" name="type">Online</a-checkbox>
            <a-checkbox value="2" name="type">Promotion</a-checkbox>
            <a-checkbox value="3" name="type">Offline</a-checkbox>
          </a-checkbox-group>
        </a-form-model-item>
        <a-form-model-item label="Resources" prop="resource">
          <a-radio-group v-model="form.resource">
            <a-radio value="1">Sponsor</a-radio>
            <a-radio value="2">Venue</a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="Activity form" prop="desc">
          <a-input v-model="form.desc" type="textarea"/>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{span:3,offset:3}">
          <a-button type="primary" @click="onSubmit">提交</a-button>
          <a-button style="margin-left: 10px;" @click="resetForm">重新输入</a-button>
        </a-form-model-item>
      </a-form-model>
    </div>

    <div class="example" v-if="loadingDiv">
      <a-spin tip="Loading..." size="large"/>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import {FormModel, Radio, Checkbox, Select, Switch, DatePicker} from 'ant-design-vue';

  Vue.component('a-form-model', FormModel);
  Vue.component('a-form-model-item', FormModel.Item);
  Vue.component('a-radio', Radio);
  Vue.component('a-radio-group', Radio.Group);
  Vue.component('a-checkbox', Checkbox);
  Vue.component('a-checkbox-group', Checkbox.Group);
  Vue.component('a-select', Select);
  Vue.component('a-select-option', Select.Option);
  Vue.component('a-date-picker', DatePicker);
  Vue.component('a-switch', Switch);

  export default {
    name: "list",
    data() {
      return {
        loadingDiv: false,
        labelCol: {span: 2},
        wrapperCol: {span: 6},
        other: '',
        form: {
          name: '',
          region: undefined,
          date1: undefined,
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        rules: {
          name: [
            {required: true, message: 'Please input Activity name', trigger: 'blur'},
            {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'},
          ],
          region: [{required: true, message: 'Please select Activity zone', trigger: 'change'}],
          date1: [{required: true, message: 'Please pick a date', trigger: 'change'}],
          type: [{
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change'
          }],
          resource: [{required: true, message: 'Please select activity resource', trigger: 'change'}],
          desc: [{required: true, message: 'Please input activity form', trigger: 'blur'}],
        },
      }
    },
    methods: {
      onSubmit() {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            console.log(this.form)
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.ruleForm.resetFields();
      },
    },
  }
</script>

<style scoped lang="scss">
</style>

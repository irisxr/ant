<template>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="付款账号">
            <a-input
                    v-decorator="['payAccount', {initialValue:step.payCount , rules: [{ required: true, message: '请输入付款账号' }] }]"
            />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" @click="handleSubmit">
                下一步
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script>
  export default {
    data() {
      return {
        formLayout: 'horizontal',
        form: this.$form.createForm(this, { name: 'coordinated' }),
      };
    },
    computed:{
      step(){
        return this.$store.state.form.step;
      }
    },
    methods: {
      handleSubmit() {
       const {$router,$store} = this;
        this.form.validateFields((err, values) => {
          if (!err) {
            $store.commit({
              type:'form/saveStepFormData',
              payload:values
            })
            $router.push('/form/step-form/confirm')
          }
        });
      },
    },
  };
</script>
<template>
    <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="付款账号">
            {{step.payCount}}
        </a-form-item>
        <a-form-item label="密码">
            <a-input
                    v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }] }]"
                    type="password"
            />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button  @click="onPre">
                上一步
            </a-button>
            <a-button type="primary" @click="handleSubmit" style="margin-left: 8px">
                完成
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
        const {$store,step} = this;
        this.form.validateFields((err, values) => {
          if (!err) {
            $store.dispatch({
              type:'form/submitStepForm',
              payload:{...step,...values}
            })
          }
        });
      },
      onPre(){
        this.$router.push({
          name:'info'
        })
      }
    },
  };
</script>
import router from '../../router';
import request from '../../utils/request'

const state = {
  step:{
    payCount:'123456'
  }
};

const  actions= {
  async submitStepForm({commit},{payload}){
    await request({
      url:'http://localhost:8081/api/form',
      method:'POST',
      data:payload
    });
  commit('saveStepFormData',payload);
  router.push('/form/step-form/result')
  }
};

const mutations ={
  saveStepFormData(state,{payload}){
    state.step={
      ...state.step,
      ...payload
    }
  }
};


export default {
  namespaced:true ,
  state,
  mutations,
  actions
}
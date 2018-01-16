<template>
  <div class="">
      这里是消息中心
      <div class="buycar-item" v-for="item in carList">
        <img v-bind:src="'/static/'+item.prodcutImg" alt="">
		<p class="car-name">{{item.productName}}<br><span>{{item.productTit}}</span></p>
		<span class="car-money">{{item.prodcutPrice}}</span>
		<span class="disable">{{item.prodcutTwo}}</span>
		<div class="apply-btn">
			立即申请
		</div>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
//import MockAdapter from 'axios-mock-adapter'

export default {
  data () {
    return {
        carList:[]
    }
  },
    mounted () {
        //this.getcarlist();
    },
    methods:{
        getcarlist() {
            // this 指针漂移，this指的是自己本身，而不是全局
            let self = this;
            axios.get('/result').then((response) => {
                self.carList = response.data.data;
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

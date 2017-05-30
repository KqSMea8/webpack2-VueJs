<template>
	<div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<Player v-show = "songList.length > 0 && !showDetail"></Player>
		<Toast ref = "alert"></Toast>
	</div>
</template>
<script>
  
  import Player from './components/playerBar'
  
  import { mapGetters } from 'vuex'
  export default {
    components : {
      Player
    },
    data () {
      return {
        toast: false
      }
    },
    computed   : {
      ...mapGetters([
        'songList',
        'showDetail'
      ])
    },
    created    : function () {
      console.log(`created`)
    },
    mounted    : function () {
      console.log(`mounted`)
    },
    activated  : function () {
      console.log(`activated`)
    },
    deactivated: function () {
      console.log(`deactivated`)
    }
  }
</script>

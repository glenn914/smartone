<template>
  <div>
    <iframe class="iframe" scrolling=no src="http://www.dbsa-dream.com/" frameborder="0"></iframe>
  </div>
</template>

<script lang='ts'>
import {Vue, Component} from "vue-property-decorator";

@Component({})
export default class Home extends Vue{

}
</script>

<style>
.iframe{
  height: 100vh;
  width: 100%;
}
</style>
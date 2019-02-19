<template>
<div class="pic">
    <Titre></Titre>
    <choix1></choix1>
</div>
    
</template>

<script>
import choix1 from '@/components/choix1.vue'

export default {
  components: {
    Titre,
    choix1
  }
}
import Titre from '@/components/Titre.vue'
</script>

<style lang="scss" scoped>
.pic{
    background: url("../assets/Break.jpg");
    background-size: cover;
    height: 802px;
    width: auto;
    margin-top: -82px;
    margin-right: -8px;
    margin-left: -8px;
}
</style>

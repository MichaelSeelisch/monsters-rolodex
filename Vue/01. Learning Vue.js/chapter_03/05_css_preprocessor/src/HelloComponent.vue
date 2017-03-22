<template lang="jade"> 
  <h1>{{ msg }}</h1> 
</template> 
 
<style lang="scss" scoped> 
  $col: blue;
  
  h1 { 
    color: $col; 
  } 
</style>

<script> 
  export default { 
    data () { 
      return { 
        msg: 'Hello!' 
      } 
    }
  } 
</script> 
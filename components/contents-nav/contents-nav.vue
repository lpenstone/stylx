<template>
  <div class="">
    <contents-table></contents-table>
  </div>
</template>

<script>
import contentsTable from '../contents-table/contents-table'

export default {
  name: 'contents-table',
  components: {
    'contents-table': contentsTable
  },
  data () {
    return {}
  }
}
</script>

<template>
  <div>{{ readersNumber }} {{ book.title }}</div>
</template>

<script>
  import { ref, reactive } from 'vue'
  import OneFetch from 'one-fetch'

  export default {
    setup() {
      console.log(OneFetch)
      console.log(import('one-fetch'))
      const readersNumber = ref(0)
      const book = reactive({ title: 'Vue 3 Guide' })

      // expose to template
      return {
        readersNumber,
        book
      }
    }
  }
</script>
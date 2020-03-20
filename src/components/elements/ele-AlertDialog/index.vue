<template>
  <v-dialog v-model="dialog" persistent max-width="450">
    <v-card>
      <v-card-title class="headline">Information</v-card-title>
      <v-card-text class="text-xs-left" v-html="message"></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <el-button type="primary" @click="close()">OK</el-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'AlertDialog',
  props: {
    dialog: {
      type: Boolean,
      required: true,
      default: false
    },
    message: {
      type: String
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

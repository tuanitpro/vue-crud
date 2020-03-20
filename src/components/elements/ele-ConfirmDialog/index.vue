<template>
  <v-dialog v-model="dialog" persistent max-width="450">
    <v-card>
      <v-card-title class="headline">Confirm?</v-card-title>
      <v-card-text class="text-xs-left" v-html="message"></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <el-button type="danger" @click="close()">Cancel</el-button>
        <el-button  type="primary" @click="onSubmit()">OK</el-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'ConfirmDialog',
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
    },
    onSubmit() {
      this.$emit('onSubmit')
    }
  }
}
</script>

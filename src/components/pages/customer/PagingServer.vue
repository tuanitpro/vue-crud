<template>
<el-main>
     <div v-if="confirmDialog">
      <ConfirmDialog
        :dialog="confirmDialog"
        :message="confirmMessage"
        @close="closeConfirmDialog()"
        @onSubmit="onSaveChange()"
      />
    </div>
    <div v-if="alertDialog">
      <AlertDialog
        :dialog="alertDialog"
        :message="alertMessage"
        @close="closeOkDialog()"
      />
    </div>
 <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                   <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="editedItem.code" label="Code"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="6">
                    <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.firstName" label="First Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.lastName" label="Last Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field type="email" v-model="editedItem.email" label="Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <el-button type="danger" @click="close">Cancel</el-button>
              <el-button  type="primary" @click="save">OK</el-button>
            </v-card-actions>
          </v-card>
        </v-dialog>
      <div class="body">
        <v-toolbar dense class="toolbar">
            <div class="btn-add">

              <v-icon color="#fff" @click="addNewItem">add</v-icon>

          </div>
          <v-toolbar-title>
            <div class="search-form">
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search here"
                single-line
                hide-details
              ></v-text-field>
            </div>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <div class="checkbox">
            <el-checkbox v-model="isShowByArchived"  name="isShowByArchived"
              id="isShowByArchived" @change="onChangeShowByArchived($event)">Show Archived</el-checkbox>
          </div>
        </v-toolbar>
        <div class="filter"></div>
        <v-data-table
          :must-sort="true"
          :headers="headers"
          :items="dataSource"
          :loading="isLoading()"
          :search="search"
          class="elevation-1"
        >
        <template v-slot:item.actions="{ item }">
            <v-icon

                @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
             <v-icon

                @click="cloneItem(item)"
            >
                mdi-content-copy
            </v-icon>
             <v-icon

                @click="archivedItem(item)"
            >
                mdi-archive-arrow-down
            </v-icon>
             <v-icon

                @click="publishItem(item)"
            >
                mdi-publish
            </v-icon>
            <v-icon

                @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-card-text>
              <span>No data avaliable in table.</span>
            </v-card-text>
          </template>
        </v-data-table>
      </div>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
  </el-main>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';
import {
  GET_LIST_CUSTOMER,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  COPY_CUSTOMER,
  ARCHIVE_CUSTOMER,
  PUBLISH_CUSTOMER
} from '../../../stores/customer/actions/actionTypes';
const ConfirmDialog = () => import('../../elements/ele-ConfirmDialog');
const AlertDialog = () => import('../../elements/ele-AlertDialog');
export default {
  name: 'PagingServer',
  components: {
    ConfirmDialog,
    AlertDialog
  },
  data() {
    return {
      dialog: false,
      confirmDialog: false,
      alertDialog: false,
      alertMessage: '',
      confirmMessage: '',
      search: '',
      pagination: {
        rowsPerPage: 10,
        sortBy: 'code',
        descending: false
      },
      editId: '',
      activeName: 'first',
      productData: {
        id: '',
        product_id: '',
        product_name: '',
        product_price: ''
      },
      eventType: {
        COPY: 'COPY',
        DELETE: 'DELETE',
        ARCHIVED: 'ARCHIVED',
        PUBLISH: 'PUBLISH'
      },
      editedIndex: -1,
      editedItem: {
        id: '',
        code: '',
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
      },
      defaultItem: {
        id: '',
        code: '',
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
      },
      selectedEventType: '',
      isShowCriteriaByOther: false,
      isShowByArchived: false,
      headers: [
        { text: 'Code', align: 'left', value: 'code' },
        { text: 'Username', align: 'left', value: 'username' },
        { text: 'First Name', align: 'left', sortable: true, value: 'firstName' },
        { text: 'Last Name', align: 'left', sortable: true, value: 'lastName' },
        { text: 'Email', align: 'left', value: 'email' },
        { text: 'Phone', align: 'left', value: 'phone' },
        { text: 'Actions', align: 'right', value: 'actions', sortable: false }
      ]
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Customer' : 'Edit Customer'
    },
    dataSource() {
      const data = this.customerDataSource()
      return data.map((item, key) => {
        return {
          id: item.Id,
          code: item.Code,
          username: item.Username,
          firstName: item.FirstName,
          lastName: item.LastName,
          email: item.Email,
          phone: item.Phone
        }
      }
      )
    }
  },
  watch: {
    confirmDialog(val) {
      this.confirmDialog = val;
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.getList({ isShowByArchived: this.isShowByArchived });
    });
  },
  methods: {
    ...mapGetters('customerStore', {
      isLoading: 'isLoading',
      customerDataSource: 'customerDataSource',
      customerModel: 'customerModel',
      responseResult: 'responseResult'
    }),
    ...mapActions('customerStore', {
      getList: GET_LIST_CUSTOMER,
      create: CREATE_CUSTOMER,
      update: UPDATE_CUSTOMER,
      copy: COPY_CUSTOMER,
      publish: PUBLISH_CUSTOMER,
      archive: ARCHIVE_CUSTOMER,
      _delete: DELETE_CUSTOMER
    }),
    handleClick(tab, event) {
      console.log(tab, event);
    },
    formatDate(val) {
      var date = new Date(val)
      return (
        date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
      );
    },
    closeConfirmDialog() {
      this.confirmDialog = false;
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    closeOkDialog() {
      setTimeout(() => {
        this.getList({ isShowByArchived: this.isShowByArchived });
        this.alertDialog = false
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    addNewItem() {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
      this.dialog = true
    },
    editItem(item) {
      this.editedIndex = this.dataSource.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    cloneItem(item) {
      this.selectedEventType = this.eventType.COPY;
      this.editedIndex = this.dataSource.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.confirmMessage =
        'Are you sure you want copy item <b>[' + item.firstName + ']?</b>';
      this.confirmDialog = true;
    },
    deleteItem(item) {
      this.selectedEventType = this.eventType.DELETE;
      this.editedItem = Object.assign({}, item);
      this.confirmMessage =
        'Are you sure you want delete item <b>[' + item.firstName + ']?</b>';
      this.confirmDialog = true;
    },
    archivedItem(item) {
      this.selectedEventType = this.eventType.ARCHIVED;
      this.editedItem = Object.assign({}, item);
      this.confirmMessage =
        'Are you sure you want archive item <b>[' + item.firstName + ']?</b>';
      this.confirmDialog = true;
    },
    publishItem(item) {
      this.selectedEventType = this.eventType.PUBLISH;
      this.editedItem = Object.assign({}, item);
      this.confirmMessage =
        'Are you sure you want publish item <b>[' + item.firstName + ']?</b>';
      this.confirmDialog = true;
    },
    onChangeShowByArchived(event) {
      this.isShowByArchived = event
      this.getList({ isShowByArchived: event });
    },
    save() {
      if (this.editedItem.id === '') {
        this.create({
          options: this.editedItem
        });
        this.alertMessage = 'Create successful.';
      } else {
        this.update({
          options: this.editedItem
        });
        this.alertMessage = 'Update successful.';
      }
      this.close();
      this.alertDialog = true;
    },
    onSaveChange() {
      this.confirmDialog = false;
      switch (this.selectedEventType) {
        case this.eventType.COPY:
          this.copy({ options: { id: this.editedItem.id } })
          this.alertMessage = 'Copy successful.';
          this.alertDialog = true;
          break;
        case this.eventType.DELETE:
          this._delete({ options: this.editedItem.id })
          this.alertMessage = 'Delete successful.';
          this.alertDialog = true;
          break;
        case this.eventType.PUBLISH:
          this.publish({ options: { id: this.editedItem.id } })
          this.alertMessage = 'Publish item successful.';
          this.alertDialog = true;
          break;
        case this.eventType.ARCHIVED:
          this.archive({ options: { id: this.editedItem.id } })
          this.alertMessage = 'Archive successful.';
          this.alertDialog = true;
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "customer.scss";
</style>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useBaseStoreWithOut } from '@/stores/module/base'
import type { instanceDataType } from '@/views/settings/schema'
import InstanceEdit from '@/views/settings/InstanceEdit.vue'

const baseStore = useBaseStoreWithOut()
const pulsarInstance = baseStore.pulsarInstance

const tableState = reactive({
  columns: [
    { colKey: 'row-select', type: 'multiple', width: 50, align: 'center', fixed: 'left' },
    { colKey: 'instance_name', title: '实例名称', align: 'center', fixed: 'left' },
    { colKey: 'instance_url', title: '连接地址', align: 'center' },
    { colKey: 'instance_port', title: '连接端口', align: 'center' },
    { colKey: 'auth_username', title: '用户名', align: 'center' },
    { colKey: 'auth_password', title: '密码', align: 'center' },
    { colKey: 'instance_status', title: '状态', align: 'center' },
    { colKey: 'tag', title: '标签', align: 'center' },
    { colKey: 'description', title: '描述', align: 'center', width: 200 },
    { colKey: 'action', title: '操作', align: 'center', width: 200, fixed: 'right' }
  ],
  loading: false,
  selectedRowKeys: [],
  activeRow: false,
  selectOnRowClick: true
})

const reHandleSelectChange = (value: any, ctx: instanceDataType) => {
  tableState.selectedRowKeys = value
  console.log(value, ctx)
}

const editDialog = {
  visible: ref<boolean>(false),
  instanceData: reactive<instanceDataType>({
    instance_name: '',
    instance_url: '',
    instance_port: 6650,
    auth_username: '',
    auth_password: '',
    instance_status: '',
    tag: '',
    description: ''
  }),
  onEdit(rowIndex?: number) {
    if (rowIndex !== undefined) {
      this.instanceData = Object.assign({}, this.instanceList[rowIndex])
    }
    this.visible.value = true
  },
  onConfirmAnother() {
    baseStore.createInstance(this.instanceData)
    this.visible.value = false
  },
  onCancel() {
    this.instanceData.instance_name = ''
    this.instanceData.instance_url = ''
    this.instanceData.instance_port = 6650
    this.instanceData.auth_username = ''
    this.instanceData.auth_password = ''
    this.instanceData.instance_status = ''
    this.instanceData.tag = ''
    this.instanceData.description = ''
  }
}
</script>

<template>
  <div
    class="full flex-base base-main"
    style="flex-direction: column; padding: var(--td-comp-paddingTB-xl) var(--td-comp-paddingLR-xl)"
  >
    <div
      class="full base-main"
      style="
        background-color: #fff;
        padding: var(--td-comp-paddingTB-xl) var(--td-comp-paddingLR-xl);
      "
    >
      <t-space style="height: 32px; margin-bottom: 1rem">
        <t-button style="margin-right: 0.5rem" @click="editDialog.onEdit()">
          <template #icon>
            <t-icon name="plus" />
          </template>
          注册实例
        </t-button>
        <t-button theme="success">
          <template #icon>
            <t-icon name="refresh" />
            连通性测试
          </template>
        </t-button>
      </t-space>
      <!--      </div>-->
      <t-table
        row-key="id"
        :columns="tableState.columns"
        :loading="tableState.loading"
        style="height: calc(100% - 32px - 1rem)"
        :data="pulsarInstance.instanceList"
        :selected-row-keys="tableState.selectedRowKeys"
        :active-row-type="tableState.activeRow ? 'single' : undefined"
        :select-on-row-click="tableState.selectOnRowClick"
        @select-change="reHandleSelectChange"
      >
        <template #action="{ row }">
          <t-space>
            <t-button variant="text" theme="primary" @click="editDialog.onEdit(row)">
              <template #icon>
                <t-icon name="edit" />
              </template>
              编辑
            </t-button>
            <t-button variant="text" theme="danger">
              <template #icon>
                <t-icon name="delete" />
              </template>
              删除
            </t-button>
          </t-space>
        </template>
      </t-table>
    </div>
  </div>
  <t-dialog
    v-model:visible="editDialog.visible.value"
    header="对话框标题"
    width="40%"
    :confirm-on-enter="true"
    :on-cancel="() => editDialog.onCancel()"
    :on-confirm="() => editDialog.onConfirmAnother()"
  >
    <InstanceEdit v-model="editDialog.instanceData" />
  </t-dialog>
</template>

<style scoped lang="scss"></style>

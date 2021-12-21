<template>
  <el-form
    ref="ruleForm"
    :model="state.ruleForms"
    :rules="state.rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="state.ruleForms.name" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="选项" prop="region">
      <el-select v-model="state.ruleForms.region" placeholder="请选择">
        <el-option label="选项1" value="shanghai"></el-option>
        <el-option label="选项2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            v-model="state.ruleForms.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            v-model="state.ruleForms.date2"
            placeholder="Pick a time"
            style="width: 100%"
          ></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="是否" prop="delivery">
      <el-switch v-model="state.ruleForms.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="类型" prop="type">
      <el-checkbox-group v-model="state.ruleForms.type">
        <el-checkbox label="Online activities" name="type"></el-checkbox>
        <el-checkbox label="Promotion activities" name="type"></el-checkbox>
        <el-checkbox label="Offline activities" name="type"></el-checkbox>
        <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="资源" prop="resource">
      <el-radio-group v-model="state.ruleForms.resource">
        <el-radio label="Sponsorship"></el-radio>
        <el-radio label="Venue"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="多文本框" prop="desc">
      <el-input v-model="state.ruleForms.desc" type="textarea"></el-input>
    </el-form-item>
    <el-form-item required label="商品主图" prop="goodsCoverImg">
      <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <el-icon><plus /></el-icon>
      </el-upload>
      <el-dialog v-model="dialogObj.dialogVisible">
        <img class="dialog-img" width="100%" :src="dialogObj.dialogImageUrl" alt="" />
      </el-dialog>
    </el-form-item>
    <el-form-item label="详情内容">
      <WangEditor />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'
import WangEditor from '@/components/WangEditor.vue'

const ruleForm = ref(null)
const state = reactive({
  ruleForms: {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: 'Sponsorship',
    desc: ''
  },
  rules: {
    name: [
      {
        required: true,
        message: 'Please input Activity name',
        trigger: 'blur'
      },
      {
        min: 3,
        max: 5,
        message: 'Length should be 3 to 5',
        trigger: 'blur'
      }
    ],
    region: [
      {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change'
      }
    ],
    date1: [
      {
        type: 'date',
        required: true,
        message: 'Please pick a date',
        trigger: 'change'
      }
    ],
    date2: [
      {
        type: 'date',
        required: true,
        message: 'Please pick a time',
        trigger: 'change'
      }
    ],
    type: [
      {
        type: 'array',
        required: true,
        message: 'Please select at least one activity type',
        trigger: 'change'
      }
    ],
    resource: [
      {
        required: true,
        message: 'Please select activity resource',
        trigger: 'change'
      }
    ],
    desc: [
      {
        required: true,
        message: 'Please input activity form',
        trigger: 'blur'
      }
    ]
  },
  dialogObj: {
    dialogImageUrl: '',
    dialogVisible: false,
    disabled: false
  }
})

const handleRemove = (file: any, fileList: any) => {
  console.log(file, fileList)
}
const handlePictureCardPreview = (file: any) => {
  state.dialogObj.dialogImageUrl = file.url
  state.dialogObj.dialogVisible = true
}
/* 提交数据 */
const submitForm = () => {
  ;(ruleForm as any).value.validate((valid: any) => {
    if (valid) {
      alert('submit!')
      console.log(state.ruleForms.name)
      // 调用接口
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

const { dialogObj } = toRefs(state)
</script>

<style lang="less" scoped>
.dialog-img {
  width: 100%;
  height: 100%;
}
</style>

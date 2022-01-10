<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      :ref="ruleForm"
      label-width="130px"
      class="demo-ruleForm"
    >
      <el-form-item label="Title" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="Thumbnail link" prop="thumbnail">
        <el-input v-model="ruleForm.thumbnail"></el-input>
      </el-form-item>
      <el-form-item label="Content" prop="content">
        <el-input type="textarea" v-model="ruleForm.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleForm)"
          ><slot
        /></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["inputTitle", "inputThumbnail", "inputContent"],
  data() {
    return {
      ruleForm: {
        title: this.inputTitle,
        thumbnail: this.inputThumbnail,
        content: this.inputContent,
      },
      rules: {
        title: [
          {
            required: true,
            message: "Please input title!",
            trigger: "blur",
          },
        ],
        thumbnail: [
          {
            required: true,
            message: "Please input thumbnail link!",
            trigger: "blur",
          },
        ],
        content: [
          {
            required: true,
            message: "Please input content!",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('onsubmit', this.ruleForm)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

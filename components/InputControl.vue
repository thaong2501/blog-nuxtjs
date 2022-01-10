<template>
  <div class="container">
    <el-form-item :label="label" :prop="prop" v-if="type === 'input'">
      <el-input v-model="ruleForm.text"></el-input>
    </el-form-item>
    <el-form-item :label="label" :prop="prop" v-if="type === 'textarea'">
      <el-input type="textarea" v-model="ruleForm.textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleForm)"
        ><slot
      /></el-button>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: ["type", "label", "prop", "textInput", "textareaInput"],
  data() {
    return {
      ruleForm: {
        input: this.textInput,
        textarea: this.textareaInput,
      },
      rules: {
        input: [
          {
            required: true,
            message: "Please input this field!",
            trigger: "blur",
          },
        ],
        textarea: [
          {
            required: true,
            message: "Please input this field!",
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
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

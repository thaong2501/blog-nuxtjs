<template>
  <div class="mb-12">
    <CommonInput controlType="input" type="text" :value="formData.title" v-model="formData.title">Title</CommonInput>
    <CommonInput controlType="input" type="text" :value="formData.thumbnail" v-model="formData.thumbnail">Thumbnail Link</CommonInput>
    <CommonInput controlType="texarea" :value="formData.content" v-model="formData.content">Content</CommonInput>
    <div class="w-100 text-center">
      <CommonButton
        bg="bg-emerald-600"
        text-color="text-slate-50"
        hover="hover:opacity-90"
        @onclick="submitForm"
        ><slot />
      </CommonButton>
    </div>
  </div>
</template>

<script>
export default {
  props: ["inputTitle", "inputThumbnail", "inputContent"],
  data() {
    return {
      formData: {
        title: this.inputTitle,
        thumbnail: this.inputThumbnail,
        content: this.inputContent,
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("onsubmit", this.formData);
    },
  },
};
</script>

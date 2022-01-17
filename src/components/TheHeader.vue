<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-slate-50 shadow-md">
    <div class="md:container md:mx-auto flex items-center py-4 px-5">
      <nuxt-link
        to="/"
        class="text-center block w-full md:inline md:w-fit font-medium text-xl"
        >joonthego</nuxt-link
      >
      <div
        :class="{ dBlock: isMenuOpen }"
        class="hidden md:hidden bg-gray-500/[.6] fixed top-0 right-0 bottom-0 left-0 cursor-pointer"
        @click="isMenuOpen = false"
      ></div>
      <div
        :class="{ dBlock: isMenuOpen }"
        class="header-mobile md:flex md:w-full"
      >
        <i
          class="fas fa-times md:hidden block w-100 text-right text-4xl cursor-pointer"
          @click="isMenuOpen = false"
        ></i>
        <ul
          class="menu md:flex md:items-center md:justify-center md:gap-6 grow" @click="isMenuOpen = false"
        >
          <li>
            <nuxt-link to="/" class="hover:font-semibold inline-block w-full">HOME</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog" class="hover:font-semibold inline-block w-full">BLOG</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/create-post" class="hover:font-semibold inline-block w-full"
              >CREATE POST</nuxt-link
            >
          </li>
        </ul>
        <div class="header-action md:block"  @click="isMenuOpen = false">
          <nuxt-link to="/register">
            <CommonButton
              bg="bg-emerald-600"
              text-color="text-slate-50"
              hover="hover:opacity-90"
            >
              SIGN IN
            </CommonButton>
          </nuxt-link>
          <nuxt-link to="/login">
            <CommonButton
              bg="bg-neutral-400"
              text-color="text-slate-50"
              hover="hover:opacity-90"
            >
              LOG IN
            </CommonButton>
          </nuxt-link>
          <nuxt-link to="/">
            <CommonButton
              bg="bg-neutral-400"
              text-color="text-slate-50"
              hover="hover:opacity-90"
            >
              LOG OUT
            </CommonButton>
          </nuxt-link>
        </div>
      </div>
      <i
        class="fas fa-bars md:hidden text-4xl cursor-pointer"
        @click="isMenuOpen = !isMenuOpen"
      ></i>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.nuxt-link-exact-active.nuxt-link-active {
  font-weight: 500;
}
@media (max-width: 769px) {
  .dBlock {
    display: block !important;
  }
  .header-mobile {
    display: none;
    width: 70%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    padding: 20px;
    li {
      padding-bottom: 15px;
    }
    .header-action {
      display: flex;
      flex-direction: column;
      width: 100%;
      button {
        width: 100%;
        margin: 5px 0;
      }
    }
  }
}
</style>

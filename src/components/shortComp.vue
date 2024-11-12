<template lang="">
  <div class="p-2 cursor-pointer">
    <div class="card card-compact">
      <figure>
        <img
          class="h-80"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          style="object-fit: cover"
        />
      </figure>
      <div class="p-0 pt-2">
        <p class="text-lg font-bold">{{ videoDetails.title }}</p>
      </div>
      <div class="text-sm">
        {{ videoDetails.totalViews }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    videoDetails: Object,
  },
};
</script>
<style lang=""></style>

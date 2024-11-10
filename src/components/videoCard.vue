<template lang="">
  <div class="p-2 cursor-pointer">
    <div class="card card-compact">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div class="card-body" style="padding: 0px !important">
        <div class="grid grid-cols-12 items-center">
          <div class="avatar col-span-2">
            <div class="w-8 h-8 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <p class="col-span-8 text-lg font-bold">{{ videoDetails.title }}</p>
          <div class="col-span-2 flex justify-end">
            <button class="btn btn-ghost btn-circle">
              <span class="material-symbols-outlined text-right text-white">
                more_vert
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 text-sm">
        <div class="col-span-2"></div>
        <div class="col-span-8 grid grid-rows-2">
          <div>{{ videoDetails.channelName }}</div>
          <div>
            {{ videoDetails.totalViews + " | " + videoDetails.timeUploaded }}
          </div>
        </div>
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

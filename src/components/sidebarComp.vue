<template lang="">
  <div class="text-white">
    <ul class="menu bg-base-200 rounded-box w-56">
      <li v-for="(item, index) in navList" :key="index">
        <a>
          <span class="material-symbols-outlined text-right text-white">
            {{ item.icon }}
          </span>
          {{ item.name }}
        </a>
      </li>
      <div class="divider"></div>
      <li>
        <span class="text-lg font-bold">
          You
          <span class="material-symbols-outlined text-white">
            chevron_right
          </span></span
        >
      </li>
      <li v-for="(item, index) in yourList" :key="index">
        <a>
          <span class="material-symbols-outlined text-right text-white">
            {{ item.icon }}
          </span>
          {{ item.name }}
        </a>
      </li>
      <div class="divider"></div>
      <li>
        <span class="text-lg font-bold">
          Subscriptions
          <span class="material-symbols-outlined text-white">
            chevron_right
          </span></span
        >
      </li>
      <li v-for="(item, index) in limitedSubscriptionList" :key="index">
        <a>
          <div class="avatar">
            <div class="w-8 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          {{ item.name }}
        </a>
      </li>
      <li @click="isShowMore = !isShowMore">
        <a>
          <span class="material-symbols-outlined text-right text-white">
            {{ isShowMore ? "keyboard_arrow_up" : "keyboard_arrow_down" }}
          </span>
          {{ isShowMore ? "Show less" : "Show more" }}
        </a>
      </li>
      <div class="divider"></div>
      <li>
        <span class="text-lg font-bold"> Explore </span>
      </li>

      <li v-for="(item, index) in exploreList" :key="index">
        <a>
          <span class="material-symbols-outlined text-right text-white">
            {{ item.icon }}
          </span>
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowMore: false,
      navList: [
        { name: "Home", link: "/", icon: "home" },
        { name: "Short", link: "/short", icon: "smart_display" },
        { name: "Subscription", link: "/subscription", icon: "subscriptions" },
      ],
      yourList: [
        { name: "History", link: "/", icon: "history" },
        { name: "Playlist", link: "/short", icon: "playlist_play" },
        { name: "Your Videos", link: "/subscription", icon: "smart_display" },
        { name: "Watch Later", link: "/subscription", icon: "schedule" },
        { name: "Liked Videos", link: "/subscription", icon: "thumb_up" },
      ],
      subscriptionList: [
        { name: "Channel 1", link: "/channel1", icon: "subscriptions" },
        { name: "Channel 2", link: "/channel2", icon: "subscriptions" },
        { name: "Channel 3", link: "/channel3", icon: "subscriptions" },
        { name: "Channel 4", link: "/channel4", icon: "subscriptions" },
        { name: "Channel 5", link: "/channel5", icon: "subscriptions" },
        { name: "Channel 6", link: "/channel6", icon: "subscriptions" },
        { name: "Channel 7", link: "/channel7", icon: "subscriptions" },
        { name: "Channel 8", link: "/channel8", icon: "subscriptions" },
        { name: "Channel 9", link: "/channel9", icon: "subscriptions" },
        { name: "Channel 10", link: "/channel10", icon: "subscriptions" },
      ],
      exploreList: [
        { name: "Trending", link: "/", icon: "local_fire_department" },
        { name: "Music", link: "/short", icon: "headphones" },
        { name: "Gaming", link: "/subscription", icon: "sports_esports" },
        { name: "News", link: "/subscription", icon: "newspaper" },
        { name: "Sports", link: "/subscription", icon: "sports_soccer" },
      ],
    };
  },
  computed: {
    limitedSubscriptionList() {
      if (this.isShowMore) return this.subscriptionList;
      return this.subscriptionList.slice(0, 5);
    },
  },
};
</script>
<style lang=""></style>

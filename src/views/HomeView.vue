<template lang="">
  <div class="w-full flex gap-2 justify-items-stretch">
    <div class="flex gap-2 overflow-x-auto">
      <button
        v-for="(item, index) in tags"
        :key="index"
        class="btn bg-neutral-700 hover:bg-neutral-600"
      >
        {{ item }}
      </button>
    </div>
    <button class="btn btn-ghost btn-circle justify-self-end">
      <span class="material-symbols-outlined text-white"> chevron_right </span>
    </button>
  </div>
  <div class="grid grid-cols-5">
    <videoCard
      :videoDetails="item"
      v-for="(item, index) in videos"
      :key="index"
    />
  </div>
  <div class="items-center">
    <span class="material-symbols-outlined text-right text-white">
      smart_display
    </span>
    <span class="text-2xl font-bold"> Shorts</span>
  </div>
</template>
<script>
import videoCard from "../components/videoCard.vue";
export default {
  components: {
    videoCard,
  },
  data() {
    return {
      tags: [
        "All",
        "New To You",
        "React",
        "Angular",
        "Vue",
        "JavaScript",
        "Python",
        "Django",
        "Flask",

        "Spring",
        "Kotlin",
        "Swift",
        "Android",
        "Machine Learning",
        "Data Science",
        "Gaming",
        "Cooking",
        "Music",
      ],
      videos: [
        {
          title: "Introduction to React",
          channelName: "Tech Guru",
          totalViews: "1M views",
          timeUploaded: "1 week ago",
        },
        {
          title: "Mastering Angular",
          channelName: "Code Academy",
          totalViews: "500K views",
          timeUploaded: "2 weeks ago",
        },
        {
          title: "Vue.js for Beginners",
          channelName: "Vue Mastery",
          totalViews: "750K views",
          timeUploaded: "3 days ago",
        },
        {
          title: "Advanced JavaScript",
          channelName: "JS Pro",
          totalViews: "2M views",
          timeUploaded: "1 month ago",
        },
        {
          title: "CSS Grid Layout",
          channelName: "Design School",
          totalViews: "300K views",
          timeUploaded: "5 days ago",
        },
        {
          title: "HTML5 Basics",
          channelName: "Web Dev Simplified",
          totalViews: "1.2M views",
          timeUploaded: "2 months ago",
        },
        {
          title: "Node.js Crash Course",
          channelName: "Node Ninja",
          totalViews: "800K views",
          timeUploaded: "1 week ago",
        },
        {
          title: "Python for Data Science",
          channelName: "Data Academy",
          totalViews: "1.5M views",
          timeUploaded: "3 weeks ago",
        },
        {
          title: "Django Tutorial",
          channelName: "Python Master",
          totalViews: "600K views",
          timeUploaded: "4 days ago",
        },
        {
          title: "Flask vs Django",
          channelName: "Tech Talk",
          totalViews: "400K views",
          timeUploaded: "1 day ago",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>

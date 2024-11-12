<template lang="">
  <div>{{ currentVideo }}</div>
</template>
<script>
export default {
  data() {
    return {
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
      currentVideo: {},
    };
  },
  mounted() {
    this.currentVideo = this.videos[this.$route.params.id];
  },
};
</script>
<style lang=""></style>

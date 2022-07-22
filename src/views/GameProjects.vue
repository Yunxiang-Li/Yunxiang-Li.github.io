<template>
  <div>
    <h1>Game Projects </h1>

    <div style="margin-bottom: 30px; font-size: 1.5em;">
      The following are some game projects I've made recently.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px; font-size: 1.5em;">
      There is more to see on <a target="_blank" href="https://github.com/Yunxiang-Li">my github</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>

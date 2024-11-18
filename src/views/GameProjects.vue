<template>
  <div>
    <h1>Game Projects </h1>

    <div style="margin-bottom: 30px; font-size: 1.5em;">
      The following are the five most recent game projects I have developed.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px; font-size: 1.5em;">
      You can find more of my previous projects, in addition to the five listed above, on my <a target="_blank" href="https://github.com/Yunxiang-Li">Github</a>
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

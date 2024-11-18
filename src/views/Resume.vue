<template>
  <div>
    <h1>My Experience</h1>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Software Engineer( Gameplay/AI ) - Visual Concepts</h3>
      <h4>November 2023 - Present( Novato, California, United States )</h4>
      <h3>NBA 2K25</h3>

      <h3>Software Engineer( Bullpen ) - Visual Concepts</h3>
      <h4>January 2023 - November 2023( Novato, California, United States )</h4>
      <h3>NBA 2K24</h3>

      <h3>Associate C++/Unity Engineer - Storm Flag Games</h3>
      <h4>July 2021 - December 2021( Dedham, Massachusetts, United States )</h4>

      <div class="paragraph">
            <ul>
            <li>Developed game features for a classic retro fantasy MMORPG, including account appeal login and minimap highlight tiles, improving player experience across Windows, OSX, and Android platforms using C++, Java, and Python.</li>
            <li>Enhanced game testability by creating features to track game performance, save logs, and implement debug macros for recording and playback, increasing QA efficiency and reducing issue identification time.</li>
            <li>Resolved critical bugs such as incorrect player icon color in chat, missing entity highlights, and Android back button issues, ensuring a smooth and timely game environment.</li>
            <li>Improved version control and project management proficiency by using Git workflows and tools like Bitbucket, JIRA, and Confluence, enhancing team collaboration and development processes.</li>
            </ul>
      </div>

      <h2>Education</h2>

      <h3>Northeastern University( 2019 - 2022 )</h3>
      <h4>Master of Science - MS, Computer Science</h4>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 1200px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>
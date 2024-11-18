<template>
  <div style="margin-bottom: 80px;">
    <h1>Welcome!</h1>

    <div class="paragraph">
      <div>
        I am <strong>Yunxiang Li</strong>, a motivated gameplay programmer currently working as a <strong>Software Engineer</strong> at Visual Concepts.
        I specialize in creating engaging player experiences and constantly strive to expand my skill set.
      </div>

      <div style="margin-top: 20px;">
        Outside of my full-time role, I enjoy exploring 2D painting and 3D modeling to enhance my artistic perspective and creativity.
        My favorite game genre is <strong>visual novels</strong>, and I'm deeply inspired by the narrative and design of <em>Danganronpa 2: Goodbye Despair</em>.
      </div>

      <div style="margin-top: 20px;">Feel free to reach out to me <router-link to="/contact"> here </router-link> if you'd like to connect!</div>
    </div>

    <div class="photo">
      <img src="img/avatar.jpg" alt="Avatar of Yunxiang Li"/> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 1100px;
  margin-bottom: 20px;
  font-size: 24px;
}

.photo {
  margin-top: -10px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>
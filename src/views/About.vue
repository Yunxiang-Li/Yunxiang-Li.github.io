<template>
  <div style="margin-bottom: 80px;">
    <h1>Welcome!</h1>

    <div class="paragraph">
      <div>
        This is <strong>Yunxiang Li</strong>, a motivated junior game programmer.
        Besides, I love discussing, designing and developing video games.
        My favoriate game genre is visual novel and I love <strong>Danganronpa 2: Goodbye Despair</strong> the most.<br/>
      </div>

      <div style="margin-top: 20px;">I'm currently an <strong>incoming Software Engineer</strong> of Visual Concepts. You can reach me from <router-link to="/contact"> here </router-link>.</div>
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
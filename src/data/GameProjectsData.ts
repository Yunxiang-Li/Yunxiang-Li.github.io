import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "2D Shooter(SDL2)", "img/projects/SDL2_Shooter/SDL2_Shooter_Thumbnail.jpg", 
    `
    <div class="paragraph">
        <header>
        <h2>Overview</h2>
        </header>
     <strong>SDL2 Shooter</strong> is a simple 2D space shooter game demo created by pure <strong>C</strong> language and
     <strong>SDL(Simple DirectMedia Layer)</strong> with <strong>Visual Studio</strong>.
     <br/>You can learn more about project details and source code from <a target="_blank" href="https://github.com/Yunxiang-Li/SDL2_simple_2D_shooter">related github repo</a>.

    </div>
    <div class="paragraph center"> 
        <iframe class="youtube" src="https://www.youtube.com/embed/tdR9VGLMhK8" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <header>
        <h2>Main Features</h2>
        </header>
        <ul>
        <li>Create multiple custom linked lists to update each spaceship, bullet, explosion, debris and point pod </li>
        <li>Customize explosion effect made by ship debris</li>
        <li>Apply basic AI on enemies to always aim at the player when firing bullets</li>
        <li>Enable players to fire bullets to destroy enemies and collide with released point pods to gain scores</li>
        <li>Implement highscore table which can be saved and loaded as a txt file</li>
        <li>Add switch scene feature between titlescreen and highscore table</li>
        <li>Use SDL_image to render sprites, utilize SDL_mixer to play sound effects and music</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/SDL2_Shooter/SDL2_Shooter_GIF.gif" alt="SDL2 Shooter GIF" />
        <img class="pc-screenshot" src="img/projects/SDL2_Shooter/SDL2_Shooter_Screenshot_One.jpg" alt="SDL2 Shooter Screenshot One" />
        <img class="pc-screenshot" src="img/projects/SDL2_Shooter/SDL2_Shooter_Screenshot_Two.jpg" alt="SDL2 Shooter Screenshot Two" />
        <img class="pc-screenshot" src="img/projects/SDL2_Shooter/SDL2_Shooter_Screenshot_Three.jpg" alt="SDL2 Shooter Screenshot Three" />
    </div>
    `, "#23bd69", true, true),
    new ProjectData("project-2", "2D City Builder(SFML)", "img/projects/SFML_CityBuilder/SFML_CityBuilder_thumbnail.jpg", `
    <div class="paragraph">
        <strong>SFML City Builder</strong> is a simple 2D isometric city building game demo created by <strong>C++</strong> language and
        <strong>SFML(Simple and Fast Multimedia Library)</strong> with <strong>CLion</strong>.
        <br/>You can learn more about project details and source code from <a target="_blank" href="https://github.com/Yunxiang-Li/SFML_Isometric_CityBuilder/blob/main/README.md">related github repo</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/AVJ8JVTjeds" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <header>
        <h2>Main Features</h2>
        </header>
        <ul>
        <li>Use Virtual base class and inheritance to implement different game state classes </li>
        <li>Apply std::stack based finite state machine to handle multiple game states</li>
        <li>Create the TextureManager class with smart pointers and follow Singleton pattern</li>
        <li>Make use of enum class and a seperate AnimationHandler class to create all 7 types of tile objects' animation</li>
        <li>Highscore table can be saved and loaded as a txt file</li>
        <li>Utilize DFS and isometric structure simulated by 3X3 tile objects to split the map as multiple distinct regions</li>
        <li>Implement Gui system with seperate Gui Entry, Gui Style and main Gui components</li>
        <li>Instrument game map data which can be saved and loaded as a dat file</li>
        </ul>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_one.jpg" alt="SFML CityBuilder Screenshot one" />
    <img class="pc-screenshot" src="img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_two.jpg" alt="SFML CityBuilder Screenshot two" />
    <img class="pc-screenshot" src="img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_three.jpg" alt="SFML CityBuilder Screenshot three" />
    <img class="pc-screenshot" src="img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_four.jpg" alt="SFML CityBuilder Screenshot four" />
    </div>
    `, "#5a78af", true, true),
    new ProjectData("project-3", "Drawing Overload", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        <strong>Drawing Overload</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@miphotography">Miesha Maiden</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "Eugeneable", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "Cloud Drew Land", "img/projects/project-5-icon.png", `
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    </div>`, "#e48246")
];
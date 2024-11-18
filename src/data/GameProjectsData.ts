import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Unreal5 GAS(Ongoing)", "img/projects/work-in-progress.png", 
        `
        <div class="paragraph">
            <header>
            <h2>Overview</h2>
            </header>
         <strong>Unreal5 GAS</strong> is a multiplayer RPG game project created by Unreal Engine 5 to learn about Gameplay Ability System (GAS) with <strong>JetBrains Rider</strong>.
         <br/>You can learn more about project details and source code from <a target="_blank" href="https://github.com/Yunxiang-Li/Unreal5_GAS">related github repo</a>.
        
         </div>

        <div class="paragraph">
            <header>
            <h2>Main Features</h2>
            </header>
            <ul>
            <li>Ongoing </li>
            </ul>
        </div>
    
        <div class="paragraph center">
            <img class="pc-screenshot" src="ongoing-projects.gif" alt="ongoing_1" />
            <img class="pc-screenshot" src="ongoing-projects.gif" alt="ongoing_2" />
        </div>
        `, "#23bd69", true, true),
    new ProjectData("project-2", "Unreal5 Game Programming Pattern", "img/projects/work-in-progress.png", 
        `
        <div class="paragraph">
            <header>
            <h2>Overview</h2>
            </header>
         This is a project about the implementation of multiple game programming patterns within Unreal Engine 5 with <strong>JetBrains Rider</strong>.
         <br/>You can learn more about project details and source code from <a target="_blank" href="https://github.com/Yunxiang-Li/Unreal5_GameProgrammingPatterns">related github repo</a>.
    
        </div>
    
        <div class="paragraph">
            <header>
            <h2>Main Features</h2>
            </header>
            <ul>
            <li>Ongoing </li>
            </ul>
        </div>
    
       <div class="paragraph center">
            <img class="pc-screenshot" src="ongoing-projects.gif" alt="ongoing_3" />
            <img class="pc-screenshot" src="ongoing-projects.gif" alt="ongoing_4" />
        </div>
        `, "#23bd69", true, true),
    new ProjectData("project-3", "2D Stationary Portal (C++/Raylib)", "img/projects/work-in-progress.png", 
    `
    <div class="paragraph">
        <header>
        <h2>Overview</h2>
        </header>
     This is an simple implementation of 2D Stationary Portal with game feels, created by <strong>C++</strong> language and <strong>Raylib</strong> with <strong>CLion</strong>.
     <br/>You can learn more about project details and source code from <a target="_blank" href="https://github.com/Yunxiang-Li/2D_Stationary_Portal">related github repo</a>.

    </div>

    <div class="paragraph">
        <header>
        <h2>Main Features</h2>
        </header>
        <ul>
        <li>Ongoing </li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="ongoing-projects.gif" alt="ongoing_5" />
        <img class="pc-screenshot" src="ongoing-projects.gif" alt="ongoing_6" />
    </div>
    `, "#23bd69", true, true),
    new ProjectData("project-4", "2D Shooter(C++/SDL2)", "img/projects/SDL2_Shooter/SDL2_Shooter_Thumbnail.jpg", 
        `
        <div class="paragraph">
            <header>
            <h2>Overview</h2>
            </header>
         <strong>2D Shooter</strong> is a simple 2D space shooter game demo created by pure <strong>C</strong> language and
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
    new ProjectData("project-5", "2D City Builder(C++/SFML)", "img/projects/SFML_CityBuilder/SFML_CityBuilder_thumbnail.jpg", `
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
        <li>Apply std::stack based finite state machine to handle multiple game states</li>
        <li>Use Virtual base class and inheritance to implement different game state classes </li>
        <li>Create the TextureManager class with smart pointers and follow Singleton pattern</li>
        <li>Make use of enum class and a seperate AnimationHandler class to create all 7 types of tile objects' animation</li>
        <li>Utilize DFS and isometric structure simulated by 3X3 tile objects to split the map as multiple distinct regions</li>
        <li>Implement Gui system with seperate Gui Entry, Gui Style and main Gui components</li>
        <li>Perform game map data as a dat file which can be saved and loaded</li>
        </ul>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_one.jpg" alt="SFML CityBuilder Screenshot one" />
    <img class="pc-screenshot" src="img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_two.jpg" alt="SFML CityBuilder Screenshot two" />
    <img class="pc-screenshot" src="img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_three.jpg" alt="SFML CityBuilder Screenshot three" />
    <img class="pc-screenshot" src="img/projects/SFML_CityBuilder/SFML_CityBuilder_Screenshot_four.jpg" alt="SFML CityBuilder Screenshot four" />
    </div>
    `, "#5a78af", true, true),
];
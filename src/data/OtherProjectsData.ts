import ProjectData from '@/data/ProjectData.ts'

export default [
  new ProjectData("project-5", "NBA 2K25", "img/projects/NBA2K/NBA2K25.png", `
    <div class="paragraph">
      <p>
        <strong>NBA 2K25</strong> is a 2024 sports game developed by Visual Concepts and published by 2K, based on the National Basketball Association (NBA). It is the 26th installment in the NBA 2K series and is the successor to NBA 2K24 (2023).
        The game was released for Nintendo Switch, PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S on September 6, 2024.
      </p>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/qx0A921z8mA" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <header>
        <h2>Main Responsibility</h2>
        </header>
        <ul>
          <li>Led the development and optimization of the Force Help and Recover system, enabled defenders to dynamically invoke AI for automatic defense behaviors and return control to the user. This significantly enhanced the strategic depth and intelligence of defensive actions, improving the player’s experience.</li>
          <li>Designed and implemented the new defensive set system for NBA 2K25, enabled AI to effectively manage scenarios with more defenders than offenders. This improvement resulted in better team coordination and more natural defensive behaviors, particularly in complex game situations.</li>
          <li>Refined defensive AI behavior by improving wait and delay mechanics, ensured smooth player control without interrupting gameplay.</li>
          <li>Enhanced Zone Defense AI by integrating Shade Zone movement logic, improved positioning and reactions for more responsive defensive play.</li>
          <li>Implemented adaptive difficulty scaling, introduced flags to adjust AI behavior based on player performance, ensured balanced and engaging gameplay.</li>
          <li>Optimized defensive help triggers to anticipate possession changes and respond more intelligently to offensive turnovers during critical moments.</li>
        </ul>
    </div>
    `, "##Ff0000", true, true),
  new ProjectData("project-6", "NBA 2K24", "img/projects/NBA2K/NBA2K24.png", `
    <div class="paragraph">
      <p>
        <strong>NBA 2K24</strong> is a 2023 basketball video game developed by Visual Concepts Austin and published by 2K, based on the National Basketball Association (NBA).
        It is the 25th installment in the NBA 2K franchise, the successor to NBA 2K23 and the predecessor to NBA 2K25.
        The game was released on September 8, 2023, for Microsoft Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One and Xbox Series X/S. The NBA 2K24 Arcade Edition was released on Apple Arcade on October 24, 2023.
      </p>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/GITzbGIiNKg" frameborder="0" allowfullscreen></iframe>
    </div>
  
    <div class="paragraph">
        <header>
        <h2>Main Responsibility</h2>
        </header>
        <ul>
          <li>Collaborated across multiple teams to gain comprehensive experience in game development and software engineering, contributed to NBA 2K24's diverse development efforts.</li>
          <li>Enhanced gameplay communication systems for both offensive and defensive teams by implementing event modifications and hint text displays, improved designer workflows for testing and refining features.</li>
          <li>Contributed to in-season tournament feature by tracking team progress and scheduling additional matches for special cases, ensured a seamless player experience.</li>
          <li>Automated build tracking with Jenkins, created Python scripts and Groovy-based configurations, resulted in improved workflow efficiency through automated email notifications.</li>
          <li>Improved internal tools by implementing file history comparison, object grouping, and multi-threaded directory scanning, streamlining file management and search functions.</li>
        </ul>
    </div>
    `, "#Ffff00", true, true),
];
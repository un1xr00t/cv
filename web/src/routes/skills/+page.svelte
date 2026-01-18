<script>
	import '../../styles/resume-main.scss';
	import '../../styles/other-pages.scss';

  import Language from '../../components/Language.svelte';
  export let data = {};
 
  const techStack = data.techStack;
  
  const softSkills = [
  { skill: 'Analytical Thinking', desc: 'Strong ability to analyze complex security incidents, identify root causes, and develop effective remediation strategies.' },
  { skill: 'Problem Solving', desc: 'Proven track record of resolving complex technical challenges across diverse environments, from enterprise IT to field operations.' },
  { skill: 'Continuous Learning', desc: 'Passionate about staying current with emerging threats, attack techniques, and defensive technologies through hands-on labs and certifications.' },
  { skill: 'Technical Documentation', desc: 'Experienced in documenting security findings, attack paths, and remediation steps in clear, actionable formats.' },
  { skill: 'Cross-functional Collaboration', desc: 'Collaborated closely with IT teams, end users, and management to ensure security requirements are met while maintaining operational efficiency.' },
  { skill: 'Attention to Detail', desc: 'Meticulous approach to security monitoring, log analysis, and vulnerability assessment to catch subtle indicators of compromise.' },
  { skill: 'Adaptability', desc: 'Successfully adapted to diverse IT environments from oil field operations to cutting-edge AR/VR research facilities.' },
  { skill: 'Customer Focus', desc: 'Consistently prioritized end-user experience while implementing security controls and resolving technical issues.' },
  { skill: 'Self-Directed Initiative', desc: 'Built personal security lab environments and tools to develop skills beyond day-to-day work responsibilities.' }
];

</script>

<svelte:head>	
	<title>William Thomas | CV | Skills</title>
</svelte:head>

<section class="skills-page">
<h1>Skills</h1>
<p>
  Below is a list of technologies that I've worked extensively with, along with links to projects I've built with each.
  I enjoy staying up-to-date with the latest security tools and techniques,
  so that I'm in the best position to defend against emerging threats.
</p>

{#each Object.keys(techStack) as technologyArea}
  <h3>{technologyArea}</h3>
  <ul>
    {#each techStack[technologyArea] as technology}
      <li>
        <b><Language language={technology.language} /> </b>
        <br>
        <details class="projects-collapsable">
          <summary class="project-list-title">Sample Projects ({technology.projects.length})</summary>
          <ul>
            {#each technology.projects as project}
            <li>
              <i class="fa-brands fa-github"></i>
              <a href="https://github.com/un1xr00t/{project}" target="_blank" rel="nofollow">
                {project}
              </a>
            </li>
          {/each}
          </ul>
        </details>
      </li>
      {/each}
    </ul>
{/each}

<h3>Soft Skills</h3>
<ul class="soft-skills">
  {#each softSkills as skill}
    <li>
      {skill.skill}<br>
      <span class="skill-desc">{skill.desc}</span>
    </li>
  {/each}

<div class="note">
  <p>
    <b>Note</b>: The technology list is not exhaustive, as it doesn't include some technologies I've used professionally at work.
    <br><br>
    For more of my security projects and tools, please visit <a href="https://williamthomas.name">williamthomas.name</a> 
    or check out my <a href="https://github.com/un1xr00t">GitHub</a>.
    <br><br>
    For the soft skills, I can provide references or put you in touch with previous colleagues who can vouch for my abilities.
  </p>
</div>

</section>

<style lang="scss">
  p {
    font-size: 0.95rem;
  }
  .second-intro {
    font-size: 0.8rem;
    opacity: 0.8;
  }
  ul {
    padding-left: 0.5rem;
    list-style: none;
    li {
      margin: 0.1rem 0;
      font-size: 0.95rem;
      .projects-collapsable {
        margin-left: 2rem;
        opacity: 0.8;
        font-size: 0.8rem;
        ul {
          margin-bottom: 0.5rem;
        }
        .project-list-title {
          cursor: pointer;
        }
        a {
          color: var(--text-color);
          text-transform: capitalize;
          &:hover {
            opacity: 1;
          }
          &:not(:last-child) {
            margin-right: 0.25rem;
            &::after {
              content: ', ';
            }
          }
        }
      }
    }
  }
  .soft-skills {
    list-style: none;
    li {
      font-size: 0.95rem;
      font-weight: 500;
      margin: 0.25rem 0 0 0;
      &:before {
        content: '✓';
        margin-right: 0.5rem;
      }
      .skill-desc {
        font-size: 0.8rem;
        opacity: 0.8;
        font-style: italic; 
        font-weight: 400;
        margin: 0 0 0 1rem;

        display: -webkit-box;
        max-width: 100%;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
  .note {
    border: 2px solid var(--primary);
    padding: 0.25rem 0.5rem;
    margin: 1rem auto;
    border-radius: 4px;
    background: #0000000a;
    b, p, a {font-size: 0.8rem;}
    b, a { font-weight: 500; }
  }
</style>

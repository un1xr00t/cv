<!-- web/src/routes/ideal-role/+page.svelte -->
<script>
  const navLinks = [
    { name: 'Intro', url: '/intro', icon: 'fa-address-card' },
    { name: 'Experience', url: '/experience', icon: 'fa-briefcase' },
    { name: 'Achievements', url: '/achievements', icon: 'fa-star' },
    { name: 'Skills', url: '/skills', icon: 'fa-code' },
  ];
  const intro = [
    `I'm looking for a role where I can leverage my offensive security skills 
    while continuing to grow as a security professional.`,
    `I'm passionate about red teaming, threat hunting, and building security tools 
    that make a real difference. I love breaking things to understand how they work, 
    then using that knowledge to build better defenses.`,
    `I thrive in environments where I can work on hands-on technical challenges, 
    whether that's deploying honeypots, building C2 infrastructure, or automating 
    threat intelligence workflows.`,
    `Ultimately, I want to be part of a team that values continuous learning 
    and isn't afraid to try unconventional approaches to security problems.`
  ];
  const requirements = [
    { lbl: 'Location', desc: 'Pittsburgh, PA area or remote-friendly positions' },
    { lbl: 'Contract Type', desc: 'Permanent, full-time preferred' },
    { lbl: 'Workspace', desc: 'Flexible on remote vs hybrid - I can work effectively in both environments' },
    { lbl: 'Seniority', desc: 'Security Analyst, Penetration Tester, or Red Team Operator roles' },
    { lbl: 'Discipline', desc: 'Offensive Security, Threat Intelligence, or Detection Engineering' },
    { lbl: 'Industry', desc: 'Open to most industries, but especially interested in tech, finance, or critical infrastructure' },
    { lbl: 'Comp', desc: 'Competitive salary with opportunity for growth and certifications' },
  ];
  const values = [
    'Encourages hands-on security research and tool development',
    'Values continuous learning and certification support',
    'Supports open source contributions and community involvement',
    'Has a strong security culture with executive buy-in',
    'Provides opportunities for red team/purple team exercises',
    'Invests in modern security tooling and infrastructure',
  ];
</script>
<svelte:head>	
	<title>William Thomas | CV | Ideal Role</title>
</svelte:head>
<h1>What I'm looking for</h1>
{#each intro as paragraph}
<p>{paragraph}</p>
{/each}
<h2>Values</h2>
<p class="subtitle">I'm looking for a company which has the following core values</p>
<ul>
  {#each values as value}
    <li>{value}</li>
  {/each}
</ul>
<h2>Requirements</h2>
<p class="subtitle">I'm pretty flexible on the details, but ideally looking to work within these parameters</p>
<ul>
  {#each requirements as { lbl, desc }}
    <li>
      <strong>{lbl}:</strong> {desc}
    </li>
  {/each}
</ul>
<h2>Why me?</h2>
<p>
  I build real security tools that solve real problems - from physical red team dropboxes to mobile C2 apps 
  to honeypot deployments. Check out my <a href="/achievements">achievements</a> to see what I've built.
  I'm Security+ certified and constantly learning through hands-on projects and labs.
</p>
<h2>Get in Touch</h2>
<p>
  Interested in working together? I'd love to hear from you! Feel free to <a href="/contact">get in touch</a>.
</p>
<div class="other-pages">
  {#each navLinks as { name, url, icon }}
    <a href={url} class="no-underline">
      <button class="big-btn"><i class="fa-solid {icon}"></i>{name}</button>
    </a>
  {/each}
</div>
<style lang="scss">
h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 2rem 0 0.5rem 0;
}
.subtitle {
  margin: 0 0 0.5rem 0;
  font-size: 0.8rem;
  font-style: italic;
  opacity: 0.8;
}
ul {
  margin: 0;
  padding-left: 1rem;
  font-size: 1rem;
  li {
    strong {
      font-weight: 600;
    }
  }
}
p {
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
}
.other-pages {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  a {
    button {
      margin: 0;
      font-size: 1rem;
      padding: 0.5rem 0.5rem;
    }
  }
}
</style>

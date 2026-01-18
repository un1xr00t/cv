// src/routes/intro/+page.svelte (or wherever this lives in your project structure)
<script>
  const navLinks = [
    { name: 'Projects', url: '/projects', icon: 'fa-code' },
    { name: 'About', url: '/about', icon: 'fa-user' },
    { name: 'Blog', url: '/blog', icon: 'fa-pen' },
    { name: 'Contact', url: '/contact', icon: 'fa-paper-plane' },
  ];

  const tagline = 'Cybersecurity professional focused on red teaming, offensive security, and building tools that break things to understand how they work.';

  const intro = [
    `I'm William, a security engineer based in Pittsburgh.
    Whether it's WiFi reconnaissance tools, honeypot deployments, or threat intel pipelines,
    I love building software that helps defenders understand attackers—and vice versa.`,
    
    `My focus is on red teaming and offensive security. I build tools for vulnerability scanning,
    network analysis, and automated threat intelligence gathering. I believe the best way to
    defend systems is to understand how they can be broken.`,

    `I run a homelab on Linode where I self-host security monitoring with Wazuh,
    experiment with honeypots like T-Pot and Cowrie, and continuously learn by breaking things.
    Currently working through hands-on security certifications and CTF challenges.`,

    `My stack centers around Python and Bash for security tooling, with Docker and Linux
    as the foundation for everything I build. I'm comfortable with Kotlin for Android security
    apps like WiFiHarvest, and I use n8n for automating threat intel workflows with
    Discord webhook integrations.`,

    `I'm a firm believer in open source. All my security tools are public on GitHub—
    not because I'm trying to build a following, but because security knowledge should be
    accessible. The more defenders who can use these tools, the better.`,

    `Data privacy and security aren't just professional interests—they're principles I live by.
    Everyone deserves control over their own data, and it's our responsibility as security
    professionals to help make that possible.`,

    `When I'm not hunting vulnerabilities or tweaking my homelab, I'm usually detailing my car,
    walking my dog Dasher around Pittsburgh, or diving into another security write-up.
    Always down to chat about the latest exploits, homelab setups, or anything infosec.`,
  ];
</script>

<svelte:head>	
  <title>William Thomas | Security Engineer | Intro</title>
</svelte:head>

<h1>Intro</h1>

<h2>👋 Hey! I'm William</h2>

{#each intro as paragraph}
  <p>{paragraph}</p>
{/each}

<div class="other-pages">
{#each navLinks as { name, url, icon }}
  <a href={url} class="no-underline">
    <button class="big-btn"><i class="fa-solid {icon}"></i>{name}</button>
  </a>
{/each}
</div>

<style lang="scss">

h1 {
  margin-bottom: 1rem;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
}

p {
  margin: 0.5rem 0;
  line-height: 1.5;
}

.other-pages {
  margin-top: 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 1rem;
  a {
    button {
      margin: 0;
      font-size: 1rem;
      padding: 0.5rem 0.5rem;
    }
  }
}
</style>

<!-- web/src/routes/achievements/+page.svelte -->
<script lang="ts">

import Language from '../../components/Language.svelte';

const certifications = [
  {
    cert: 'CompTIA Security+',
    issuer: 'CompTIA',
    source: 'https://www.comptia.org/certifications/security',
  },
];

const projects = [
  {
    name: 'Phantom Printer V2',
    description: 'Physical red team dropbox built on Raspberry Pi 5 that disguises itself as an HP LaserJet printer. Features persistent C2 via reverse SSH, n8n automation for Discord alerts, auto-reconnaissance with nmap/Responder, MAC spoofing, mDNS advertisement, and multi-level self-destruct capabilities. Zero-touch deployment - just power on and walk away.',
    tech: 'Bash',
    logo: 'https://cdn-icons-png.flaticon.com/512/2166/2166823.png',
    repo: 'un1xr00t/red-teaming-dropbox-v2',
  },
  {
    name: 'Phantom Dashboard',
    description: 'Mobile Command & Control iOS app for managing Phantom Printer dropboxes in the field. Built with Flutter and FastAPI. Real-time dropbox monitoring, remote shell execution, credential/hash browsing, and emergency self-destruct trigger. Dark tactical UI with glassmorphism design.',
    tech: 'Flutter',
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968592.png',
    repo: 'un1xr00t/phantom-dashboard',
  },
  {
    name: 'T-Pot Honeypot Deployment',
    description: 'Production honeypot infrastructure using T-Pot - the all-in-one multi-honeypot platform. Captures SSH/Telnet attacks, web exploits, and malware samples. Integrated with Elasticsearch and Kibana for attack visualization and threat intelligence gathering.',
    tech: 'Docker',
    logo: 'https://cdn-icons-png.flaticon.com/512/1598/1598196.png',
    repo: 'un1xr00t/tpot-honeypot-setup',
  },
  {
    name: 'WiFiHarvest',
    description: 'Android app for passive WiFi reconnaissance. Logs SSID/BSSID with GPS coordinates for wireless mapping and security assessments. Features Mr. Robot themed UI with fsociety mode easter egg (Konami code activated), terminal-style notifications, and CSV export for analysis.',
    tech: 'Kotlin',
    logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    repo: 'un1xr00t/WiFiHarvest',
  },
  {
    name: 'Linux Threat Detection Lab',
    description: 'Cloud-based detection lab simulating real-world threats on Linux using auditd, Falco, and custom alert scripts. Deployed on Linode Ubuntu 22.04. Used for testing detection rules, understanding attacker TTPs, and building defensive playbooks.',
    tech: 'Bash',
    logo: 'https://cdn-icons-png.flaticon.com/512/6124/6124995.png',
    repo: 'un1xr00t/Linux-Threat-Detection-Lab',
  },
  {
    name: 'n8n Business Automations',
    description: 'Custom n8n workflow automations built for businesses. Includes threat intel feed aggregation, Discord/Slack alerting pipelines, automated reporting, and integration workflows connecting security tools to communication platforms.',
    tech: 'n8n',
    logo: 'https://n8n.io/n8n-logo.png',
    repo: 'un1xr00t',
  },
];

const normalizeUrl = (url: string) => {
  if (!url) return '';
  return url.replaceAll('https://', '').replaceAll('http://', '');
};

</script>

<svelte:head>	
	<title>William Thomas | CV | Achievements</title>
</svelte:head>

<h2>Achievements</h2>

<h3>Certifications</h3>
<ul class="certs">
  {#each certifications as {cert, issuer, source}}
    <li>
      <strong>{cert}</strong> - {issuer}
      {#if source}
        <a class="source" href={source} target="_blank" rel="nofollow" title={`Source: ${normalizeUrl(source)}`}>
          <i class="fa-solid fa-link"></i>
        </a>
      {/if}
    </li>
  {/each}
</ul>

<hr>

<h3>Flagship Projects</h3>
<ul class="projects">
  {#each projects as project}
    <li>
      <p class="top-line">
        <img src={project.logo} alt={''} width="20" onerror="this.style.display='none'">
        <strong>
          <a href={`https://github.com/${project.repo}`} target="_blank" rel="nofollow">{project.name}</a>
        </strong>
      </p>
      <p class="desc">{project.description}</p>
      <span class="project-stats">
        <Language language={project.tech} small={true} />
        |
        <a
          title={`View ${project.name} on GitHub`}
          href={`https://github.com/${project.repo}`}
          target="_blank"
          rel="nofollow">
          <i class="fa-brands fa-github"></i> {project.repo}
        </a>
      </span>
    </li>
  {/each}
</ul>

<p class="projects-more">
  View more of my security tools and projects on my 
  <a href="https://github.com/un1xr00t?tab=repositories" target="_blank" rel="nofollow">GitHub</a>.
</p>

<style lang="scss">
  h2 {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 500;
  }
  h3 {
    margin: 1rem 0 0.5rem;
  }
  p, a, li, span, div {
    font-size: 0.9rem;
  }
  ul {
    margin: 0;
    padding-left: 1.5rem;
  }
  hr {
    margin: 1rem 0;
    opacity: 0.8;
  }
  .source {
    font-size: 0.65rem;
    opacity: 0.65;
    margin-left: 2px;
    &:hover {
      opacity: 1;
    }
  }

  .certs {
    li {
      margin: 0.5rem 0;
    }
  }

  .projects {
    padding-left: 0.5rem;
    li {
      list-style: none;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e0e0e0;
      &:last-child {
        border-bottom: none;
      }
      .top-line {
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
        img {
          width: 24px;
          height: 24px;
        }
      }
      strong {
        font-weight: 600;
        font-size: 1.05rem;
        a {
          color: var(--primary, #00ccb4);
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .desc {
        margin: 0.5rem 0;
        line-height: 1.5;
        color: var(--text-color-dim, #666);
      }
      a {
        color: var(--text-color);
        &:hover {
          color: var(--primary, #00ccb4);
        }
      }
      .project-stats {
        font-size: 0.8rem;
        opacity: 0.8;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        a {
          opacity: 0.8;
        }
      }
    }
  }

  .projects-more {
    opacity: 0.8;
    font-style: italic;
    font-size: 0.8rem;
    margin-top: 1rem;
  }
</style>

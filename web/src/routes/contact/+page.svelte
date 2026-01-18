<script>
  let emailVisible = false;
  const revealEmail = () => {
    emailVisible = true;
    navigator.clipboard.writeText('whthomas22@gmail.com');
  }
</script>
<svelte:head>	
	<title>William Thomas | CV | Contact</title>
</svelte:head>
<h1>Contact</h1>
<p>
  If you're looking for a dedicated Cybersecurity Analyst with hands-on experience in security monitoring, threat detection, and offensive security, I'd love to hear from you!
</p>
<p>
  You can get in touch by dropping me an email 
  {#if emailVisible}
    <a href="mailto:whthomas22@gmail.com">whthomas22@gmail.com</a>
  {:else}
    <button on:click={revealEmail} class="small-btn no-float" title="Click to show email address, and copy to clipboard">
      Reveal email address
    </button>
  {/if}
  <br>
  Or connect with me on LinkedIn or GitHub below.
</p>
<p>
  Thank you for stopping by, and I really hope to hear from you!
</p>
<div class="some-text">
  <p>
    You can learn more about me on the <a href="/intro">intro</a> page,
    or browse the <a href="/skills">skills</a>, <a href="/experience">experience</a> and
    <a href="/achievements">achievements</a> pages to see if I align with what you're looking for.
    A shortened version of my CV in PDF format can be downloaded <a href="/download">here</a>.
  </p>
  <p>
    Beyond that, I'm on LinkedIn at <a href="https://www.linkedin.com/in/william-thomas7/">in/william-thomas7</a>
    and GitHub at <a href="https://github.com/un1xr00t">@un1xr00t</a>.
    Check out my portfolio at <a href="https://williamthomas.name">williamthomas.name</a>
  </p>
  <p>
    If you've got any questions, or would like me to send over some references, feel free to reach out! :)
  </p>
</div>
<style lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.some-text {
  font-size: 0.8rem;
  border: 2px solid var(--primary);
  padding: 0.25rem 0.5rem;
  margin: 4rem auto 1rem auto;
  border-radius: 4px;
  background: #0000000a;
  b, a { font-weight: 500; }
}
</style>

---
id: example1
title: Example 1
sidebar_label: Example Page
---

Check the [documentation](https://docusaurus.io) for how to use Docusaurus.

<button id="discover">Discover</button>
<button id="forward">Forward</button>
<button id="backward">Backward</button>

<script>
  let cube = null
  window.addEventListener("message", async function (event) {
    if (event.data === 'discover') {
      const Cube = window.Cube;
      cube = await Cube.discover();
    }
    if (event.data === 'forward') {
      cube.move([70, 70], 500);
    }
    if (event.data === 'backward') {
      cube.move([-70, -70], 500);
    }
  }, false);
  document.querySelector('#discover').addEventListener('click', async () => {
    const Cube = window.Cube;
    cube = await Cube.discover();
  })
</script>

## Lorem

<iframe src="https://codesandbox.io/embed/github/eqot/dummy/tree/master/packages/dummy-samples/vanilla?fontsize=14" title="parcel-sandbox" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin allow-top-navigation"></iframe>

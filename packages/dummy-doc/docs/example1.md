---
id: example1
title: Example 1
sidebar_label: Example Page
---

Check the [documentation](https://docusaurus.io) for how to use Docusaurus.

<button id="button">Discovery</button>

<script>
  console.log('2');
  window.addEventListener("message", function (e) {
    console.log(e);
    console.log(e.data);
    navigator.bluetooth.requestDevice({
      filters: [{ services: ['10b20100-5b3b-4571-9508-cf3efcd7bbae'] }]
    });
  }, false);
  function handleClick() {
    console.log('3');
    navigator.bluetooth.requestDevice({
      filters: [{ services: ['10b20100-5b3b-4571-9508-cf3efcd7bbae'] }]
    });
    // discovery();
  }
  function discovery() {
    navigator.bluetooth.requestDevice({
      filters: [{ services: ['10b20100-5b3b-4571-9508-cf3efcd7bbae'] }]
    });
  }
  document.querySelector('#button').addEventListener('click', handleClick);
</script>

## Lorem

<iframe src="https://codesandbox.io/embed/github/eqot/dummy/tree/master/packages/dummy-samples/vanilla?fontsize=14" title="parcel-sandbox" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin allow-top-navigation"></iframe>

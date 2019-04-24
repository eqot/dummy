import './styles.css'

document.getElementById('app').innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.

  <button id="push">Push</button>
</div>
`

document.querySelector('#push').addEventListener('click', async () => {
  console.log('push')

  window.parent.postMessage('foo bar', '*')
})

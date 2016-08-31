import rawReveal from '../vendor/reveal/js/reveal'

window.Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: false,
    theme: window.Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: 'cube' // default/cube/page/concave/zoom/linear/fade/none
});

export window.Reveal;
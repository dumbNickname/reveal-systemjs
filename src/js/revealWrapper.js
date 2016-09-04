import Reveal from 'reveal';

Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: false,
    theme: window.Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: 'cube' // default/cube/page/concave/zoom/linear/fade/none
});

export default Reveal;

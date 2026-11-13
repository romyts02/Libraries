// Initialize fullpage
var myFullpage = new fullpage('#fullpage', {
    licenseKey: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    sectionsColor: ['', '#f2e4bf', '#f98688', '#f9856b']
});

// Granim.js
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'radial',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#f2c200', '#fcfeb2'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});

// Choreographer.js
var choreographer = new Choreographer({
    animations: [
        { range: [-1, window.innerWidth], selector: 'body #header h1', type: 'scale', style: 'height', from: 100, to: 15, unit: 'vh' },
        { range: [-1, window.innerWidth / 2], selector: 'body #header h1', type: 'scale', style: 'opacity', from: 0.2, to: 1 },
    ]
})

window.addEventListener('mousemove', function(e) {
    choreographer.runAnimationsAt(e.clientX)
})
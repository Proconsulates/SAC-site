anime ({
    targets: '#lineDrawing .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 50000,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
});
new Rect(10, 10, 100, 100)
.addTo(stage)
.attr('fillColor', 'red')
.animate('650ms',{
    x: 100,
    y: 500
}, {
    easing: 'bounceIn',
    delay: '200ms'
})

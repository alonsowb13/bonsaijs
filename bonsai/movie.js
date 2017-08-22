var animation = new Animation('1s', {
    x: 190
});
new Rect(10, 10, 100, 100)
.addTo(stage)
.attr('fillColor', 'red')
.animate(animation);

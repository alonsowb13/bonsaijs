/*var animation = new Animation('1s', {
    x: 190
});
new Rect(10, 10, 100, 100)
.addTo(stage)
.attr('fillColor', 'red')
.animate(animation);*/

/*var myShapeA = new Rect(0,0,50,50).addTo(stage).attr('fillColor', 'red');
var myShapeB = new Rect(0,50,50,50).addTo(stage).attr('fillColor', 'blue');
var myAnimation = new Animation('1s', {
    x: 100,
    fillColor: 'green'
});
myAnimation.addSubjects([myShapeA, myShapeB]);
myAnimation.play([myShapeA, myShapeB]);*/

var thing = new Rect(0,0,50,50).addTo(stage).attr('fillColor', 'red');
/*thing.attr(0, 0)
.animate('1s', {
    x: 100,
    y: 100
}, {
    onEnd: function(){
        thing.animate('1s', {
            x: 0,
            y: 0
        })
    }
})*/

thing.animate(new KeyframeAnimation('2s', {
    '0%': { x: 0, y: 0 },
    '50%': { x: 100, y: 100 },
    '100%': { x: 0, y: 0 }
  }));

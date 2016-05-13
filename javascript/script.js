
$(document).ready(function() {
  $('ol').sortable();
    //$('ol').selectable();
});

$(function () {
    $('#draggable').draggable({ containment:'body' });
    $('#draggable1').draggable({ containment:'body' });
    $('#draggable2').draggable({ containment:'body' });
    $('#draggable3').draggable({ containment:'body' });
    $('#draggable4').draggable({ containment:'body' });
    $('#draggable5').draggable({ containment:'body' });
    $('#draggable6').draggable({ containment:'body' });
    $('#draggable7').draggable({ containment:'body' });
    $('#draggable8').draggable({ containment:'body' });
});

//slideshow
$(function () {

    /* SET PARAMETERS */
    var change_img_time     = 5000; 
    var transition_speed    = 100;

    var simple_slideshow    = $("#exampleSlider"),
        listItems           = simple_slideshow.children('li'),
        listLen             = listItems.length,
        i                   = 0,

        changeList = function () {

            listItems.eq(i).fadeOut(transition_speed, function () {
                i += 1;
                if (i === listLen) {
                    i = 0;
                }
                listItems.eq(i).fadeIn(transition_speed);
            });

        };

    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);

});
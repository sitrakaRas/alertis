var alertis = {
    slider: function(parent,arg){
        parent.slick(arg);
    }
}

$(document).ready(function() {
    if($(".slider-confiance").length > 0){
        var arg = {
            variableWidth: true

        }
        alertis.slider($(".slider-confiance"),arg);
    }
});
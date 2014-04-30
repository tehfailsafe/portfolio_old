//= require jquery
//= require angular
//= require angular-route
//= require angular-animate
//= require angular-resource
//= require angular-sanitize
//= require imagesloaded.pkgd
//= require isotope.pkgd
//= require masonry-horizontal
//= require app/app
//= require app/services
//= require app/controllers
//= require foundation

$(document).foundation();

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
}



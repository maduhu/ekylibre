// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require modernizr
//= require jquery
//= require jquery/jquery.lazy
//= require jquery-ui/widgets/datepicker
//= require jquery-ui/i18n/datepicker-fr
// require jquery-ui/i18n/datepicker-ar
// require jquery-ui/i18n/datepicker-ja
//= require jquery-ui/widgets/dialog
//= require jquery-ui/widgets/slider
//= require jquery-ui/widgets/accordion
//= require jquery-ui/widgets/sortable
//= require jquery-ui/widgets/droppable
//= require jquery_ujs
//= require jquery.remotipart
//= require jquery.turbolinks
//= require turbolinks
//= require active_list.jquery
//= require knockout
//= require_self
//= require i18n
//= require i18n/translations
//= require i18n/locale
//= require i18n/ext
//= require ekylibre
//= require moment
//= require moment/ar
//= require moment/de
//= require moment/es
//= require moment/fr
//= require moment/it
//= require moment/ja
//= require moment/pt
//= require moment/zh-cn
//= require bootstrap-datetimepicker
//= require formize/behave
//= require form/dialog
//= require formize/observe
//= require form/scope
//= require form/dependents
//= require form/toggle
//= require form/dates
//= require form/links
//= require cocoon
//= require jquery/ext
//= require selector
//= require ui
//= require jstz
//= require heatmap
//= require geographiclib
//= require leaflet.js.erb
//= require leaflet/draw
//= require leaflet/fullscreen
//= require leaflet/providers
//= require leaflet/heatmap
//= require leaflet/measure
//= require leaflet/easy-button
//= require leaflet/modal
//= require leaflet/label
//= require d3
//= require d3/tip
//= require timeline-chart.js
//= require rbush
//= require autosize
//= require plugins
//= require_tree .
//= require tour
//= require bootstrap-slider

var visualization = {};
var mapeditor = {};
var ekylibre = {};
var calcul = {};

var golumn = {};

// FIX Browser interoperability
// href function seems to be ineffective
$.rails.href = function (element) {
  return $(element).attr('href');
}

Turbolinks.enableTransitionCache();
Turbolinks.enableProgressBar();

$(document).ready(function()
{
    L.Icon.Default.imagePath = '/assets';
});

function change_side_menus(){
  if ($("#production").hasClass("collapsed") ) {
    window.Var1 = "collapsed";
    $("#production").removeClass("collapsed");
    $("#production .snippet-content").toggle();
  } else {
    window.Var1 = "";
  }
  if ($("#quality").hasClass("collapsed") ) {
    window.Var2 = "collapsed";
    $("#quality").removeClass("collapsed");
    $("#quality .snippet-content").toggle();
  } else {
    window.Var2 = "";
  }
  if ($("#field_distribution").hasClass("collapsed") ) {
    window.Var3 = "collapsed";
    $("#field_distribution").removeClass("collapsed");
    $("#field_distribution .snippet-content").toggle();
  } else {
    window.Var3 = "";
  }
  if ($("#animal_management").hasClass("collapsed") ) {
    window.Var4 = "collapsed";
  } else {
    window.Var4 = "";
    $("#animal_management").addClass("collapsed");
    $("#animal_management .snippet-content").toggle();
  }
}
function change_back_side_menus(){
  if (window.Var1 == "collapsed") {
    $("#production").addClass("collapsed");
    $("#production .snippet-content").toggle();
  }
  if (window.Var2 == "collapsed") {
    $("#quality").addClass("collapsed");
    $("#quality .snippet-content").toggle();
  }
  if (window.Var3 == "collapsed") {
    $("#field_distribution").addClass("collapsed");
    $("#field_distribution .snippet-content").toggle();
  }
  if (window.Var4 == "collapsed") {
    $("#animal_management").addClass("collapsed");
  } else {
    $("#animal_management").removeClass("collapsed");
    $("#animal_management .snippet-content").toggle();
  }
}

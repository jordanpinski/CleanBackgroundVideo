document.addEventListener('DOMContentLoaded', function(event) {

  // Polyfills
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

});

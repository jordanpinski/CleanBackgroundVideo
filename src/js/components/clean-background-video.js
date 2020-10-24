const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

/**
 * Entry point for the plugin.
 */
class CleanBackgroundVideo {
  constructor(cleanBackgroundVideo = [], options) {
    this.cleanBackgroundVideos = cleanBackgroundVideo;
    if (this.cleanBackgroundVideos.length <= 0) return;
    
    const defaultOptions = { }

    this.options = { ...defaultOptions, ...options };
    this.setDimensions = this.debounce(this.setDimensions.bind(this), 50);
    this.init();
  }

  init() {
    this.bindEvents();
    this.setDimensions();
  }

  bindEvents() {
    window.addEventListener('resize', () => { this.setDimensions() });

    this.cleanBackgroundVideos.forEach( (cleanBackgroundVideo) => {
      let video = cleanBackgroundVideo.querySelector('video');
      video.addEventListener('canplay', (event) => { this.setLoaded(event) });
    })
  }

  /**
   * Sets the loaded classes on video elements.
   */
  setLoaded(event) {
    let video = event.target;
    video.classList.add('background-video-loaded');
    this.setDimensions();
  }

  setDimensions() {
    console.log('setting dimensions');
    this.cleanBackgroundVideos.forEach( (cleanBackgroundVideo) => {
      let video = cleanBackgroundVideo.querySelector('video');
      let width = cleanBackgroundVideo.clientWidth;
      let height = cleanBackgroundVideo.clientHeight;

      video.style.width = `${width}px`;
      video.style.height = 'auto';

      if (height > video.clientHeight) {
        video.style.width = 'auto';
        video.style.height = `${height}px`;
      }

    });
  }

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
}
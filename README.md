![Pixelcoulee Logo](https://siasky.net/AABLe6NEcRQSDcamGmncceJG0yMsFdtDMNQ0ghcqLyS5qQ)

# CleanBackgroundVideo
A minimal, efficient, vanilla JavaScript background video plugin. Only 3KB total!

## Installation
Include the CSS/JS in your HTML.

```
<link href="css/clean-background-video.min.css" type="text/css" rel="stylesheet" />
```
```
<script src='js/clean-background-video.min.js'></script>
```

## Basic Usage
Add the required HTML & initialize.
```
<div data-background-video>

  <video loop autoplay muted playsinline poster="">
    <source src="video/test.mp4" type="video/mp4">
    <source src="video/test.webm" type="video/webm">
    <source src="video/test.ogv" type="video/ogv">
      Your browser doesn't support the video element
  </video>

</div>
```
```
<script>

  const elements = document.querySelectorAll('[data-background-video]');
  const cleanBackgroundVideo = new CleanBackgroundVideo(elements);

</script>
```

## API
### Constructor Arguments
The `new CleanBackgroundVideo()` instruction you execute on your page can take two parameters:

| Parameter | What to pass | Required | Default value | Type |
| --------- | ------------ | -------- | ------------- | ---- |
| Element | The CleanBackgroundVideo DOM element/s | Yes | `null` | Dom Element |
| Options | The option object for this instance of CleanBackgroundVideo | No | `{}` | Plain Object |

## Examples

### Full Page Background Video
```
<body class="clean-background-video" [data-background-video]>
  <video loop autoplay muted playsinline poster="">
    <source src="video/test.mp4" type="video/mp4">
    <source src="video/test.webm" type="video/webm">
    <source src="video/test.ogv" type="video/ogv">
      Your browser doesn't support the video element
  </video>
  ...
</body>
```
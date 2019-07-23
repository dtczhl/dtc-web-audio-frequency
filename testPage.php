<!DOCTYPE html>
<html>
    <head>
        <title> Test Page for Web Audio </title>
        <script src=jquery-3.4.1.min.js></script>
        <script src=dtc-web-audio-frequency.js></script>
    </head>

<body>

  <div class="mainBlock">
    <input type="range" min="1" max="20000" value="50" class="slider" id="freqSlider" style="width:500px;">
    <p> Audio Frequency (Hz): <scan id="freqValue">-0</scan> </p>
    <button type="button" onclick="dtcWebAudioFrequencyPlay(true)" id="freqStart"> Start </button>
    <button type="button" onclick="dtcWebAudioFrequencyPlay(false)" id="freqStop" disabled> Stop </button>
  </div>
</body>

var freqSlider;
var freqValue;

var audioContext;
var oscillator = null;

$(function(){
// main
  freqSlider = $("#freqSlider")[0];
  freqValue = $("#freqValue")[0];
  freqValue.innerHTML = freqSlider.value;
  freqSlider.oninput = function(){
    freqValue.innerHTML = this.value;
    if (oscillator != null) {
      oscillator.stop();
      oscillator = audioContext.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freqSlider.value, audioContext.currentTime); // value in hertz
      oscillator.connect(audioContext.destination);
      oscillator.start();
    }
  };
});


function dtcWebAudioFrequencyPlay(enable){

  if (enable) {
    $("#freqStart")[0].disabled = true;
    $("#freqStop")[0].disabled = false;
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      window.alert("Sorry, but your browser doesn't support the Web Audio API!");
    }

    if (audioContext !== undefined) {
      /* Our code goes here */
      console.log("OK");

      // create Oscillator node
      oscillator = audioContext.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freqSlider.value, audioContext.currentTime); // value in hertz
      oscillator.connect(audioContext.destination);
      oscillator.start();
    }
  } else {
    $("#freqStart")[0].disabled = false;
    $("#freqStop")[0].disabled = true;
    if (oscillator !== null) {
    oscillator.stop();
    oscillator = null;
    }
  }
}

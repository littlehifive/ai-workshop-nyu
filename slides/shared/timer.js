/* Countdown timer for activity slides. Auto-initializes every
   .timer[data-minutes] on the slide. Click-only, so it never touches the deck's
   reserved navigation keys. Starts idle (the PDF/static state).
   Main button: Start, then Pause / Resume. Reset button stops and clears.
   At zero, the card switches to data-state="done" (styled red + pulsing). */
(function () {
  function initTimer(el) {
    var mins = parseInt(el.getAttribute('data-minutes'), 10);
    if (!(mins > 0)) mins = 10;
    var total = mins * 60, remain = total, tick = null, state = 'idle';
    var numEl = el.querySelector('.t-num');
    var mainEl = el.querySelector('.t-main');
    var resetEl = el.querySelector('.t-reset');
    if (!numEl || !mainEl) return;

    function fmt(s) { var m = Math.floor(s / 60), ss = s % 60; return m + ':' + (ss < 10 ? '0' : '') + ss; }
    function label() {
      return state === 'idle' ? 'Start' : state === 'running' ? 'Pause'
           : state === 'paused' ? 'Resume' : 'Restart';
    }
    function render() { numEl.textContent = fmt(remain); el.setAttribute('data-state', state); mainEl.textContent = label(); }
    function start() {
      if (tick) return;
      state = 'running'; render();
      tick = setInterval(function () {
        remain--;
        if (remain <= 0) { remain = 0; clearInterval(tick); tick = null; state = 'done'; render(); return; }
        render();
      }, 1000);
    }
    function pause() { if (tick) { clearInterval(tick); tick = null; } state = 'paused'; render(); }
    function reset() { if (tick) { clearInterval(tick); tick = null; } remain = total; state = 'idle'; render(); }

    mainEl.addEventListener('click', function () {
      if (state === 'running') pause();
      else if (state === 'done') reset();
      else start();
    });
    if (resetEl) resetEl.addEventListener('click', reset);
    render();
  }
  function boot() {
    var ts = document.querySelectorAll('.timer[data-minutes]');
    for (var i = 0; i < ts.length; i++) initTimer(ts[i]);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

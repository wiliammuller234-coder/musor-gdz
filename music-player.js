(() => {
  const tracks = [
    '19338070329947.mp3',
    '19338071116379.mp3',
    '19338072558171.mp3',
    '19338073082459.mp3',
    '19338074589787.mp3',
    '19338075703899.mp3',
    '19338077407835.mp3',
    '19338078521947.mp3',
    '19338079570523.mp3',
    '19338080160347.mp3',
    '19338082978395.mp3',
    '19338088286811.mp3',
    '19338089335387.mp3',
    '19338089794139.mp3',
    '19338091039323.mp3',
    '19338092284507.mp3',
    '19338093857371.mp3',
    '19338094643803.mp3'
  ];

  const audio = document.querySelector('#musicAudio');
  const player = document.querySelector('#musicPlayer');
  const playButton = document.querySelector('#musicPlay');
  const previousButton = document.querySelector('#musicPrev');
  const nextButton = document.querySelector('#musicNext');
  const progress = document.querySelector('#musicProgress');
  const volume = document.querySelector('#musicVolume');
  const time = document.querySelector('#musicTime');
  const title = document.querySelector('#musicTrackTitle');
  const select = document.querySelector('#musicTrackSelect');
  const minimize = document.querySelector('#musicMinimize');
  const fab = document.querySelector('#musicFab');
  const headerToggle = document.querySelector('#soundToggle');

  const savedIndex = Number(localStorage.getItem('musorMusicTrack'));
  const savedVolume = Number(localStorage.getItem('musorMusicVolume'));
  let currentIndex = Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < tracks.length ? savedIndex : 0;
  let seeking = false;

  const formatTime = seconds => {
    if (!Number.isFinite(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
  };

  const updatePlayingState = () => {
    const playing = !audio.paused;
    player.classList.toggle('is-playing', playing);
    playButton.textContent = playing ? '❚❚' : '▶';
    playButton.setAttribute('aria-label', playing ? 'Поставить музыку на паузу' : 'Включить музыку');
    headerToggle.setAttribute('aria-pressed', String(playing));
    headerToggle.innerHTML = `<span aria-hidden="true">${playing ? '♫' : '♪'}</span> ${playing ? 'Играет' : 'Музыка'}`;
  };

  const updateTime = () => {
    if (!seeking && Number.isFinite(audio.duration) && audio.duration > 0) {
      progress.value = String((audio.currentTime / audio.duration) * 100);
    }
    time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  };

  const loadTrack = (index, shouldPlay = false) => {
    currentIndex = (index + tracks.length) % tracks.length;
    audio.src = `assets/music/${tracks[currentIndex]}`;
    audio.load();
    title.textContent = `Трек ${String(currentIndex + 1).padStart(2, '0')}`;
    select.value = String(currentIndex);
    progress.value = '0';
    time.textContent = '0:00 / 0:00';
    localStorage.setItem('musorMusicTrack', String(currentIndex));
    if (shouldPlay) audio.play().catch(() => showToast('Нажми ▶, чтобы включить музыку'));
  };

  const togglePlayback = () => {
    if (audio.paused) audio.play().catch(() => showToast('Браузер ждёт нажатия кнопки ▶'));
    else audio.pause();
  };

  select.innerHTML = tracks.map((_, index) => `<option value="${index}">Трек ${String(index + 1).padStart(2, '0')}</option>`).join('');
  audio.volume = Number.isFinite(savedVolume) && savedVolume >= 0 && savedVolume <= 1 ? savedVolume : 0.55;
  volume.value = String(audio.volume);
  loadTrack(currentIndex);

  playButton.addEventListener('click', togglePlayback);
  headerToggle.addEventListener('click', () => {
    player.classList.remove('is-minimized');
    fab.hidden = true;
    togglePlayback();
  });
  previousButton.addEventListener('click', () => loadTrack(currentIndex - 1, true));
  nextButton.addEventListener('click', () => loadTrack(currentIndex + 1, true));
  select.addEventListener('change', () => loadTrack(Number(select.value), !audio.paused));
  audio.addEventListener('play', updatePlayingState);
  audio.addEventListener('pause', updatePlayingState);
  audio.addEventListener('ended', () => loadTrack(currentIndex + 1, true));
  audio.addEventListener('error', () => showToast('Трек не загрузился — обнови страницу и нажми ▶ ещё раз'));
  audio.addEventListener('loadedmetadata', updateTime);
  audio.addEventListener('timeupdate', updateTime);
  progress.addEventListener('input', () => {
    seeking = true;
    if (Number.isFinite(audio.duration)) time.textContent = `${formatTime(audio.duration * Number(progress.value) / 100)} / ${formatTime(audio.duration)}`;
  });
  progress.addEventListener('change', () => {
    if (Number.isFinite(audio.duration)) audio.currentTime = audio.duration * Number(progress.value) / 100;
    seeking = false;
    updateTime();
  });
  volume.addEventListener('input', () => {
    audio.volume = Number(volume.value);
    localStorage.setItem('musorMusicVolume', volume.value);
  });
  minimize.addEventListener('click', () => {
    player.classList.add('is-minimized');
    fab.hidden = false;
  });
  fab.addEventListener('click', () => {
    player.classList.remove('is-minimized');
    fab.hidden = true;
  });

  if (window.matchMedia('(max-width: 520px)').matches) {
    player.classList.add('is-minimized');
    fab.hidden = false;
  }

  updatePlayingState();
})();

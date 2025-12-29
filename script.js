const tracks = [
            {
                id: '1',
                title: 'Track One',
                artist: 'Artist Name',
                duration: 194,
                url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
            },
            {
                id: '2',
                title: 'Track Two',
                artist: 'Artist Name',
                duration: 209,
                url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
            },
            {
                id: '3',
                title: 'Track Three',
                artist: 'Artist Name',
                duration: 193,
                url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
                cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop'
            },
            {
                id: '4',
                title: 'Track Four',
                artist: 'Artist Name',
                duration: 199,
                url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
                cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop'
            },
            {
                id: '5',
                title: 'Track Five',
                artist: 'Artist Name',
                duration: 206,
                url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
                cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop'
            }
        ];

        let currentTrackIndex = 0;
        let isPlaying = false;
        const audioPlayer = document.getElementById('audioPlayer');

        function renderTracks() {
            const trackList = document.getElementById('songs');
            trackList.innerHTML = '';
            
            tracks.forEach((track, index) => {
                const trackDiv = document.createElement('div');
                trackDiv.className = `track ${index === currentTrackIndex ? 'active' : ''}`;
                trackDiv.innerHTML = `
                    <img src="${track.cover}" alt="${track.title}" class="track-cover">
                    <div class="track-info">
                        <div class="track-title">${track.title}</div>
                        <div class="track-meta">${track.artist}</div>
                    </div>
                    <div class="track-duration">${formatTime(track.duration)}</div>
                `;
                trackDiv.onclick = () => playTrack(index);
                trackList.appendChild(trackDiv);
            });
        }

        function playTrack(index) {
            currentTrackIndex = index;
            const track = tracks[index];

            audioPlayer.src = track.url;
            document.getElementById('playerTitle').textContent = track.title;
            document.getElementById('playerArtist').textContent = track.artist;
            document.getElementById('playerThumbnail').src = track.cover;

            renderTracks();
            audioPlayer.play();
            isPlaying = true;
            updatePlayButton();
            showStatus(`Now playing: ${track.title}`, 'info');
        }

        function togglePlay() {
            if (!audioPlayer.src) {
                playTrack(0);
                return;
            }

            if (isPlaying) {
                audioPlayer.pause();
                isPlaying = false;
            } else {
                audioPlayer.play();
                isPlaying = true;
            }
            updatePlayButton();
        }

        function updatePlayButton() {
            const btn = document.getElementById('playBtn');
            btn.textContent = isPlaying ? '⏸' : '▶';
        }

        function nextTrack() {
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
            playTrack(currentTrackIndex);
        }

        function previousTrack() {
            currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
            playTrack(currentTrackIndex);
        }

        function setupAudioListeners() {
            audioPlayer.addEventListener('timeupdate', updateProgress);
            audioPlayer.addEventListener('loadedmetadata', updateDuration);
            audioPlayer.addEventListener('ended', nextTrack);
        }

        function updateProgress() {
            if (audioPlayer.duration) {
                const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                document.getElementById('progress').style.width = progress + '%';
                document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
            }
        }

        function updateDuration() {
            document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
        }

        function formatTime(seconds) {
            if (!seconds || isNaN(seconds)) return '0:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        function setVolume(value) {
            audioPlayer.volume = value / 100;
        }

        function showStatus(message, type = 'info') {
            const container = document.getElementById('statusContainer');
            container.innerHTML = `<div class="status-message ${type}">${message}</div>`;
            
            if (type !== 'info') {
                setTimeout(() => { container.innerHTML = ''; }, 5000);
            }
        }

        document.getElementById('progressBar').addEventListener('click', (e) => {
            if (!audioPlayer.duration) return;
            const bar = e.currentTarget;
            const percentage = (e.clientX - bar.getBoundingClientRect().left) / bar.offsetWidth;
            audioPlayer.currentTime = percentage * audioPlayer.duration;
        });

        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        window.addEventListener('load', () => {
            setupAudioListeners();
            audioPlayer.volume = 0.7;
            setTimeout(() => {
                renderTracks();
                showStatus(`✓ Loaded ${tracks.length} tracks!`, 'success');
            }, 800);
        });
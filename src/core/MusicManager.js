import { Howl } from 'howler';
import Manager from './Manager';
import music from './../data/music.json';

class Track {
    isPlaying = false;
    isIntro = false;
    howl = null;

    constructor(path, data) {
        this.name = data.name;
        this.loop = new Howl({
            loop: true,
            src: [`${path}${data.loop}`],
        });

        if (data.intro) {
            this.intro = new Howl({
                loop: false,
                src: [`${path}${data.intro}`],
            });

            this.intro.on('end', () => {
                if (this.isPlaying) {
                    this.howl = this.loop;
                    this.loop.seek(0);
                    this.loop.volume(1);
                    this.loop.play();
                } else {
                    this.intro.stop();
                    this.loop.stop();
                }
            });
        }
    }

    play() {
        if (this.isPlaying) {
            return;
        }

        if (this.intro) {
            this.howl = this.intro;
            this.intro.seek(0);
            this.intro.play();
            this.intro.fade(0, 1, 3000);
            this.loop.stop();
            // this.intro.volume(1);
        } else {
            this.howl = this.loop;
            this.loop.seek(0);
            this.loop.play();
            this.loop.fade(0, 1, 3000);
            // this.loop.volume(1);
        }

        this.isPlaying = true;
    }

    stop() {
        if (this.howl) {
            this.howl.fade(1, 0, 3000);
        }
        this.isPlaying = false;
    }
}

export default class MusicManager extends Manager {
    tracks = {};
    currentTrack = null;

    constructor(game) {
        super(game);
        music.tracks.forEach((data) => {
            const track = new Track(music.path, data);

            this.tracks[data.key] = track;
        });
    }

    play(key) {
        if (key === this.currentTrack) {
            return;
        }

        if (this.currentTrack) {
            this.tracks[this.currentTrack].stop();
        }

        this.tracks[key].play();
        this.currentTrack = key;
    }

    stop() {
        if (this.currentTrack) {
            this.tracks[this.currentTrack].stop();
        }
    }

    onSectorLoaded(sector) {
        this.play(sector.music);
    }
}

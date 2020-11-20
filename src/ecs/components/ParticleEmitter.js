import { Component } from 'geotic';
import { Particle } from './Particle';

export class ParticleEmitter extends Component {
    static properties = {
        particleData: {},
        duration: 1000,
        rate: 10,
        age: 0,
        x: 0,
        y: 0,
        count: 0,
    };

    get isExpired() {
        return this.age >= this.duration;
    }

    get percent() {
        return this.age / this.duration;
    }

    createParticle() {
        const particle = this.ecs.createEntity();

        particle.add(Particle, {
            ...this.particleData,
            x: this.x,
            y: this.y
        });

        this.count += 1;

        return particle;
    }

    frame(arr = []) {
        const len = arr.length;
        const chunks = 1 / len;

        return Math.trunc(this.percent / chunks);
    }
}

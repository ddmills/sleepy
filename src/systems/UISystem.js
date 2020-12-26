import { Moniker, Actor, IsPlayer, IsInventoried, IsVisible } from '../ecs/components';
import System from './System';

export default class UISystem extends System {
    showTicks = false;
    beingsQuery = null;

    constructor(game) {
        super(game);
        this.beingsQuery = this.game.ecs.createQuery({
            all: [Moniker, Actor, IsVisible],
            none: [IsPlayer, IsInventoried],
        });
    }

    update(dt) {
        if (this.showTicks) {
            const turn = this.game.clock.turn;
            const subTurn = `${this.game.clock.subTurn.toFixed(0)}`.padEnd(3, '0');

            const str = `${turn}.${subTurn}`;
            const len = Math.ceil(this.game.renderer.computeTextWidth(str));
            this.game.renderer.drawText(this.game.camera.width - 1 - len, 1, str);
        }

        const hp = this.game.player.entity.health;

        this.game.renderer.drawText(
            0,
            0,
            `${Math.round(hp.value)}/${hp.max}`,
            '#ce5454'
        );


        const beings = this.beingsQuery.get();

        let offsetY = 2;

        if (beings.length > 0) {
            this.game.renderer.drawText(
                0,
                offsetY,
                'Nearby creatures',
            );

            offsetY++;
        }

        beings.forEach((entity) => {
            let moniker = entity.moniker.display;

            if (entity.factionMember) {
                const relation = this.game.factions.getEntityRelation(
                    game.player.entity,
                    entity
                );
                const faction = this.game.factions.getDisplay(relation);

                moniker += ` [${faction}]`;
            }

            const width = this.game.renderer.computeTextWidth(moniker);

            this.game.renderer.drawText(0, offsetY, moniker);

            if (entity.health) {
                offsetY++;

                const health = entity.health;
                const barWidth = 20;

                const prcnt = health.value / health.max;
                const healthWidth = Math.ceil(prcnt * barWidth);

                let hpBarFg = '';

                for (let i = 0; i < healthWidth; i++) {
                    hpBarFg += '▀';
                }

                this.game.renderer.drawText(
                    0,
                    offsetY,
                    hpBarFg,
                    '#ce5454',
                );

                let hpBarBg = '';

                for (let i = healthWidth; i < barWidth; i++) {
                    hpBarBg += '▀';
                }

                this.game.renderer.drawText(
                    healthWidth / 2,
                    offsetY,
                    hpBarBg,
                    '#716b6b',
                );
            }

            offsetY++;
        });
    }
}

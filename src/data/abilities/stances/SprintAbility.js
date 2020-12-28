import { ABILITY_TYPE_STANCE } from '../../../enums/AbilityTypes';
import { ABILITY_SPRINT } from '../../Abilities';
import Ability from '../Ability';

export default class SprintAbility extends Ability {
    key = ABILITY_SPRINT;
    type = ABILITY_TYPE_STANCE;
    name = 'Sprint';
    description = 'Gain temporary bonus move speed';
}

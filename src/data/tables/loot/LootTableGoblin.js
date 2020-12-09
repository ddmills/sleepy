import WeightedTable from '../../../utils/WeightedTable';
import { SPWN_STONE, SPWN_VIAL_BLOOD } from '../../Spawnables';

const goblins = new WeightedTable();

goblins.add(3, SPWN_STONE);
goblins.add(2, SPWN_VIAL_BLOOD);

export default goblins;

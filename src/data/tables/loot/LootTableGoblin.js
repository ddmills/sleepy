import WeightedTable from '../../../utils/WeightedTable';
import { SPWN_AMULET, SPWN_CLOTH_ARMOR, SPWN_STONE, SPWN_VIAL_BLOOD } from '../../Spawnables';

const goblins = new WeightedTable();

goblins.add(3, SPWN_STONE);
goblins.add(2, SPWN_VIAL_BLOOD);
goblins.add(5, SPWN_AMULET);
goblins.add(15, SPWN_CLOTH_ARMOR);

export default goblins;

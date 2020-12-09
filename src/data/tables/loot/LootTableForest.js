import WeightedTable from '../../../utils/WeightedTable';
import { SPWN_STONE, SPWN_VIAL_HONEY } from '../../Spawnables';

const forest = new WeightedTable();

forest.add(3, SPWN_STONE);
forest.add(2, SPWN_VIAL_HONEY);

export default forest;

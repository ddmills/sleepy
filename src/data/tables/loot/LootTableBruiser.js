import WeightedTable from '../../../utils/WeightedTable';
import {
    SPWN_VIAL_HONEY,
    SPWN_WOOD_CLUB,
} from '../../Spawnables';

const bruiser = new WeightedTable();

bruiser.add(10, SPWN_WOOD_CLUB);
bruiser.add(5, SPWN_VIAL_HONEY);

export default bruiser;

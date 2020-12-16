import { DMG_TYPE_BLUDGEONING, DMG_TYPE_PIERCING, DMG_TYPE_SLASHING } from './DamageTypes';
import { WPN_FAMILY_AXE, WPN_FAMILY_BLADE, WPN_FAMILY_HAMMER, WPN_FAMILY_POLEARM } from './WeaponFamilies';

// hammer family
export const WPN_TYPE_WAR_HAMMER = 'WPN_TYPE_WAR_HAMMER';
export const WPN_TYPE_SLEDGE_HAMMER = 'WPN_TYPE_SLEDGE_HAMMER';
export const WPN_TYPE_CLUB = 'WPN_TYPE_CLUB';
export const WPN_TYPE_MACE = 'WPN_TYPE_MACE';
// axe family
export const WPN_TYPE_HEAVY_AXE = 'WPN_TYPE_HEAVY_AXE';
export const WPN_TYPE_HATCHET = 'WPN_TYPE_HATCHET';
// blade family
export const WPN_TYPE_LONGSWORD = 'WPN_TYPE_LONGSWORD';
export const WPN_TYPE_SHORTSWORD = 'WPN_TYPE_SHORTSWORD';
export const WPN_TYPE_DAGGER = 'WPN_TYPE_DAGGER';
// polearm family
export const WPN_TYPE_STAFF = 'WPN_TYPE_STAFF';
export const WPN_TYPE_HALBERD = 'WPN_TYPE_HALBERD';
export const WPN_TYPE_JAVELIN = 'WPN_TYPE_JAVELIN';

const lookup = {
    [WPN_TYPE_WAR_HAMMER]: {
        name: 'War hammer',
        family: WPN_FAMILY_HAMMER,
        key: WPN_TYPE_WAR_HAMMER,
        damageType: DMG_TYPE_BLUDGEONING,
    },
    [WPN_TYPE_SLEDGE_HAMMER]: {
        name: 'Sledge hammer',
        family: WPN_FAMILY_HAMMER,
        key: WPN_TYPE_SLEDGE_HAMMER,
        damageType: DMG_TYPE_BLUDGEONING,
    },
    [WPN_TYPE_CLUB]: {
        name: 'Club',
        family: WPN_FAMILY_HAMMER,
        key: WPN_TYPE_CLUB,
        damageType: DMG_TYPE_BLUDGEONING,
    },
    [WPN_TYPE_MACE]: {
        name: 'Mace',
        family: WPN_FAMILY_HAMMER,
        key: WPN_TYPE_MACE,
        damageType: DMG_TYPE_BLUDGEONING,
    },
    [WPN_TYPE_HEAVY_AXE]: {
        name: 'Heavy axe',
        family: WPN_FAMILY_AXE,
        key: WPN_TYPE_HEAVY_AXE,
        damageType: DMG_TYPE_SLASHING,
    },
    [WPN_TYPE_HATCHET]: {
        name: 'Hatchet',
        family: WPN_FAMILY_AXE,
        key: WPN_TYPE_HATCHET,
        damageType: DMG_TYPE_SLASHING,
    },
    [WPN_TYPE_LONGSWORD]: {
        name: 'Longsword',
        family: WPN_FAMILY_BLADE,
        key: WPN_TYPE_LONGSWORD,
        damageType: DMG_TYPE_SLASHING,
    },
    [WPN_TYPE_SHORTSWORD]: {
        name: 'Shortsword',
        family: WPN_FAMILY_BLADE,
        key: WPN_TYPE_SHORTSWORD,
        damageType: DMG_TYPE_SLASHING,
    },
    [WPN_TYPE_DAGGER]: {
        name: 'Dagger',
        family: WPN_FAMILY_BLADE,
        key: WPN_TYPE_DAGGER,
        damageType: DMG_TYPE_SLASHING,
    },
    [WPN_TYPE_STAFF]: {
        name: 'Staff',
        family: WPN_FAMILY_POLEARM,
        key: WPN_TYPE_STAFF,
        damageType: DMG_TYPE_BLUDGEONING,
    },
    [WPN_TYPE_HALBERD]: {
        name: 'Halberd',
        family: WPN_FAMILY_POLEARM,
        key: WPN_TYPE_HALBERD,
        damageType: DMG_TYPE_PIERCING,
    },
    [WPN_TYPE_JAVELIN]: {
        name: 'Javelin',
        family: WPN_FAMILY_POLEARM,
        key: WPN_TYPE_JAVELIN,
        damageType: DMG_TYPE_PIERCING,
    },
};

export const getWeaponType = (type) => lookup[type];
export const getWeaponTypeName = (type) => lookup[type].name;
export const getWeaponTypeFamily = (type) => lookup[type].family;
export const getWeaponTypeDmgType = (type) => lookup[type].damageType;

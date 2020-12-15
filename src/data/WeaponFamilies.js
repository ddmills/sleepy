export const WPN_FAMILY_HAMMER = 'WPN_FAMILY_HAMMER';
export const WPN_FAMILY_AXE = 'WPN_FAMILY_AXE';
export const WPN_FAMILY_BLADE = 'WPN_FAMILY_BLADE';
export const WPN_FAMILY_ARCHERY = 'WPN_FAMILY_ARCHERY';
export const WPN_FAMILY_POLEARM = 'WPN_FAMILY_POLEARM';

const lookup = {
    [WPN_FAMILY_HAMMER]: {
        name: 'Hammer'
    },
    [WPN_FAMILY_AXE]: {
        name: 'Axe'
    },
    [WPN_FAMILY_BLADE]: {
        name: 'Blade'
    },
    [WPN_FAMILY_ARCHERY]: {
        name: 'Archery'
    },
    [WPN_FAMILY_POLEARM]: {
        name: 'Polearm'
    },
};

export const getWeaponFamilyName = (family) => lookup[family].name;

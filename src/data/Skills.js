import ArmorSkill from './skills/ArmorSkill';
import SpeedSkill from './skills/SpeedSkill';
import ThrowingSkill from './skills/ThrowingSkill';
import DodgeSkill from './skills/DodgeSkill';

export const SKILL_SPEED = 'SKILL_SPEED';
export const SKILL_THROWING = 'SKILL_THROWING';
export const SKILL_ARMOR = 'SKILL_ARMOR';
export const SKILL_DODGE = 'SKILL_DODGE';

const lookup = {
    [SKILL_ARMOR]: new ArmorSkill(),
    [SKILL_SPEED]: new SpeedSkill(),
    [SKILL_THROWING]: new ThrowingSkill(),
    [SKILL_DODGE]: new DodgeSkill(),
};

export const getSkill = (key) => lookup[key];
export const getSkillName = (key) => lookup[key].name;
export const getSkillValue = (key, entity) => lookup[key].compute(entity);
export const getSkillsByStat = (stat) => Object.values(lookup).filter(s => s.baseStat === stat);
export const getSkillEquippedMod = (key, entity) => {
    const modifiers = [];

    entity.fireEvent(`query-skill-mod-equipped`, {
        skill: key,
        modifiers,
    });

    return modifiers;
};
export const getAllSkillEquippedMods = (entity) => {
    return Object.keys(lookup).reduce(
        (mods, skill) => ({
            ...mods,
            [skill]: getSkillEquippedMod(skill, entity),
        }),
        {}
    );
};
export const getAllSkillEquippedModSums = (entity) => {
    const mods = getAllSkillEquippedMods(entity);

    return Object.keys(mods).reduce(
        (all, skill) => ({
            ...all,
            [skill]: mods[skill].reduce((sum, mod) => sum + mod.mod, 0),
        }),
        {}
    );
};

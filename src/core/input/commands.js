import { INPUT_DOMAIN_MAIN_MENU, INPUT_DOMAIN_DEFAULT, INPUT_DOMAIN_GAME } from './InputDomainType'
import InputCommand from './InputCommand';
import { INPUT_CMD_WAIT,
    INPUT_CMD_MOVE_NW,
    INPUT_CMD_MOVE_N,
    INPUT_CMD_MOVE_NE,
    INPUT_CMD_MOVE_W,
    INPUT_CMD_MOVE_E,
    INPUT_CMD_MOVE_SW,
    INPUT_CMD_MOVE_S,
    INPUT_CMD_MOVE_SE,
    INPUT_CMD_CONFIRM,
    INPUT_CMD_CANCEL
} from './InputCommandType';
import { KEY_S,
    KEY_Q,
    KEY_W,
    KEY_E,
    KEY_A,
    KEY_D,
    KEY_Z,
    KEY_X,
    KEY_C,
    KEY_ENTER,
    KEY_ESCAPE,
    KEY_UP,
    KEY_LEFT,
    KEY_RIGHT,
    KEY_DOWN,
    KEY_SPACE} from './KeyCodes';

const cmd = (domain, type, name, isKeyboard, key, shift, ctrl, alt, meta) => new InputCommand({
    domain,
    type,
    name,
    isKeyboard,
    key,
    shift,
    ctrl,
    alt,
    meta
});

// prettier-ignore
export default [
    // DOMAIN                   CMD                 NAME        KB    KEY           SHIFT  CTRL   ALT    META
    cmd(INPUT_DOMAIN_DEFAULT,   INPUT_CMD_CONFIRM,  'confirm',  true, KEY_ENTER,    false, false, false, false),
    cmd(INPUT_DOMAIN_DEFAULT,   INPUT_CMD_CONFIRM,  'confirm2', true, KEY_SPACE,    false, true,  false, false),
    cmd(INPUT_DOMAIN_DEFAULT,   INPUT_CMD_CANCEL,   'cancel',   true, KEY_ESCAPE,   false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_WAIT,     'wait',     true, KEY_S,        false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_NW,  'move_nw',  true, KEY_Q,        false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_N,   'move_n',   true, KEY_W,        false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_N,   'move_n2',  true, KEY_UP,       false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_NE,  'move_ne',  true, KEY_E,        false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_W,   'move_w',   true, KEY_A,        false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_W,   'move_w2',  true, KEY_LEFT,     false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_E,   'move_e',   true, KEY_D,        false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_E,   'move_e2',  true, KEY_RIGHT,    false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_SW,  'move_sw',  true, KEY_Z,        false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_S,   'move_s',   true, KEY_X,        false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_S,   'move_s2',  true, KEY_DOWN,     false, false, false, false),
    cmd(INPUT_DOMAIN_GAME,      INPUT_CMD_MOVE_SE,  'move_se',  true, KEY_C,        false, false, false, false),
];

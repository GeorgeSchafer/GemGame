import {
    // Constants
    display,
    flex,
    event,
    unit,

    // Base Classes
    OptionSelection,
    StyleSheet,
    Listener,
    ListenerOnLoad,

    // Classables
    // // Containers
    Img,
    Div,
    DivBtn,
    FlexBox,
    Figure,
    Form,
    Label,

    // // Input
    Button,
    Input,
    TextArea,
    Select,
    Option,
    // // Format elements
    Br,
    //  // External Resource Links
    Link,
    Style,

    // Text Elements
    // // Headers
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    // // Body Text
    P,
    Figcaption,
    A,
    Strong,
    Abbr,
    Blockquote,
    Sub,
    Sup,
    Span,
    Text,
    Code,
    Pre,

    // Functions
    getStylesheetByFileName,
    addAdoptedStyleSheet,
    JSONCSS,
} from './vjsc/vanilla.mjs'
import {
    EasyAccessor,
    Enum,
    Config,
    View,
    Player,
    Position,
    Scene,
    Score,
    Spread,
    Typeface,
    Frame,
    SquareFrame,
    Img as PhaserImg,
    SpriteSheet,
} from './phaserhelpers/index.mjs'



const gem_path = {
    gray: {
        color: 'gray',
        name: 'hematite',
        type: 'dud',
    },
    red: {
        color: 'red',
        name: 'ruby',
        type: 'primary',
    },
    orange: {
        color: 'orange',
        name: 'citrine',
        type: 'secondary',
    },
    yellow: {
        color: 'yellow',
        name: 'topaz',
        type: 'primary',
    },
    green: {
        color: 'green',
        name: 'emerald',
        type: 'secondary',
    },
    blue: {
        color: 'blue',
        name: 'sapphire',
        type: 'primary',
    },
    violet: {
        color: 'violet',
        name: 'amethyst',
        type: 'secondary',
    },
    white: {
        color: 'white',
        name: 'diamond',
        type: 'wild',
    },
}

const IMG =
{
    red: './img/png/red.png',
    orange: './img/png/orange.png',
    yellow: './img/png/yellow.png',
    green: './img/png/green.png',
    blue: './img/png/blue.png',
    violet: './img/png/violet.png',
    white: './img/png/white.png',
    gray: './img/png/gray.png'
}
const game = new Phaser.Game(config(VIEW, PHYSICS))
const VIEW = new View(800,600)
const PHYSICS = {
    default: 'arcade',
    arcade: {
        gravity: { y: 256 },
        debug: false
    }
}

function config(VIEW, PHYSICS){
    const config = new Config(VIEW, PHYSICS)
    
    config.scene = {
        preload: preload,
        create: create,
        update: update
    }

    return config
}

function preload (){
}

function create (){
}

function update (){
}





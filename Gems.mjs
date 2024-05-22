import {
    // Constants
    display,
    flex,
    event,
    unit,

    // Base Classes
    Selection,
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
import { Grid } from './grid/Grid.mjs'

const keyframe = {
    fall1spot: 'fall1spot',
    // animation: fall1spot .5
    fall2spot: 'fall2spot',
    // animation: fall2spot
    fall3spot: 'fall3spot',
    // animation: fall3spot
    fall4spot: 'fall4spot',
    // animation: fall4spot
    fall5spot: 'fall5spot',
    // animation: fall5spot
    fall6spot: 'fall6spot',
    // animation: fall6spot
    fall7spot: 'fall7spot',
    // animation: fall7spot
    fall8spot: 'fall8spot',
    // animation: fall8spot
    matched: {
        class: 'matched',
        animation: 'matched .5s ease 0s 1 normal forwards;'
    },
    // animation: animation: matched .5s ease 0s 1 normal forwards;
}

const colorHex = {
    gray: '#444',
    red: '#d44',
    orange: '#f60',
    yellow: '#da4',
    green: '#4d4',
    blue: '#33a',
    violet: '#a4d',
    white: '#fff'
}

const gem = {
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
    red: './img/red.svg',
    orange: './img/orange.svg',
    yellow: './img/yellow.svg',
    green: './img/green.svg',
    blue: './img/blue.svg',
    violet: './img/violet.svg',
    white: './img/white.svg',
    gray: './img/gray.svg'
}

class Gem {
    type = ''

    constructor(IMG, classes = [], spot) {
        this.img = new Img(IMG, 'gem', ['gem'])
        this.container = new Div(null, spot)
        this.container.appendChild(this.img)
        this.selectListener()
        this.spot = spot
        this.element = this.container.element
    }

    static random(spot) {
        const i = Math.floor(Math.random() * 19)
        let constructedGem

        if (i >= 0 && i <= 1) {
            constructedGem = new Gray([gem.gray.color], spot)
        }
        else if (i >= 2 && i <= 4) {
            constructedGem = new Red([gem.red.color], spot)
        }
        else if (i >= 5 && i <= 6) {
            constructedGem = new Orange([gem.orange.color], spot)
        }
        else if (i >= 7 && i <= 10) {
            constructedGem = new Yellow([gem.yellow.color], spot)
        }
        else if (i >= 11 && i <= 12) {
            constructedGem = new Green([gem.green.color], spot)
        }
        else if (i >= 13 && i <= 15) {
            constructedGem = new Blue([gem.blue.color], spot)
        }
        else if (i >= 16 && i <= 17) {
            constructedGem = new Violet([gem.violet.color], spot)
        }
        else if (i >= 18 && i <= 18) {
            constructedGem = new White([gem.white.color], spot)
        }
        else {
            throw new Error(`Gem.random() generated an out-of-bound integer: ${i}`)
        }

        constructedGem.element.id = `spot-${spot}`
        return constructedGem
    }

    selectListener(){
        this.img.addEventListener(event.element.click, () => {
            const summary = 'select a gem to move'
            this.img.element.animation = keyframe.select.animation
            if (this.img.element.classList.contains('selected')) {
                this.img.element.classList.remove('selected')
                selected--
            } else if (!this.img.element.classList.contains('selected') && selected < 2) {
                this.img.element.classList.add('selected')
                this.img.element.classList.add('matched')
                selected++
            }
        })
    }

    matchListener() {
        this.img.listeners.push(
            event.element.click, () => {
                console.log('Summary: re-creates the img element with ' +
                    'the match animation.')
                const classes = ['gem','matched']
                this.img = new Img(this.element.src, this.element.alt, classes, this.element.id)
            })

        // this.img.listeners.push(
        //     this.img.listeners.addEventListener(event.element.click, () => {
        //         console.log('runs the match animation')
        //         const classes = ['gem', 'img'] // img class? what am I thinking?
        //         classes = classes.splice(classes.indexOf(keyframe.fall8),1)
        //         classes.push('matched')
        //         classes.push('gem')
        //         this.img = new IMG(this.element.src, this.element.alt, classes, this.element.id)
        // }))
    }
}

class Gray extends Gem {
    type = gem.gray.type

    constructor(classes = [], spot) {
        super(IMG.gray, classes, spot)
    }
}

class Red extends Gem {
    type = gem.red.type

    constructor(classes = [], spot) {
        super(IMG.red, classes, spot)
    }
}

class Orange extends Gem {
    type = gem.orange.type

    constructor(classes = [], spot) {
        super(IMG.orange, classes, spot)
    }
}

class Yellow extends Gem {
    type = gem.yellow.type

    constructor(classes = [], spot) {
        super(IMG.yellow, classes, spot)
    }
}

class Green extends Gem {
    type = gem.yellow.type

    constructor(classes = [], spot) {
        super(IMG.green, classes, spot)
    }
}

class Blue extends Gem {
    type = gem.blue.type

    constructor(classes = [], spot) {
        super(IMG.blue, classes, spot)
    }
}

class Violet extends Gem {
    type = gem.violet.type

    constructor(classes = [], spot) {
        super(IMG.violet, classes, spot)
    }
}

class White extends Gem {
    type = gem.white.type

    constructor(classes = [], spot) {
        super(IMG.white, classes, spot)
    }
}

class Line {
    spot = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

    constructor(int){
        this.flexbox = new FlexBox(flex.cr, ['line', flex.flow.default], `line${int}`)
        this.element = FlexBox.element
        // this.flexBox = new FlexBox(flex.cr, ['line', flex.flow.default], `line${ this.renderSpot(int)}`)
        // this.renderSpot()
    }

    constructors(int) {
        int = BigInt(int)
        this.flexBox = new FlexBox(flex.cr, ['line', flex.flow.default], `line${this.renderSpot(int)}`)
    }

    renderSpot(int){
        int = BigInt(int)
        let result = ''
        let placeInt = int
        let charInt = int

        console.log('start:', typeof int, int, '\n',)

        while(placeInt > 1){
            if(placeInt % 10n === 0) placeInt /= BigInt(10)
            charInt = placeInt%BigInt(10)
            result += this.spot[charInt]
            placeInt --

            console.log(
                'places:', placeInt, '\n', 
                'charInt:', charInt, '\n',
                'char:', this.spot[charInt], '\n', 
                'result:', result)
        }


    }

    getSpot(char) {
        if ('abcdefghij'.includes(char) === false) {
            throw new Error('Line.getSpot() received an invalid character')
        }
        else {
            return this.element.querySelector(`#spot-${char}`)
        }
    }

    pushGem(gem) {
        this.element.appendChild(gem)
    }  

    removeGem(char) {
        this.getSpot(char).removeChild()
    }

}

class PlayField {
    constructor(height=8n, width=8n) {
        width = BigInt(width)
        height = BigInt(height)
        this.grid = new Grid(height, width)
        this.container = new FlexBox(flex.r, ['field'], 'field')
        this.lines = []


    }

    getLine(int) {
        return this.lines[int]
    }

    getSpot(int, char) {
        return this.lines[int].getSpot(char)
    }
}

const play = new PlayField()
const grid = play.data

let selected = 0

document.body.appendChild(play.container.element)



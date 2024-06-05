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

const kframe = {
    fall: 'fall',
    matched: 'matched',
    mergeDown: 'merge-down',
    mergeUp: 'merge-up',
    mergeRight: 'merge-right',
    mergeLeft: 'merge-left'
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

class BigIntArray extends Array {
    constructor(args){
        super(args)
    }

    getIndex(n){
        if(typeof n === 'bigint'){
            return this[Number.parseInt(n)]
        } else {
            return this[n]
        }
    }

    indexOf(char){
        return this.indexOf(char)
    }
}

class Gem {
    type = ''

    constructor(IMG, classes = [], spot) {
        this.img = new Img(IMG, 'gem', ['gem'], spot)
        this.selectListener()
        this.element = this.img.element
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
            if (this.element.classList.contains('selected')) {
                this.element.classList.remove('selected')
                selected--
            } else if (!this.element.classList.contains('selected') && selected < 2) {
                this.element.classList.add('selected')
                // this.element.classList.add('matched')
                selected++
            }
        })
    }

    matchListener() {

        this.img.listeners.push(
            this.img.listeners.addEventListener(event.element.click, () => {
                const summary = 'runs the match animation'
                console.log(summary)
                const classes = ['gem', 'img']
                classes = classes.splice(classes.indexOf('fall'),1)
                classes.push('matched')
                classes.push('gem')
                this.img = new IMG(this.element.src, this.element.alt, classes, this.element.id)
        }))
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

class FieldColumn { // integers must be of type BigInt
    static spot = new BigIntArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])

    constructor(spotInt){
        this.div = new FlexBox(flex.cr, ['line', flex.flow.default], `line${spotInt}`)
        this.element = this.div.element
        this.renderSpot(spotInt)
    }

    renderSpot(spotInt){
        let renderedSpot = ''
        let placeInt = spotInt // tens, hundreds, or thousands place
        let charInt = spotInt

        while(placeInt > 1n){
            charInt = placeInt % 10n
            renderedSpot += FieldColumn.spot[Number(charInt)]
            placeInt --
            const gem = Gem.random()
            this.element.appendChild(gem.element)
        }


    }

    getSpot(char) {
        if ('abcdefghij'.includes(char) === false) {
            throw new Error('Line.getSpot() received an invalid character')
        } else {
            return this.element.querySelector(`#spot-${char}`)
        }
    }

    pushGem(gem) {
        this.element.appendChild(gem)
    }  

    removeGem(char) {
        const nodes = new Array(this.getSpot(char).childNodes)
        nodes.forEach(node => node.remove())
    }

}

class PlayField {
    
    constructor(height=8n, width=8n) {
        this.width = BigInt(width)
        this.height = BigInt(height)
        this.grid = new Grid(height, width)
        this.container = new FlexBox(flex.r, ['field'], 'field')
        this.element = this.container.element
        this.columns = []
        this.createColumns()
        this.columns.forEach(column => {
            this.element.appendChild(column)
        })

    }

    createColumns(){
        for(let i = 0n; i < this.width; i++){
            const column = new FieldColumn(i)
            this.columns.push = column
            this.element.appendChild(column.element)
        }
        console.log('createColumns() finished')
    }

    getColumn(int) {
        return this.columns[int]
    }

    getSpot(int, char) {
        return this.columns[int].getSpot(char)
    }

    placeGem(x,y,gem=Gem.random()){
        this.getSpot(x,y).appendChild(gem)
        this.data.getNode(x,y).data = gem
    }
}

const playField = new PlayField(4,4)
let selected = 0



document.body.appendChild(playField.container.element)




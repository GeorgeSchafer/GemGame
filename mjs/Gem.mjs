import {
    SquareFrame,
    Img as PhaserImg
} from "../phaserhelpers/index.mjs";

class Gem {
    constructor(alias='', path='', ){
        this.frame = new SquareFrame(64)
        this.img = new PhaserImg(alias, path)
        // this.
    }

}

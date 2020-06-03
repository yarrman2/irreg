let verbs = DATA || {};
const letters = Object.keys(verbs);



function app () {
    return {
        verbs,
        verbsShuffle: [],
        isShuffled: false,
        letters,
        currentLetter: '',
        cardIdx: 0,
        defaultRu: true,
        toogle:false,
        getCard(isRu = true) {
            if (this.currentLetter == '') return '';
            if (isRu) {
                return this.isShuffled ? this.verbsShuffle[this.cardIdx][3] : this.verbs[this.currentLetter][this.cardIdx][3];
            } else {
                return this.isShuffled ? this.verbsShuffle.slice(0,3).join(' - ') : this.verbs[this.currentLetter][this.cardIdx].slice(0,3).join(' - ');
            }
        },
        nextCard() {
            if (this.cardIdx + 1 >= this.getLength()) {
                this.cardIdx = 0;
            } else {
                this.cardIdx++;
            }
            this.toogle = !this.defaultRu;
        },
        toogleCard() {
            this.toogle = !this.toogle;
        },
        getLength () {
            if (this.currentLetter == '') return 0;
            return this.verbs[this.currentLetter].length;
        },
        chooseLetter(e) {
            console.log(e);
            this.currentLetter = e;
            this.cardIdx = 0;
            this.toogle = !this.defaultRu;
            this.shuffleArray();    
        },
        shuffleArray () {
            this.verbsShuffle  = this.verbs[this.currentLetter].slice();
            for (let i = 0; i < this.verbsShuffle.length; i++) {
                let idx = Math.random() * this.verbsShuffle.length >> 0;
                [this.verbsShuffle[i], this.verbsShuffle[idx]] = [this.verbsShuffle[idx], this.verbsShuffle[i]];
            }
        }
    }
}
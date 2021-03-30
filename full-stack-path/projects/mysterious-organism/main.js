// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFacotry = (specimenNum, dna) => {
    return {
	specimenNum: specimenNum,
	dna: dna,
	mutate() {
	    const randBaseId = Math.floor(Math.random() * dna.length);
	    const oldBase = this.dna[randBaseId];
	    let newBase;
	    do {
		newBase = returnRandBase();
	    } while (newBase === oldBase);
	    this.dna[randBaseId] = newBase;
	},
	compareDNA(that) {
	    let count = 0;
	    for (let i = 0; i < this.dna.length; i++)
		if (this.dna[i] === that.dna[i]) count++;
	    const percentCommon = Math.round(100*(count / this.dna.length));
	    console.log(`Specimen #${this.specimenNum} and specimen ` +
			`#${that.specimenNum} have ${percentCommon}% of their DNA in common.`)
	},
	willLikelySurvive() {
	    const countBasesCG = (sum, dnaBase) => (dnaBase === 'C' || dnaBase === 'G') ? sum + 1 : sum;
	    const ratioBasesCG = this.dna.reduce(countBasesCG, 0) / this.dna.length;
	    return ratioBasesCG >= 0.6;
	}
    }
}

const createPAequorsThatCanSurvive = n => {
    const aequors = [];
    let id = 1;
    while (aequors.length < 30) {
	const aequor = pAequorFacotry(id, mockUpStrand());
	if (aequor.willLikelySurvive) {
	    aequors.push(aequor);
	    id++;
	}
    }
    return aequors;
}

const aequors30 = createPAequorsThatCanSurvive(30);
console.log(aequors30);

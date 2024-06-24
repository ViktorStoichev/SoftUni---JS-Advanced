// function constructionCrew () {
//     let workerObj = {
//         weight: 80,
//         experience: 1,
//         levelOfHydrated: 0,
//         dizziness: true,
//         hydration: function() {
//             if (this.dizziness) {
//                 this.levelOfHydrated = (this.weight * 0.1) * this.experience;
//                 this.dizziness= false;
//             }
//         }
//     }

//     return workerObj;
// }

// constructionCrew();

function constructionCrew(worker) {

    if (worker.dizziness) {
        worker.levelOfHydrated = 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }
    
    return worker;
}

let worker = {
    weight: 80,
    experience: 5,
    levelOfHydrated: 0,
    dizziness: true
};

let updatedWorker = constructionCrew(worker);
console.log(updatedWorker);
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const charFreq = new Map();
    for(let i=0; i<tasks.length; i++){
        charFreq.set(tasks[i], (charFreq.get(tasks[i]) || 0) + 1);
    }
    
    let maxFreq = 0;
    for(const val of charFreq.values()){
        maxFreq = Math.max(maxFreq, val);
    }

    let maxFreqChars = 0;
    for(const val of charFreq.values()){
        if(val === maxFreq) maxFreqChars++;
    }

    const intervals = (maxFreq - 1) * (n + 1) + maxFreqChars;

    return Math.max(tasks.length, intervals);
};
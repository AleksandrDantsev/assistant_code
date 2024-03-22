const find_matches = (word, object) => {
    const lowerTrimWord = word.toLowerCase().trim();
    const answers = [];
    
    for (let [category, val] of Object.entries(object)) {
        for (let [key, answer] of Object.entries(val)) {
            let lowerText = JSON.stringify(answer).toLowerCase()
            
            if (lowerText.indexOf(lowerTrimWord) != -1) {
                answers.push([key, answer, category])
            }
        }
    }

    return answers;
}


  const debounce = (callback, wait=300) => {
    let timer = null;
    return (...args) => {
        window.clearTimeout(timer);
        timer = setTimeout(() => {
        callback(...args);
        }, wait);
    };
}

export { find_matches, debounce }
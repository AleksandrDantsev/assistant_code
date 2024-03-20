const getID = (objectData) => {
    const hash = {}

    for (let key in objectData) {
        hash[key] = objectData[key]['ques']
    }

    console.log(hash)
}

export { getID }
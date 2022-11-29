const url = '/api/greetings'

const load = async () => {
    let result = []
    await fetch(url).then((res) => res.json()).then((data) => {
        result = [...data];
    });
    return result
}

export default load;
function sumNumer(obj) {
    return Object.values(obj).reduce((sum, value) => {
        return typeof value === 'number' ? sum + value : sum;
    }, 0);
}

function getSortedNumer(obj) {
    return Object.entries(obj)
        .filter(([key, value]) => typeof value === 'number')
        .sort((a, b) => b[1] - a[1])
        .map(([key]) => key);
}

const data = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
console.log(sumNumer(data));
console.log(getSortedNumer(data)); 

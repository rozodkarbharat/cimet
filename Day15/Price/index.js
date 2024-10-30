const awards = [
    { name: "James Peebles", category: "javelin", team: "Mumbai Indians", year: 2019 },
    { name: "Michel Mayor", category: "javelin", team: "Gujarat Titans", year: 2019 },
    { name: "Didier Queloz", category: "javelin", team: "Gujarat Titans", year: 2019 },
    { name: "John B. Goodenough", category: "Shooting", team: "Chennai Super Kings", year: 2019 },
    { name: "M. Stanley Whittingham", category: "Shooting", team: "Chennai Super Kings", year: 2019 },
    { name: "Akira Yoshino", category: "Shooting", team: "Chennai Super Kings", year: 2019 },
    { name: "Arthur Ashkin", category: "javelin", team: "Pune Warriors", year: 2018 },
    { name: "Gerard Mourou", category: "javelin", team: "Deccan Chargers", year: 2018 },
    { name: "Dona Strickland", category: "javelin", team: "Deccan Chargers", year: 2018 },
    { name: "Frances H. Arnold", category: "Shooting", team: "Kolkata Riders", year: 2018 },
    { name: "George P. Smith", category: "Shooting", team: "Sunrisers Hyderabad", year: 2018 },
    { name: "Sir Gregory P. Winter", category: "Shooting", team: "Sunrisers Hyderabad", year: 2018 },
];

function calculatePrice(awards) {
    let tempData = {}

    if(awards.length==0) return []; 
    for (var a = 0; a < awards.length; a++) {
        if (tempData.hasOwnProperty(awards[a].category + awards[a].year)) {
            tempData[awards[a].category + awards[a].year].push(awards[a])
        }
        else {
            tempData[awards[a].category + awards[a].year] = [awards[a]]
        }
    }

    for (let key in tempData) {
        let data = {}
        for (let i = 0; i < tempData[key].length; i++) {
            if (data.hasOwnProperty(tempData[key][i].team)) {
                data[tempData[key][i].team] = data[tempData[key][i].team] + 1
            }
            else {
                data[tempData[key][i].team] = 1
            }
        }

        for (let i = 0; i < tempData[key].length; i++) {
            tempData[key][i].share = ((1 / Object.keys(data).length) / data[tempData[key][i].team]).toFixed(2)

        }

    }

    let answer = []

    Object.values(tempData).forEach(element => {
        let tempTeamObj = { category: element[0].category, year: element[0].year, winnwers: element }
        answer.push(tempTeamObj)
    });
    return answer
}


const testCase3 = [
    { name: "Alex", category: "archery", team: "Arrow Aces", year: 2025 },
    { name: "Beth", category: "archery", team: "Arrow Aces", year: 2025 },
    { name: "Carl", category: "fencing", team: "Sword Stars", year: 2025 },
    { name: "Dana", category: "fencing", team: "Sword Stars", year: 2025 },
    { name: "Erik", category: "fencing", team: "Sword Stars", year: 2025 },
  ];

console.log(calculatePrice(testCase3))

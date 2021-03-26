//Inicio do Map
const products = [
    {name:'Mouse de bolinha', price: 30},
    {name:'CD ROM',price: 25},
    {name:'Impressora',price:100},
    {name:'Monitor de tubo',price:23},
    {name:'Roteador',price: 44}
]

const saleProducts = products.map(product =>{
    if (product.price >=30){
        return {name:product.name, price: product.price /2 }
    }
    return product 
})

console.log(saleProducts)
console.log(products)


// Inicio do Filter
const users = [
    { name: 'Ashe', premium: true },
    { name: 'Blitz', premium: false },
    { name: 'Draven', premium: true },
    { name: 'Cassiopeia', premium: false },
    { name: 'Rengar', premium: true }
]

const premiumUser = users.filter(user => user.premium)

console.log(premiumUser)


// Inicio do reducer

const numbers=[1,2,3]
    
const sumResult = numbers.reduce((accumulator,item) => accumulator + item,0)

console.log(sumResult)

// descobrir score dos jogadores com reduce

const phaseScore =[
    {name:'Faker', score:2000},
    {name: 'Huni', score:1800},
    {name: 'Uzi', score:1600},
    {name: 'doublelift', score:1500},
    {name: 'Kami', score:1400},    
    {name: 'Bjergsen', score:1700},
    {name:'Faker', score:1200},
    {name: 'Huni', score:1100},
    {name: 'Uzi', score:1300},
    {name: 'doublelift', score:1200},
    {name: 'Kami', score:1400},    
    {name: 'Bjergsen', score:1500}
]

const huniScore = phaseScore.reduce((accumulator,phaseScore)=>{
    if(phaseScore.name === 'Huni'){
        accumulator += phaseScore.score
    }
    return accumulator
},0)

console.log(huniScore)

//calculate
function calculateSum(num1,num2, ...props) {
    if(props < 2){
        return `n<2 მიუთითეთ მეტი რიცხვი`
    }
    else{
        let sum = 0
        let sum_2 = 1
        sum = num1 + num2

        for(const numbers of props) {
            sum_2 *= numbers
        }

        return `${sum} შეკრება, ${sum_2} გამრავლება` 
    }
}

console.log(calculateSum(5,51,3,95,95,63541,16,54,98421,26,654))

//user obj
const user = {
    bank: [
        {
            bankName: 'Keshbank'
        },
        {
            bankInformation: 'noinformation'
        },
        {
          address: {
            city: 'tbilisi'
          }  
        }
    ]
}
//finding user city
const findCity = ( {bank: [, , { address: { city } = {} } = {} ] } = user ) => {
    return console.log(city)
} 

findCity()

const activeUser = {
    name: 'Giorgi',
    lastName: 'Keshelashvili',
    detailes: {
        age: 16,
        address: {
            city: 'Tbilisi'
        }
    }
}

function cloneUser(activeUser){
    let cloned = {...activeUser, detailes: {...activeUser.detailes, address: {...activeUser.detailes.address}}}
    
    cloned.name = 'nika'
    cloned.lastName = 'tabidze'
    cloned.detailes.age = 17
    cloned.detailes.address.city = 'misaqcieli'

    return cloned
}

console.log(activeUser, 'original')
console.log(cloneUser(activeUser))


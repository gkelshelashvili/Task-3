//calculate
function calculateSum(num1,num2, ...props) {
    let sum = 0
    let sum_2 = 1
    sum = num1 + num2

    for(const numbers of props) {
        sum_2 *= numbers
    }

    return `${sum} შეკრება, ${sum_2} გამრავლება`
}

console.log(calculateSum(5,5,5,6,5,6,56))

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
const findCity = ({bank: [, , { address: { city } = {} } ] } = user) =>{
    return console.log(city)
} 

findCity()







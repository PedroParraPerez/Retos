import moment from 'moment'
moment.locale(es)





const PREVIOUS_DATE = moment('/01/01/2022').format("DD/MM/YYYY")
const DATE = moment('/31/01/2022').format("DD/MM/YYYY")

const getDiferentDays = (before, after) => {
    return before.diff(after, 'days')
}
console.log(getDiferentDays(PREVIOUS_DATE, DATE))
console.log('PUTO MOMENT')
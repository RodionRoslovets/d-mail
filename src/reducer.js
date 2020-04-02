var shortid=require('shortid');

let letters = [
    { heading: 'Письмо из банка', key:shortid.generate()},
    { heading: 'Письмо из больницы', key:shortid.generate() },
    { heading: 'Письмо из магазина', key:shortid.generate() },
    { heading: 'Рекламное предложение', key:shortid.generate() },
    { heading: 'Рекламное предложение', key:shortid.generate() },
    { heading: 'Рекламное предложение', key:shortid.generate() }
]

const reducer = (state = letters, action)=>{
    switch (action.type){
        default:
            return state
    }
}

export default reducer
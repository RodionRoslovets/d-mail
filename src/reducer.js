var shortid=require('shortid');

const initial = {
    letters:[
        { heading: 'Письмо из банка', content:'Хошь денег?', key:shortid.generate()},
        { heading: 'Письмо из больницы',content:'Хошь лекарств?', key:shortid.generate() },
        { heading: 'Письмо из магазина',content:'Хошь еды?', key:shortid.generate() },
        { heading: 'Рекламное предложение',content:'Хошь много денег?', key:shortid.generate() },
        { heading: 'Рекламное предложение',content:'Хошь много денег?', key:shortid.generate() },
        { heading: 'Рекламное предложение',content:'Хошь много денег?', key:shortid.generate() }
    ]
}

const reducer = (state = initial, action)=>{
    switch (action.type){
        default:
            return state
    }
}

export default reducer
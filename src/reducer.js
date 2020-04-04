var shortid = require('shortid');

const letters = [
    { heading: 'Письмо из банка', content: 'Хошь денег?', status: 'income', key: shortid.generate() },
    { heading: 'Письмо из больницы', content: 'Хошь лекарств?', status: 'income', key: shortid.generate() },
    { heading: 'Письмо из магазина', content: 'Хошь еды?', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение удаленное 1', content: 'Хошь много денег?', status: 'deleted', key: shortid.generate() },
    { heading: 'Рекламное предложение 2', content: 'Хошь очень очень много денег?', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение спам 1', content: 'Хошь очень много денег?', status: 'spam', key: shortid.generate() },
    { heading: 'Рекламное предложение 4', content: 'Хошь много бабла?', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение спам 2', content: 'Хочешь увеличить доход?', status: 'spam', key: shortid.generate() },
    { heading: 'Рекламное предложение 6', content: 'Хошь учиться?', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение спам 3', content: 'Знаешь реакт?', status: 'spam', key: shortid.generate() },
    { heading: 'Рекламное предложение 8 1', content: 'Ходишь работать?', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение важное 1', content: 'Ходишь не работать?', status: 'important', key: shortid.generate() },
    { heading: 'Рекламное предложение 8 2', content: 'Ходишь ходить?', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение важное 2', content: 'Ходишь гулять?', status: 'important', key: shortid.generate() },
    { heading: 'Рекламное предложение 8 3', content: 'Ходишь работать?', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение удаленное 2', content: 'Бегал по утрам?', status: 'deleted', key: shortid.generate() }
]

const reducer = (state = { letters }, action) => {
    switch (action.type) {
        case 'DEL':
            return state = {
                ...state,
                letters:letters.map((item)=>{
                    if(item.key === action.payload){
                        item.status = 'deleted'
                    }
                    return item
                })
            }
        case 'SPAM':
            return state = {
                ...state,
                letters:letters.map((item)=>{
                    if(item.key === action.payload){
                        item.status = 'spam'
                    }
                    return item
                })
            }
        case 'IMP':
            return state = {
                ...state,
                letters:letters.map((item)=>{
                    if(item.key === action.payload){
                        item.status = 'important'
                    }
                    return item
                })
            }
        default:
            return state
            }
    }

    export default reducer
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

let currLetter = {}

function filterPosts(array, template){
    //поиск в массиве по заданому шаблону
    return array.filter((item)=>item.heading.match(new RegExp(`${template}` ,'i')))
}

const reducer = (state = { letters, currLetter }, action) => {
    switch (action.type) {
        case 'OPEN_LETTER':
            //открыть письмо, используя currLetter
            return state = {
                ...state,
                currLetter:letters.filter((item)=>item.key === action.payload)[0]
            }
        case 'DEL':
            //пометить письмо как удаленное
            return state = {
                ...state,
                letters: letters.map((item) => {
                    if (item.key === action.payload) {
                        item.status = 'deleted'
                    }
                    return item
                })
            }
        case 'SPAM':
            //пометить письмо как спам
            return state = {
                ...state,
                letters: letters.map((item) => {
                    if (item.key === action.payload) {
                        item.status = 'spam'
                    }
                    return item
                })
            }
        case 'IMP':
            //пометить письмо как важное
            return state = {
                ...state,
                letters: letters.map((item) => {
                    if (item.key === action.payload) {
                        item.status = 'important'
                    }
                    return item
                })
            }
        case 'RESTORE':
            //пометить письмо как входящее
            return state = {
                ...state,
                letters: letters.map((item) => {
                    if (item.key === action.payload) {
                        item.status = 'income'
                    }
                    return item
                })
            }
        case 'SEARCH':
            //поиск
            let newArr = state.letters
            return state = {
                letters: action.payload ? filterPosts(newArr, action.payload) : letters
            }
        default:
            return state
    }
}

export default reducer
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

let writeLetter = {
    to:'',
    theme:'',
    content:''
}

function filterLetters(array, template){
    //поиск в массиве по заданому шаблону
    return array.filter((item)=>item.heading.match(new RegExp(`${template}` ,'i')))
}

function markLetter(array, temp, mark){
    //Отметить письмо
    return array.map((item) => {
        if (item.key === temp) {
            item.status = mark
        }
        return item
    })
}

const reducer = (state = { letters, currLetter, writeLetter }, action) => {
    switch (action.type) {
        case 'OPEN_LETTER':
            //открыть письмо, используя currLetter
            return state = {
                ...state,
                currLetter:state.letters.filter((item)=>item.key === action.payload)[0]
            }
        case 'DEL':
            //пометить письмо как удаленное
            return state = {
                ...state,
                letters: markLetter(state.letters, action.payload, 'deleted')
            }
        case 'SPAM':
            //пометить письмо как спам
            return state = {
                ...state,
                letters:markLetter(state.letters, action.payload, 'spam')
            }
        case 'IMP':
            //пометить письмо как важное
            return state = {
                ...state,
                letters:markLetter(state.letters, action.payload, 'important')
            }
        case 'RESTORE':
            //пометить письмо как входящее
            return state = {
                ...state,
                letters:markLetter(state.letters, action.payload, 'income')
            }
        case 'SEARCH':
            //поиск
            let newArr = state.letters
            return state = {
                letters: action.payload ? filterLetters(newArr, action.payload) : letters
            }
        case 'WRITE_TO':
            return state = {
                ...state,
                writeLetter:{
                    ...state.writeLetter,
                    to:action.payload ? action.payload : ''
                }
            }
        case 'WRITE_THEME':
            return state = {
                ...state,
                writeLetter:{
                    ...state.writeLetter,
                    theme:action.payload ? action.payload : ''
                }
            }
        case 'WRITE_CONTENT':
            return state = {
                ...state,
                writeLetter:{
                    ...state.writeLetter,
                    content:action.payload ? action.payload : ''
                }
            }
        case 'SEND':
            //Отправка письма
            let letter = {
                to:state.writeLetter.to,
                heading:state.writeLetter.theme,
                content:state.writeLetter.content,
                status:'send',
                key: shortid.generate()
            }
            
            return state = {
                ...state,
                writeLetter:{
                    to:'',
                    theme:'',
                    content:''
                },
                letters:[...state.letters, letter]
            }
        default:
            return state
    }
}

export default reducer
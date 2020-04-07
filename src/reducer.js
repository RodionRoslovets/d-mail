var shortid = require('shortid');

const letters = [
    { heading: 'Письмо из банка', content: 'Хошь денег?', type: 'income', status: 'income', key: shortid.generate() },
    { heading: 'Письмо из больницы', content: 'Хошь лекарств?', type: 'income', status: 'income', key: shortid.generate() },
    { heading: 'Письмо из магазина', content: 'Хошь еды?', type: 'income', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение удаленное 1', content: 'Хошь много денег?', type: 'income', status: 'deleted', key: shortid.generate() },
    { heading: 'Рекламное предложение 2', content: 'Хошь очень очень много денег?', type: 'income', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение спам 1', content: 'Хошь очень много денег?', type: 'income', status: 'spam', key: shortid.generate() },
    { heading: 'Рекламное предложение 4', content: 'Хошь много бабла?', type: 'income', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение спам 2', content: 'Хочешь увеличить доход?', type: 'income', status: 'spam', key: shortid.generate() },
    { heading: 'Рекламное предложение 6', content: 'Хошь учиться?', type: 'income', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение спам 3', content: 'Знаешь реакт?', type: 'income', status: 'spam', key: shortid.generate() },
    { heading: 'Рекламное предложение 8 1', content: 'Ходишь работать?', type: 'income', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение важное 1', content: 'Ходишь не работать?', type: 'income', status: 'important', key: shortid.generate() },
    { heading: 'Рекламное предложение 8 2', content: 'Ходишь ходить?', type: 'income', status: 'income', key: shortid.generate() },
    { heading: 'Рекламное предложение важное 2', content: 'Ходишь гулять?', type: 'income', status: 'important', key: shortid.generate() },
    { heading: 'Рекламное предложение 8 3', content: 'Ходишь работать?', type: 'income', status: 'income', key: shortid.generate() },
    { heading: 'Привет', to: 'Someone', content: 'Ходишь работать?', type: 'send', status: 'send', key: shortid.generate() },
    { heading: 'Рекламное предложение удаленное 2', content: 'Бегал по утрам?', type: 'income', status: 'deleted', key: shortid.generate() },
    { heading: 'Черновик 1', to: 'Someone', content: 'Бегал по утрам?', type: 'income', status: 'draft', key: shortid.generate() }
]

let currLetter = {}

let writeLetter = {
    to: '',
    theme: '',
    content: ''
}

function filterLetters(array, template) {
    //поиск строки в массиве по заданому шаблону
    return array.filter((item) => item.heading.match(new RegExp(`${template}`, 'i')))
}

function getType(array, id) {
    //получить тип письма из массива
    let elem = array.filter((item) => item.key === id)[0]
    return elem.type
}

function getStatus(array, id) {
    //получить тип письма из массива
    let elem = array.filter((item) => item.key === id)[0]
    return elem.status
}

function markLetter(array, temp, mark) {
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
                currLetter: state.letters.filter((item) => item.key === action.payload)[0]
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
                letters: markLetter(state.letters, action.payload, 'spam')
            }
        case 'IMP':
            //пометить письмо как важное/неважное, зависит от статуса
            return state = {
                ...state,
                letters: markLetter(state.letters, action.payload, getStatus(state.letters, action.payload) === 'income' ? 'important' : 'income')
            }
        case 'RESTORE':
            //восстановление письма, зависит от типа
            return state = {
                ...state,
                letters: markLetter(state.letters, action.payload, getType(state.letters, action.payload) === 'income' ? 'income' : 'send')
            }
        case 'SEARCH':
            //поиск
            let newArr = state.letters
            return state = {
                ...state,
                letters: action.payload ? filterLetters(newArr, action.payload) : letters
            }
        case 'WRITE_TO':
            return state = {
                ...state,
                writeLetter: {
                    ...state.writeLetter,
                    to: action.payload ? action.payload : ''
                }
            }
        case 'WRITE_THEME':
            return state = {
                ...state,
                writeLetter: {
                    ...state.writeLetter,
                    theme: action.payload ? action.payload : ''
                }
            }
        case 'WRITE_CONTENT':
            return state = {
                ...state,
                writeLetter: {
                    ...state.writeLetter,
                    content: action.payload ? action.payload : ''
                }
            }
        case 'SEND':
            // Отправка письма
            let isDraft = state.currLetter.status === 'draft'

            let letter = {
                to: state.writeLetter.to,
                heading: state.writeLetter.theme,
                content: state.writeLetter.content,
                type: 'send',
                status: 'send',
                key: shortid.generate()
            }

            //Если отправка идет из черновика то меняем статус
            if (isDraft) {
                return state = {
                    ...state,
                    currLetter: {},
                    writeLetter: {
                        ...state.writeLetter,
                        to: '',
                        theme: '',
                        content: ''
                    },
                    letters: markLetter(state.letters, state.currLetter.key, 'send')
                }
            }
            
            return state = {
                ...state,
                writeLetter: {
                    to: '',
                    theme: '',
                    content: ''
                },
                letters: [...state.letters, letter]
            }
        case 'DRAFT':
            //Создание черновика
            let draft = {
                to: state.writeLetter.to,
                heading: state.writeLetter.theme,
                content: state.writeLetter.content,
                type: 'send',
                status: 'draft',
                key: shortid.generate()
            }

            return state = {
                ...state,
                writeLetter: {
                    ...state.writeLetter,
                    to: '',
                    theme: '',
                    content: ''
                },
                letters: [...state.letters, draft]
            }
        case 'EDIT':
            return state = {
                ...state,
                writeLetter: { ...state.currLetter, theme: state.currLetter.heading }
            }
        default:
            return state
    }
}

export default reducer
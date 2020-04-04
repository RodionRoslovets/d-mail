export const openLetter = (id)=>({type:'OPEN_LETTER', payload:id});
export const del = (id)=>({type:'DEL', payload:id});
export const imp = (id)=>({type:'IMP', payload:id});
export const spam = (id)=>({type:'SPAM', payload:id});
export const restore = (id)=>({type:'RESTORE', payload:id});
export const search = (line)=>({type:'SEARCH', payload:line});
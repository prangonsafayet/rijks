export const getLang = ()=>{
    return localStorage.getItem('lang') || 'nl'
}

export const setLang = (lang)=>{
    return localStorage.setItem("lang", lang);
}
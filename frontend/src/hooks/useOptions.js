import React from 'react'

export default function getOptionData() {
    const nationality = [
        {value: "rf", placeholder: "РФ"},
        {value: "bel", placeholder: "Беларусь"},
        {value: "kz", placeholder: "Казахстан"},
        {value: "kirg", placeholder: "Киргизия"},
        {value: "uz", placeholder: "Узбекистан"},
        {value: "tk", placeholder: "Таджикистан"},
        {value: "ua", placeholder: "Украина"},
        {value: "dnr", placeholder: "ДНР"},
        {value: "lnr", placeholder: "ЛНР"},
        {value: "mol", placeholder: "Молдова"},
        {value: "arm", placeholder: "Армения"},
        {value: "az", placeholder: "Азербайджан"},
    ]
    
    const position = [
        {value: "kassir", placeholder: "Кассир"},
        {value: "zal", placeholder: "Сотрудник торгового зала"},
    ]
    return [nationality, position]
}


import React, { useEffect, useState } from 'react'
import Checkbox from './UI/checkbox/Checkbox'
import Radio from './UI/radio/Radio'
import MiniTitle from './UI/texts/miniTitle'

export default function Documents(props) {

    let [requiredDocuments, setRequiredDocuments] = useState([])
    const [showRadio, setShowRadio] = useState(false)

    const radiosPatent = [
        {id: 'msk', value: 'Московская область', name: "patent"},
        {id: 'mo', value: 'МО', name: "patent"}
      ]
    useEffect(() => {
        setShowRadio(false)
        props.documents.passport.state(null)
        props.documents.snils.state(null)
        props.documents.med.state(null)
        props.documents.migration.state(null)
        props.documents.registration.state(null)
        props.documents.med.state(null)
        props.documents.print.state(null)
        props.documents.patent.state(null)
        if (props.nationality == 'rf') {
            setRequiredDocuments([
                {label: 'Паспорт', name: 'passport', id: 'passport', value: props.documents.passport.value, stateFunc: props.documents.passport.state},
                {label: 'СНИЛС', name: 'snils', id: 'snils', value: props.documents.snils.value, stateFunc: props.documents.snils.state},
                {label: 'Меднижка', name: 'med', id: 'med', value: props.documents.med.value, stateFunc: props.documents.med.state},
            ])
            props.documents.passport.state(false)
            props.documents.snils.state(false)
            props.documents.med.state(false)
        } else if (props.nationality == 'bel') {
            setRequiredDocuments([
                {label: 'Паспорт', name: 'passport', id: 'passport', value: props.documents.passport.value, stateFunc: props.documents.passport.state},
                {label: 'Меднижка', name: 'med', id: 'med', value: props.documents.med.value, stateFunc: props.documents.med.state},
            ])
            props.documents.passport.state(false)
            props.documents.med.state(false)
        } else if (props.nationality == 'kz' || props.nationality == 'kirg') {
            setRequiredDocuments([
                {label: 'Миграционная карта', name: 'migration', id: 'migration', value: props.documents.migration.value, stateFunc: props.documents.migration.state},
                {label: 'Паспорт', name: 'passport', id: 'passport', value: props.documents.passport.value, stateFunc: props.documents.passport.state},
                {label: 'Регистрация', name: 'reg', id: 'reg', value: props.documents.registration.value, stateFunc: props.documents.registration.state},
                {label: 'Меднижка', name: 'med', id: 'med', value: props.documents.med.value, stateFunc: props.documents.med.state},
                {label: 'Отпечатки', name: 'print', id: 'print', value: props.documents.print.value, stateFunc: props.documents.print.state},
            ])
            props.documents.migration.state(false)
            props.documents.passport.state(false)
            props.documents.med.state(false)
            props.documents.registration.state(false)           
            props.documents.print.state(false)           
        } else if (props.nationality != '') {
            setRequiredDocuments([
                {label: 'Миграционная карта', name: 'migration', id: 'migration', value: props.documents.migration.value, stateFunc: props.documents.migration.state},
                {label: 'Паспорт', name: 'passport', id: 'passport', value: props.documents.passport.value, stateFunc: props.documents.passport.state},
                {label: 'Регистрация', name: 'reg', id: 'reg', value: props.documents.registration.value, stateFunc: props.documents.registration.state},
                {label: 'Меднижка', name: 'med', id: 'med', value: props.documents.med.value, stateFunc: props.documents.med.state},
            ])
            props.documents.migration.state(false)
            props.documents.passport.state(false)
            props.documents.med.state(false)
            props.documents.registration.state(false)
            props.documents.patent.state(false)
            setShowRadio(true)
        }
    }, [props.nationality])

    return (
    <div>
        {requiredDocuments.length
            ? <MiniTitle>Документы:</MiniTitle>
            : <h1></h1>
        }
        {requiredDocuments.map((document, index) => 
            <Checkbox label={document.label} id={document.id} name={document.name} key={index} stateFunc={document.stateFunc} />
        )}
        {showRadio && (
            <Radio title="Патент" radios={radiosPatent} stateFunc={props.documents.patent.state} />
        )
        }
    </div>
    )
}

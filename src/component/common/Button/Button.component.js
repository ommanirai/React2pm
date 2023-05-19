import React from 'react'

export const Button = (props) => {
    const disabeledLabel = props.disabeledLabel || 'Submitting...'
    const enabledLabel = props.enabledLabel || 'Submit'

    // retutn (
    //     <div>

    //     </div>
    // )
    let btn = props.isSubmitting
        ? <button disabled className='btn btn-success mt-3'>{disabeledLabel}</button>
        : <button disabled={props.isDisabled} className='btn btn-success mt-3'>{enabledLabel}</button>

    return btn;
}
type InputPropsType = {
    inputPlaceholder: string,
    inputType: string
}

export const AppInput = ( { inputType, inputPlaceholder }: InputPropsType ) => {
    return (
        <input type={inputType} placeholder={inputPlaceholder} />
    )
}
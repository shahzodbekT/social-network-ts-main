type ButtonPropsType = {
    buttonText: string
}

export const AppButton = ({buttonText}: ButtonPropsType) => {
    return (
        <button>{buttonText}</button>
    )
}
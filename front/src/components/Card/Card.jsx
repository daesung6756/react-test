import './Card.css'

const Card = (
    {
        children,
        classAdd,
    }
) => {
    return(
        <>
            <div className={`card ${classAdd ? classAdd : ""}`}>
                {children}
            </div>
        </>
    )
}

export {Card}
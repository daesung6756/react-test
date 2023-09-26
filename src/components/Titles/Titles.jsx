import './Titles.css'

const Titles = ({children, type ,classAdd, align, description, descriptionAlign}) => {
    const elementType = (type) => {
        switch(type) {
            case "1":
                return <h1 className={`title ${align ? align : "left"}`}>{children}</h1>;
            case "2":
                return <h2 className={`title ${align ? align : "left"}`}>{children}</h2>;
            case "p":
                return <p className={`title ${align ? align : "left"}`}>{children}</p>;
            default:
                break
        }
    }
    return(
        <div className={`title-wrap ${classAdd ? classAdd : ""}`}>
            {
                elementType(type)
            }
            {
                description ?
                <p className={`desc ${descriptionAlign ? descriptionAlign : ""}`}>{description}</p>
                : false
            }
        </div>
    )
}

export {Titles}
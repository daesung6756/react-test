import classNames from 'classname';
import './Button.css'

const Button = ({
        children,
        type,
        size,
        color,
        outline,
        wide,
        round,
        ...rest
}) => {
    return (
        <button
            type={type}
            className={classNames(`btn` ,size ,color , {outline, wide , round} ) }
            {...rest}
        >{children}
        </button>
    )
}

Button.defaultProps = {
    type:"button",
    size: 'medium',
    color: 'blue'
};

export {Button}
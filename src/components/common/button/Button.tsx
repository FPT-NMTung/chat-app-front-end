import classes from './Button.module.css'
import {PropsInterface} from '../../../common/interface'

const Button = (
  {
    text,
    ref,
    size,
    color,
    disabled,
    onClick
  }: PropsInterface
) => {

  const className = `${classes.button} ${classes[size ? size : 'medium']} ${classes[color ? color : 'primary']} ${disabled ? classes.disabled : ''}`

  return (
    <button
      className={className}
      ref={ref}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
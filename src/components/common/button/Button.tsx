import {LegacyRef, MouseEventHandler} from 'react'
import classes from './Button.module.css'

interface PropsInterface {
  text: string,
  ref?: LegacyRef<HTMLButtonElement>,
  size?: 'small' | 'medium' | 'large',
  color?: 'primary' | 'secondary' | 'danger' | 'warning',
  disabled?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

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
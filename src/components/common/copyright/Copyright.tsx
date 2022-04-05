import classes from './Copyright.module.css'
import iconInfo from '../../../images/icon-info.png'

const Copyright = () => {
  return (
    <div className={classes.main}>
      <img width={18} src={iconInfo} alt={'iconInfo'}/>
      <p className={classes.content}>
        This design by
        <a rel={'noreferrer'} href={'https://dribbble.com/karol_kos'}
           target={'_blank'}> Karol Kos (KeyVue chat) </a>
      </p>
    </div>
  )
}

export default Copyright
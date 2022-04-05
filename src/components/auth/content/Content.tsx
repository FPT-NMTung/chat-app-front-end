import classes from './Content.module.css'

const Content = () => {
  return <div className={classes.main}>
    <div className={classes.content}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
      accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis
      tellus mollis orci, sed rhoncus sapien nunc eget.
    </div>
  </div>
}

export default Content
import style from'./Button.module.scss';


export const Button = (props) => {

  return (
      <>
        <button className={style.button}>{props.title}</button>
      </>
    
  )
}
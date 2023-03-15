import style from'./Project.module.css';

export const Project = (props) => {
  return (
    <div className={style.project}>
      <div className={style.icon}>
        Картинка
        <button>View</button>
      </div>
      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>
  );
}
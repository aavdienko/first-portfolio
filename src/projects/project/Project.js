import style from './Project.module.css';

export const Project = (props) => {
  return (
    <div className={style.project}>
      <div className={style.icon} style={props.style}>
        <button>View</button>
      </div>
      <div className={style.projectInfo}>
        <h3 className={style.projectTitle}>{props.title}</h3>
        <span className={style.description}>{props.description}</span>
      </div>
    </div>
  );
};

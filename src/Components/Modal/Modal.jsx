import s from "./Style.module.scss";

export const Modal = ({ isActive, onClose, title, content }) => {
  if (!isActive) return null;

  const handleScreenClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.modal_screen} onClick={handleScreenClick}>
      <section className={s.modal}>
        <h2 className={s.title}>{title}</h2>
        {content}
      </section>
    </div>
  );
};

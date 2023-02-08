import Modal from "./Modal";
import Quest from "./Quest";
import useQuest from "./useQuest";

export default () => {
  const {quest, active, handleClick, openModal, closeModal, loading} = useQuest()

  return (
    <>
      <Quest {...quest} active={active} handleClick={handleClick} openModal={openModal} loading={loading} />
      <Modal active={openModal} closeModal={closeModal} />
    </>
  )
}
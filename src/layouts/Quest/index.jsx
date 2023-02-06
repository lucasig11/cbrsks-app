import Quest from "./Quest";
import useQuest from "./useQuest";

export default () => {
  const {quest, active} = useQuest()

  return <Quest {...quest} active={active} />
}
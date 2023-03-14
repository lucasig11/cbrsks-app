import Button from "../../../components/Button"
import S from "./Modal.style"

const Modal = ({active=false, closeModal}) => (
  <S.Modal active={active}>
    <S.Title>Congratulations, now you can become a Netripper!</S.Title>
    <S.Text>Completing this quest is the first step to becoming an <strong class="orange">elite pilot</strong> in Cyberskies! <strong>Complete the whitelist verification</strong> on Magic Eden and secure your seat.</S.Text>
    <Button as="a" href="https://magiceden.io/drops/netrippers" active={true} target="_blank">Verify WL</Button>
    <S.Close onClick={closeModal}>or, click to return to game</S.Close>
  </S.Modal>
)

export default Modal    
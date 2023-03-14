import Title from "../../components/Title"
import Text from "../../components/Text"
import Button from "../../components/Button"
import Select from "../../components/Select"
import S from "./SelectCollection.styles"

const SelectCollection = ({collections, saveCollection, active}) => (
  <S.SelectCollection active={active}>
    <Title orange bigger>
      Join the competition
    </Title>
    <Title as="h2" orange>
      Defend your community by selecting it
    </Title>

    <Text>
      Roles automatically verified by <span className="hightlight">Matrica</span>
    </Text>

    <S.FakeForm>
      <Select options={collections} />

      <Button active={true} onClick={saveCollection}>
        Select
      </Button>
    </S.FakeForm>
  </S.SelectCollection>
)

export default SelectCollection
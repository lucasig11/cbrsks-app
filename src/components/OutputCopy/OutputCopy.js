import Icons from "../Icons"
import Output from "../Output"

const OutputCopy = ({children}) => {
  <Output>
    {children}
    <Icons.Copy />
  </Output>
}

export default OutputCopy
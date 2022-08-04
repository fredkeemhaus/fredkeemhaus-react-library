import { CustomButton } from "fredkeemhaus-react-library";

function App() {
  return (
    <CustomButton onClick={() => alert(1)} bgColor={"blue"} fontColor={"white"}>
      테스트 버튼!!
    </CustomButton>
  );
}

export default App;

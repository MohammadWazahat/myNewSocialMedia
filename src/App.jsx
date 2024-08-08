import "./App.css";
import AllComponents from "./components/AllComponents";
import MyProfileProvider from "./contexts/myProfileContext";
import UserPostProvider from "./contexts/othersPostContext";
import OthersProfileProvider from "./contexts/othersProfileContext";
function App() {
  return (
    <>
      <MyProfileProvider>
        <OthersProfileProvider>
          <UserPostProvider>
            <AllComponents />
          </UserPostProvider>
        </OthersProfileProvider>
      </MyProfileProvider>
    </>
  );
}

export default App;

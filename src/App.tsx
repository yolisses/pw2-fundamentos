import { MeetContextProvider } from "./MeetContext";
import { MeetPage } from "./MeetPage";

function App() {
  return (
    <MeetContextProvider>
      <MeetPage />
    </MeetContextProvider>
  );
}

export default App;

import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        <Video
          likes={100}
          messages={25}
          shares={12}
          name="bugas.sp"
          description="Brecker o goleiro"
          music="Musiquinha épica qualquer"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes={15}
          messages={0}
          shares={1}
          name="paulosantos2058"
          description="Bird olhando para a câmera"
          music="musiquinha qualquer"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
      </div>
    </div>
  );
}

export default App;

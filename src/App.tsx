import { PilingContainer } from "./components/PilingContainer"

import { images } from './assets'

function App() {
  return (
    <div className="grid h-screen w-screen place-content-center overflow-hidden">
      <PilingContainer>
        {images.map(url => (
          <img key={url} src={url} alt={url} className="absolute translate-x-0.5"/>
        ))}
      </PilingContainer>
    </div>
  )
}

export default App

import { PilingContainer } from "./components/PilingContainer"
import PilingContent from './components/PilingContent'

import { images } from './assets'

function App() {
  return (
    <PilingContainer>
      {images.map(url => (
        <PilingContent.image key={url} url={url} />
      ))}
    </PilingContainer>
  )
}

export default App

import Card from './components/Card'

function App() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
      <Card url="https://picsum.photos/id/10/600/400" author="Paul Jarvis" />
      <Card url="https://picsum.photos/id/20/600/400" author="Aleks Dorohovich" />
      <Card url="https://picsum.photos/id/30/600/400" author="Shyamanta Baruah" />
      <Card url="https://picsum.photos/id/40/600/400" author="Ryan Mcguire" />
      <Card url="https://picsum.photos/id/50/600/400" author="Tyler Wanlass" />
    </div>
  )
}

export default App

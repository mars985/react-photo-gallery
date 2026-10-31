import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <Gallery />
      <footer className="p-4 text-center text-sm text-gray-500">
        <a
          href="https://github.com/mars985/react-photo-gallery"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 hover:underline"
        >
          GitHub
        </a>
      </footer>
    </>
  )
}

export default App

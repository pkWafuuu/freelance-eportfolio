import { useRef } from "react";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Works from "./components/Works";

function App() {

	const works = useRef(null);
	const home = useRef(null)

	function handleClick(elementRef){
		elementRef.current?.scrollIntoView({behavior: 'smooth'})
	}
	
  return (
    <>
      <Nav handleClick={handleClick} home={home} works={works}/>
      <Landing home={home} />
			<Works works={works} />
    </>
  );
}

export default App;

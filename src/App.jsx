import gsap  from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

// register plugins to use in the project
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='text-3xl font-bold underline'>App a</div>
  )
}

export default App
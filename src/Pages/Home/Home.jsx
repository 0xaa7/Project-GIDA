import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/slider'

const Home = () => {
  return (
    <div className='Homepage'>
      <Slider />
      <FeaturedProducts type={"featured"} />
      <FeaturedProducts type={"trending"} />
    </div>
  )
}

export default Home
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  const projectImages = ["/assets/self-full-categories.png", "/assets/critiquer.png", "/assets/movie-zone.png"]

  return (
    <div className="items-center justify-between text-center">
    {
      projectImages.map((img)=> {
        return(
          <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-[70%]"
              src={img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
            )
          })
    }
    </div>
  );
}

export default UncontrolledExample;
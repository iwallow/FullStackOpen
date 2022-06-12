const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={[part1, part2, part3]} exercise={[exercises1, exercises2, exercises3]} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (preps) => (
  <h1>
    {preps.course}
  </h1>
)

const Content = (preps) => (
  <div>
    <Part part={preps.part[0]} exercise={preps.exercise[0]}/>
    <Part part={preps.part[1]} exercise={preps.exercise[1]}/>
    <Part part={preps.part[2]} exercise={preps.exercise[2]}/>
  </div>
)

const Part = (preps) => (
  <p>{preps.part} : {preps.exercise}</p>
)

const Total = (preps) => (
  
  <p>
    <br />
    Number of exercises {preps.count}
  </p>
)

export default App
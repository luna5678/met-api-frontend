const Description = (props) => {
  return (
    <div className="description">
        <h1>{props.title}</h1>
        <h2>{props.artist}</h2>
    </div>
  )
}

export default Description;
const Cards = (props) => {
  return (
    <div>
      <div className="card">
        <h3>{props.name}</h3>
        <p>{props.Branch}</p>
        <h4>{props.Domain}</h4>
        <img 
          src={props.img} 
          alt="Profile"
        />
        <button>Check my profile</button>
      </div>
    </div>
  )
}

export default Cards

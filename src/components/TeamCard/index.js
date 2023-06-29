import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <li className="each-team">
      <Link to={`/team-matches/${id}`} className="team-container">
        <img src={teamImageUrl} className="team-image" alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard

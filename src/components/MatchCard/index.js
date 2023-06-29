import './index.css'

const MatchCard = props => {
  const {match} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = match
  const statusClassName = matchStatus === 'Won' ? 'green-color' : 'red-color'
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="competing-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${statusClassName}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard

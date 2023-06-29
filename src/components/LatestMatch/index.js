import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch
  return (
    <div className="latest-match-container">
      <h1 className="title">Latest Matches</h1>
      <div className="match-details-container">
        <div className="logo-container">
          <div className="first-details">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue-result">{venue}</p>
            <p className="venue-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="competing-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="second-details">
          <h1 className="labels">First Innings</h1>
          <p className="values">{firstInnings}</p>
          <h1 className="labels">Second Innings</h1>
          <p className="values">{secondInnings}</p>
          <h1 className="labels">Man of the Match</h1>
          <p className="values">{manOfTheMatch}</p>
          <h1 className="labels">Umpires</h1>
          <p className="values">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch

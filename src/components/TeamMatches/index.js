import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamDetails: {}}

  componentDidMount() {
    this.getTeamDetails()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const details = await response.json()
    console.log(details)

    const formattedDetails = {
      teamBannerUrl: details.team_banner_url,
      latestMatchDetails: this.getFormattedData(details.latest_match_details),
      recentMatches: details.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({teamDetails: formattedDetails, isLoading: false})
  }

  renderTeamMatches = () => {
    const {teamDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails
    return (
      <div className="responsive-container">
        <img src={teamBannerUrl} className="team-banner" alt="team banner" />
        <LatestMatch latestMatch={latestMatchDetails} />
        <ul className="recent-matches-list">
          {recentMatches.map(eachMatch => (
            <MatchCard match={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SRH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className={`team-matches-container ${this.getRouteClassName()}`}>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)

    const formattedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="home-route-container">
        <div className="teams-container">
          <div className="title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="ipl-logo"
              alt="ipl logo"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div data-testid="loader" className="loader-container">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="teams-list-container">
              {teamsData.map(eachTeam => (
                <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home

import axios from "axios";
const baseUrl = 'https://tennis-api-backend.herokuapp.com/api';

const getH2HData = (rivalry) => {
    return axios.post(`${baseUrl}/h2hmatches`, rivalry)
}

const getPlayerNames = () => {
    return axios.get(`${baseUrl}/playernames`)
}

const getPlayerStats = (playerName) => {
    return axios.get(`${baseUrl}/playerstats`, {params:{["Player Name"]:playerName}})
}

const getPlayerActivity = (playerName) => {
    return axios.get(`${baseUrl}/playeractivity`, {params: {['Player Name']:playerName}})
}

const getRankings = () => {
    return axios.get(`${baseUrl}/rankings`)
}

const getDailySummary = () => {
    let dms = Number(new Date().getTime()) - 1.5*86400000;
    let d = new Date(dms).toISOString().split("T")[0];
    console.log(d);
    return axios.get(`${baseUrl}/dailysummary`, {params: {date:d}})
    .then(response => {
      console.log(response);
      const optionsDailySummary = {
        method: 'GET',
        url: `https://tennis-live-data.p.rapidapi.com/matches-by-date/${d}`,
        headers: {
          'X-RapidAPI-Host': 'tennis-live-data.p.rapidapi.com',
          'X-RapidAPI-Key': '90e3180e4emshea2131884b575efp1a69b0jsnca65819f7469'
        }
      };
      if(response.data.length == 0) {
        const optionsInsertPlayers = {
          method: 'GET',
          url: 'https://tennis-live-data.p.rapidapi.com/players/ATP',
          headers: {
            'X-RapidAPI-Host': 'tennis-live-data.p.rapidapi.com',
            'X-RapidAPI-Key': '90e3180e4emshea2131884b575efp1a69b0jsnca65819f7469'
          }
        };
        return axios.request(optionsInsertPlayers).then(response => {
          console.log(response);
          let players = response.data.results.players;
          players = players.map(item => {return {playerID: item.id, playerName: item.full_name, country: item.country}});
          return axios.post(`${baseUrl}/insertplayers`, players).then(response => {
            console.log(response);
          })
        }).then(response => {
          return axios.request(optionsDailySummary).then(response => {
            console.log(response);
            let dailymatches = [];
            for(let x of response.data.results) {
              if(x.tournament.code != 'ATP') continue;
              let tourneyName = x.tournament.name;
              for(let y of x.matches) {
                if(y.result === null || y.result === undefined) continue;
                let sets_amount = Number(y.result.home_sets) + Number(y.result.away_sets);
                let score = '';
                if(y.result.result_description == "Walkover") score += 'Walkover';
                else {
                  for(let i = 1; i <= sets_amount; i++) {
                    score += `${y.result[`home_set${i}`]}-${y.result[`away_set${i}`]}, `;
                  }
                  score = score.slice(0, score.length - 2); 
                }
                console.log(d);
                dailymatches.push({matchDate:d, tourneyName, homeID:y.home_id, awayID:y.away_id, winnerID:y.result.winner_id,score, round: y.round_name});
              }
            }
            console.log(dailymatches);
            return axios.post(`${baseUrl}/dailysummary`, dailymatches, {params: {date:d}});
          })
        })
      }
      else {
        return response;
      }
    })
}

export default {getH2HData, getPlayerNames, getPlayerStats, getPlayerActivity, getRankings, getDailySummary}
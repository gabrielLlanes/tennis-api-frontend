//import logo from './logo.svg';
import './App.css';
import { TextField, Button, Tabs, Tab} from '@material-ui/core'
import { useState, useEffect } from 'react';
import TennisService from './services/tennisService';
import Rivalry from './components/Rivalry';
import PlayerStats from './components/PlayerStats';
import PlayerActivity from './components/PlayerActivity'; 

function App() {
  const [currFunction, setCurrFunction] = useState(1);
  const [show, setShow] = useState({rivalry:false, indStats:false, indActivity:false});

  const [rivalry, setRivalry] = useState({p1:"", p2:""});
  const [rivalryData, setRivalryData] = useState([]);

  const [statsPlayer, setStatsPlayer] = useState("");
  const [stats, setStats] = useState({});

  const [activityPlayer, setActivityPlayer] = useState("");
  const [activity, setActivity] = useState([]);

  const handleTabChange = (event, value) => {
    setCurrFunction(value)
    setShow({rivalry:false, indStats:false, indActivity:false});
    setRivalry({p1:'', p2:''});setRivalryData([]);setStatsPlayer('');setStats({});setActivityPlayer('');setActivity([]);
  }

  
  const handleRivalrySubmission = (event) => {
    event.preventDefault();
    TennisService.getH2HData(rivalry).then(response => {
      console.log(response);
      setRivalryData(response.data);
      setShow({rivalry:true, indStats:false, indActivity:false});
    })
  }

  const handleStatsPlayerSubmission = (event) => {
    event.preventDefault();
    TennisService.getPlayerStats(statsPlayer).then(response => {
      console.log(response);
      setStats(response.data);
      setShow({rivalry:false, indStats:true, indActivity:false});
    })
  }

  const handleActivityPlayerSubmission = (event) => {
    event.preventDefault();
    TennisService.getPlayerActivity(activityPlayer).then(response => {
      console.log(response);
      setActivity(response.data);
      setShow({rivalry:false, indStats:false, indActivity:true});
    })

  }

  const handleP1Change = (event) => {
    setRivalry({...rivalry, p1: event.target.value})
  }

  const handleP2Change = (event) => {
    setRivalry({...rivalry, p2: event.target.value})
  }

  const handleStatsPlayerChange = (event) => {
    setStatsPlayer(event.target.value);
  }

  const handleActivityPlayerChange = (event) => {
    setActivityPlayer(event.target.value);
  }

  return (
    <div>
      <h1 style={{cssText: "text-align: center; font-weight:400"}}><a href="./">Tennis Statistics and Match Data</a></h1>

      <div style={{backgroundColor:"whitesmoke", padding:"10px"}}>
          <Tabs value={currFunction} onChange={handleTabChange}>
            <Tab label="H2H Matches" value={1}></Tab>
            <Tab label="Player Statistics" value={2}></Tab>
            <Tab label="Player Activity" value={3}></Tab>
          </Tabs>
      </div>

      {currFunction == 1 ? 

      <div>
        <div style={{textAlign:'left', padding:"20px", borderBottom:"3px solid gray"}}>
          <form onSubmit={handleRivalrySubmission}>
            <div style={{padding:"10px"}}> 
            <span style={{paddingRight:"30px", display:"inline-flex"}}>
              <TextField onChange={handleP1Change} label="Rival 1" InputLabelProps={{ shrink: true }} value={rivalry.p1}></TextField>
            </span>
            <span style={{paddingLeft:"30px", paddingRight:"30px", display:"inline-flex"}}>
              <TextField onChange={handleP2Change} label="Rival 2" InputLabelProps={{ shrink: true }} value={rivalry.p2}></TextField>
            </span> 
            <span style={{paddingLeft:"30px", display:"inline-flex"}}><Button variant="contained" type="submit">Get Rivalry Matches</Button></span>
            </div>
          </form>
        </div>
      </div> : currFunction == 2 ? 

      <div style={{textAlign:'left', padding:"20px", borderBottom:"3px solid gray"}}>
        <form onSubmit={handleStatsPlayerSubmission}>
        <div style={{padding:"10px"}}> 
        <span style={{paddingRight:"30px", display:"inline-flex"}}>
          <TextField onChange={handleStatsPlayerChange} label="Player" InputLabelProps={{ shrink: true }} value={statsPlayer}></TextField>
        </span>
        <span style={{paddingLeft:"30px", display:"inline-flex"}}><Button variant="contained" type="submit">Get Player Stats</Button></span>
        </div>
        </form>
      </div> : currFunction == 3 ? 

      <div style={{textAlign:'left', padding:"20px", borderBottom:"3px solid gray"}}>
        <form onSubmit={handleActivityPlayerSubmission}>
        <div style={{padding:"10px"}}> 
        <span style={{paddingRight:"30px", display:"inline-flex"}}>
          <TextField onChange={handleActivityPlayerChange} label="Player" InputLabelProps={{ shrink: true }} value={activityPlayer}></TextField>
        </span>
        <span style={{display:"inline-flex", paddingLeft:"30px"}}><Button variant="contained" type="submit">Get Player Activity</Button></span>
        </div>
        </form>
      </div> : "No selection"}

      {show.rivalry ? 

      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          <Rivalry rivalryData={rivalryData}/>
        </div>
      </div> : show.indStats ? 

      <PlayerStats playerStats={stats}/>
       : show.indActivity ? 

      <PlayerActivity playerActivity={activity}/> : 
      
      <div style={{textAlign:'center'}}>Waiting for Selection...</div>}
    </div>
  );
}


export default App;

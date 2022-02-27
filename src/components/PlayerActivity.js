import { Table,TableRow,TableHead,TableBody,TableCell, TextField, Button } from "@material-ui/core"
import React, { useEffect, useState } from "react"

const ActivityTables = ({playerActivity, year}) => {
    let playerActivityFiltered = playerActivity.filter(tourney => {
        return tourney.tourneyDate.startsWith(year.toString())
    });
    return (
        <>
        {playerActivityFiltered.map(tourney => 
            <div key={`${tourney.tourneyDate}${tourney.tourneyName}`}>
                <div>
                    <div style={{paddingTop:'50px', paddingLeft:'10px', fontWeight:550}}>{tourney.tourneyDate}</div>
                    <div style={{padding:'5px 10px', fontWeight:550}}><span style={{borderBottom: "1px solid black"}}>{tourney.tourneyName} : {tourney.surface} Court</span></div>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Round</TableCell>
                            <TableCell>Opponent</TableCell>
                            <TableCell>Result</TableCell>
                            <TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tourney.matches.map(match => 
                            <TableRow key={match.round + match.opponent}>
                                <TableCell>{match.round}</TableCell>
                                <TableCell>{match.opponent}</TableCell>
                                <TableCell>{match.result}</TableCell>
                                <TableCell>{match.score}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            )}
        </>
    )
}

const PlayerActivity = ({playerActivity}) => {
    const [year, setYear] = useState(2022);
 //   const [currentActivityTables, setCurrentActivityTables] = useState(<ActivityTables playerActivity={playerActivity}/>)
    const [newYear, setNewYear] = useState(2022);

    const handleNewYearChange = (event) => {
        setNewYear(event.target.value);
    }

    const handleYearSubmission = (event) => {
        event.preventDefault();
        setYear(newYear);
    }
    
    return (
        <>
        <div style={{textAlign:"center"}}>
            <form onSubmit={handleYearSubmission}>
                <div>
                    <TextField label="Year" type="number" min="1995" max="2022" value={newYear} onChange={handleNewYearChange}></TextField>
                </div>
                <div style={{padding:"10px"}}><Button variant="contained" type="submit">Filter By Year</Button></div>
            </form>
        </div>
        <ActivityTables playerActivity={playerActivity} year={year}/>
        </>
    )
}

export default PlayerActivity;
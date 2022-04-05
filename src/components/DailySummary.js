import React, { useEffect } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

const DailySummary = ({dailyMatches}) => {

    useEffect(() => {
        console.log(dailyMatches);
    },[])

    if(dailyMatches.length == 0) {
        return (
            <div style={{padding:15, textAlign:"center", fontSize: "125%"}}>
                No match results for previous day.
            </div>
        )
    }
    else {
        let tourneys = [];
        let dailyTables = [];
        for(let i = 0; i < dailyMatches.length; i++) {
            if(i == 0 || dailyMatches[i].tourneyName != dailyMatches[i-1].tourneyName) {
                tourneys.push(dailyMatches[i].tourneyName);
            }
        }
        let j = 0;
        console.log(tourneys);
        for(let tourney of tourneys) {
            let tourneyMatches = [];
            //console.log(dailyMatches[j]);
            while(j < dailyMatches.length && dailyMatches[j].tourneyName == tourney) {
                let currMatch = dailyMatches[j];
                tourneyMatches.push(
                    <TableRow key = {currMatch.homePlayer + currMatch.awayPlayer}>
                    <TableCell>{tourneyMatches.length+1}</TableCell>
                    <TableCell>{currMatch.round}</TableCell>
                    <TableCell>{currMatch.homePlayer}</TableCell>
                    <TableCell>{currMatch.awayPlayer}</TableCell>
                    <TableCell>{currMatch.winnerName}</TableCell>
                    <TableCell>{currMatch.score}</TableCell>
                </TableRow>
                )
                j++;
            }
            dailyTables.push(
                <div key= {tourney} style = {{paddingTop: 10, paddingBottom: 10}}>
                    <div>
                    <div style={{padding:'5px 10px', fontWeight:550}}><span style={{borderBottom: "1px solid black"}}>{tourney}</span></div>
                    </div>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{width:'5%'}}>Match</TableCell>
                                <TableCell style={{width:'19%'}}>Round</TableCell>
                                <TableCell style={{width:"19%"}}>Player 1</TableCell>
                                <TableCell style={{width:"19%"}}>Player 2</TableCell>
                                <TableCell style={{width:"19%"}}>Winner</TableCell>
                                <TableCell style={{width:"19%"}}>Score</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tourneyMatches}
                        </TableBody>
                    </Table>
                </div>
            )
        }
        return (
            <>
            <div style = {{textAlign:'center', padding: 15, fontWeight: 400, fontSize:'150%'}}>Match Results on Day: {dailyMatches[0].matchDate}</div>
            <div>
                {dailyTables}
            </div>
            </>
        )
    }
}

export default DailySummary;
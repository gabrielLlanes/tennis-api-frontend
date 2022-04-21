import { useState, useEffect } from "react"
import React from "react";
import { Table,TableHead, TableBody, TableCell,TableRow } from "@material-ui/core";

const buildRows = (rivalryData) => {
    let rows = new Array();
    for(let i = 0; i < rivalryData.length; i++) {
        let tds = new Array();
        rows.push(<TableRow key={i}>
            
            <TableCell style={{width:"10%"}}>{rivalryData[i].tourneyDate}</TableCell>
            <TableCell style={{width:"10%"}}>{rivalryData[i].tourneyName}</TableCell>
            <TableCell style={{width:"10%"}}>{rivalryData[i].surface}</TableCell>
            <TableCell style={{width:"5%"}}>{rivalryData[i].round}</TableCell>
            <TableCell style={{width:"15%"}}>{rivalryData[i].winnerName}</TableCell>
            <TableCell style={{width:"10%"}}>{rivalryData[i].winnerRank}</TableCell>
            <TableCell style={{width:"15%"}}>{rivalryData[i].loserName}</TableCell>
            <TableCell style={{width:"10%"}}>{rivalryData[i].loserRank}</TableCell>
            <TableCell style={{width:"15%"}}>{rivalryData[i].score}</TableCell>
            
        </TableRow>);
    }
    return rows;
}

const Rivalry = ({rivalryData}) => {

    if(rivalryData.length == 0) {
        return (
        <div style ={{padding: 20, textAlign: "center"}}>
            No data! Please make another selection.
        </div>
        )
    }

    return (
        <div>
            <Table style={{width:"1500px"}}>
                <TableHead>
                    <TableRow>
                        <TableCell style={{width:"10%"}}>Date</TableCell>
                        <TableCell style={{width:"10%"}}>Tournament</TableCell>
                        <TableCell style={{width:"10%"}}>Surface</TableCell>
                        <TableCell style={{width:"5%"}}>Round</TableCell>
                        <TableCell style={{width:"15%"}}>Winner Name</TableCell>
                        <TableCell style={{width:"10%"}}>Winner Rank</TableCell>
                        <TableCell style={{width:"15%"}}>Loser Name</TableCell>
                        <TableCell style={{width:"10%"}}>Loser Rank</TableCell>
                        <TableCell style={{width:"15%"}}>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{buildRows(rivalryData)}</TableBody>
            </Table>
        </div>
    )
}

export default Rivalry;
import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
const Rankings = ({rankings}) => {
    rankings.sort((a,b) => a.playerRank - b.playerRank);
    return (
        <>
        <Table size="medium">
            <TableHead>
                <TableRow>
                    <TableCell style={{width:"20%"}}>Rank</TableCell>
                    <TableCell style={{width:"40%"}}>Player</TableCell>
                    <TableCell style={{width:"40%"}}>Points</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rankings.map(rank => 
                    <TableRow key={String(rank.playerRank) + String(rank.playerName)}>
                        <TableCell>{rank.playerRank}</TableCell>
                        <TableCell>{rank.playerName}</TableCell>
                        <TableCell>{rank.playerPoints}</TableCell>
                    </TableRow>
                    )}
            </TableBody>
        </Table>
        </>
    )
}


export default Rankings;
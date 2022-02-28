import React from "react";
import { Table, TableHead, TableBody, TableCell, TableRow, Tab } from "@material-ui/core";

const PlayerStats = ({playerStats}) => {
    return (
        <>

        <div style={{display:'flex'}}>
            <div style={{flex:1}}>
                <Table>
                    <TableHead>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Career W-L</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.careerWins.toString()} - {playerStats.careerLosses.toString()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{fontWeight:600}} colSpan="2">Serve Statistics</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Total Aces</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.totalAces}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Double Faults</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.totalDoubleFaults}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>1st Serve Made</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.firstServeMadePct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>1st Serve Points Won</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.firstServeWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>2nd Serve Points Won</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.secondServeWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Break Points Faced</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.breakPointsFaced}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Break Points Saved</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.breakPointsSavedPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Service Games Played</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.serviceGamesPlayed}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Service Games Won</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.serviceGamesWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Service Points Won</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.servicePointsWonPct}%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div style={{flex:1}}>
            <Table>
                    <TableHead>

                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{fontWeight:600}} colSpan="2">Return Statistics</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>1st Serve Return Points Won</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.returnFirstServeWonPct.toString()}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>2nd Serve Return Points Won</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.returnSecondServeWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Break Points Opportunities</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.breakPointOpportunities}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Break Points Converted</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.breakPointsConvertedPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Return Games Played</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.returnGamesPlayed}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Return Games Won</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.returnGamesWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Return Points Won</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.returnPointsWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{width:"50%"}}>Total Points Won</TableCell>
                            <TableCell style={{width:"50%"}}>{playerStats.totalPointsWonPct}%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
        </>
    )
}

export default PlayerStats;
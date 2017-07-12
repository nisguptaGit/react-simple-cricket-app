const baseUrl='http://cricapi.com/api/';
const apikey='Rh6YPtg6QARWl5qUAd3r1cG07a12';

const cricketNews='cricketNews';
const matches='matches';
const cricket='cricket';
const matchCalendar='matchCalendar';
const cricketScore='cricketScore';
const cricketCommentary='cricketCommentary';
const ballByBall =  "ballByBall";
const playerStats='playerStats';


const questionMark = '?';
const getAPIkeyParams = function(){
	return ('apikey=' + apikey);
};

export const cricketNewsAPI= baseUrl + cricketNews + questionMark + getAPIkeyParams();
export const newMatchesAPI= baseUrl + matches + questionMark + getAPIkeyParams();
export const oldMatchesAPI= baseUrl + cricket + questionMark + getAPIkeyParams();
export const matchCalendarAPI= baseUrl + matchCalendar + questionMark + getAPIkeyParams();
export const cricketScoreAPI= baseUrl + cricketScore + questionMark + getAPIkeyParams();// &unique_id=1068560 //todo
export const ballByBallAPI= baseUrl + ballByBall + questionMark + getAPIkeyParams();// &unique_id=1068560 //todo
export const cricketCommentaryAPI= baseUrl + cricketCommentary + questionMark + getAPIkeyParams(); // &unique_id=1068560//todo
export const playerStatsAPI= baseUrl + playerStats + questionMark + getAPIkeyParams(); // pid=35320//todo 


// cric news api:  http://cricapi.com/api/cricketNews
// New match API : http://cricapi.com/api/matches 
// Old match API : http://cricapi.com/api/cricket
// match calender API : http://cricapi.com/api/matchCalendar

// cricket score API : http://cricapi.com/api/cricketScore?unique_id: 1034809
//  commentary API: http://cricapi.com/api/cricketCommentary?unique_id=946765
// player stat API :ttp://cricapi.com/api/playerStats pid=35320

//
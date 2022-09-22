function gameObject(){
    return {
        home:{
            teamName:"Brooklyn Nets",
            colors:["black", "white"],
            players:{
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:['turquoise', 'purple'],
            players:{
                "Jeff Adrien":{                    
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon":{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood":{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        },
    };
}

function numPointsScored(name){
    const gO = gameObject();
    let found = false;
    let data;
    for(const goK in gO){

        if(found === true){ break ;}

        const teamObj = gO[goK];
        
        for(const teamK in teamObj){

            if(found === true){ break ;}

            const teamData = teamObj[teamK];

            if(teamK === "players"){
                
                for(const playersK in teamData){

                    if(found === true){ break ;}
                    
                    if(playersK === name){
                        data = teamData[playersK].points;
                        found = true;
                    }
                    
                }
                
            }

        }
    }
    if(found){
        return data;
    }else{
        return `Points for "${name}" not found!`;
    }
}

console.log(numPointsScored("Alan Anderson"));


function shoeSize(name){
    const gO = gameObject();
    let found = false;
    let data;
    for(const goK in gO){

        if(found === true){ break ;}

        const teamObj = gO[goK];
        
        for(const teamK in teamObj){

            if(found === true){ break ;}

            const teamData = teamObj[teamK];

            if(teamK === "players"){
                
                for(const playersK in teamData){

                    if(found === true){ break ;}
                    
                    if(playersK === name){
                        data = teamData[playersK].shoe;
                        found = true;
                    }
                    
                }
                
            }

        }
    }
    if(found){
        return data;
    }else{
        return `Shoe size for "${name}" not found!`;
    }
}

console.log(shoeSize("Ben Gordon"));

function teamColors(team){
    const gO = gameObject();
    let found = false;
    let data;
    for(const goK in gO){

        if(found === true){ break ;}

        const teamObj = gO[goK];

        
        for(const teamK in teamObj){

            if(found === true){ break ;}
            
            if(teamK === "teamName" && teamObj["teamName"] === team){
                data = teamObj["colors"];
                found = true;
            }
        }
    }
    if(found){
        return data;
    }else{
        return `Team colors for "${team}" not found!`;
    }
}

console.log(teamColors("Charlotte Hornets"));

function teamNames(){
    const gO = gameObject();
    const teamsArr = [];
    for(const goK in gO){

        const teamObj = gO[goK];

        for(const teamK in teamObj){
            if(teamK === "teamName"){
                teamsArr.push(teamObj["teamName"]);
                break;
            }
        }

    }
    return teamsArr;
}

console.log(teamNames());


function playerNumbers(team){
    const gO = gameObject();
    let found = false;
    const dataArr = [];
    for(const goK in gO){

        if(found === true){ break ;}

        const teamObj = gO[goK];

        
        for(const teamK in teamObj){

            if(found === true){ break ;}
            
            
            if(teamK === "teamName" && teamObj["teamName"] === team){

                const playersObj = teamObj["players"];

                for(const playerK in playersObj){
                    dataArr.push(playersObj[playerK].number);
                }

                found = true;
            }
        }
    }
    if(found){
        return dataArr;
    }else{
        return `Player numbers for "${team}" not found!`;
    }
}

console.log(playerNumbers("Charlotte Hornets"));


function playerStats(name){
    const gO = gameObject();
    let found = false;
    let data;
    for(const goK in gO){

        if(found === true){ break ;}

        const teamObj = gO[goK];
        
        for(const teamK in teamObj){

            if(found === true){ break ;}

            const teamData = teamObj[teamK];

            if(teamK === "players"){
                
                for(const playersK in teamData){

                    if(found === true){ break ;}
                    
                    if(playersK === name){
                        data = teamData[playersK];
                        found = true;
                    }
                    
                }
                
            }

        }
    }
    if(found){
        return data;
    }else{
        return `Stats for "${name}" not found!`;
    }
}

console.log(playerStats("Alan Anderson"));


function bigShoeRebounds(){
    const gO = gameObject();
    let largestShoePlayer;
    for(const goK in gO){

        const teamObj = gO[goK];
        
        for(const teamK in teamObj){

            const teamData = teamObj[teamK];

            if(teamK === "players"){
                
                for(const playersK in teamData){
                    if(largestShoePlayer == undefined){
                        largestShoePlayer = teamData[playersK];
                        continue;
                    }  
                    
                    if(teamData[playersK].shoe > largestShoePlayer.shoe){
                        largestShoePlayer = teamData[playersK];
                    }
                } 
            }
        }
    }
    return largestShoePlayer.rebounds;
}

console.log(bigShoeRebounds());


function mostPointsScored(){
    const gO = gameObject();
    let mostPointsPlayer;
    for(const goK in gO){

        const teamObj = gO[goK];
        
        for(const teamK in teamObj){

            const teamData = teamObj[teamK];

            if(teamK === "players"){
                
                for(const playersK in teamData){
                    if(mostPointsPlayer == undefined){
                        mostPointsPlayer = {player: playersK , stats: teamData[playersK]};
                        continue;
                    }  
                    
                    if(teamData[playersK].points > mostPointsPlayer.stats.points){
                        mostPointsPlayer = {player: playersK , stats: teamData[playersK]};
                    }
                } 
            }
        }
    }
    return `${mostPointsPlayer.player} scored the most points, scoring ${mostPointsPlayer.stats.points} points.`;
}

console.log(mostPointsScored());


function winningTeam(){
    const gO = gameObject();
    let pointsObj = {};
    for(const goK in gO){

        const teamObj = gO[goK];
        
        for(const teamK in teamObj){

            const teamData = teamObj[teamK];

            if(teamK === "players"){
                
                for(const playersK in teamData){
                    if(!pointsObj[teamObj.teamName]){
                        pointsObj[teamObj.teamName] = 0;
                    }
                     
                    pointsObj[teamObj.teamName] += teamData[playersK].points;
                } 
            }
        }
    }
    let winningTeam;
    for(const pointsK in pointsObj){
        if(winningTeam === undefined){
            winningTeam = {team: pointsK, points: pointsObj[pointsK]};
            continue;
        }

        if(pointsObj[pointsK] > winningTeam.points){
            winningTeam = {team: pointsK, points: pointsObj[pointsK]};
        }
    }
    return winningTeam.team;
}

console.log(winningTeam());


function playerWithLongestName(){
    const gO = gameObject();
    let longestPlayerName;
    for(const goK in gO){

        const teamObj = gO[goK];
        
        for(const teamK in teamObj){

            const teamData = teamObj[teamK];

            if(teamK === "players"){
                                
                for(const playersK in teamData){

                    if(longestPlayerName == undefined){
                        longestPlayerName = playersK;
                        continue;
                    }  

                    if(playersK.length > longestPlayerName.length){
                        longestPlayerName = playersK;
                    }
                } 
            }
        }
    }
    return longestPlayerName;
}

console.log(playerWithLongestName());


function doesLongNameStealATon(){
    const gO = gameObject();

    const longestPlayerName = playerWithLongestName();
    const longestPlayerNameStats = playerStats(longestPlayerName);
    let stealATon = true;

    for(const goK in gO){

        const teamObj = gO[goK];
        
        for(const teamK in teamObj){

            const teamData = teamObj[teamK];

            if(teamK === "players"){
                                
                for(const playersK in teamData){
                    if(playersK === longestPlayerName){
                        continue;
                    }
                    stealATon =  longestPlayerNameStats.steals > teamData[playersK].steals;
                } 
            }
        }
    }
    return stealATon;
}

console.log(doesLongNameStealATon());
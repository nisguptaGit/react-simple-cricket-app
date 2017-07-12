import * as actionTypes from '../actionTypes'
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getInitChocolate() { 
	let chocolate = [];
	const chocolateNames = ["Diary Milk", "5 Star", "KitKat", "Park", "Munch", "Parle", "MangoBites", "Milkybar", "Gems", "M&M"];
	const chocolateBrands = ["Cadbury", "Cadbury", "Nestle", "Cadbury", "Munch-B", "Parle-B", "MangoBites-B", "Nestle", "Cadbury", "M&M"];
	const chocolateSize = ["small", "medium", "large"];
	let chocolateCount = getRandomInt(3,10);
	const startChocolate = getRandomInt(0, chocolateCount);
	for (var i = 0; i < chocolateCount; i++) {
		chocolate.push({
			        "Id" : (i+1),
              "Name": chocolateNames[(startChocolate+i)%chocolateCount],
              "Brand" : chocolateBrands[(startChocolate+i)%chocolateCount],
              "Size" : chocolateSize[getRandomInt(0,2)],
              "Price" : getRandomInt(5,50),
              "Soh" : getRandomInt(1,15)
		});
	}
	return chocolate;
}
function getInitnews() { 
		let chocolate = [];

	let chocolateCount = getRandomInt(3,100);
	for (var i = 0; i < chocolateCount; i++) {
		chocolate.push({
			  "Col1" : (i+1),
              "Col2": i,
              "Col3" :getRandomInt(0,200) ,
              "Col4" : getRandomInt(0,2),
              "Col5" : getRandomInt(5,50),
              "Col6" : getRandomInt(1,15)
		});
	}
	return chocolate;
}
export default function(state={},action){
  switch(action.type){
    case actionTypes.MAKE_CHOCOLATE:

      return Object.assign({},state,{showList:true},{ data :
          getInitChocolate()
        },{url:undefined});
      
    case actionTypes.GIFT_CHOCOLATE:

      var newChocolates=[]
      state.data.forEach((ele,index,arr) => {
        if(ele.Id === action.chocolateId){
          ele.Soh -= 1;       
        }
        newChocolates.push(ele)
      })
      return Object.assign({} ,{showList:state.showList},{data : newChocolates});
    case actionTypes.CRIC_NEWS:
    case actionTypes.UPCOMING_MATCHES:
    case actionTypes.OLD_MATCHES:
    case actionTypes.MATCH_CALENDER:
      return Object.assign({},state,{showList:false ,data: action.tableData, url:action.url});
    case actionTypes.TAB_CHANGE:
      return Object.assign({},state,{showList:false ,data: [], tabid:action.tabid});
    case actionTypes.SHOW_DATA:     
      return Object.assign({},state,{showList:true ,data: action.tableData, url:action.url});
    default:
      return state;
  }
}

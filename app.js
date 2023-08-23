// FOR EACH

// doubleValues
function doubleValues (arr){
    let newArray = [];
    arr.forEach(function(element){
        const value = element * element;
        newArray.push(value);
    })
    return newArray;
}

//onlyEvenValues
function onlyEvenValues(arr){
    let newArray = [];
    arr.forEach(function(element){
        if(element % 2 === 0){
            newArray.push(element);
        }
    })
    return newArray;
}

//showFirstandLast
function showFirstandLast(arr){
    let newArray = [];
    arr.forEach(function(element){
        const first = element[0];
        const last = element[element.length -1];
        newArray.push(first + last);
    })
    return newArray;
}

//addKeyAndValue
function addKeyAndValue(arrayOfObjects,key,value){
    arrayOfObjects.forEach(function(object){
        object[key] = value;
    })
    return arrayOfObjects;
}


//vowelCount
function vowelCount (string){
    let vowelCounts = {};
    const vowel = 'aeiou';
    Array.from(string).forEach(function(char){
        const lowerCasedChar = char.toLowerCase();
        if(vowel.indexOf(lowerCasedChar) !== -1){
            vowelCounts[lowerCasedChar] = (vowelCounts[lowerCasedChar] || 0) + 1 //object[key] = value
        } 
    })
    return vowelCounts;
}


//map

//doubleValuesWithMap
function doubleValuesWithMap(array){
    return array.map(function(element){
     return element * element;
    })
}

//valTimesIndex
function valTimesIndex(array){
    return array.map(function(value,index){
        return value * index;
    })
}

//extractKey
function extractKey(arrayOfObjects,key){
    return arrayOfObjects.map(function(object){
        return object[key]
    })
}

//extractFullName
function extractFullName (arrayOfObjects){
    return arrayOfObjects.map(function(object){
        return object['first'] + " " + object['last'];
    })
}


//filter

//filterByValue
function filterByValue(arrayOfObjects, key){ 
    return arrayOfObjects.filter(function(object){
        return object[key] !== undefined;
    })
}

//find
function find(array, value){
    return array.filter(function(element){
        return element === value;
    })[0]
}

//findInObj
function findInObj (arrayOfObjects,key,value){
    return arrayOfObjects.filter(function(object){
        return object[key] === value;
    })[0]
    }

//removeVowels
function removeVowels(string) {

    const vowels = 'aeiou';
    return Array.from(string).filter(function(char) {
        return vowels.indexOf(char.toLowerCase()) === -1;
    }).join('');
}

//doubleOddNumbers
function doubleOddNumbers(array){
    return array.filter(function(value){
        return value % 2 === 1;
    }).map(function(oddValue){
        return oddValue * 2;
    })
}
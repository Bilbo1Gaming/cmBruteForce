// NEED TO RUN THIS CODE IN THE EXTENTION 
data=[]
for(i = 1; i <9; i++){
    buffer = []
    buffer.push(document.getElementById("input"+i).innerHTML)
    buffer.push(document.getElementById("test"+i).innerHTML)
    data.push(buffer)
}
lines = cheat(data)
alllines = ""
for (i=0;i<lines.length;i++){
    alllines = alllines + lines[i] + "\n"
}
console.log(alllines)

// START OF BACKEND CODE
function print(data){
    console.log(data)
    output.push(data)
} 

function clean(data){
    for (i=0;i<8;i++){
        
        buffer = data[i][1].split("<br>")
        for (j = 0; j<buffer.length;j++){
            data[i][j+1] = buffer[j]
        }
    }
    return data
}
function cheat(qarrey){
    qarrey = clean(qarrey)
    output = []
    print("data = input()")
    print("if data == \""+qarrey[0][0]+"\":")
    for (i=1;i<qarrey[0].length; i++){
        print("    print(\""+qarrey[0][i]+"\")")
    }
    for (i=1;i<qarrey.length; i++){
        print("elif data == \""+qarrey[i][0]+"\":")
        for (j=1;j<qarrey[i].length; j++){
            print("    print(\""+qarrey[i][j]+"\")")
        }
    }
    return output
}

//console.log(cheat(qdata))
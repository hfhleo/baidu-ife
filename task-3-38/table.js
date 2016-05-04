var table = function(obj){
    this.element = obj.element;
    this.data = obj.data;
    this.parent = obj.parent;

    this.init();
}
table.prototype = {
    init:function(){
        this.add();
    },
    add:function(){
        var table = document.createElement("table");
        table.className = "tables";
        var header = document.createElement("tr");
        // 添加表头
        for(var i=0;i<this.data.header.length;i++){
            if(this.data.me[i] == 1){
                header.innerHTML += "<td>"
                                                      +         this.data.header[i]
                                                      +    "    <span class=sort-bnt>"
                                                      +    "        <div class=top></div>"
                                                      +    "        <div class=bottom></div>"
                                                      +    "    </span>"
                                                      +    "</td>";
            }else{
                header.innerHTML += "<td>"+ this.data.header[i] +"</td>";
            }
        }
        table.appendChild(header);
        // 添加表单本身
        for(var c in this.data.tbody){
            
        }
        this.parent.appendChild(table);
    },
}
var a = new table({
    parent:document.getElementById("box"),
    data:{
        me      :["0","1","1","1"],
        header:["a","b","c","d"],
        tbody :{
            a:["1","2","2"],
            b:["1","2","2"],
            c:["1","2","2"],
        },
    }
});
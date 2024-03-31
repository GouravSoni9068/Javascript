let insert=document.querySelector(".insert")

window.addEventListener("keydown",(e)=>{
    console.log(e);
    let html=`<table border="4">
        <tr>
            <th>key</th>
            <th>code</th>
            <th>keycode</th>
        </tr>
        <tr>
            <td>  ${e.key===" " ? "space":e.key} </td>
            <td>${e.code}</td>
            <td>${e.keyCode}</td>
        </tr>
    </table>`
    insert.innerHTML=html;
    
    
})
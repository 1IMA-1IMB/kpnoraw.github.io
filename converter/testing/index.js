function measureFunc(){
    const uInput = document.getElementById("fInput").value
    const from = parseFloat(document.getElementById("from").value)
    const to = parseFloat(document.getElementById("to").value)
    document.getElementById("fOutput").innerHTML = (uInput * from)/ to
}
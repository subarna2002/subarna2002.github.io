function bill(){
    let noname = document.getElementById('noname').value
    let nodate = document.getElementById('nodate').value
    let nono = document.getElementById('nono').value
    let notype = document.getElementById('notype').value
    let noamount = document.getElementById('noamount').value


    document.getElementById('name').innerHTML = noname
    document.getElementById('date').innerHTML = nodate
    document.getElementById('no').innerHTML = nono
    document.getElementById('type').innerHTML = notype
    document.getElementById('amount').innerHTML = noamount

    document.getElementById('parent').style = "display:block"
}
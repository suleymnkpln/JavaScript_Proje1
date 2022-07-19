let name = prompt("Adınızı Giriniz:")

let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} ${name}`

function date() {

  let momentary = new Date()
  let clock = momentary.getHours()
  let minute = momentary.getMinutes()
  let second = momentary.getSeconds()
  let d = new Date()
  let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
  let icecekme = document.querySelector("#myClock")
  icecekme.innerHTML = clock + ":" + minute + ":" + second + " " + days[d.getDay()]

}
let actual = setInterval(date, 100)
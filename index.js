let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

// increase home score by 1
function homeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
// increase home score by 2
function homeTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
// increase home score by 3
function homeThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
// increase guest score by 1
function guestOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
// increase guest score by 2
function guestTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
// increase guest score by 3
function guestThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
// reset score for new game
function newGame() {
    homeScore = 0
    homeScoreEl.textContent = homeScore
    guestScore = 0
    guestScoreEl.textContent = guestScore
}
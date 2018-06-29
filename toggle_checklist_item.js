/**
A script to toggle a checklist item, in a trello card
This script is meant to work as follows:
- Navigate to trello
- Open the card you want to copy its items
- Open the browser console(F12 usually)
- Paste the script to the console tab
- See that all the items are toggled
*/

const checklist_items = document.getElementsByClassName('checklist-item-checkbox')
const length = checklist_items.length
for(let i = 0; i <length; i++) {
  checklist_items[i].click()
}

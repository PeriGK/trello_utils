/** Convert all the items of a checklist to cards vi the clipboard and copy-paste.
This script is meant to work as follows:
- Navigate to trello
- Open the card you want to copy the items
- Open the browser console(F12 usually)
- Paste the script
- Click to create a new card and paste them.
- Trello will prompt you to create N new cards
*/
copy($(".checklist-item:not(.checklist-item-checked)").map(function() {
    return $(this).find(".checklist-item-details-text").text()
  }).get().join("\n"))

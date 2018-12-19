// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
  hideError ();
} 


function validatePword() {
    var x = document.forms["secret"]["value"].value;
    if (x != "1009500") {
		incorrect();
        return false;
    }
	else
	{
		return true;
	}
} 







var modal = document.getElementById('myModal');

function incorrect ()
{
	modal.style.display = "block";
	setTimeout(hideError,3000)
}
function hideError ()
{
	modal.style.display = "none";
}




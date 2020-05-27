/**
 * data used by all web applications, including the SZ mapping site, but also default.htm and SZapps.htm
 */


let noaaLinksContent = '';
/*  //Add buttons to change layout.  So far, this isn't working post-load, so disabled for now.
      linksContent += '<img src="assets/images/layoutH2.png" id="btn_h2" class="layoutImg" >';
      linksContent += '<img src="assets/images/layoutV2.png" id="btn_v2" class="layoutImg" style="left: 40px;" >';
      linksContent += '<img src="assets/images/layoutV3.png" id="btn_v3" class="layoutImg" style="left: 80px;">';
*/

noaaLinksContent +=
  '<a id="adminLinksLabel" style="color:Black"  href="#" onclick="openNewTab(\'https://www.fisheries.noaa.gov/\')" >NOAA Fisheries</a>  &nbsp;&nbsp;' +
  '<a id="disclaimerLabel" style="color:Black"  href="#" onclick="openNewTab(\'https://www.noaa.gov/disclaimer.html\')" >Disclaimer</a> &nbsp;&nbsp;\n' +
  '<a id="privacyPolicyLabel" style="color:Black"  href="#" onclick="openNewTab(\'https://www.fisheries.noaa.gov/privacy-policy\')" >Privacy Policy</a>  &nbsp;&nbsp;' +
  '<a id="shoreZonePageLabel" style="color:Black"  href="#" onclick="openNewTab(\'https://www.fisheries.noaa.gov/alaska/habitat-conservation/alaska-shorezone\')" >ShoreZone Page</a>  &nbsp;&nbsp;' +
  '<a id="metadataLabel" style="color:Black"  href="https://www.fisheries.noaa.gov/webdam/download/70834468" >Metadata</a>  &nbsp;&nbsp;' +
  '<a id="dicitonaryLabel" style="color:Black"  href="#" onclick="openNewTab(\'https://alaskafisheries.noaa.gov/mapping/DataDictionary\')" >Data Dictionary</a>  &nbsp;&nbsp;' +
  '<a id="testLabel" style="color:Black"  href="#" onclick="showSiteInfo()" >Site Info</a>  &nbsp;&nbsp;' +
  '<a id="contactLabel" style="color:Black"  href="#" onclick="openNewTab(\'mailto:Steve.Lewis@noaa.gov\')" >Contact</a>';


function getEl(id) {
  // If the arguent is a string, returns the element whose id is equal to the argument
  // If not a string, assume the argument is already an element, and return it
  if ((typeof id) === "object")
    return id;
  else
    return document.getElementById(id);
}

function showSiteInfo() {
  alert("Website last modified on  " + document.lastModified);
}



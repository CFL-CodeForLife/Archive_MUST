function showMenu() {document.getElementById("navLinks").style.right = "0";}
function hideMenu() { document.getElementById("navLinks").style.right = "-200px"; }
function _isEmpty(e) { return !(e == undefined || e == null || e == ""); }

(async () => { // add data
    const res = await (await fetch(`${window.location.protocol}//${window.location.host}/MUST/api/MUST/IT/courses-group.json`)).json();
    // console.log(res);

    res.links.forEach((e) => {
        if (e.hidden === true) return;

        var one_course = "";
        e.url.forEach((ee) => {
            if (ee.url == undefined || ee.url == null || ee.url == "") return;
            one_course += `<div class="one-link hero-btn gray-btn">
            <a href="${ee.url}" target="_blank">
            <i class="fa fa-${ee.platform}"></i>${ee.platform } ${!_isEmpty(ee.note) ? "" : "(" + ee.note + ")"}</a> 
            </div>`;
        });
        document.querySelector( "#group-container").innerHTML += `<div class="course-col">
            <h3>${e.code}${!_isEmpty(e.name) ? "" : ": " + e.name}</h3>
            <div class="one-course"> ${one_course == ""? "<p>No data available.</p>": one_course} </div>
            </div>`;
    });
})();
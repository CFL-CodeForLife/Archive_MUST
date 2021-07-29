function _isEmpty(e) { return !(e == undefined || e == null || e == ''); }
/**
 * @param {string} URL 
 * @returns {object}
 */
const get_data = async (URL, options = { DIR: ''}) => {
    var API_HOST = `${window.location.protocol}//cfl.ahmedkira.com/`;
    if (options.DIR.length>0) API_HOST += `/${options.DIR}`;
    const res = await (await fetch(`${API_HOST}${URL}`)).json();
    return res;
}

(async () => { // add data
    // const res = await get_data(`/api/MUST/IT/courses-group.json`,{DIR: 'MUST'}); 
    const res = await (await fetch(`courses-group.json`)).json();
    console.log(res);
    res.links.forEach((e) => {
        if (e.hidden === true) return;
        var one_course = "";
        e.url.forEach((ee) => {
            if (ee.url == undefined || ee.url == null || ee.url == "") return;
            one_course += `<div class="one-link hero-btn gray-btn">
            <a href="${ee.url}" target="_blank">
            <i class="fa fa-${ee.platform}"></i>${ee.platform} ${!_isEmpty(ee.note) ? "" : "(" + ee.note + ")"}</a> 
            </div>`;
        });
        document.querySelector("#group-container").innerHTML += `<div class="course-col">
            <h3>${e.code}${!_isEmpty(e.name) ? "" : ": " + e.name}</h3>
            <div class="one-course"> ${one_course == "" ? "<p>No data available.</p>" : one_course} </div>
            </div>`;
    });
})();